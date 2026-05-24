# ai-mcp — Azure OpenAI + MCP sample

A Teams bot powered by **Azure OpenAI** (via the `openai` SDK's `AzureOpenAI` client) and the **Model Context Protocol** SDK. Demonstrates streaming responses, per-conversation memory, a local clarification-card tool, remote MCP server tools, inline citations, follow-up suggestions, and custom feedback.

This is the TypeScript counterpart to the .NET [`ExtAIBot`](https://github.com/microsoft/teams.net/pull/486) sample. The structural shape matches: a single bot process owns the AI plumbing, runs the tool-call loop in-process, and connects to MCP servers directly. The auto-loop comes from `openai.chat.completions.runTools()` — the OpenAI SDK's helper that auto-executes each tool's `function` callback and feeds the result back to the model until it produces final text.

> **Provider scope.** This sample is bound to the OpenAI chat-completions wire protocol — Azure OpenAI works; vanilla OpenAI works; non-OpenAI providers do not. (See the .NET sample for an `IChatClient` abstraction that's provider-agnostic — TS has no equivalent today.)

## Features

- **Streaming** — `runner.on('content', delta => stream.emit(delta))` forwards text token-by-token
- **Conversation memory** — each conversation keeps its own `Map<conv, ChatCompletionMessageParam[]>` in process
- **Local tool** — `request_clarification`: a `RunnableToolFunction` whose `function` callback pushes an Adaptive Card into a per-turn bucket and returns a placeholder string. The agent discards its wrap-up text and sends only the card.
- **MCP client** — connects to the [Microsoft Learn docs MCP server](https://learn.microsoft.com/api/mcp) at startup. Each MCP tool is wrapped as a `RunnableToolFunction` whose `function` callback invokes the server and feeds the raw result into the citation collector before returning it to the model.
- **Inline citations** — `CitationCollector` parses MCP tool results for `{ contentUrl, title, content }` records; `[N]` markers in the final reply become clickable Teams citation entities.
- **Follow-up suggestions** — a separate non-streaming `chat.completions.create({ response_format: { type: 'json_schema', ... }})` call produces two short prompts shown as suggested-action chips.
- **Custom feedback** — every text reply enables `addFeedback('custom')`; clicking thumbs up/down opens a bot-rendered task module, and submissions hit `message.submit.feedback`.

## Prerequisites

- Node.js 20+
- An **Azure OpenAI resource** with a deployed model (e.g. `gpt-4o`) and an API key. No Foundry project required.
- A Teams bot registration (App ID + secret).

## Teams CLI

Use the official Teams CLI (`@microsoft/teams.cli`) to create and manage the Teams app for this sample:

```bash
npm install -g @microsoft/teams.cli
teams --version
teams login
```

Expose this sample's local `/api/messages` endpoint with a tunnel, then create the Teams app:

```bash
teams app create --name "ai-mcp" --endpoint "https://<your-tunnel>/api/messages" --env .env --json
```

The CLI writes `CLIENT_ID`, `CLIENT_SECRET`, and `TENANT_ID` to your `.env` file and prints an install link for Teams.

## Setup

Add the Azure OpenAI settings to the `.env` created by the CLI:

```env
AZURE_OPENAI_ENDPOINT=https://<your-resource>.openai.azure.com
AZURE_OPENAI_API_KEY=<your-api-key>
AZURE_OPENAI_MODEL_DEPLOYMENT_NAME=<deployment-name>
AZURE_OPENAI_API_VERSION=2024-10-21

# Optional — defaults to the public MS Learn MCP endpoint.
MCP_SERVER_URL=https://learn.microsoft.com/api/mcp
```

`AZURE_OPENAI_MODEL_DEPLOYMENT_NAME` is the **deployment name** on your Azure OpenAI resource, not the base model name.

## Running

```bash
npm install
npm run dev --workspace=@examples/ai-mcp
```

The bot connects to the MS Learn MCP server at startup and lists its tools before accepting messages. If the MCP server is unreachable, startup fails — by design, since the sample is meant to demonstrate the MCP path.

## Example interactions

- `Tell me about streaming` — ambiguous: the agent calls `request_clarification`; the bot replies with a clarification card. Pick an option → that choice arrives as the next user turn and the agent answers based on it.
- `How do I stream in teams.ts?` — agent calls an MS Learn search tool, replies with a docs-grounded answer and inline citations, plus two follow-up chips.
- `How do I list users with Microsoft Graph?` — same MCP search path, lands on Graph docs.

## How the pieces fit

```
src/index.ts             — AzureOpenAI client + MCP init + Agent + handler registration
src/agent.ts             — per-conv chat history, runTools auto-loop, follow-ups
src/local-tools.ts       — request_clarification RunnableToolFunction + card builder
src/mcp-tools.ts         — MCP client lifecycle, tool listing, wraps each tool
                           as a RunnableToolFunction
src/citation-collector.ts — parses MCP results, attaches Teams citations to the reply
src/handlers.ts          — message, card.action.clarification, message.fetch-task,
                           message.submit.feedback
```

### Tool loop

`openai.chat.completions.runTools({ stream: true, tools })` does the heavy lifting:

1. Sends the request with our tool definitions to Azure OpenAI.
2. If the model emits a `tool_calls` choice, the runner invokes the matching tool's `function` callback (passing parsed args).
3. The tool's return value is appended as a `role: 'tool'` message and the model is re-prompted.
4. Steps 2-3 repeat until the model produces a `content` message instead of a tool call.
5. Throughout, `content` events fire for each text delta — we forward them straight to the Teams stream.

Each tool function is responsible for its own side effects:

- `request_clarification` pushes the card into `pendingCards[]`.
- Each MCP tool invokes the server, feeds the raw result into `CitationCollector.tryExtract`, and returns the text to the model.

After `runner.done()`, the agent inspects `pendingCards` and the citation collector to assemble the final Teams activity.

### Clarification flow

1. User: ambiguous question.
2. Model calls `request_clarification`. The callback builds the card, pushes it onto `pendingCards`, returns `"Clarification card attached."`.
3. The model is re-prompted with that tool result and produces a brief wrap-up (e.g. "I've asked for clarification — please pick an option"). We discard this — `pendingCard` is set, so `replyText` is forced to `''`.
4. Bot sends an attachment-only message containing only the card.
5. User picks an option, submits → `card.action.clarification` invoke → handler calls `agent.run(conv, choice, stream)` exactly as if the choice were a new user message.
6. Model now has full context (its own previous tool call + the user's choice) and answers based on it.
