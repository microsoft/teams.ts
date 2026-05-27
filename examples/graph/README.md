# Graph auth sample

This sample demonstrates signing a user in and calling Microsoft Graph with the `userGraph` client.

## Teams CLI

Use the official Teams CLI (`@microsoft/teams.cli`) to create and manage the Teams app for this sample:

```bash
npm install -g @microsoft/teams.cli
teams --version
teams login
```

Expose this sample's local `/api/messages` endpoint with a tunnel, then create the Teams app:

```bash
teams app create --name "graph" --endpoint "https://<your-tunnel>/api/messages" --env .env --json
```

The CLI writes `CLIENT_ID`, `CLIENT_SECRET`, and `TENANT_ID` to your `.env` file and prints an install link for Teams. Save the `teamsAppId` and `botId` from the JSON output for the auth setup below.

## Configure Graph auth

This sample expects an OAuth connection named `graph`, matching `defaultConnectionName: 'graph'` in `src/index.ts`.

Follow the Teams SDK [SSO setup guide](https://github.com/microsoft/teams-sdk/blob/main/plugins/teams-sdk/skills/teams-dev/references/guide-setup-sso.md) flow:

1. Make sure Azure CLI is installed and signed in with the same account used for `teams login`:

   ```bash
   az account show
   ```

2. Check where the bot is hosted:

   ```bash
   teams app bot get <teamsAppId>
   ```

   If the bot is Teams-managed, migrate it to Azure first:

   ```bash
   az group create --name <resourceGroup> --location <azureRegion>
   teams app bot migrate <teamsAppId> --resource-group <resourceGroup>
   ```

3. Create or reuse the bot client secret from `.env`, then configure the AAD app identifier URI, `access_as_user` scope, Teams pre-authorization, and Bot Framework redirect URI as described in the SSO setup guide.

4. Create the Azure Bot OAuth connection named `graph`:

   ```bash
   az bot authsetting create \
     --name <botId> \
     --resource-group <resourceGroup> \
     --setting-name "graph" \
     --service Aadv2 \
     --client-id <botId> \
     --client-secret <clientSecret> \
     --provider-scope-string "User.Read" \
     --parameters tenantId=<tenantId> tokenExchangeUrl=api://botid-<botId> \
     --subscription <subscription>
   ```

5. Set the Teams app SSO identity fields:

   ```bash
   teams app update <teamsAppId> \
     --web-app-info-id "<botId>" \
     --web-app-info-resource "api://botid-<botId>"
   ```

6. Verify the setup:

   ```bash
   teams app doctor <teamsAppId>
   ```

## Updating Graph scopes

The default OAuth connection uses `User.Read`. To request more Microsoft Graph delegated permissions, update the OAuth connection scopes in Azure Bot Service. For example:

```bash
az bot authsetting create \
  --name <botId> \
  --resource-group <resourceGroup> \
  --setting-name "graph" \
  --service Aadv2 \
  --client-id <botId> \
  --client-secret <clientSecret> \
  --provider-scope-string "User.Read People.Read User.ReadBasic.All" \
  --parameters tenantId=<tenantId> tokenExchangeUrl=api://botid-<botId> \
  --subscription <subscription>
```

> Admin consent may be required depending on the scopes you add.

## Run

```bash
npm run dev
```

In Teams, send any message to start sign-in. After sign-in succeeds, the bot calls `GET /me` through Microsoft Graph and replies with the signed-in user's display name.
