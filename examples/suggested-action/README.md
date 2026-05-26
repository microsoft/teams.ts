# Example: Suggested Action Submit

A bot that demonstrates the `Action.Submit` suggested action and the `suggestedActions/submit` invoke it produces when clicked.

## Behavior

| Trigger | Behavior |
|---------|----------|
| Any user message | Bot replies with `Approve` / `Reject` suggested-action chips (`type: "Action.Submit"`, each with a structured `value`) |
| User clicks a chip | Platform dispatches a `suggestedActions/submit` invoke; bot reads `activity.value` and echoes it back |

## Notes

- `Action.Submit` chips do not post a chat-visible message on the user's behalf — only the bot receives the click as a typed invoke.
- The chip's `value` is delivered verbatim on the activity's `value` field.

## Experimental API

`'Action.Submit'` card action type, `ISuggestedActionSubmitInvokeActivity`, and the `suggested-action.submit` route are marked `@experimental` because the underlying platform feature is still rolling out.

## Teams CLI

Use the official Teams CLI (`@microsoft/teams.cli`) to create and manage the Teams app for this sample:

```bash
npm install -g @microsoft/teams.cli
teams --version
teams login
```

Expose this sample's local `/api/messages` endpoint with a tunnel, then create the Teams app:

```bash
teams app create --name "suggested-action" --endpoint "https://<your-tunnel>/api/messages" --env .env --json
```

The CLI writes `CLIENT_ID`, `CLIENT_SECRET`, and `TENANT_ID` to your `.env` file and prints an install link for Teams.

## Run

```bash
npm run dev
```
