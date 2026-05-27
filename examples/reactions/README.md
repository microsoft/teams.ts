# Example: Reactions

A bot that demonstrates how to use the ReactionClient to add and remove reactions on messages.

## Features

- Responds to user messages and adds reactions
- Handles `messageReaction` activities to detect when users add/remove reactions
- Demonstrates using the `ReactionClient` API to programmatically manage reactions

## Usage

1. Send a message to the bot
2. The bot will reply and add a reaction to your message
3. Add or remove reactions on bot messages to see reaction events logged

## Teams CLI

Use the official Teams CLI (`@microsoft/teams.cli`) to create and manage the Teams app for this sample:

```bash
npm install -g @microsoft/teams.cli
teams --version
teams login
```

Expose this sample's local `/api/messages` endpoint with a tunnel, then create the Teams app:

```bash
teams app create --name "reactions" --endpoint "https://<your-tunnel>/api/messages" --env .env --json
```

The CLI writes `CLIENT_ID`, `CLIENT_SECRET`, and `TENANT_ID` to your `.env` file and prints an install link for Teams.

## Run

```bash
$: npm run dev
```

## ReactionClient API

```typescript
import { Client } from '@microsoft/teams.api';

const client = new Client(serviceUrl);

// Add a reaction
await client.reactions.add(conversationId, activityId, 'like');

// Delete a reaction
await client.reactions.delete(conversationId, activityId, 'like');
```

## Supported Reaction Types

- `like` - 👍
- `heart` - ❤️
- `1f440_eyes` - 👀
- `2705_whiteheavycheckmark` - ✅
- `launch` - 🚀
- `1f4cc_pushpin` - 📌

The `MessageReactionType` parameter also accepts any string, so you can pass other reaction IDs from the Teams reactions reference.
