// @ts-check
import { readFileSync } from 'node:fs';

/**
 * Enforced 7-day package-age gate for Dependabot pull requests.
 *
 * Microsoft Central Feed Services (CFS) quarantines newly-published npm
 * versions for 7 days (measured from the public npm publish timestamp). During
 * quarantine the version "appears not to exist" on the Azure Artifacts feed, so
 * `npm ci` hard-fails (E404) if a PR merges a version younger than 7 days. This
 * script protects `main` by publishing a *required commit status*
 * (`package-age/7-day`) on each Dependabot PR head. When any changed package
 * version (including transitive lockfile changes) is younger than 7 days, or its
 * age cannot be confirmed, the status is set to `failure`/`pending` so branch
 * protection blocks the merge. It flips to `success` only once every changed
 * version has cleared the 7-day window.
 *
 * The gate deliberately fails safe: an un-verifiable age blocks the merge rather
 * than allowing a potentially-quarantined package through.
 *
 * Scope: only npm packages are gated. Dependabot PRs for ecosystems that do not
 * resolve through the CFS npm feed (notably GitHub Actions, branched as
 * `dependabot/github_actions/...`) report a passing "not applicable" status.
 * Ecosystems the script does not recognize still run the full check, so an
 * unexpected branch name can never bypass the fail-safe.
 */

const AGE_THRESHOLD_DAYS = 7;
const STATUS_CONTEXT = 'package-age/7-day';
const NPM_REGISTRY_URL = 'https://registry.npmjs.org';
const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000;
const LOCKFILE_SUFFIX = 'package-lock.json';
const STATUS_DESCRIPTION_LIMIT = 140;

/**
 * Dependabot ecosystems that are known not to resolve through the CFS npm feed
 * and therefore can never be quarantined.
 *
 * These are Dependabot's *branch-name* slugs, which intentionally differ from
 * the `package-ecosystem` keys in `.github/dependabot.yml`:
 *
 *   package-ecosystem: "github-actions"  ->  dependabot/github_actions/...
 *   package-ecosystem: npm               ->  dependabot/npm_and_yarn/...
 *
 * The branch slug is the signal used here because, unlike PR labels, it is not
 * customizable. Any ecosystem *not* listed is treated as potentially-npm and
 * runs the full age check, so an unrecognized or newly-configured ecosystem
 * fails safe rather than silently skipping the gate.
 */
const NON_NPM_ECOSYSTEMS = new Set([
  'github_actions',
  'docker',
  'devcontainers',
  'submodules',
  'terraform',
]);

const DEPENDABOT_BRANCH_PATTERN = /^dependabot\/(?<ecosystem>[^/]+)\//u;

/**
 * Fallback parser for Dependabot PR prose when no lockfile diff is available.
 * Handles both single ("Bumps `X` from A to B") and grouped ("Updates `X` from
 * A to B") update wording.
 */
const DEPENDENCY_UPDATE_PATTERN = /(?:Bumps|Updates)\s+(?:\[(?<linked>[^\]]+)\]\([^)]+\)|`(?<code>[^`]+)`|(?<plain>[^\s]+))\s+from\s+(?<from>[^\s]+)\s+to\s+(?<to>[^\s]+)/gi;

async function main() {
  const context = loadContext();

  // The merge queue builds a temporary ref that is not attached to any pull
  // request. A required status check must still report on it or the queue
  // blocks forever, so publish the result the queued PRs already earned: they
  // could only enter the queue after passing this gate, and packages only get
  // older from there.
  if (context.eventName === 'merge_group') {
    const payload = readEventPayload(context.eventPath);
    const headSha = payload.merge_group?.head_sha;

    if (!headSha) {
      throw new Error('merge_group event payload is missing merge_group.head_sha.');
    }

    await publishStatus(context, headSha, {
      state: 'success',
      description: 'Package-age gate satisfied on the queued pull request(s).',
    }, 'merge_group');
    return;
  }

  const pullRequests = await getTargetPullRequests(context);

  for (const pullRequest of pullRequests) {
    try {
      if (!isDependabotPullRequest(pullRequest)) {
        // The gate only applies to Dependabot PRs, but when `package-age/7-day`
        // is a required status check GitHub blocks any PR that never reports it.
        // Publish a passing "not applicable" status so human PRs are never gated.
        await setCommitStatus(context, pullRequest, {
          state: 'success',
          description: 'Not a Dependabot PR; package-age gate not applicable.',
        });
        continue;
      }

      const assessment = await assessPullRequest(context, pullRequest);
      await setCommitStatus(context, pullRequest, assessment);
    } catch (error) {
      console.error(`Failed to evaluate PR #${pullRequest.number}:`, error);
      // Fail safe: never leave a Dependabot PR mergeable because our own
      // evaluation crashed.
      await setCommitStatus(context, pullRequest, {
        state: 'failure',
        description: 'Package-age check failed to run; blocking merge until it can be re-evaluated.',
      }).catch((statusError) => console.error('Failed to set failure status:', statusError));
    }
  }
}

