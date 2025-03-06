import { MessageActivity } from '@microsoft/spark.api';
import { App } from '@microsoft/spark.apps';
import { DevtoolsPlugin } from '@microsoft/spark.dev';
import { Card, CodeBlock } from '@microsoft/spark.cards';

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

app.event('signin', async ({ send, api }) => {
  const me = await api.user.me.get();

  await send(
    new MessageActivity(`hello ${me.displayName} 👋!`).addCard(
      'adaptive',
      new Card(
        new CodeBlock({
          codeSnippet: JSON.stringify(me, null, 2),
        })
      )
    )
  );
});

(async () => {
  await app.start(+(process.env.PORT || 3000));
})();
