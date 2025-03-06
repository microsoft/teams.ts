import { App } from '@microsoft/spark.apps';
import { ConsoleLogger } from '@microsoft/spark.common/logging';
import { MessageActivityBuilder } from '@microsoft/spark.api';
import { Card, CodeBlock, Column, ColumnSet, TextBlock } from '@microsoft/spark.cards';
import { DevtoolsPlugin } from '@microsoft/spark.dev';

const app = new App({
  logger: new ConsoleLogger('@samples/auth', { level: 'debug' }),
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
    new MessageActivityBuilder(`hello ${me.displayName} 👋!`)
      .card(
        'adaptive',
        Card([
          CodeBlock({
            codeSnippet: JSON.stringify(me, null, 2),
          }),
        ])
      )
      .card(
        'adaptive',
        Card([
          ColumnSet(
            [
              Column(
                [
                  TextBlock('Name:', { weight: 'bolder' }),
                  TextBlock('Title:', { weight: 'bolder' }),
                  TextBlock('Email:', { weight: 'bolder' }),
                ],
                { width: '65px' }
              ),
              Column([
                TextBlock(me.displayName || ''),
                TextBlock(me.jobTitle || ''),
                TextBlock(me.mail || ''),
              ]),
            ],
            { spacing: 'small' }
          ),
        ])
      )
  );
});

(async () => {
  await app.start();
})();
