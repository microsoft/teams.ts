import path from 'path';

import { App } from '@microsoft/spark.apps';
import { DevtoolsPlugin } from '@microsoft/spark.dev';

const app = new App({
  plugins: [new DevtoolsPlugin()],
});

app.tab('test', path.resolve('dist/client'));
app.function('hello-world', async ({ log, data }) => {
  log.info(data);
  return 'Hello, world!';
});

(async () => {
  await app.start(+(process.env.PORT || 3000));
})();
