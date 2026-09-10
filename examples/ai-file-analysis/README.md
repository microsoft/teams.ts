# AI file analysis

A Teams bot that reads files attached in personal (1:1) chat and sends the ones it understands to Azure OpenAI.

One message handler covers both paths:

- **Basic (no LLM)** replies with an Adaptive Card describing any file the sample cannot analyze, showing the metadata the file API exposes and the bytes that were downloaded.
- **AI** converts supported text files and images into model input and streams the analysis back.

### Reading the code

Comments label which of two things a given block is doing:

- **`FILE RECEIVE`** is the Teams SDK file API. This is the part worth copying into your own app.
- **`SAMPLE GUARDRAIL`** is this sample deciding what it will forward to a model: which formats it accepts, how much text it sends, how many files per message, and whether anything is remembered between turns. These are arbitrary product choices, not SDK or Azure OpenAI requirements. Your app should pick its own.

The distinction matters because most of the code volume here is guardrails. Receiving a file is only `ctx.files.list()` followed by `download()`.

## Prerequisites

- Node.js
- A Teams bot registration
- A Teams app manifest with `supportsFiles` set to `true` on the bot entry (see [Enable file support in the manifest](#enable-file-support-in-the-manifest))
- An Azure OpenAI deployment (use a vision-capable model to analyze images). This is optional: without it the example still runs, receives files, and reports each one with an Adaptive Card instead of analyzing it. See [Running without a model](#running-without-a-model).

## Enable file support in the manifest

The bot entry in your Teams app manifest must set `supportsFiles` to `true`:

```json
"bots": [
  {
    "botId": "<your-bot-id>",
    "scopes": ["personal"],
    "supportsFiles": true
  }
]
```

Without it, Teams does not enable the attachment UI in the bot's chat, so there is no way to attach a file in the first place and `ctx.files.list()` has nothing to return.

## Setup

Add these settings to the example's `.env` alongside your bot credentials:

```env
AZURE_OPENAI_ENDPOINT=https://<resource>.openai.azure.com/
AZURE_OPENAI_API_KEY=<api-key>
AZURE_OPENAI_MODEL_DEPLOYMENT_NAME=<deployment-name>
AZURE_OPENAI_API_VERSION=2024-10-21
```

Run:

```bash
npm run dev --workspace=@examples/ai-file-analysis
```

## Running without a model

The file APIs this example demonstrates do not need a model, so the Azure OpenAI settings above are optional.

Leave any of them unset and the example starts in metadata-only mode. It still receives, downloads, and reports every attached file with the Adaptive Card, showing the resolved content type, byte count, scope, and source, so the whole file round-trip is demonstrable without a model subscription. Only the analysis step is skipped, and the card says so.

## What happens to an attached file

1. `ctx.files.list()` returns the files on the incoming activity.
2. Each file is downloaded once, and that in-memory copy is reused instead of refetching through the short-lived Teams download URL.
3. `classifyFile` sorts each download into `text`, `image`, or `unsupported`.
4. Unsupported files get the basic Adaptive Card. No model call is made for them.
5. Supported files become OpenAI content parts and are sent in a single request, and the reply is streamed to Teams.

Image bytes are sent inline as a data URI rather than as a link, so the pre-authorized `tempauth` download URL is never handed to the model.

## Where the bytes come from

A file arrives as metadata, not as bytes. Which route turns that metadata into bytes depends on the shape of the attachment, not on who is reading it.

- **A bot reads through the pre-authorized download URL.** Teams provides a URL on the attachment and the SDK fetches it directly, with no tokens attached, shown in this example.
- **An agentic user reads through Microsoft Graph.** Agentic Users never receive a pre-authorized URL, so the SDK resolves the file through Graph's `/shares` endpoint using the agent's own credential.

The route is determined by whether or not the pre-authorized URL exists. If it does, it is used. Otherwise, the Graph path is followed. 

### The download URL expires, and that is final

A pre-authorized URL is short-lived, on the order of an hour, and the exact lifetime is set per URL rather than fixed. Do not depend on a particular number. Once it lapses `download()` raises `FileUrlExpiredError` and those bytes are unreachable: there is no recovery, and the file has to be sent again.

That shapes how you write a handler rather than being a detail to note. Download when the file arrives, as this sample does, instead of storing an `IIncomingFile` to read later. Queued work, retry-with-backoff, and anything that waits on a person are the shapes that run into it.

### Agentic users

The handler code is the same: `list()` then `download()`, with the SDK selecting the agent's own credential rather than the app's. A failed Graph read raises `FileRetrievalError`, which names the identity that was refused and links the permissions documentation for it.

Running it is what differs, and sideloading this sample will not get you there. An agentic user is published through the Teams admin center rather than an app manifest, receives activities on its blueprint's notification URL rather than at your bot endpoint, and needs a Graph file permission consented on that blueprint by an administrator. If you already have one provisioned, point its notification URL at this sample and the code runs unchanged. To provision one, start with the [Microsoft Agent 365 documentation](https://learn.microsoft.com/microsoft-agent-365/), and see [inheritable permissions](https://learn.microsoft.com/entra/agent-id/concept-inheritable-permissions) for how an agent gets the Graph scopes this path needs.

## Limits

The sample accepts up to five files per message. Text input is capped at 100 KB per file and 250 KB per message, and images at 1 MB each. Supported image formats are PNG, JPEG, GIF, and WebP. Anything skipped or truncated produces a message explaining why.

Because `download()` buffers the whole file first, these caps bound what reaches the model, not network transfer or process memory.

## Scope

The AI path is stateless: each message is analyzed on its own, with no conversation memory. That keeps a follow-up question from silently reusing files the user did not attach to it, and keeps images from being resent on every later turn.

Statelessness here is a **`SAMPLE GUARDRAIL`**, not an SDK or Azure OpenAI constraint. Your app can keep conversation state and reuse previously attached files; this sample opts out so that every analysis is traceable to the files on the message that triggered it.

There are no tools, citations, feedback, or follow-up suggestions here. See the [`ai-mcp`](https://github.com/microsoft/teams.ts/tree/main/examples/ai-mcp) sample for those.
