# Proactive Messaging Example

This example demonstrates how to send proactive messages to Teams users **without running a server**. This is useful for:

- Scheduled notifications
- Alert systems
- Background jobs that need to notify users
- Webhook handlers that send messages

## Key Concepts

### No Server Required

Unlike typical Teams bots that listen for incoming messages, this example shows how to send messages proactively:

```typescript
// Initialize without starting an HTTP server
await app.initialize();

// Send messages directly
await app.send(conversationId, 'Hello!');
```

### Getting Conversation IDs

To send proactive messages, you need the conversation ID. You can get this from:

1. **Previous bot interactions** - Store the `activity.conversation.id` when users first message your bot
2. **Teams API** - Use the Graph API to get conversation IDs
3. **Installation events** - Save the conversation ID from `install.add` events

## Usage

### Prerequisites

1. Set up your `.env` file with bot credentials:
   ```
   BOT_ID=<your-bot-id>
   BOT_PASSWORD=<your-bot-password>
   ```

2. Get a conversation ID (from previous bot interactions or the Teams API)

### Run the Example

```bash
# Using npm start (after building)
npm run build
npm start <CONVERSATION_ID>

# Using dev mode
npm run dev <CONVERSATION_ID>
```

### Example Output

```
Initializing app (without starting server)...
✓ App initialized

Sending proactive message to conversation: 19:abc123...
Message: Hello! This is a proactive message sent without a running server 🚀
✓ Message sent successfully! Activity ID: 1234567890

Sending proactive card to conversation: 19:abc123...
✓ Card sent successfully! Activity ID: 0987654321

✓ All proactive messages sent successfully!
```

## Code Structure

The example demonstrates two types of proactive messages:

### 1. Text Messages

```typescript
await app.send(conversationId, 'Your notification text here');
```

### 2. Adaptive Cards

```typescript
const card = new AdaptiveCard()
  .addItem(new TextBlock('Title').size('Large'))
  .addItem(new TextBlock('Description').wrap(true));

await app.send(conversationId, card);
```

## Real-World Use Cases

### Scheduled Reminders

```typescript
// Run this script on a schedule (e.g., via cron)
const app = new App();
await app.initialize();

for (const user of usersWithReminders) {
  await app.send(user.conversationId, `Reminder: ${user.reminderText}`);
}
```

### Alert System

```typescript
// Trigger from monitoring system
if (systemAlert) {
  const app = new App();
  await app.initialize();
  await app.send(adminConversationId, `🚨 Alert: ${alert.message}`);
}
```

### Webhook Handler

```typescript
// Express webhook endpoint
app.post('/webhook', async (req, res) => {
  const teamsApp = new App();
  await teamsApp.initialize();

  await teamsApp.send(req.body.conversationId, req.body.message);

  res.sendStatus(200);
});
```

## Important Notes

- **Conversation IDs persist** - Save them to storage for later use
- **No server overhead** - This approach doesn't require a running HTTP server
- **Rate limits apply** - Be mindful of Teams API rate limits when sending bulk messages
- **Permissions required** - Your bot must be installed in the conversation to send messages

## Learn More

- [Teams Bot Framework Documentation](https://aka.ms/teams-sdk)
- [Proactive Messaging Guide](https://learn.microsoft.com/microsoftteams/platform/bots/how-to/conversations/send-proactive-messages)
