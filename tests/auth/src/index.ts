import { App } from '@microsoft/teams.apps';
import { ConsoleLogger } from '@microsoft/teams.common/logging';
import { DevtoolsPlugin } from '@microsoft/teams.dev';

const app = new App({
  logger: new ConsoleLogger('@tests/auth', { level: 'debug' }),
  plugins: [new DevtoolsPlugin()],
});

// :snippet-start: auth-signout
app.message('/signout', async ({ send, signout, isSignedIn }) => {
  if (!isSignedIn) return;
  await signout(); // call signout for your auth connection...
  await send('you have been signed out!');
});
// :snippet-end:

// :snippet-start: auth-signin
app.on('message', async ({ log, signin, api, isSignedIn }) => {
  if (!isSignedIn) {
    await signin(); // call signin for your auth connection...
    return;
  }

  const me = await api.user.me.get();
  log.info(`user "${me.displayName}" already signed in!`);
});

app.event('signin', async ({ send, api, token }) => {
  const me = await api.user.me.get();
  await send(`user "${me.displayName}" signed in. Here's the token: ${token}`);
});
// :snippet-end:

(async () => {
  await app.start();
})();
