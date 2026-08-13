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

- Node.js 20+
- A Teams bot registration
- A Teams app manifest with `supportsFiles` set to `true` on the bot entry (see [Enable file support in the manifest](#enable-file-support-in-the-manifest))
- An Azure OpenAI deployment (use a vision-capable model to analyze images)

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

Without it, Teams never delivers attachments to the bot. `ctx.files.list()` returns an empty list and this sample replies asking for a file, even though the user attached one.

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

## What happens to an attached file

1. `ctx.files.list()` returns the files on the incoming activity.
2. Each file is downloaded once, and that in-memory copy is reused instead of refetching through the short-lived Teams download URL.
3. `classifyFile` sorts each download into `text`, `image`, or `unsupported`.
4. Unsupported files get the basic Adaptive Card. No model call is made for them.
5. Supported files become OpenAI content parts and are sent in a single request, and the reply is streamed to Teams.

Image bytes are sent inline as a data URI rather than as a link, so the pre-authorized `tempauth` download URL is never handed to the model.

## Limits

The sample accepts up to five files per message. Text input is capped at 100 KB per file and 250 KB per message, and images at 1 MB each. Supported image formats are PNG, JPEG, GIF, and WebP. Anything skipped or truncated produces a message explaining why.

Because `download()` buffers the whole file first, these caps bound what reaches the model, not network transfer or process memory.

## Scope

The AI path is stateless: each message is analyzed on its own, with no conversation memory. That keeps a follow-up question from silently reusing files the user did not attach to it, and keeps images from being resent on every later turn.

Statelessness here is a **`SAMPLE GUARDRAIL`**, not an SDK or Azure OpenAI constraint. Your app can keep conversation state and reuse previously attached files; this sample opts out so that every analysis is traceable to the files on the message that triggered it.

There are no tools, citations, feedback, or follow-up suggestions here. See the [`ai-mcp`](https://github.com/microsoft/teams.ts/tree/main/examples/ai-mcp) sample for those.
