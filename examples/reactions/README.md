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
