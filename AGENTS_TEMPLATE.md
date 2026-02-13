# Agent Instructions for Teams SDK based agents

This document provides guidance for AI coding agents working on Microsoft Teams bot projects built with the new Teams SDK and OpenAI integration.

## Project Overview

This is a Microsoft Teams conversational AI agent that:
- Uses the **new Microsoft Teams SDK** (NOT based on BotFramework)
- Integrates with **OpenAI GPT-4o** for chat completions
- Supports **streaming responses** for real-time user feedback
- Maintains **conversation history** via local storage

## Critical Setup Requirements

Before diving in, be aware of these commonly missed steps that cause the bot to fail silently:

1. **Service Principal Required**: After creating an Azure AD app, you MUST also create a service principal with `az ad sp create --id <APP_ID>`. Without this, the bot receives messages but can't respond.

2. **Correct Environment Variable Names**: The Teams SDK reads `CLIENT_ID`/`CLIENT_SECRET`/`TENANT_ID` from environment variables - NOT the `MicrosoftApp*` names from older Bot Framework documentation.

3. **SingleTenant Only**: Azure deprecated MultiTenant bots. Use SingleTenant and ensure you're using Teams in the same tenant.

4. **Globally Unique Bot Names**: Azure bot names must be unique across all of Azure. Add a timestamp suffix.

