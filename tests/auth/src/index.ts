import { App } from '@microsoft/teams.apps';
import { ConsoleLogger } from '@microsoft/teams.common/logging';
import { MessageActivity } from '@microsoft/teams.api';
import { Card, CodeBlock, Column, ColumnSet, TextBlock } from '@microsoft/teams.cards';
import { DevtoolsPlugin } from '@microsoft/teams.dev';

const app = new App({
  logger: new ConsoleLogger('@tests/auth', { level: 'debug' }),
  plugins: [new DevtoolsPlugin()],
});

app.message('/signout', async ({ send, signout, isSignedIn }) => {
  if (!isSignedIn) return;
  await signout();
  await send('you have been signed out!');
});

app.on('message', async ({ log, signin, api, isSignedIn }) => {
  if (!isSignedIn) {
    await signin();
    return;
  }

  const me = await api.user.me.get();
  log.info(`user "${me.displayName}" already signed in!`);
});

app.event('signin', async ({ send, api }) => {
  const me = await api.user.me.get();

  await send(
    new MessageActivity(`hello ${me.displayName} 👋!`)
      .addCard(
        'adaptive',
        new Card(
          new CodeBlock({
            codeSnippet: JSON.stringify(me, null, 2),
          })
        )
      )
      .addCard(
        'adaptive',
        new Card(
          new ColumnSet(
            new Column(
              new TextBlock('Name:', { weight: 'bolder' }),
              new TextBlock('Title:', { weight: 'bolder' }),
              new TextBlock('Email:', { weight: 'bolder' })
            ).withWidth('65px'),
            new Column(
              new TextBlock(me.displayName || ''),
              new TextBlock(me.jobTitle || ''),
              new TextBlock(me.mail || '')
            )
          ).withSpacing('small')
        )
      )
  );
});

(async () => {
  await app.start();
})();
