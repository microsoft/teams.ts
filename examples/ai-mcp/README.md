# ai-mcp — Microsoft Foundry agent in Teams

A Teams bot powered by the **Microsoft Foundry SDK** (`@azure/ai-projects`). The agent runs in Azure: tool-calling, MCP execution, and conversation memory are handled by Foundry; this sample just wires a Teams UI to it.

This is the TypeScript counterpart to:
- .NET [`ExtAIBot`](https://github.com/microsoft/teams.net/pull/486) — hand-rolls the AI plumbing on `Microsoft.Extensions.AI`
- Python [`ai-agentframework`](https://github.com/microsoft/teams.py/tree/main/examples/ai-agentframework) — uses the `agent-framework` library

This sample uses [`@azure/ai-projects`](https://www.npmjs.com/package/@azure/ai-projects) — same shape as the Python `azure-ai-projects` package, slightly thinner than `agent-framework`.

> Foundry itself is in product preview at the time of writing; the npm package (`@azure/ai-projects@2.1.x`) is a stable release.

## Features

- **Streaming** — `responses.stream()` event loop forwards text deltas into the Teams stream
- **Conversation memory** — one Foundry `conversation` per Teams conversation, stored Azure-side (`Map<teamsConvId, foundryConvId>` in-process)
- **Declarative MCP** — one tool entry on the agent definition: `{ type: 'mcp', server_url: 'https://learn.microsoft.com/api/mcp', require_approval: 'never' }`. Foundry executes the calls server-side and folds results into the response — no client-side `McpClient` plumbing.
- **Local function tool** — `request_clarification` is a `type: 'function'` tool on the agent. When the agent calls it, the bot responds with an Adaptive Card listing 2–4 options; the user's choice is submitted back as that function's return value, resuming the agent's run.
- **Inline citations** — `mcp_call` items on the completed response carry the raw search-result JSON. `CitationCollector` extracts URL/title/snippet metadata; any `[N]` markers in the streamed reply become clickable Teams citations.
- **Follow-up suggestions** — a separate `responses.create({ text: { format: { type: 'json_schema' }}})` call with `previous_response_id` produces two short prompts shown as suggested-action chips.
- **Custom feedback** — every text reply enables `addFeedback('custom')`; clicking thumbs up/down opens a bot-rendered task module, and submissions hit `message.submit.feedback`.

## Prerequisites

- Node.js 20+
- A **Microsoft Foundry project** (an Azure AI Foundry workspace). [Create one](https://learn.microsoft.com/azure/ai-foundry/how-to/create-projects).
- A model deployment in that project (e.g. `gpt-4o`).
- Your developer/service principal granted an appropriate Foundry role (`Azure AI User` or higher) — see [RBAC in Microsoft Foundry](https://learn.microsoft.com/azure/ai-foundry/concepts/rbac-foundry).
- A Teams bot registration (App ID + secret) — same as any teams.ts sample.
- `az login` (or another `DefaultAzureCredential` source) for local development.

## Setup

`.env` in this directory:

```env
FOUNDRY_PROJECT_ENDPOINT=https://<your-foundry-account>.services.ai.azure.com/api/projects/<your-project-name>
FOUNDRY_MODEL_NAME=<deployment-name>

# Standard Teams bot vars (App ID + secret) — see the repo-level setup docs.
```

`FOUNDRY_MODEL_NAME` is the **deployment name** in your Foundry project, not the base model name. Find it under *Models + endpoints → Name* in the Foundry portal.

Auth uses `DefaultAzureCredential`, which tries `az login`, env vars, managed identity, etc. in order. For local dev, `az login` is the easy path.

## Running

```bash
npm install
npm run dev --workspace=@examples/ai-mcp
```

On startup the sample:
1. Connects to your Foundry project.
2. Creates a versioned agent named `teams-ai-mcp-bot` with the clarification function tool + MS Learn MCP tool.
3. Starts the Teams bot.

On SIGINT/SIGTERM, the agent version is deleted so the project doesn't accumulate revisions.

## Example interactions

- `Tell me about streaming` — ambiguous: the agent calls `request_clarification`; the bot replies with a clarification card. Pick an option → the conversation resumes with the choice as the function's return value, and the agent answers based on it.
- `How do I stream in teams.ts?` — agent calls the MS Learn MCP, replies with a grounded answer and inline citations, plus two follow-up chips.
- `How do I list users with Microsoft Graph?` — same MCP path, lands on Graph docs.

## How the pieces fit

```
src/index.ts             — AIProjectClient + DefaultAzureCredential + Agent.create
src/agent.ts             — agent definition, conversation map, responses.stream loop,
                           function-call short-circuit, follow-ups
src/local-tools.ts       — request_clarification tool def + card builder
                           (encodes the pending call_id into the card's SubmitData)
src/citation-collector.ts — parses mcp_call output JSON, attaches Teams citations
src/handlers.ts          — message, card.action.clarification, message.fetch-task,
                           message.submit.feedback
```

### Clarification flow

1. User: ambiguous question.
2. Agent emits a `function_call` to `request_clarification`. The streamed text (if any) is discarded.
3. Bot replies with an attachment-only Adaptive Card. The card's SubmitData carries both the chosen option AND the `call_id` of the pending function call.
4. User picks an option, submits → `card.action.clarification` invoke.
5. Handler calls `agent.submitClarification(conv, callId, choice, stream)`. This kicks off a new agent turn with `input: [{ type: 'function_call_output', call_id, output: choice }]`. The model resumes with the choice as the function's result and produces a grounded answer.

### MCP citations

When `require_approval: 'never'`, Foundry executes MCP calls server-side and emits `mcp_call` items into the response output. Each `mcp_call.output` is the raw tool result text — for MS Learn, a JSON payload like `{ results: [{ contentUrl, title, content, ... }] }`. `CitationCollector.tryExtract` parses these and stores URL/title/snippet per unique URL; after the stream finishes, `[N]` markers in the reply text are matched to stored entries and written as Teams citation entities.

### Why follow-ups bypass the agent

`text.format` (structured output) is configured **on the agent definition**, not per-request. Spinning up a second agent just for follow-ups would be overkill, so the follow-ups call uses a plain `responses.create({ model, previous_response_id, text: { format: ... }})` with no `agent_reference` — pulling conversation context via `previous_response_id` and bypassing the agent's tool config.

## Trade-offs vs. the other-language samples

| | .NET (`Microsoft.Extensions.AI`) | Python (`agent-framework`) | This sample (`@azure/ai-projects`) |
|---|---|---|---|
| MCP wiring | Manual McpClient + per-tool DelegatingAIFunction | `MCPStreamableHTTPTool(url=...)` | `{ type: 'mcp', server_url }` on the agent |
| Conversation memory | In-process `Dictionary<conv, List<ChatMessage>>` | `agent.create_session()` | Foundry-managed `conversations` |
| Tool loop | `UseFunctionInvocation()` middleware in-process | Built into `agent.run()` | Server-side in Foundry |
| Requires | Azure OpenAI resource | Azure OpenAI resource | **Foundry project** (heavier setup) |
| Auth | API key | API key or AAD | **AAD only** (DefaultAzureCredential) |
