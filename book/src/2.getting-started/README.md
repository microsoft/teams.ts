# 🚀 Getting Started

First lets initialize an app.

```bash
npx '@microsoft/spark.cli@latest' new hello-world --start
```

Here is what your terminal should look like:

&nbsp;&nbsp;&nbsp;&nbsp;![Getting Started CLI](https://github.com/microsoft/spark.js/blob/main/assets/screenshots/getting_started_cli.png?raw=true)

---

This will use the `@microsoft/spark.cli` to install a starter template and build then run the bot server. The starter code will look something like this:

```typescript
import { App } from '@microsoft/spark.apps';
import { DevtoolsPlugin } from '@microsoft/spark.dev';

const app = new App({
    plugins: [new DevtoolsPlugin()],
});

app.on('message', async ({ send, activity }) => {
    await send({ type: 'typing' });
    await send(`you said "${activity.text}"`);
});

(async () => {
    await app.start();
})();
```

And with just one command, you have a functioning echo bot! Visit `http://localhost:3001/devtools` to interact with the bot.

## Next

The upcoming subsections on the activity types will cover the different types of activities that can be used in a bot. The definition of activities follow the Agents Protocol, and activities specific to Teams are also indicated.
