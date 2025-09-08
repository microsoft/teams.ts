import os
import asyncio

from dotenv import load_dotenv
from microsoft.teams.apps import App, AppOptions
from microsoft.teams.ai import ChatPrompt
from microsoft.teams.devtools import DevToolsPlugin
from microsoft.teams.openai import OpenAICompletionsAIModel

# Load variables from a .env file (if present) so os.environ.get() will pick them up.
# Developers should copy `sample.env` -> `.env` to provide local values.
load_dotenv()

app_options = AppOptions(
    plugins=[DevToolsPlugin()]
)

app = App(app_options)

# Configure OpenAI model and key from environment (default model: gpt-4o)
MODEL_NAME = os.environ.get("OPENAI_MODEL", "gpt-4o")
OPENAI_KEY = os.environ.get("OPENAI_API_KEY")
model = OpenAICompletionsAIModel(
    model=MODEL_NAME,
    key=OPENAI_KEY,
)

@app.on_message
async def handle_message(event):
    prompt = ChatPrompt(model=model)
    await prompt.send(
        event.activity.text,
        on_chunk=lambda chunk: event.stream.emit(chunk))

async def main():
    port = int(os.environ.get("PORT", "3978"))
    await app.start(port)

if __name__ == "__main__":
    asyncio.run(main())
