# Example: M365 Extension

This sample embeds the Teams SDK `App` inside a Microsoft Agents SDK `AgentApplication` using the `@microsoft/teams.m365extensions` M365 Extension. Teams turns that match a Teams SDK route are handled by Teams SDK; everything else — non-Teams channels and Teams turns with no matching route — falls through to `AgentApplication`.

## How It Works

`useTeamsSdk` extracts `clientId`/`tenantId` from the Agents SDK connection manager, wires Teams SDK outbound tokens to the same connections, constructs `@microsoft/teams.apps` `App`, and installs the M365 Extension bridge on the Agents SDK adapter.

## Commands

Teams SDK routes (`TEAMS_APP`, Teams channel only):

- `help` — Adaptive Card listing every command
- `react` — bot adds then removes an emoji reaction
- `quote` — bot replies with a quoted reply
- `targeted` — ephemeral message visible only to the sender
- `task` — task module fetch/submit flow

Agents SDK routes (`AGENT_SDK_APP`, fallthrough + non-Teams channels):

- `channel` — report the channel and routing path
- `agents sdk react` — reach Teams SDK's API client from an Agents SDK handler
- `agents sdk proactive` — trigger a proactive send from an Agents SDK handler
- `whoami` / `mail` — Microsoft Graph via two separate OAuth connections
- `signout` — sign out of both Graph handlers
- anything else — echoed by the Agents SDK

## Setup

Install the official [Teams CLI](https://microsoft.github.io/teams-sdk/cli/) and sign in:

```bash
npm install -g @microsoft/teams.cli
teams login
```

Expose this sample's local `/api/messages` endpoint with a dev tunnel, then create the app. The `whoami`/`mail` sign-in demo needs an Azure Bot resource, so use `--azure`:

```bash
teams app create \
  --name "m365extensions" \
  --azure --resource-group <rg> --create-resource-group \
  --endpoint "https://<your-tunnel>/api/messages"
```

Copy `.env.example` to `.env` and paste in the generated credentials:

```bash
cp .env.example .env
# CLIENT_ID=<client-id>
# CLIENT_SECRET=<client-secret>
# TENANT_ID=<tenant-id>
```

## Running

Install dependencies from the repo root, then run the sample from its own directory so `.env` is loaded:

```bash
npm install
cd examples/m365extensions
npm run dev
```

Install the app in Teams and send `help`.

## Multi Authentication

`whoami` and `mail` both call Microsoft Graph, but through separate OAuth connections on the same AAD app, so each keeps its own token cache.

| Command | Handler | ABS connection | Scopes |
| --- | --- | --- | --- |
| `whoami` | `graphuser` | `graphuser` | `User.Read` |
| `mail` | `graphmail` | `graphmail` | `User.Read Mail.Read` |

Create the two OAuth connections on the Azure Bot registration — via the Azure Portal or `az`, since Teams CLI does not manage OAuth connections — then keep the handler entries in `.env`:

```bash
az bot authsetting create --name <bot> --resource-group <rg> --setting-name graphmail \
  --client-id <aad-app> --client-secret <secret> --service Aadv2 \
  --provider-scope-string "User.Read Mail.Read" --parameters tenantId=<tenant>
```

Auth lives on the Agents SDK side because the auth intercept runs inside `AgentApplication`. The sample passes a `shouldBypassTeams` predicate so `signin/*` invokes always stay with Agents SDK.

## Multichannel

The M365 Extension routes to Teams SDK only for Teams activities; every other channel passes straight through to Agents SDK.

| | Teams | Web Chat / Direct Line | Email |
| --- | --- | --- | --- |
| `channel` | fell through | passed through | passed through |
| `help` | Adaptive Card (Teams SDK) | plain text (Agents SDK) | plain text (Agents SDK) |
| `quote`, `task`, `react`, `targeted` | handled by Teams SDK | no route → echoed | no route → echoed |
| `whoami`, `mail` | OAuth card | OAuth card | declined (cards are inert on email) |
