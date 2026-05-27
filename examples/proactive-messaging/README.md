# Proactive Messaging Example

Send proactive messages to Teams users without running a server.

## Teams CLI

Use the official Teams CLI (`@microsoft/teams.cli`) to create and manage the Teams app for this sample:

```bash
npm install -g @microsoft/teams.cli
teams --version
teams login
```

Expose this sample's local `/api/messages` endpoint with a tunnel, then create the Teams app:

```bash
teams app create --name "proactive-messaging" --endpoint "https://<your-tunnel>/api/messages" --env .env --json
```

The CLI writes `CLIENT_ID`, `CLIENT_SECRET`, and `TENANT_ID` to your `.env` file and prints an install link for Teams.

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
   CLIENT_ID=<your-azure-bot-app-id>
   CLIENT_SECRET=<your-azure-bot-app-secret>
   TENANT_ID=<your-tenant-id>
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
