# Auth test

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

The CLI writes `CLIENT_ID`, `CLIENT_SECRET`, and `TENANT_ID` to your `.env` file and prints an install link for Teams.

## Teams Toolkit Configuration: Oauth

Use this if you want to enable user authentication in your Teams application.

## How to update scopes

1. In the `aad.manifest.json` file, update the `requiredResourceAccess` list to add the required scopes.

2. In the `infra/botRegistration/azurebot.bicep` file, under the `botServicesMicrosoftGraphConnection` resource, update the `properties.scopes` string to be a comma-delimited list of the required scopes.

### Example

If you want to add the `People.Read.All` and `User.ReadBasic.All` scopes.

1. Your `requiredResourceAccess` property should look like:

```json
"requiredResourceAccess": [
    {
        "resourceAppId": "Microsoft Graph",
        "resourceAccess": [
            {
                "id": "People.Read.All",
                "type": "Scope"
            }
        ]
    },
    {
        "resourceAppId": "Microsoft Graph",
        "resourceAccess": [
            {
                "id": "User.ReadBasic.All",
                "type": "Scope"
            }
        ]
    },
]
```

2. Update the `properties.scopes` to be `People.Read.All,User.ReadBasic.All`.

## Configuring a Regional Bot 
NOTE: This example uses west europe, but follow the equivalent for other locations.

1. In `azurebot.bicep`, replace all `global` occurrences to `westeurope`
2. In `manifest.json`, in `validDomains`, `*.botframework.com` should be replaced by `europe.token.botframework.com`
2. In `aad.manifest.json`, replace `https://token.botframework.com/.auth/web/redirect` with `https://europe.token.botframework.com/.auth/web/redirect`
3. In `index.ts`, update `AppOptions` to include `apiClientSettings`

```typescript
const app = new App({
oauth: {
defaultConnectionName: 'graph',
},
logger: new ConsoleLogger('@examples/auth', { level: 'debug' }),
apiClientSettings: {
    oauthUrl: "https://europe.token.botframework.com",
}
});
```