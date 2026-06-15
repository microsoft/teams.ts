import { TeamsActivityHandler, TurnContext } from 'botbuilder';

import { AdaptiveCardActionMessageResponse } from '@microsoft/teams.api';
import { App } from '@microsoft/teams.apps';
import { BotBuilderAdapter } from '@microsoft/teams.botbuilder';
import { ActionSet, AdaptiveCard, ExecuteAction, SubmitData, TextBlock } from '@microsoft/teams.cards';
import { ConsoleLogger } from '@microsoft/teams.common';

const OK_RESPONSE: AdaptiveCardActionMessageResponse = {
  statusCode: 200,
  type: 'application/vnd.microsoft.activity.message',
  value: 'Action processed successfully',
};

function botBuilderCard() {
  return new AdaptiveCard(
    new TextBlock('Handled by BotBuilder', { weight: 'Bolder', wrap: true }),
    new TextBlock('This Action.Execute invoke is handled before the Teams SDK route.', { wrap: true }),
    new ActionSet(
      new ExecuteAction({ title: 'Run BotBuilder action' })
        .withData(new SubmitData('botbuilder_action'))
    )
  );
}

function teamsAppCard() {
  return new AdaptiveCard(
    new TextBlock('Handled by Teams App', { weight: 'Bolder', wrap: true }),
    new TextBlock('This Action.Execute invoke falls through to the Teams SDK app route.', { wrap: true }),
    new ActionSet(
      new ExecuteAction({ title: 'Run Teams action' })
        .withData(new SubmitData('teams_action'))
    )
  );
}

export class ActivityHandler extends TeamsActivityHandler {
  constructor() {
    super();
    this.onMessage(async (ctx, next) => {
      await ctx.sendActivity('hi from botbuilder...');
      await next();
    });
  }

  protected override async onInvokeActivity(ctx: TurnContext) {
    const action = ctx.activity.value?.action?.data?.action;
    if (ctx.activity.name === 'adaptiveCard/action' && action === 'botbuilder_action') {
      await ctx.sendActivity('BotBuilder handled the card action.');
      return {
        status: 200,
        body: OK_RESPONSE,
      };
    }

    return super.onInvokeActivity(ctx);
  }
}

const handler = new ActivityHandler();
const app = new App({
  logger: new ConsoleLogger('@tests/botbuilder', { level: 'debug' }),
  httpServerAdapter: new BotBuilderAdapter({
    handler,
  }),
});

app.on('message', async ({ send }) => {
  await send('hi from teams...');
  await send(botBuilderCard());
  await send(teamsAppCard());
});

app.on('card.action.teams_action', async ({ send }) => {
  await send('Teams SDK handled the card action.');
  return OK_RESPONSE;
});

app.start().catch(console.error);
