# AI file analysis

A Teams bot that reads files attached in personal (1:1) chat and sends the ones it understands to Azure OpenAI.

One message handler covers both paths:

- **Basic (no LLM)** replies with an Adaptive Card describing any file the sample cannot analyze, showing the metadata the file API exposes and the bytes that were downloaded.
- **AI** converts supported text files and images into model input and streams the analysis back.

### Reading the code

Comments label which of two things a given block is doing:

- **`FILE RECEIVE`** is the Teams SDK file API. This is the part worth copying into your own app.
- **`SAMPLE GUARDRAIL`** is this sample choosing what to forward to a model: formats, size caps, files per message, and whether anything is remembered between turns. These are product choices, not SDK or Azure OpenAI requirements. Pick your own.

Most of the code volume here is guardrails. Receiving a file is only `ctx.files.list()` followed by `download()`.

## Prerequisites

- Node.js
- A Teams bot registration
- A Teams app manifest with `supportsFiles` set to `true` on the bot entry (see [Enable file support in the manifest](#enable-file-support-in-the-manifest))
- An Azure OpenAI deployment, optional. Use a vision-capable model to analyze images. Without one the example still receives, downloads, and reports every file with an Adaptive Card; only the analysis step is skipped, and the card says so.

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

Without it, Teams does not show the attachment UI in the bot's chat, so `ctx.files.list()` never has anything to return.

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
2. Each file is downloaded once and reused from memory, rather than refetched through the short-lived URL.
3. `classifyFile` sorts each download into `text`, `image`, or `unsupported`.
4. Unsupported files get the basic Adaptive Card. No model call is made for them.
5. Supported files become OpenAI content parts and are sent in a single request, and the reply is streamed to Teams.

Image bytes are sent inline as a data URI rather than as a link, so the pre-authorized `tempauth` download URL is never handed to the model.

## Where the bytes come from

A file arrives as metadata, not as bytes. Which route turns that metadata into bytes depends on the shape of the attachment, not on who is reading it.

- **A bot reads through the pre-authorized download URL.** Teams provides a URL on the attachment and the SDK fetches it directly, with no tokens attached, shown in this example.
- **An agentic user reads through Microsoft Graph.** Agentic Users never receive a pre-authorized URL, so the SDK resolves the file through Graph's `/shares` endpoint using the agent's own credential.

### The download URL expires, and that is final

A pre-authorized URL is short-lived, on the order of an hour, and the exact lifetime varies per URL, so do not depend on a number. Once it lapses `download()` raises `FileUrlExpiredError` and those bytes are unreachable: the file has to be sent again.

So download when the file arrives, as this sample does, instead of storing an `IIncomingFile` to read later. Anything that delays the read can outlive the URL: a job queue, a retry with backoff, or a step that waits on a person.

### Agentic users

Sideloading this sample will not reach an agentic user. An Agentic User receives activities on its blueprint's notification URL rather than at your bot endpoint, and needs a Graph file permission consented on that blueprint by an administrator. If you have one, point its notification URL at this sample. To provision one, see the [Microsoft Agent 365 documentation](https://learn.microsoft.com/microsoft-agent-365/) and [inheritable permissions](https://learn.microsoft.com/entra/agent-id/concept-inheritable-permissions).

The handler code is unchanged: `list()` then `download()`, with the SDK selecting the agent's own credential rather than the app's. A failed Graph read raises `FileCredentialError` when no credential was available, or `FileAccessError` when the service refused. Both name the identity involved and link its permissions documentation.

## Limits

The sample accepts up to five files per message. Text input is capped at 100 KB per file and 250 KB per message, and images at 1 MB each. Supported image formats are PNG, JPEG, GIF, and WebP. Anything skipped or truncated produces a message explaining why.

Because `download()` buffers the whole file first, these caps bound what reaches the model, not network transfer or process memory.

## Scope

The AI path is stateless: each message is analyzed on its own, so a follow-up cannot silently reuse files the user did not attach, and images are not resent on later turns. This is a **`SAMPLE GUARDRAIL`**, not an SDK or Azure OpenAI constraint. Your app can keep conversation state; this example opts out so every analysis traces to the files on the message that triggered it.

There are no tools, citations, feedback, or follow-up suggestions here. See the [`ai-mcp`](https://github.com/microsoft/teams.ts/tree/main/examples/ai-mcp) sample for those.
