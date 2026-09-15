# Multi-provider OAuth sample

This sample registers independent `graph` and `github` OAuth flows. Each flow
owns its sign-in completion/failure callbacks and can be queried or signed out
without affecting the other connection.

## Teams CLI

Use the official Teams CLI (`@microsoft/teams.cli`) to create and manage the Teams app for this sample:

```bash
npm install -g @microsoft/teams.cli
teams --version
teams login
```

Expose this sample's local `/api/messages` endpoint with a tunnel, then create the Teams app:

```bash
teams app create --name "oauth" --endpoint "https://<your-tunnel>/api/messages" --env .env --json
```

The CLI writes `CLIENT_ID`, `CLIENT_SECRET`, and `TENANT_ID` to your `.env` file and prints an install link for Teams. Save the `teamsAppId` and `botId` from the JSON output for the auth setup below.

## Configure Microsoft Graph

The `graph` connection is the default and supports Teams SSO. Follow the Teams
SDK [SSO setup guide](https://github.com/microsoft/teams-sdk/blob/main/plugins/teams-sdk/skills/teams-dev/references/guide-setup-sso.md).

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

## Configure GitHub

1. Create a GitHub OAuth app with this authorization callback URL:

   ```text
   https://token.botframework.com/.auth/web/redirect
   ```

2. Create the second Azure Bot OAuth connection:

   ```bash
   az bot authsetting create \
     --name <botId> \
     --resource-group <resourceGroup> \
     --setting-name "github" \
     --service GitHub \
     --client-id <githubClientId> \
     --client-secret <githubClientSecret> \
     --provider-scope-string "read:user user:email" \
     --subscription <subscription>
   ```

The connection name must be `github`, matching the `github` entry in `oauthFlows` in
`src/index.ts`.

## Run

```bash
npm run dev
```

Use these commands in Teams:

| Command | Action |
| --- | --- |
| `/graph` | Sign in and call Microsoft Graph `GET /me`. |
| `/github` | Sign in and call GitHub `GET /user`. |
| `/status` | Show both token-service connection statuses. |
| `/signout graph` | Sign out only from Microsoft Graph. |
| `/signout github` | Sign out only from GitHub. |