/**
 * Reads the required environment configuration provided by the GitHub Actions
 * runtime.
 */
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
    repository,
    runId: process.env.GITHUB_RUN_ID ?? '',
    serverUrl: process.env.GITHUB_SERVER_URL ?? 'https://github.com',
    token,
  };
}

/**
 * URL of the workflow run that produced the status, used as the status
 * `target_url`. It is a real GitHub-hosted page, so it gives reviewers the
 * untruncated package list in the job log plus a native "Re-run all jobs"
 * button to refresh the gate on demand.
 *
 * @returns {string|undefined} undefined outside of a GitHub Actions run.
 */
function workflowRunUrl(context) {
  if (!context.runId) {
    return undefined;
  }

  return `${context.serverUrl}/${context.repository}/actions/runs/${context.runId}`;
}

function readEventPayload(eventPath) {
  if (!eventPath) {
    return {};
  }

  return JSON.parse(readFileSync(eventPath, 'utf8'));
}

/**
 * Returns the pull requests to evaluate. On a `pull_request*` event this is the
 * single triggering PR; on a scheduled/dispatch run it is every open PR (so
 * that pending PRs auto-clear once their packages age past the threshold).
 */
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

/**
 * Reads the Dependabot ecosystem slug from the PR head branch
 * (`dependabot/<slug>/<update>`). Note this slug differs from the
 * `package-ecosystem` key in `dependabot.yml` -- `npm` is branched as
 * `npm_and_yarn`, and `github-actions` as `github_actions`.
 *
 * @returns {string|null} the slug, or null when the branch does not follow
 * Dependabot's naming scheme (treated as unknown, so the full check still runs).
 */
function getDependabotEcosystem(pullRequest) {
  const match = DEPENDABOT_BRANCH_PATTERN.exec(pullRequest.head?.ref ?? '');
  return match?.groups?.ecosystem ?? null;
}

/**
 * Determines the age-eligibility of a PR by inspecting every package version it
 * changes. Prefers the lockfile diff (captures transitive changes CFS also
 * quarantines) and falls back to parsing the PR body when no lockfile changed.
 *
 * @returns {Promise<{state: 'success'|'failure'|'pending', description: string}>}
 */
async function assessPullRequest(context, pullRequest) {
  // A changed lockfile is ground truth that npm versions are moving, so it is
  // evaluated *before* any ecosystem shortcut: if npm packages changed they are
  // gated no matter what the branch name claims.
  let changedVersions = await getChangedVersionsFromLockfiles(context, pullRequest);
  let source = 'lockfile';

  if (changedVersions.length === 0) {
    // No npm versions moved. Only packages served by the CFS feed can be
    // quarantined; GitHub Actions and friends resolve from github.com, and
    // looking their names up on the npm registry would 404 and wrongly trip the
    // fail-safe. Unrecognized ecosystems fall through to the full check.
    const ecosystem = getDependabotEcosystem(pullRequest);
    if (ecosystem !== null && NON_NPM_ECOSYSTEMS.has(ecosystem)) {
      return {
        state: 'success',
        description: truncate(
          `Ecosystem "${ecosystem}" is not served by the CFS npm feed; package-age gate not applicable.`,
        ),
      };
    }

    changedVersions = extractDependencyUpdatesFromBody(pullRequest);
    source = 'pr-body';
  }

  if (changedVersions.length === 0) {
    return {
      state: 'failure',
      description: 'Could not determine changed package versions; blocking merge (fail-safe).',
    };
  }

  const ages = await Promise.allSettled(
    changedVersions.map((dependency) => getDependencyAge(dependency)),
  );

  const resolved = ages.map((result, index) =>
    result.status === 'fulfilled'
      ? result.value
      : { ...changedVersions[index], ageDays: null, publishedAt: null },
  );

  const unverifiable = resolved.filter((dependency) => dependency.ageDays === null);
  if (unverifiable.length > 0) {
    const names = unverifiable.map((d) => `${d.name}@${d.version}`).slice(0, 3).join(', ');
    return {
      state: 'failure',
      description: truncate(
        `Could not confirm npm age for ${unverifiable.length} package(s) (${names}); blocking merge (fail-safe).`,
      ),
    };
  }

  const tooYoung = resolved
    .filter((dependency) => dependency.ageDays < AGE_THRESHOLD_DAYS)
    .sort((a, b) => a.ageDays - b.ageDays);

  if (tooYoung.length > 0) {
    const youngest = tooYoung[0];
    const readyAt = new Date(youngest.publishedAt.getTime() + AGE_THRESHOLD_DAYS * MILLISECONDS_PER_DAY);
    return {
      state: 'pending',
      description: truncate(
        `${youngest.name}@${youngest.version} is ${youngest.ageDays}d old (<${AGE_THRESHOLD_DAYS}d CFS quarantine). Eligible ${formatDate(readyAt)} UTC.`,
      ),
    };
  }

  return {
    state: 'success',
    description: truncate(
      `All ${resolved.length} changed package version(s) are >= ${AGE_THRESHOLD_DAYS} days old [${source}].`,
    ),
  };
}

