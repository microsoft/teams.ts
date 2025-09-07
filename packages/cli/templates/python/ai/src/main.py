# python
import os
import asyncio

from microsoft.teams.apps import App, AppOptions
from microsoft.teams.ai import ChatPrompt
from microsoft.teams.devtools import DevToolsPlugin
from microsoft.teams.openai import OpenAICompletionsAIModel

app_options = AppOptions(
    plugins=[DevToolsPlugin()]
)

app = App(app_options)

@app.on_message
async def handle_message(event):
    model = OpenAICompletionsAIModel(
        model="gpt-4o",
        key=os.environ.get("OPENAI_API_KEY"),
    )
    prompt = ChatPrompt(
        model=model
    )

    # send text to LLM and stream chunks to the client
    await prompt.send(
        event.activity.text, 
        on_chunk=lambda chunk: event.stream.emit(chunk))

async def main():
    port = int(os.environ.get("PORT", "3978"))
    await app.start(port)

if __name__ == "__main__":
    asyncio.run(main())
