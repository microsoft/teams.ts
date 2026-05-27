# Agent: Message Extensions

A Teams app that show cases three message extensions features:

- action commands
- search commands
- link unfurling

<!--
Potential features to showcase

General
- jit install

Action command
 - where command context is 'composeBox'
 - action previews

Handle events
- 'message.ext.anon-query-link';
- 'message.ext.select-item';
- 'message.ext.query-settings-url';
- 'message.ext.setting';
- 'message.ext.card-button-clicked';
-->

## Teams CLI

Use the official Teams CLI (`@microsoft/teams.cli`) to create and manage the Teams app for this sample:

```bash
npm install -g @microsoft/teams.cli
teams --version
teams login
```

Expose this sample's local `/api/messages` endpoint with a tunnel, then create the Teams app:

```bash
teams app create --name "message-extensions" --endpoint "https://<your-tunnel>/api/messages" --env .env --json
```

The CLI writes `CLIENT_ID`, `CLIENT_SECRET`, and `TENANT_ID` to your `.env` file and prints an install link for Teams.

## Run

```bash
$: npm run dev
```
