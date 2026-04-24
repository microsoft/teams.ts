# Sample: dialogs

A demo of dialogs (task modules) in Teams.

## Features

- **Sub-route routing** — Each dialog is handled by a targeted route (e.g., `dialog.open.simple_form`, `dialog.submit.webpage_dialog`) instead of a single catch-all handler with manual dispatch.
- **Adaptive Card dialogs** — Simple form and multi-step form examples using Adaptive Cards with `Action.Submit`.
- **Webpage dialogs** — Opens an HTML page hosted by the bot inside a Teams task module.
- **Card action routing** — Adaptive Card `Action.Execute` actions routed via `card.action.{action}` sub-routes.

## Prerequisites

- Node.js version 20 or later
- An Microsoft 365 development account. If you don't have one, you can get one for free by signing up for the [Microsoft 365 Developer Program](https://developer.microsoft.com/microsoft-365/dev-program).

## Run

```bash
npm install
```

To run on teams, run:

```bash
npx @microsoft/teams.cli config add atk.basic
```

This will add all the atk related configs.

Then run the sample via atk.
