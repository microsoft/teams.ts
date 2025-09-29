import { App } from '@microsoft/teams.apps';
import { ConsoleLogger } from '@microsoft/teams.common/logging';
import * as endpoints from '@microsoft/teams.graph-endpoints';

// :snippet-start: auth-config
const app = new App({
  oauth: { // oauth configurations
    /**
     * The name of the auth connection to use.
     * It should be the same as the OAuth connection name defined in the Azure Bot configuration.
     */
    defaultConnectionName: 'graph'
  },
  logger: new ConsoleLogger('@tests/auth', { level: 'debug' })
});
// :snippet-end: auth-config

// :snippet-start: auth-signout
app.message('/signout', async ({ send, signout, isSignedIn }) => {
  if (!isSignedIn) return;
  await signout(); // call signout for your auth connection...
  await send('you have been signed out!');
});
// :snippet-end:

// :snippet-start: auth-signin
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
// :snippet-end:

app.start().catch(console.error);
