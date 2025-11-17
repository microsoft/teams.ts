import { MessageActivity } from '@microsoft/teams.api';
import { App } from '@microsoft/teams.apps';
import { ConsoleLogger } from '@microsoft/teams.common/logging';
import { DevtoolsPlugin } from '@microsoft/teams.dev';

import { MockReminderService } from './mock-reminder-service';

const app = new App({
  logger: new ConsoleLogger('@tests/echo', { level: 'debug' }),
  plugins: [new DevtoolsPlugin()],
});

app.on('message', async ({ reply, activity }) => {
  await reply({ type: 'typing' });
  await reply(`you said "${activity.text}"`);
});


// Scheduled Queue to trigger proactiveMessage in 10s
const notificationQueue = new MockReminderService<string>();

// :snippet-start: proactive-messaging-prepare
// This would be some persistent storage
const myConversationIdStorage = new Map<string, string>();

// Installation is just one place to get the conversation id. All activities
// have the conversation id, so you can use any activity to get it.
app.on('install.add', async ({ activity, send }) => {
  // Save the conversation id in
  myConversationIdStorage.set(activity.from.aadObjectId!, activity.conversation.id);

  await send('Hi! I am going to remind you to say something to me soon!');
  notificationQueue.addReminder(activity.from.aadObjectId!, sendProactiveNotification, 10_000);
});
// :snippet-end:

// :snippet-start: proactive-messaging-send
const sendProactiveNotification = async (userId: string) => {
  const conversationId = myConversationIdStorage.get(userId);
  if (!conversationId) {
    return;
  }
  const activity = new MessageActivity('Hey! It\'s been a while. How are you?');
  await app.send(conversationId, activity);
};
// :snippet-end:

app.start().catch(console.error);
