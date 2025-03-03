import { App } from '@microsoft/spark.apps';
import { ConsoleLogger } from '@microsoft/spark.common/logging';
import { ConsolePlugin } from '@microsoft/spark.dev';

const app = new App({
  logger: new ConsoleLogger('@samples/console', { level: 'debug' }),
  plugins: [new ConsolePlugin()],
});

app.on('message', async ({ send, activity }) => {
  await send(`you said "${activity.text}"`);
});

(async () => {
  await app.start();
})();
