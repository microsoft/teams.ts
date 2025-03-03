import path from 'path';

import { App } from '@microsoft/spark.apps';
import { ConsoleLogger } from '@microsoft/spark.common/logging';
import { DevtoolsPlugin } from '@microsoft/spark.dev';

const app = new App({
  logger: new ConsoleLogger('@samples/tab', { level: 'debug' }),
  plugins: [new DevtoolsPlugin()],
});

app.tab('test', path.resolve('dist/client'));
app.function('hello-world', async ({ log, data }) => {
  log.info(data);
});

(async () => {
  await app.start();
})();
