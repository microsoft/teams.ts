import { TeamsActivityHandler } from 'botbuilder';

import { App } from '@microsoft/teams.apps';
import { BotBuilderPlugin } from '@microsoft/teams.botbuilder';
import { ConsoleLogger } from '@microsoft/teams.common/logging';
import { DevtoolsPlugin } from '@microsoft/teams.dev';

export class ActivityHandler extends TeamsActivityHandler {
  constructor() {
    super();
    this.onMessage(async (ctx, next) => {
      await ctx.sendActivity('hi from botbuilder...');
      await next();
    });
  }
}

const handler = new ActivityHandler();
const app = new App({
  logger: new ConsoleLogger('@tests/botbuilder', { level: 'debug' }),
  plugins: [new BotBuilderPlugin({ handler }), new DevtoolsPlugin()],
});

app.on('message', async ({ send }) => {
  await send('hi from teams...');
});

app.start().catch(console.error);
