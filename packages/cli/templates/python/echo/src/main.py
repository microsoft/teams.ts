import asyncio
import re

from microsoft.teams.api import MessageActivity, TypingActivityInput
from microsoft.teams.app import ActivityContext, App, AppOptions
from microsoft.teams.devtools import DevToolsPlugin

app = App(AppOptions(plugins=[DevToolsPlugin()]))

@app.on_message_pattern(re.compile(r"hello|hi|greetings"))
async def handle_greeting(ctx: ActivityContext[MessageActivity]) -> None:
    """Handle greeting messages."""
    await ctx.send("Hello! How can I assist you today?")

@app.on_message
async def handle_message(ctx: ActivityContext[MessageActivity]):
  """Handle message activities using the new generated handler system."""
  await ctx.reply(TypingActivityInput())

  if "reply" in ctx.activity.text.lower():
    await ctx.reply("Hello! How can I assist you today?")
  else:
    await ctx.send(f"You said '{ctx.activity.text}'")

if __name__ == "__main__":
    asyncio.run(app.start())
