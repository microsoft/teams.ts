# langchain-emoji-agent

An AI agent that echoes messages back as emojis, built with [LangChain.js](https://js.langchain.com/) and [Microsoft Foundry](https://learn.microsoft.com/azure/ai-studio/) on an Express server.

## How it works

POST a message to `/api/chat` and the agent replies with emojis that capture the meaning of your text — no words, just emojis.

```
POST /api/chat  { "message": "I love pizza" }
→               { "message": "I love pizza", "response": "❤️🍕😍" }
```

## CLI

Test the agent interactively in your terminal without running the server:

```bash
npm run cli
```

```
Emoji Agent CLI — type a message and get an emoji response.
Type /exit to quit.

You: I love pizza
Bot: 🍕❤️😍🤤

You: I am really stressed about this deadline
Bot: 😰⏰📅💼😩🔥

You: /exit
Goodbye!
```

## Setup

1. Copy `.env.example` to `.env` and fill in your Foundry credentials.

   **Option 1 — Foundry project endpoint (recommended):**
   ```
   AZURE_AI_PROJECT_ENDPOINT=https://<resource>.services.ai.azure.com/api/projects/<project>
   AZURE_OPENAI_API_KEY=<your-api-key>
   AZURE_OPENAI_DEPLOYMENT_NAME=gpt-4.1
   ```

   **Option 2 — Direct OpenAI-compatible endpoint:**
   ```
   OPENAI_BASE_URL=https://<resource>.services.ai.azure.com/openai/v1
   OPENAI_API_KEY=<your-api-key>
   AZURE_OPENAI_DEPLOYMENT_NAME=gpt-4.1
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the dev server:
   ```bash
   npm run dev
   ```

## Endpoints

| Method | Path        | Description                        |
|--------|-------------|------------------------------------|
| GET    | `/`         | Service info                       |
| POST   | `/api/chat` | Translate a message into emojis    |

### Example request

```bash
curl -X POST http://localhost:3978/api/chat \
  -H 'Content-Type: application/json' \
  -d '{"message": "I had a great day at the beach"}'
```

```json
{
  "message": "I had a great day at the beach",
  "response": "😊🌊🏖️☀️🎉"
}
```
