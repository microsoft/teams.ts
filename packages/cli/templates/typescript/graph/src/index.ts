import { MessageActivity } from '@microsoft/teams.api';
import { App } from '@microsoft/teams.apps';
import { AdaptiveCard, CodeBlock } from '@microsoft/teams.cards';
import { DevtoolsPlugin } from '@microsoft/teams.dev';
import * as endpoints from '@microsoft/teams.graph-endpoints';

const app = new App({
  plugins: [new DevtoolsPlugin()],
});

app.on('message', async ({ log, signin, isSignedIn }) => {
  if (!isSignedIn) {
    await signin();
    return;
  }

  log.info('user already signed in!');
});

app.event('signin', async ({ send, userGraph }) => {
  const me = await userGraph.call(endpoints.me.get);

  await send(
    new MessageActivity(`hello ${me.displayName} 👋!`).addCard(
      'adaptive',
      new AdaptiveCard(
        new CodeBlock({
          codeSnippet: JSON.stringify(me, null, 2),
        })
      )
    )
  );
});

(async () => {
  await app.start(+(process.env.PORT || 3978));
})();