/**
 * Collects the set of package versions newly introduced by the PR across every
 * changed `package-lock.json`, including transitive dependencies.
 *
 * @returns {Promise<Array<{name: string, version: string}>>}
 */
async function getChangedVersionsFromLockfiles(context, pullRequest) {
  const files = await listPullRequestFiles(context, pullRequest);
  const lockfilePaths = files
    .filter((file) => file.filename.endsWith(LOCKFILE_SUFFIX) && file.status !== 'removed')
    .map((file) => file.filename);

  const changed = new Map();

  for (const path of lockfilePaths) {
    const [baseVersions, headVersions] = await Promise.all([
      readLockfileVersions(context, path, pullRequest.base?.sha),
      readLockfileVersions(context, path, pullRequest.head?.sha),
    ]);

    for (const [key, dependency] of headVersions) {
      if (!baseVersions.has(key)) {
        changed.set(key, dependency);
      }
    }
  }

  return [...changed.values()];
}

/**
 * Returns all files changed by the PR (paginated), used to locate changed
 * lockfiles.
 */
async function listPullRequestFiles(context, pullRequest) {
  const files = [];
  let page = 1;

  while (true) {
    const response = await githubRequest(
      context,
      `/repos/${context.owner}/${context.repo}/pulls/${pullRequest.number}/files?per_page=100&page=${page}`,
    );

    if (response.length === 0) {
      break;
    }

    files.push(...response);

    if (response.length < 100) {
      break;
    }

    page += 1;
  }

  return files;
}

/**
 * Reads a lockfile at a specific ref and returns a map of `name@version` to
 * `{ name, version }`. Returns an empty map if the file is missing or
 * unparseable at that ref.
 *
 * @returns {Promise<Map<string, {name: string, version: string}>>}
 */
async function readLockfileVersions(context, path, ref) {
  const versions = new Map();
  if (!ref) {
    return versions;
  }

  let raw;
  try {
    raw = await githubRequestRaw(
      context,
      `/repos/${context.owner}/${context.repo}/contents/${encodePath(path)}?ref=${ref}`,
    );
  } catch (error) {
    console.warn(`Could not fetch ${path} at ${ref}:`, error.message);
    return versions;
  }

  let lockfile;
  try {
    lockfile = JSON.parse(raw);
  } catch (error) {
    console.warn(`Could not parse ${path} at ${ref}:`, error.message);
    return versions;
  }

  // npm lockfile v2/v3: `packages` keyed by install path.
  for (const [installPath, entry] of Object.entries(lockfile.packages ?? {})) {
    if (installPath === '' || !entry?.version) {
      continue; // root project entry has no meaningful published version
    }
    const name = entry.name ?? installPathToName(installPath);
    if (!name) {
      continue;
    }
    versions.set(`${name}@${entry.version}`, { name, version: entry.version });
  }

  // npm lockfile v1 fallback: nested `dependencies`.
  collectV1Dependencies(lockfile.dependencies, versions);

  return versions;
}

/**
 * Encodes a repository file path for the GitHub Contents API, escaping each
 * segment individually so that directory separators are preserved (nested
 * lockfiles such as `packages/foo/package-lock.json` resolve correctly).
 */
function encodePath(path) {
  return path.split('/').map(encodeURIComponent).join('/');
}

/**
 * Extracts the package name from an npm v2/v3 lockfile install path (the text
 * after the final `node_modules/` segment), or null if the path is not a
 * dependency install path.
 */
function installPathToName(installPath) {
  const marker = 'node_modules/';
  const index = installPath.lastIndexOf(marker);
  if (index === -1) {
    return null;
  }
  return installPath.slice(index + marker.length);
}

/**
 * Recursively collects `name@version` entries from the nested `dependencies`
 * tree of an npm v1 lockfile into the provided map.
 */
function collectV1Dependencies(dependencies, versions) {
  if (!dependencies) {
    return;
  }
  for (const [name, entry] of Object.entries(dependencies)) {
    if (entry?.version) {
      versions.set(`${name}@${entry.version}`, { name, version: entry.version });
    }
    collectV1Dependencies(entry?.dependencies, versions);
  }
}

