# Graph Example

Demonstrates Microsoft Graph access from a Teams bot using both user-delegated and app-only permissions.

## Commands

| Command | Description |
|---------|-------------|
| Any message | Triggers SSO sign-in, then shows your profile |
| `/signout` | Sign out of your account |
| `/app-users` | List org users via `app.getAppGraph()` (no sign-in needed) |

## Setup

1. Create an app with SSO:

```
teams app create
teams app user-auth sso setup <app-id>
```

2. Run the bot:

```
teams app bot start
```

## Adding Scopes

To request additional Graph permissions, edit the SSO connection:

```
teams app user-auth sso edit <app-id> --connection-name graph --scopes "User.Read,People.Read.All"
```

For app-only permissions (e.g., `User.Read.All` for `/app-users`), grant them in Azure Portal > App registrations > API permissions and have an admin consent.

## Regional Bot

To use a regional token endpoint (e.g., Europe), update `validDomains` in your manifest to include `europe.token.botframework.com` and set `apiClientSettings` in your app:

```typescript
const app = new App({
  oauth: {
    defaultConnectionName: 'graph',
  },
  apiClientSettings: {
    oauthUrl: 'https://europe.token.botframework.com',
  }
});
```
