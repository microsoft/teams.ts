import { App } from '@microsoft/teams.apps';
import { ConsoleLogger } from '@microsoft/teams.common';
import { Client as GraphClient } from '@microsoft/teams.graph';
import * as endpoints from '@microsoft/teams.graph-endpoints';

const app = new App({
  // Instead of setting in ConsoleLogger like below, you can also
  // set LOG_LEVEL=debug or LOG_LEVEL=trace env var for verbose SDK logging
  logger: new ConsoleLogger('@tests/auth', { level: 'debug' }),
  oauthFlows: ['graph', 'github'],
  // This is an example of overriding the token URL for a specific region (e.g., Europe).
  // Uncomment this block if needed.
  // apiClientSettings: {
  //   oauthUrl: 'https://europe.token.botframework.com',
  // }
});
const graph = app.getOAuthFlow('graph');
const github = app.getOAuthFlow('github');

app.on('message', async (ctx) => {
  const command = ctx.activity.text.trim().toLowerCase();

  if (command === '/graph') {
    const token = await graph.signIn(ctx, {
      oauthCardText: 'Sign in with Microsoft to call Graph',
      signInButtonText: 'Sign in with Microsoft'
    });
    if (token) await sendGraphProfile(ctx, token);
  } else if (command === '/github') {
    const token = await github.signIn(ctx, {
      oauthCardText: 'Sign in with GitHub',
      signInButtonText: 'Sign in with GitHub'
    });
    if (token) await sendGitHubProfile(ctx, token);
  } else if (command === '/signout graph') {
    await graph.signOut(ctx);
    await ctx.send('Signed out of Microsoft Graph.');
  } else if (command === '/signout github') {
    await github.signOut(ctx);
    await ctx.send('Signed out of GitHub.');
  } else if (command === '/status') {
    const statuses = await ctx.getConnectionStatus();
    await ctx.send(statuses
      .map(status => `${status.connectionName}: ${status.hasToken ? 'signed in' : 'signed out'}`)
      .join('\n'));
  } else {
    await ctx.send(
      'Use `/graph`, `/github`, `/status`, `/signout graph`, or `/signout github`.'
    );
  }
});

graph.onSignInComplete(async (ctx, token) => {
  await sendGraphProfile(ctx, token.token);
});

github.onSignInComplete(async (ctx, token) => {
  await sendGitHubProfile(ctx, token.token);
});

graph.onSignInFailure(createFailureHandler('Microsoft Graph'));
github.onSignInFailure(createFailureHandler('GitHub'));

async function sendGraphProfile(
  ctx: Parameters<typeof graph.signIn>[0],
  token: string
) {
  const client = new GraphClient(
    { token: () => token },
    { baseUrlRoot: app.graphBaseUrl }
  );
  const me = await client.call(endpoints.me.get);
  await ctx.send(`Microsoft Graph signed in as "${me.displayName}".`);
}

async function sendGitHubProfile(
  ctx: Parameters<typeof github.signIn>[0],
  token: string
) {
  const response = await fetch('https://api.github.com/user', {
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${token}`,
      'User-Agent': 'teams.ts-oauth-sample',
    },
  });
  if (!response.ok) {
    throw new Error(`GitHub profile request failed with status ${response.status}.`);
  }

  const profile = await response.json() as { login: string; name?: string | null };
  await ctx.send(`GitHub signed in as "${profile.name ?? profile.login}".`);
}

function createFailureHandler(connection: string) {
  return async (
    ctx: Parameters<typeof graph.signIn>[0],
    failure?: { code?: string; message?: string }
  ) => {
    ctx.log.error(`${connection} sign-in failed: ${failure?.code} - ${failure?.message}`);
    await ctx.send(`${connection} sign-in failed.`);
  };
}

app.start().catch(console.error);
