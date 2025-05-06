import { App } from '@microsoft/teams.apps';
import { ConsoleLogger } from '@microsoft/teams.common/logging';
import { DevtoolsPlugin } from '@microsoft/teams.dev';

// :snippet-start: auth-config
const app = new App({ 
  oauth: { // oauth configurations
    // the name of the auth connection to use.
    // it should be the same as the OAuth connection name defined in the Azure Bot configuration.
    defaultConnectionName: 'graph' 
  },
  logger: new ConsoleLogger('@tests/auth', { level: 'debug' }), // optional
  plugins: [new DevtoolsPlugin()], // optional
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
      // optional. This will work with explicit oauth.
      oauthCardText: 'Sign in to your account',
      // optional. This will work with explicit oauth.
      signInButtonText: 'Sign in' 
    }); // call signin for your auth connection...
    return;
  }

  const me = await userGraph.me.get();
  log.info(`user "${me.displayName}" already signed in!`);
});

app.event('signin', async ({ send, userGraph, token }) => {
  const me = await userGraph.me.get();
  await send(`user "${me.displayName}" signed in. Here's the token: ${JSON.stringify(token)}`);
});
// :snippet-end:

(async () => {
  await app.start();
})();