/**
 * Fallback: parse changed dependency versions from the Dependabot PR body when
 * no lockfile diff is available.
 *
 * @returns {Array<{name: string, version: string}>}
 */
function extractDependencyUpdatesFromBody(pullRequest) {
  const text = `${pullRequest.title ?? ''}\n${pullRequest.body ?? ''}`;
  const updates = new Map();

  for (const match of text.matchAll(DEPENDENCY_UPDATE_PATTERN)) {
    const name = sanitizeToken(match.groups?.linked ?? match.groups?.code ?? match.groups?.plain ?? '');
    const version = sanitizeToken(match.groups?.to ?? '');

    if (!name || !version) {
      continue;
    }

    updates.set(`${name}@${version}`, { name, version });
  }

  return [...updates.values()];
}

function sanitizeToken(value) {
  return value.replace(/[),.;]+$/u, '').trim();
}

/**
 * Looks up the npm publish timestamp for a specific version and computes its
 * age in days. `ageDays`/`publishedAt` are null when the version is unpublished,
 * missing from metadata, or the registry request fails (treated as
 * unverifiable => merge-blocking upstream).
 */
async function getDependencyAge(dependency) {
  let response;
  try {
    response = await fetch(`${NPM_REGISTRY_URL}/${encodeURIComponent(dependency.name)}`, {
      headers: { Accept: 'application/json' },
    });
  } catch (error) {
    console.warn(`npm registry request failed for ${dependency.name}:`, error.message);
    return { ...dependency, ageDays: null, publishedAt: null };
  }

  if (!response.ok) {
    console.warn(`npm registry returned ${response.status} for ${dependency.name}`);
    return { ...dependency, ageDays: null, publishedAt: null };
  }

  let metadata;
  try {
    metadata = await response.json();
  } catch (error) {
    console.warn(`Could not parse npm metadata for ${dependency.name}:`, error.message);
    return { ...dependency, ageDays: null, publishedAt: null };
  }

  const publishedAtValue = metadata.time?.[dependency.version] ?? null;
  if (!publishedAtValue) {
    return { ...dependency, ageDays: null, publishedAt: null };
  }

  const publishedAt = new Date(publishedAtValue);
  return {
    ...dependency,
    ageDays: Math.floor((Date.now() - publishedAt.getTime()) / MILLISECONDS_PER_DAY),
    publishedAt,
  };
}

/**
 * Publishes the age-gate result as a commit status on the PR head SHA.
 */
async function setCommitStatus(context, pullRequest, assessment) {
  const sha = pullRequest.head?.sha;
  if (!sha) {
    throw new Error(`PR #${pullRequest.number} has no head SHA.`);
  }

  await publishStatus(context, sha, assessment, `PR #${pullRequest.number}`);
}

/**
 * Writes the `package-age/7-day` commit status for a SHA. The Commit Status API
 * replaces any prior status for the same context, so repeated runs update in
 * place without spamming.
 */
async function publishStatus(context, sha, assessment, label) {
  /** @type {{state: string, context: string, description: string, target_url?: string}} */
  const body = {
    state: assessment.state,
    context: STATUS_CONTEXT,
    description: truncate(assessment.description),
  };

  const targetUrl = workflowRunUrl(context);
  if (targetUrl) {
    body.target_url = targetUrl;
  }

  await githubRequest(
    context,
    `/repos/${context.owner}/${context.repo}/statuses/${sha}`,
    { method: 'POST', body: JSON.stringify(body) },
  );

  console.log(`${label} [${sha.slice(0, 7)}] -> ${assessment.state}: ${assessment.description}`);
}

function truncate(value) {
  if (value.length <= STATUS_DESCRIPTION_LIMIT) {
    return value;
  }
  return `${value.slice(0, STATUS_DESCRIPTION_LIMIT - 1)}\u2026`;
}

function formatDate(date) {
  return date.toISOString().slice(0, 10);
}

async function githubRequest(context, path, options = {}) {
  const response = await fetch(`https://api.github.com${path}`, {
    ...options,
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${context.token}`,
      'User-Agent': `${context.owner}-${context.repo}-package-age-gate`,
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

/**
 * Fetches file contents as raw text (handles files larger than the 1MB inline
 * base64 limit of the Contents API).
 */
async function githubRequestRaw(context, path) {
  const response = await fetch(`https://api.github.com${path}`, {
    headers: {
      Accept: 'application/vnd.github.raw',
      Authorization: `Bearer ${context.token}`,
      'User-Agent': `${context.owner}-${context.repo}-package-age-gate`,
    },
  });

  if (!response.ok) {
    throw new Error(`GitHub raw request failed (${response.status}) for ${path}`);
  }

  return await response.text();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
