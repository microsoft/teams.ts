# Auth test

Run this first to get all the config files:

```
teams config add atk.oauth
```

Then run via ATK.

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
logger: new ConsoleLogger('@tests/auth', { level: 'debug' }),
apiClientSettings: {
    oauthUrl: "https://europe.token.botframework.com",
}
});
```