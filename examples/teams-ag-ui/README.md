# teams-ag-ui

Teams bot ⇄ [AG-UI](https://github.com/ag-ui-protocol/ag-ui) sample using
the in-process `LangChainAgent` client adapter, plus a polyfill of the
**interrupt-aware run lifecycle** so the bot can request explicit user
approval for sensitive tool calls.

## What it does

1. Receives a Teams message
2. Looks up (or creates) an `AbstractAgent` keyed on `conversation.id`
3. Appends the user turn to `agent.messages` and calls `agent.runAgent(...)`
   with the `demoTools` (one normal, one tagged `requiresApproval: true`)
4. Streams text deltas back to Teams via `stream.emit(...)` and surfaces
   tool calls as live status via `stream.update("Using \`X\`…")`
5. If the inner agent proposes a tool flagged for approval, the
   `InterruptMiddleware` rewrites the run's terminal `RUN_FINISHED` event
   with `outcome: { type: "interrupt", interrupts: [...] }` per the new
   AG-UI spec
6. The bot renders an Adaptive Card asking the user to Approve/Deny, then
   on submit calls `agent.runAgent({ resume: [...] })` to continue

## Architecture

```
Teams ──► App.on('message')
            │
            ▼
       sessions.ts        (conversation.id → AbstractAgent)
            │
            ▼
       LangChainAgent     (in-proc AG-UI client, wraps a chat model)
            │  raw AG-UI events
            ▼
       InterruptMiddleware  (intercepts tool calls flagged for approval,
            │                emits new-spec interrupt outcome)
            │  spec-correct AG-UI events
            ▼
       AgentSubscriber ──► Teams streaming activity / Adaptive Card
```

The seam is `AbstractAgent` from `@ag-ui/client`. Swapping
`LangChainAgent` for `MastraAgent`, `LangGraphAgent`, `HttpAgent`, etc.
is a one-line change in `agent.ts`.

## Interrupt-aware lifecycle (vendored)

The interrupt spec ([docs](https://docs.ag-ui.com/concepts/interrupts),
[PR #1569](https://github.com/ag-ui-protocol/ag-ui/pull/1569)) was merged
into AG-UI's `main` on 2026-04-30 but **isn't on npm yet** (latest is
`@ag-ui/core@0.0.53`, which predates the merge). To unblock client work,
this example vendors the protocol additions:

- `src/interrupts/spec-types.ts` — types + helpers
  (`Interrupt`, `ResumeEntry`, `RunFinishedOutcome`, `buildResumeArray`,
  `getRunOutcome`, `isInterruptExpired`). Header documents the diff vs
  `@ag-ui/core@0.0.53`.
- `src/interrupts/pending.ts` — per-thread pending interrupts store (the
  spec puts this on `AbstractAgent.pendingInterrupts`, not yet on npm)
- `src/interrupts/middleware.ts` — `InterruptMiddleware extends Middleware`
  that does the actual interrupt-aware lifecycle on top of *any*
  `AbstractAgent`

Once `@ag-ui/core` cuts a release containing PR #1569, delete `spec-types.ts`,
delete `pending.ts`, and import from the SDK. The middleware stays —
it's still useful for adapters (LangChain, Mastra) that haven't migrated
to emit interrupts natively.

### Caveats of the polyfill

- The published `RunAgentInput` schema doesn't accept top-level `resume`,
  so we pass it via `forwardedProps.resume` here. When the SDK ships, move
  to the top-level field.
- `BaseEvent` zod validation is non-strict, so adding `outcome` to
  `RUN_FINISHED` passes through. If a future SDK version tightens this,
  emit a `CUSTOM` event in parallel as a fallback.

## Setup

Required env (one of):

```
# Azure OpenAI
AZURE_OPENAI_API_KEY=...
AZURE_OPENAI_ENDPOINT=https://<resource>.openai.azure.com/
AZURE_OPENAI_API_VERSION=2024-10-21
AZURE_OPENAI_MODEL_DEPLOYMENT_NAME=gpt-4o-mini

# or vanilla OpenAI
OPENAI_API_KEY=...
OPENAI_MODEL=gpt-4o-mini
```

Optional: `AGENT_SYSTEM_PROMPT`. Plus the usual Teams bot env.

```
npm install
npm run dev
```

Try saying: *"send an email to alice@example.com with subject 'hi' and body 'hello'"*
and you'll get an Approve/Deny card.

## What's deliberately missing (next steps)

- **Persistence.** Sessions and pending interrupts live in in-memory
  `Map`s. Swap for Cosmos / Redis / Bot Framework storage.
- **Adaptive Card for free-text interrupts.** Today only `tool_call`
  reason is rendered (Approve/Deny). For `input_required` we'd render a
  `TextInput`.
- **Approve-with-edits UI.** The spec supports an `editedArgs` payload
  for tool-bound interrupts. Easy add: extend the card with a JSON
  `TextInput` when `responseSchema` includes `editedArgs`.
- **Auth between Teams bot and remote AG-UI server** (when swapping in
  `HttpAgent`).
- **Cancel UX during a long run.**
