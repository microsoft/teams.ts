# Proactive Messaging Example

Send proactive messages to Teams users without running a server.

## Key Concepts

**Without a server:**
```typescript
await app.initialize();
await app.send(conversationId, 'Hello!');
```

**With a running server:**
```typescript
await app.start();
// Later, anywhere in your code:
await app.send(conversationId, 'Hello!');
```

> **Note**: Use `app.initialize()` only when you don't need a server. If using `app.start()`, just call `app.send()` directly.
>
> **Important**: Without a server (`app.initialize()`), you can only send messages. You cannot receive incoming messages from users.

## Usage

1. Set up `.env`:
   ```
   BOT_ID=<your-bot-id>
   BOT_PASSWORD=<your-bot-password>
   ```

2. Run:
   ```bash
   npm run dev <CONVERSATION_ID>
   ```

## Examples

**Send text:**
```typescript
await app.send(conversationId, 'Your message');
```

**Send card:**
```typescript
const card = new AdaptiveCard(
  new TextBlock('Title', { size: 'Large' })
);
await app.send(conversationId, card);
```

**Scheduled job (no server):**
```typescript
const app = new App();
await app.initialize();
await app.send(conversationId, 'Reminder!');
```

**From running bot:**
```typescript
const app = new App();
await app.start();

app.on('message', async ({ activity }) => {
  await saveConversationId(activity.conversation.id);
});

// Send proactive messages anytime
await app.send(conversationId, 'Update!');
```

## Notes

- Without a server (`app.initialize()`), you can only send messages, not receive them
- Get conversation IDs from previous interactions, installation events, or Graph API
- Your bot must be installed in the conversation
- Be mindful of rate limits
