import { MessageActivity, SuggestedActions } from '@microsoft/teams.api';
import { App } from '@microsoft/teams.apps';
import { ConsoleLogger } from '@microsoft/teams.common';

const app = new App({
  logger: new ConsoleLogger('@examples/suggested-action', { level: 'debug' }),
});

// Reply to any user message with two Action.Submit suggested-action chips.
app.on('message', async ({ send }) => {
  const reply = new MessageActivity('Approve or reject the request:');
  reply.suggestedActions = {
    to: [],
    actions: [
      { type: 'Action.Submit', title: 'Approve', value: { vote: 'approve' } },
      { type: 'Action.Submit', title: 'Reject', value: { vote: 'reject' } },
    ],
  } satisfies SuggestedActions;

  await send(reply);
});

// Handle the resulting suggestedActions/submit invoke when the user clicks a chip.
app.on('suggested-action.submit', async ({ send, activity, log }) => {
  const serializedValue = activity.value != null
    ? JSON.stringify(activity.value)
    : '<none>';

  log.info(`[SUGGESTED_ACTION_SUBMIT] value=${serializedValue}`);
  await send(`Got suggestedActions/submit with value: ${serializedValue}`);
});

app.start().catch(console.error);
