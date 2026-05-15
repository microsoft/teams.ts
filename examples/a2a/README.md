# Sample: a2a

a sample showcasing an a2a server / client

## Prerequisites

-   Node.js version 20 or later
-   An Microsoft 365 development account. If you don't have one, you can get one for free by signing up for the [Microsoft 365 Developer Program](https://developer.microsoft.com/microsoft-365/dev-program).

## Teams CLI

Use the official Teams CLI (`@microsoft/teams.cli`) to create and manage the Teams app for this sample:

```bash
npm install -g @microsoft/teams.cli
teams --version
teams login
```

Expose this sample's local `/api/messages` endpoint with a tunnel, then create the Teams app:

```bash
teams app create --name "a2a" --endpoint "https://<your-tunnel>/api/messages" --env .env --json
```

The CLI writes `CLIENT_ID`, `CLIENT_SECRET`, and `TENANT_ID` to your `.env` file and prints an install link for Teams.

## Run

```bash
npm install
```

Run the server:

```bash
npm run server
```

Run the client:

```bash
npm run client
```

Open up devtools for the client, and send a message:

```
C: What's the weather like?
S: Could you please specify the location for which you'd like to know the weather?
C: London
S: The weather in London is sunny
C: What's the weather like in Tokyo?
S: The weather in Tokyo is sunny
```
