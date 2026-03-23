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

// Remove a reaction
await client.reactions.remove(conversationId, activityId, 'like');
```

## Supported Reaction Types

- `like` - 👍
- `heart` - ❤️
- `laugh` - 😂
- `surprised` - 😮
- `sad` - 😢
- `angry` - 😠
