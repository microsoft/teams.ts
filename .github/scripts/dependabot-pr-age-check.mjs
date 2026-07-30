import { readFileSync } from 'node:fs';

const AGE_THRESHOLD_DAYS = 7;
const COMMENT_MARKER = 'dependabot-age-check';
const NPM_REGISTRY_URL = 'https://registry.npmjs.org';
const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000;
const SECURITY_PATTERNS = [
  /security update/i,
  /vulnerab/i,
  /dependabot alerts?/i,
  /to fix\s+\d+\s+vulnerab/i,
];
const DEPENDENCY_UPDATE_PATTERN = /Bumps\s+(?:\[(?<linked>[^\]]+)\]\([^)]+\)|`(?<code>[^`]+)`|(?<plain>[^\s]+))\s+from\s+(?<from>[^\s]+)\s+to\s+(?<to>[^\s]+)/gi;

async function main() {
  const context = loadContext();
  const pullRequests = await getTargetPullRequests(context);

  for (const pullRequest of pullRequests) {
    if (!isDependabotPullRequest(pullRequest) || !isSecurityPullRequest(pullRequest)) {
      continue;
    }

    const assessment = await assessPullRequest(pullRequest);
    await ensureComment(context, pullRequest, assessment);
  }
}

function loadContext() {
  const repository = process.env.GITHUB_REPOSITORY;
  const token = process.env.GITHUB_TOKEN;

  if (!repository || !token) {
    throw new Error('GITHUB_REPOSITORY and GITHUB_TOKEN are required.');
  }

  const [owner, repo] = repository.split('/');
  if (!owner || !repo) {
    throw new Error(`Invalid GITHUB_REPOSITORY value: ${repository}`);
  }

  return {
    eventName: process.env.GITHUB_EVENT_NAME ?? '',
    eventPath: process.env.GITHUB_EVENT_PATH ?? '',
    owner,
    repo,
    token,
  };
}

function readEventPayload(eventPath) {
  if (!eventPath) {
    return {};
  }

  return JSON.parse(readFileSync(eventPath, 'utf8'));
}

async function getTargetPullRequests(context) {
  const payload = readEventPayload(context.eventPath);
  if (payload.pull_request) {
    return [payload.pull_request];
  }

  return await listOpenPullRequests(context);
}

async function listOpenPullRequests(context) {
  const pullRequests = [];
  let page = 1;

  while (true) {
    const response = await githubRequest(
      context,
      `/repos/${context.owner}/${context.repo}/pulls?state=open&per_page=100&page=${page}`,
    );

    if (response.length === 0) {
      break;
    }

    pullRequests.push(...response);

    if (response.length < 100) {
      break;
    }

    page += 1;
  }

  return pullRequests;
}

function isDependabotPullRequest(pullRequest) {
  return pullRequest.user?.login === 'dependabot[bot]';
}

function isSecurityPullRequest(pullRequest) {
  const text = `${pullRequest.title ?? ''}\n${pullRequest.body ?? ''}`;
  return SECURITY_PATTERNS.some((pattern) => pattern.test(text));
}

async function assessPullRequest(pullRequest) {
  const dependencies = extractDependencyUpdates(pullRequest);
  const signature = dependencies.length > 0
    ? dependencies.map((dependency) => `${dependency.name}@${dependency.toVersion}`).sort().join(',')
    : String(pullRequest.number);

  if (dependencies.length === 0) {
    return {
      state: 'unknown',
      signature,
      dependencies: [],
      reasons: ['Could not parse dependency versions from the Dependabot PR title/body.'],
    };
  }

  const dependencyAges = await Promise.all(
    dependencies.map((dependency) => getDependencyAge(dependency)),
  );

  const unknownDependencies = dependencyAges.filter((dependency) => !dependency.publishedAt);
  if (unknownDependencies.length > 0) {
    return {
      state: 'unknown',
      signature,
      dependencies: dependencyAges,
      reasons: unknownDependencies.map(
        (dependency) => `No npm publish timestamp found for ${dependency.name}@${dependency.toVersion}.`,
      ),
    };
  }

  const readyAt = new Date(
    Math.max(
      ...dependencyAges.map((dependency) => dependency.publishedAt.getTime() + AGE_THRESHOLD_DAYS * MILLISECONDS_PER_DAY),
    ),
  );
  const isReady = dependencyAges.every((dependency) => dependency.ageDays >= AGE_THRESHOLD_DAYS);

  return {
    state: isReady ? 'ready' : 'pending',
    signature,
    dependencies: dependencyAges,
    readyAt,
    reasons: [],
  };
}

function extractDependencyUpdates(pullRequest) {
  const text = `${pullRequest.title ?? ''}\n${pullRequest.body ?? ''}`;
  const updates = new Map();

  for (const match of text.matchAll(DEPENDENCY_UPDATE_PATTERN)) {
    const name = sanitizeToken(match.groups?.linked ?? match.groups?.code ?? match.groups?.plain ?? '');
    const fromVersion = sanitizeToken(match.groups?.from ?? '');
    const toVersion = sanitizeToken(match.groups?.to ?? '');

    if (!name || !fromVersion || !toVersion) {
      continue;
    }

    updates.set(`${name}@${toVersion}`, { name, fromVersion, toVersion });
  }

  return [...updates.values()];
}

function sanitizeToken(value) {
  return value.replace(/[),.;]+$/u, '').trim();
}

async function getDependencyAge(dependency) {
  const response = await fetch(`${NPM_REGISTRY_URL}/${encodeURIComponent(dependency.name)}`, {
    headers: {
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    return {
      ...dependency,
      ageDays: null,
      publishedAt: null,
    };
  }

  const metadata = await response.json();
  const publishedAtValue = metadata.time?.[dependency.toVersion] ?? null;
  if (!publishedAtValue) {
    return {
      ...dependency,
      ageDays: null,
      publishedAt: null,
    };
  }

  const publishedAt = new Date(publishedAtValue);
  return {
    ...dependency,
    ageDays: Math.floor((Date.now() - publishedAt.getTime()) / MILLISECONDS_PER_DAY),
    publishedAt,
  };
}

async function ensureComment(context, pullRequest, assessment) {
  const comments = await githubRequest(
    context,
    `/repos/${context.owner}/${context.repo}/issues/${pullRequest.number}/comments?per_page=100`,
  );
  const marker = `<!-- ${COMMENT_MARKER}:${assessment.state}:${assessment.signature} -->`;
  const alreadyCommented = comments.some((comment) => comment.body?.includes(marker));

  if (alreadyCommented) {
    return;
  }

  const body = buildCommentBody(assessment);
  await githubRequest(
    context,
    `/repos/${context.owner}/${context.repo}/issues/${pullRequest.number}/comments`,
    {
      method: 'POST',
      body: JSON.stringify({ body: `${marker}\n${body}` }),
    },
  );
}

function buildCommentBody(assessment) {
  const dependencyLines = assessment.dependencies.length === 0
    ? ''
    : assessment.dependencies
        .map((dependency) => {
          if (!dependency.publishedAt) {
            return `- \`${dependency.name}@${dependency.toVersion}\`: publish timestamp not found in npm metadata.`;
          }

          return `- \`${dependency.name}@${dependency.toVersion}\` was published ${dependency.ageDays} day${dependency.ageDays === 1 ? '' : 's'} ago on ${formatDate(dependency.publishedAt)} UTC.`;
        })
        .join('\n');

  if (assessment.state === 'ready') {
    return [
      'Copilot age check: every updated package in this Dependabot security PR is now at least 7 days old, so it is ok to merge under the 7-day package-age policy.',
      dependencyLines,
    ].filter(Boolean).join('\n\n');
  }

  if (assessment.state === 'pending') {
    return [
      'Copilot age check: this Dependabot security PR is not 7 days old yet, so it is not yet ok to merge under the 7-day package-age policy.',
      dependencyLines,
      `I will comment again once every updated package version is at least 7 days old. Earliest eligible date: ${formatDate(assessment.readyAt)} UTC.`,
    ].filter(Boolean).join('\n\n');
  }

  return [
    'Copilot age check: I could not confirm the 7-day package-age policy automatically for this Dependabot security PR.',
    dependencyLines,
    ...assessment.reasons,
  ].filter(Boolean).join('\n\n');
}

function formatDate(date) {
  return date.toISOString().slice(0, 10);
}

async function githubRequest(context, path, options = {}) {
  const response = await fetch(`https://api.github.com${path}`, {
    ...options,
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: 'Bearer ' + context.token,
      'User-Agent': `${context.owner}-${context.repo}-dependabot-age-check`,
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`GitHub API request failed (${response.status}) for ${path}: ${await response.text()}`);
  }

  if (response.status === 204) {
    return null;
  }

  return await response.json();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
