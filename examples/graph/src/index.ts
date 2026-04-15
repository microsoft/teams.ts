import { App } from '@microsoft/teams.apps';
import { ConsoleLogger } from '@microsoft/teams.common/logging';
import * as endpoints from '@microsoft/teams.graph-endpoints';

const app = new App({
  oauth: { // oauth configurations
    /**
     * The name of the auth connection to use.
     * It should be the same as the OAuth connection name defined in the Azure Bot configuration.
     */
    defaultConnectionName: 'graph'
  },
  // Instead of setting in ConsoleLogger like below, you can also 
  // set LOG_LEVEL=debug or LOG_LEVEL=trace env var for verbose SDK logging
  logger: new ConsoleLogger('@tests/auth', { level: 'debug' }),
    // This is an example of overriding the token URL for a specific region (e.g., Europe).
    // Uncomment this block if needed.
    // apiClientSettings: {
    //   oauthUrl: 'https://europe.token.botframework.com',
    // }
});

app.message('/signout', async ({ send, signout, isSignedIn }) => {
  if (!isSignedIn) return;
  await signout(); // call signout for your auth connection...
  await send('you have been signed out!');
});

app.message('/app-users', async ({ send }) => {
  try {
    const graph = app.getAppGraph();
    const users = await graph.call(endpoints.users.list);

    if (users?.value?.length) {
      const userList = users.value.slice(0, 5).map(
        (u, i) => `**${i + 1}.** ${u.displayName ?? 'N/A'} (${u.userPrincipalName ?? 'N/A'})`
      ).join('\n\n');
      await send(`**Organization Users**\n\n${userList}`);
    } else {
      await send('No users found.');
    }
  } catch (e) {
    await send(
      `Failed to list users: ${e}\n\n` +
      'Ensure the app has **User.Read.All** application permission granted ' +
      'in Azure Portal > App registrations > API permissions, and that an admin has consented.'
    );
  }
});

app.on('message', async ({ log, signin, userGraph, isSignedIn }) => {
  if (!isSignedIn) {
    await signin({
      // Customize the OAuth card text (only applies to OAuth flow, not SSO)
      oauthCardText: 'Sign in to your account',
      signInButtonText: 'Sign in'
    }); // call signin for your auth connection...
    return;
  }

  const me = await userGraph.call(endpoints.me.get);
  log.info(`user "${me.displayName}" already signed in!`);
});

app.event('signin', async ({ send, userGraph, token }) => {
  const me = await userGraph.call(endpoints.me.get);
  await send(`user "${me.displayName}" signed in. Here's the token: ${JSON.stringify(token)}`);
});

app.on('signin.failure', async ({ activity, log, send }) => {
  const { code, message } = activity.value;
  log.error(`sign-in failed: ${code} - ${message}`);
  await send('Sign-in failed.');
});

app.start().catch(console.error);
