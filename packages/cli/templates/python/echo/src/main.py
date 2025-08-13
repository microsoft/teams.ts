import asyncio
import re

from microsoft.teams.api import MessageActivity
from microsoft.teams.app import ActivityContext, App, AppOptions

app = App(options=AppOptions(enable_token_validation=True))

@app.on_message_pattern(re.compile(r"hello|hi|greetings"))
async def handle_greeting(ctx: ActivityContext[MessageActivity]) -> None:
    """Handle greeting messages."""
    await ctx.send("Hello! How can I assist you today?")

@app.on_message
async def handle_message(ctx: ActivityContext[MessageActivity]):

    await ctx.send(f"You said '{ctx.activity.text}'")

if __name__ == "__main__":
    asyncio.run(app.start())
