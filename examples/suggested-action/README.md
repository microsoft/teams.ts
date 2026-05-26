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

## Run

```bash
npm run dev
```
