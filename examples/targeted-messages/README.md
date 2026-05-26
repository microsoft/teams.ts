# Example: Targeted Messages

A bot that demonstrates targeted (ephemeral) messages in Microsoft Teams.

Targeted messages are messages that only a specific recipient can see - other participants in the conversation won't see them.

## Commands

| Command | Behavior |
|---------|----------|
| `test send` | Sends a targeted message (only you see it) |
| `test update` | Sends a targeted message, then updates it after 3 seconds |
| `test delete` | Sends a targeted message, then deletes it after 3 seconds |
| `test public` | Sends a public reply (visible to everyone) |
| `send public` | Only sends a public message if the incoming message is targeted |
| `send private` | Only sends a private message if the incoming message is targeted |
| `test inbound` | Reads `activity.recipient.isTargeted` and reports whether the inbound message was targeted at the bot |
| `help` | Shows available commands |

## Manifest configuration

The `appPackage/manifest.json` uses `manifestVersion: "devPreview"` because the slash-command opt-in fields are only defined in the devPreview schema:

- `bots[].supportsTargetedMessages: true` — opts the bot into receiving slash-command-style targeted messages.
- `bots[].commandLists[].triggers: ["slash"]` — declares the listed commands as slash commands. They appear in the Teams `/` picker for group chats and channels.

Slash commands arrive at the bot as regular `MessageActivity` events with `activity.recipient.isTargeted === true`, which the `test inbound` handler in this sample demonstrates.

The `send public` and `send private` commands are useful for verifying whether the inbound message was targeted. If it isn't, the bot says `Send it to me privately first!`.

## Testing in a Group Chat

To properly test targeted messages:

1. Add the bot to a **group chat** with 2+ people
2. Pick the command from the `/` slash menu, or type `send private` as a slash command
3. **Expected result**: 
   - You (the sender) should see the targeted message
   - Other participants should **NOT** see it

If you type `send private` as a normal message in 1:1 chat, it will not come through as a targeted message, so the private branch won’t fire.

You can also try `send public` to verify the bot only sends a public response when the inbound message is targeted, or `send private` to verify the bot only sends a private response when the inbound message is targeted.

## Making a command private

To make a command behave like `send private` or `send public`:

1. In `appPackage/manifest.json`, keep `supportsTargetedMessages: true` on the bot.
2. Add the command under a slash-triggered `commandLists` entry for `team` / `groupChat`.
3. In your handler, check `activity.recipient?.isTargeted === true`.
4. Only send the private response when that check passes.
5. You do **not** need to manually set `withRecipient(activity.from, true)` in this example — `ActivityContext` will mark the response targeted automatically when the inbound message was targeted.

That combo makes the bot treat the slash-command message as private and lets you choose whether the response should be private or public.

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