See the [Troubleshooting](#troubleshooting) section for detailed solutions to these issues.

## Architecture

```
src/
└── index.ts          # Main application entry point

appPackage/
├── manifest.json     # Teams app manifest
├── color.png         # App icon (192x192)
└── outline.png       # App outline icon (32x32)
```

### Core Dependencies

| Package | Purpose |
|---------|---------|
| `@microsoft/teams.apps` | Core App class for hosting, routing, plugins |
| `@microsoft/teams.ai` | ChatPrompt, Message types for AI interactions |
| `@microsoft/teams.common` | LocalStorage and shared utilities |
| `@microsoft/teams.dev` | DevtoolsPlugin for debugging |
| `@microsoft/teams.openai` | OpenAI model integration |

## Key Concepts

### The App Class

The `App` class is the central entry point that handles:
- HTTP server hosting
- Activity routing
- Plugin management
- Storage configuration

```typescript
import { App } from '@microsoft/teams.apps';

const app = new App({
  storage,
  plugins: [new DevtoolsPlugin()],
});
```

> **Note**: The App automatically reads credentials from environment variables (`CLIENT_ID`, `CLIENT_SECRET`, `TENANT_ID`). You don't need to pass them explicitly to the constructor.

### Event-Driven Architecture

The SDK uses an event-driven pattern. Register handlers using `app.on()`:

```typescript
app.on('message', async ({ stream, activity }) => {
  // Handle incoming messages
});
```

**Available Events:**
- `message` - User sends a message
- `message.submit` - Adaptive Card action submitted
- `install` - Bot installed
- `uninstall` - Bot removed

### ChatPrompt and Streaming

Use `ChatPrompt` for AI interactions with streaming support:

```typescript
const prompt = new ChatPrompt({
  messages: existingMessages,
  model: new OpenAIChatModel({
    model: 'gpt-4o',
    apiKey: process.env.OPENAI_API_KEY,
  }),
});

await prompt.send(userText, {
  onChunk: (chunk) => stream.emit(chunk),
});
```

### Conversation State

Conversation history is keyed by `{conversationId}/{userId}`:

```typescript
const key = `${activity.conversation.id}/${activity.from.id}`;
const messages = storage.get(key);
```

## Development Workflow

### Prerequisites

1. Node.js >= 20 (LTS) installed
2. OpenAI API key configured in `.env`
3. Azure Bot registration (for Teams deployment)

### Running Locally

```bash
# Install dependencies
npm install

# Development mode with hot reload
npm run dev

# Production build
npm run build
npm start
```

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `OPENAI_API_KEY` | Yes | OpenAI API key for GPT-4o |
| `CLIENT_ID` | Yes | Azure AD App Registration ID (same as MicrosoftAppId) |
| `CLIENT_SECRET` | Yes | Azure AD App client secret (same as MicrosoftAppPassword) |
| `TENANT_ID` | Yes | Azure AD Tenant ID |
| `PORT` | No | Server port (default: 3978) |

> **Note**: The Teams SDK expects `CLIENT_ID`, `CLIENT_SECRET`, and `TENANT_ID` (not the `MicrosoftApp*` naming convention used by older Bot Framework SDKs).

### Building for Production

```bash
npm run clean   # Remove dist folder
npm run build   # Compile TypeScript via tsup
```

## Azure Bot Registration

To test the bot locally inside a real Teams instance, you must register it in Azure and create a sideloadable app package.

### Step 1: Gather Required Information

You'll need three pieces of information:
- **Bot Name**: 3-36 alphanumeric characters (hyphens allowed), e.g., `my-agent-bot`
- **Azure Resource Group**: An existing resource group in your Azure subscription
- **Messaging Endpoint**: HTTPS URL where Teams will send messages (e.g., `https://<tunnel-id>-3978.<region>.devtunnels.ms/api/messages`)

For local development, use [Microsoft Dev Tunnels](https://learn.microsoft.com/en-us/azure/developer/dev-tunnels/) to expose your local server. Dev tunnels integrate with your Microsoft account and don't require a separate signup.

```bash
# Install dev tunnels CLI (macOS)
brew install --cask devtunnel

# Login (uses your Microsoft account)
devtunnel user login

# Create a persistent tunnel with anonymous access (required for Bot Framework)
devtunnel create my-bot-tunnel --allow-anonymous
devtunnel port create -p 3978

# Start your bot locally
npm run dev

# In another terminal, start the tunnel
devtunnel host
```

Your messaging endpoint will be: `https://<tunnel-id>-3978.<region>.devtunnels.ms/api/messages`

### Step 2: Verify Azure CLI Setup

Check that Azure CLI is installed and you're logged in:

```bash
# Check Azure CLI is installed
which az

# Check login status
az account show

# If not logged in, authenticate
az login
```

### Step 3: Register the Bot in Azure

Run the following Azure CLI commands to create the bot registration:

```bash
# Set variables - BOT_NAME must be globally unique, so add a unique suffix
BOT_NAME="my-agent-bot-$(date +%s | tail -c 6)"
RESOURCE_GROUP="your-resource-group"
MESSAGING_ENDPOINT="https://your-tunnel-id.region.devtunnels.ms/api/messages"

# Create Azure AD App Registration
APP_ID=$(az ad app create \
  --display-name "$BOT_NAME" \
  --sign-in-audience "AzureADMyOrg" \
  --query appId -o tsv)

# CRITICAL: Create a Service Principal for the app
# Without this, the bot will fail with AADSTS7000229 errors when trying to respond
az ad sp create --id $APP_ID

# Create a client secret (save this - it won't be shown again!)
APP_SECRET=$(az ad app credential reset \
  --id $APP_ID \
  --display-name "Bot Secret" \
  --query password -o tsv)

# Get your Tenant ID
TENANT_ID=$(az account show --query tenantId -o tsv)

# Create the Bot Service (MultiTenant is deprecated, use SingleTenant)
az bot create \
  --resource-group $RESOURCE_GROUP \
  --name $BOT_NAME \
  --app-type SingleTenant \
  --appid $APP_ID \
  --tenant-id $TENANT_ID \
  --endpoint $MESSAGING_ENDPOINT

# Enable the Teams channel
az bot msteams create \
  --resource-group $RESOURCE_GROUP \
  --name $BOT_NAME

# Display credentials (SAVE THESE!)
echo "=== Bot Credentials ==="
echo "CLIENT_ID: $APP_ID"
echo "CLIENT_SECRET: $APP_SECRET"
echo "TENANT_ID: $TENANT_ID"
echo "BOT_NAME: $BOT_NAME"
```

> **CRITICAL**: The `az ad sp create` command creates a Service Principal, which is **required** for the bot to authenticate. This is the most commonly missed step and causes the bot to receive messages but fail silently when responding.

### Step 4: Configure Bot Credentials

Add the Azure credentials to your `.env` file:

```bash
OPENAI_API_KEY=your-openai-key
CLIENT_ID=<APP_ID from Step 3>
CLIENT_SECRET=<APP_SECRET from Step 3>
TENANT_ID=<TENANT_ID from Step 3>
```

> **Important**: The Teams SDK uses `CLIENT_ID`, `CLIENT_SECRET`, and `TENANT_ID` - not the `MicrosoftApp*` names used by older Bot Framework SDKs.

### Step 5: Update the Messaging Endpoint (if needed)

If your tunnel URL changes, update the bot's messaging endpoint:

```bash
az bot update \
  --resource-group $RESOURCE_GROUP \
  --name $BOT_NAME \
  --endpoint "https://new-tunnel-id-3978.region.devtunnels.ms/api/messages"
```

## Teams App Package

The `appPackage/` directory contains the Teams app manifest for sideloading.

### Manifest Variables

These placeholders in `manifest.json` must be replaced for deployment:

| Variable | Description |
|----------|-------------|
| `${{TEAMS_APP_ID}}` | Unique GUID for the Teams app (generate with `uuidgen`) |
| `${{BOT_ID}}` | Azure AD App Registration ID (MicrosoftAppId from registration) |
| `${{BOT_DOMAIN}}` | Bot messaging endpoint domain (e.g., `abc123-3978.usw2.devtunnels.ms`) |
| `${{APP_NAME_SUFFIX}}` | Environment suffix (e.g., `dev`, `prod`) |

### Step 1: Prepare the Manifest

Create a deployment-ready manifest by replacing the variables:

```bash
# Generate a unique app ID
TEAMS_APP_ID=$(uuidgen)

# Use your Bot ID from Azure registration (CLIENT_ID)
BOT_ID="your-client-id"

# Your dev tunnel domain (without https://)
BOT_DOMAIN="abc123.region456.devtunnels.ms"

# Environment suffix
APP_NAME_SUFFIX="dev"

# Create a processed manifest
cd appPackage
sed -e "s/\${{TEAMS_APP_ID}}/$TEAMS_APP_ID/g" \
    -e "s/\${{BOT_ID}}/$BOT_ID/g" \
    -e "s/\${{BOT_DOMAIN}}/$BOT_DOMAIN/g" \
    -e "s/\${{APP_NAME_SUFFIX}}/$APP_NAME_SUFFIX/g" \
    manifest.json > manifest.processed.json

mv manifest.processed.json manifest.json
```

### Step 2: Verify Icons

Ensure you have the required icons in `appPackage/`:
- `color.png` - 192x192 pixels, full-color app icon
- `outline.png` - 32x32 pixels, transparent outline icon

If you need to generate placeholder icons:

```bash
# Using ImageMagick (install with: brew install imagemagick)
convert -size 192x192 xc:#6264A7 -fill white -gravity center \
  -pointsize 72 -annotate 0 "M" appPackage/color.png

convert -size 32x32 xc:none -fill white -gravity center \
  -pointsize 20 -annotate 0 "M" appPackage/outline.png
```

### Step 3: Create the App Package ZIP

```bash
cd appPackage
zip -r ../my-agent.zip manifest.json color.png outline.png
cd ..
```

### Step 4: Sideload to Microsoft Teams

1. Open Microsoft Teams (desktop or web)
2. Click **Apps** in the left sidebar
3. Click **Manage your apps** at the bottom
4. Click **Upload an app**
5. Select **Upload a custom app**
6. Choose the `my-agent.zip` file you created
7. Click **Add** to install the bot

### Step 5: Test the Bot

1. After installation, find your bot in the Apps list
2. Click on it to open a chat
3. Send a message to verify it responds

## Utility Commands

### Regenerate Bot Secret

If you need a new client secret:

```bash
az ad app credential reset \
  --id $APP_ID \
  --display-name "Bot Secret $(date +%Y%m%d)" \
  --query password -o tsv
```

### Delete Bot Registration

To clean up Azure resources:

```bash
# Delete the bot service
az bot delete --resource-group $RESOURCE_GROUP --name $BOT_NAME

# Delete the app registration
az ad app delete --id $APP_ID
```

### List Existing Bots

```bash
az bot list --resource-group $RESOURCE_GROUP -o table
```

## Extending the Bot

### Adding Function Calling / Tools

To add tool calling capabilities:

```typescript
import { ChatPrompt } from '@microsoft/teams.ai';

const prompt = new ChatPrompt({
  model: new OpenAIChatModel({ model: 'gpt-4o' }),
  tools: [
    {
      name: 'get_weather',
      description: 'Get weather for a location',
      parameters: {
        type: 'object',
        properties: {
          location: { type: 'string' }
        }
      },
      handler: async ({ location }) => {
        return { temperature: 72, conditions: 'sunny' };
      }
    }
  ]
});
```

### Adding Adaptive Cards

```typescript
import { Card } from '@microsoft/teams.cards';

const card = new Card()
  .addTextBlock('Hello!')
  .addAction('Submit', { type: 'Action.Submit' });

await activity.reply(card);
```

### Adding Authentication

```typescript
const app = new App({
  auth: {
    connectionName: 'your-oauth-connection',
  }
});

app.on('message', async ({ auth, activity }) => {
  const token = await auth.getToken();
  // Use token for Graph API calls
});
```

## Common Tasks for AI Agents

### Task: Add a New Message Handler

1. Open `src/index.ts`
2. Add new `app.on()` handler after existing handlers
3. Implement handler logic
4. Run `npm run build` to verify compilation

### Task: Modify AI Model Configuration

1. Locate `OpenAIChatModel` instantiation in `src/index.ts`
2. Adjust model parameters (model name, temperature, etc.)
3. Test changes with `npm run dev`

### Task: Add New Environment Variables

1. Add variable to `.env` file
2. Reference via `process.env.VARIABLE_NAME`
3. Document in this file under Environment Variables section

### Task: Update Teams Manifest

1. Edit `appPackage/manifest.json`
2. Ensure schema version compatibility (currently 1.20)
3. Repackage for sideloading

## Troubleshooting

### Build Errors

Run `npm run build` to catch TypeScript errors at compile time. The SDK is fully typed to help catch issues early.

### Bot Not Responding in Teams (Most Common Issues)

**1. Missing Service Principal (AADSTS7000229)**

If the bot receives messages but never responds, check for this error in logs:
```
AADSTS7000229: The client application is missing service principal in the tenant
```

**Fix**: Create the service principal:
```bash
az ad sp create --id <YOUR_APP_ID>
```

**2. Wrong Environment Variable Names**

The Teams SDK expects specific environment variable names. Using `MicrosoftAppId`/`MicrosoftAppPassword` instead of `CLIENT_ID`/`CLIENT_SECRET` will cause silent auth failures with `Bearer null` in outgoing requests.

**Fix**: Use these exact names in your `.env` file:
- `CLIENT_ID` (not `appId` or `MicrosoftAppId`)
- `CLIENT_SECRET` (not `appPassword` or `MicrosoftAppPassword`)
- `TENANT_ID` (not `appTenantId` or `MicrosoftAppTenantId`)

**3. Tunnel Not Connected**

If using dev tunnels, ensure the tunnel is running and the bot server was started first.

**Fix**: Start in this order:
```bash
# Terminal 1: Start bot first
npm run dev

# Terminal 2: Then start tunnel
devtunnel host
```

**4. Tenant Mismatch**

SingleTenant bots only work in the tenant they're registered in. If you register in tenant A but try to use Teams in tenant B, it will fail silently.

**Fix**: Ensure you're using Teams with the same account/tenant where the bot is registered.

### Bot Name Already Taken

Azure bot names are globally unique. If `az bot create` fails with "name not available":

**Fix**: Add a unique suffix:
```bash
BOT_NAME="my-agent-bot-$(date +%s | tail -c 6)"
```

### 401 Unauthorized When Bot Responds

Check the bot logs for `Authorization: 'Bearer null'`. This means credentials aren't being found.

**Fix**: Verify the service principal exists and environment variables are correctly named (`CLIENT_ID`, `CLIENT_SECRET`, `TENANT_ID`).

### Streaming Not Working

Ensure you're using the `stream.emit()` pattern within `onChunk` callback.

### Debugging Tips

1. **Check bot logs**: Look for errors after sending a message in Teams
2. **Test with DirectLine**: Use Azure portal's "Test in Web Chat" to isolate Teams-specific issues
3. **Verify tunnel**: `curl https://your-tunnel-url/api/messages` should return 401 (not connection error)
4. **Check Azure config**: `az bot show --resource-group RG --name BOT -o json | grep endpoint`

## Quick Start After Provisioning

After completing Azure Bot registration and configuration, start everything up so the user can immediately test in Teams.

### Start the Bot and Tunnel

Run both commands in the background:

```bash
# Start the bot server (background)
npm run dev &

# Start the dev tunnel (background)
devtunnel host <tunnel-name> &
```

Or if using Claude Code, start both as background tasks and verify they're running by checking:
- Bot: Should show "listening on port 3978"
- Tunnel: Should show "Ready to accept connections" with the tunnel URL

### Verify the Tunnel URL Matches Azure Configuration

**Important**: The dev tunnel URL may differ from what was initially configured. After starting the tunnel, verify the actual URL matches:

1. Check the tunnel output for the actual URL (e.g., `https://abc123-3978.usw2.devtunnels.ms`)
2. If different from what's in Azure, update the bot endpoint:
   ```bash
   az bot update \
     --resource-group $RESOURCE_GROUP \
     --name $BOT_NAME \
     --endpoint "https://<actual-tunnel-url>/api/messages"
   ```
3. Update `appPackage/manifest.json` with the correct `BOT_DOMAIN`
4. Recreate the app package: `cd appPackage && zip -r ../my-agent.zip manifest.json color.png outline.png`

### Tell the User How to Test

Once everything is running, provide the user with these instructions:

---

**Your bot is running and ready to test!**

**To use in Microsoft Teams:**

1. Open Microsoft Teams (desktop or web at https://teams.microsoft.com)
2. Click **Apps** in the left sidebar
3. Click **Manage your apps** -> **Upload an app** -> **Upload a custom app**
4. Select the `my-ai-agent.zip` file from your project folder
5. Click **Add** to install the bot
6. Find your bot in Apps and start chatting!

**Useful links:**
- Devtools: http://localhost:3979/devtools (for debugging)
- Tunnel inspector: Check tunnel output for inspect URL

---

## Resources

- [Teams SDK Documentation](https://microsoft.github.io/teams-sdk/)
- [Teams SDK TypeScript Reference](https://microsoft.github.io/teams-sdk/llms_docs/llms_typescript.txt)
- [OpenAI API Documentation](https://platform.openai.com/docs)
