# Example: Targeted Messages

A bot that demonstrates targeted (ephemeral) messages in Microsoft Teams.

Targeted messages are messages that only a specific recipient can see - other participants in the conversation won't see them.

## Commands

| Command | Behavior |
|---------|----------|
| `test send` | Sends a targeted message (only you see it) |
| `test reply` | Replies with a targeted message |
| `test update` | Sends a targeted message, then updates it after 3 seconds |
| `test delete` | Sends a targeted message, then deletes it after 5 seconds |
| `help` | Shows available commands |

## Testing in a Group Chat

To properly test targeted messages:

1. Add the bot to a **group chat** with 2+ people
2. Send `test send`
3. **Expected result**: 
   - You (the sender) should see the "🔒 Targeted message"
   - Other participants should **NOT** see it

## Teams CLI

Use the official Teams CLI (`@microsoft/teams.cli`) to create and manage the Teams app for this sample:

```bash
npm install -g @microsoft/teams.cli
teams --version
teams login
```

Expose this sample's local `/api/messages` endpoint with a tunnel, then create the Teams app:

```bash
teams app create --name "targeted-messages" --endpoint "https://<your-tunnel>/api/messages" --env .env --json
```

The CLI writes `CLIENT_ID`, `CLIENT_SECRET`, and `TENANT_ID` to your `.env` file and prints an install link for Teams.

## Run

```bash
npm run dev
```

## Environment Variables

Create a `.env` file:

```
CLIENT_ID=<your-azure-bot-app-id>
CLIENT_SECRET=<your-azure-bot-app-secret>
TENANT_ID=<your-tenant-id>
```
