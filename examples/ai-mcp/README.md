# ai-mcp — multi-provider AI + MCP sample

A Teams bot powered by either **Azure OpenAI** or **Anthropic Claude**, plus the **Model Context Protocol** SDK. It demonstrates streaming responses, per-conversation memory, a local clarification-card tool, remote MCP tools, inline citations, follow-up suggestions, and custom feedback.

The Teams layer is provider-neutral: activity handlers call `agent.run(conversationId, text, stream)`. Each provider implementation owns its message history and tool loop.

## Features

- **Provider selection** — set `AI_PROVIDER=azure-openai` or `AI_PROVIDER=anthropic`.
- **Streaming** — forwards model text into the Teams `IStreamer`.
- **Conversation memory** — keeps provider-native history per Teams conversation.
- **Local tool** — shows an Adaptive Card when the request needs clarification.
- **MCP client** — connects to the Microsoft Learn MCP server and exposes its tools to either provider.
- **Inline citations** — turns `[N]` references from grounded answers into Teams citation entities.
- **Follow-up suggestions** — generates two suggested-action prompts after a text response.
- **Custom feedback** — enables Teams feedback controls and handles the feedback dialog.

## Prerequisites

- Node.js 20+
- A Teams bot registration with an App ID and secret
- One model provider:
  - An Azure OpenAI resource, deployment, and API key
  - An Anthropic API key and supported Claude model

## Teams CLI

Install the Teams CLI and create the app registration:

```bash
npm install -g @microsoft/teams.cli
teams login
teams app create --name "ai-mcp" --endpoint "https://<your-tunnel>/api/messages" --env .env --json
```

The CLI writes `CLIENT_ID`, `CLIENT_SECRET`, and `TENANT_ID` to `.env`.

## Configure Azure OpenAI

Azure OpenAI remains the default provider:

```env
AI_PROVIDER=azure-openai
AZURE_OPENAI_ENDPOINT=https://<your-resource>.openai.azure.com
AZURE_OPENAI_API_KEY=<your-api-key>
AZURE_OPENAI_MODEL_DEPLOYMENT_NAME=<deployment-name>
AZURE_OPENAI_API_VERSION=2024-10-21
```

`AZURE_OPENAI_MODEL_DEPLOYMENT_NAME` is the deployment name, not the underlying model name.

## Configure Anthropic

```env
AI_PROVIDER=anthropic
ANTHROPIC_API_KEY=<your-api-key>
ANTHROPIC_MODEL=<supported-claude-model>

# Optional; defaults to 4096.
ANTHROPIC_MAX_TOKENS=4096
```

The Anthropic implementation uses the Messages API directly. It streams text with `messages.stream()`, executes returned `tool_use` blocks, appends matching `tool_result` blocks, and continues until Claude returns a final response.

## Optional MCP configuration

Both providers use the same MCP client and tool dispatcher:

```env
MCP_SERVER_URL=https://learn.microsoft.com/api/mcp
```

The Microsoft Learn endpoint is the default. Startup fails if the configured MCP server cannot be reached.

## Run

```bash
npm install
npm run dev --workspace=@examples/ai-mcp
```

## Example interactions

- `Tell me about streaming` — asks for clarification with an Adaptive Card.
- `How do I stream in teams.ts?` — searches Microsoft Learn and returns a cited answer.
- `How do I list users with Microsoft Graph?` — invokes an MCP search tool and suggests follow-up prompts.

## Project structure

```text
src/index.ts              Provider selection, MCP initialization, Teams app startup
src/agent.ts              Azure OpenAI agent and shared agent contract
src/anthropic-agent.ts    Anthropic streaming and tool-use loop
src/prompts.ts            Shared system and follow-up prompts
src/local-tools.ts        Provider-neutral clarification behavior plus OpenAI adapter
src/mcp-tools.ts          Provider-neutral MCP execution plus OpenAI adapter
src/citation-collector.ts MCP citation parsing and Teams citation attachment
src/handlers.ts           Provider-neutral Teams activity handlers
```

## Anthropic tool loop

For each model round, `AnthropicAgent`:

1. Sends the provider-native conversation history, system prompt, and tools.
2. Streams text deltas into Teams.
3. Appends Claude's complete assistant content to history.
4. Executes every returned `tool_use` block.
5. Appends corresponding `tool_result` blocks as the next user message.
6. Repeats until no tool calls remain.

Tool failures are returned to Claude with `is_error: true`. A maximum-round guard prevents an unbounded tool loop.

## Provider-neutral Teams boundary

`handlers.ts` depends only on `IAgentRunner`:

```typescript
agent.run(activity.conversation.id, userText, stream);
```

Switching providers does not change Teams routing, card actions, citations, feedback, or final activity construction.
