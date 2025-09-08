"""
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the MIT License.
"""

import asyncio
import logging
import os

from azure.core.exceptions import ClientAuthenticationError
from microsoft.teams.api import MessageActivity
from microsoft.teams.apps import ActivityContext, App, AppOptions, ErrorEvent, SignInEvent
from microsoft.teams.graph import get_graph_client
from msgraph.generated.users.item.messages.messages_request_builder import (  # type: ignore
    MessagesRequestBuilder,
)

logger = logging.getLogger(__name__)

# Create app with OAuth connection
app_options = AppOptions(default_connection_name=os.getenv("CONNECTION_NAME", "graph"))
app = App(app_options)


async def get_authenticated_graph_client(ctx: ActivityContext[MessageActivity]):
    """
    Helper function to handle authentication and create Graph client using Token pattern.

    Returns:
        Graph client if successful, None if authentication failed.
    """
    # Check if user is signed in
    if not ctx.is_signed_in:
        await ctx.send("🔐 Please sign in first to access Microsoft Graph.")
        await ctx.sign_in()
        return None

    try:
        # Create Graph client using the user token
        return get_graph_client(ctx.user_token)

    except Exception as e:
        ctx.logger.error(f"Failed to create Graph client: {e}")
        await ctx.send("🔐 Failed to create authenticated client. Please try signing in again.")
        await ctx.sign_in()
        return None


@app.on_message_pattern("signin")
async def handle_signin_command(ctx: ActivityContext[MessageActivity]):
    """Handle sign-in command."""
    if ctx.is_signed_in:
        await ctx.send("✅ You are already signed in!")
    else:
        await ctx.send("🔐 Please sign in to access Microsoft Graph...")
        await ctx.sign_in()


@app.on_message_pattern("signout")
async def handle_signout_command(ctx: ActivityContext[MessageActivity]):
    """Handle sign-out command."""
    if not ctx.is_signed_in:
        await ctx.send("ℹ️ You are not currently signed in.")
    else:
        await ctx.sign_out()
        await ctx.send("👋 You have been signed out successfully!")


@app.on_message_pattern("profile")
async def handle_profile_command(ctx: ActivityContext[MessageActivity]):
    """Handle profile command using Graph API with TokenProtocol pattern."""
    try:
        graph = await get_authenticated_graph_client(ctx)
        if not graph:
            return

        # Fetch user profile
        me = await graph.me.get()

        if me:
            profile_info = (
                f"👤 **Your Profile**\n\n"
                f"**Name:** {me.display_name or 'N/A'}\n\n"
                f"**Email:** {me.user_principal_name or 'N/A'}\n\n"
                f"**Job Title:** {me.job_title or 'N/A'}\n\n"
                f"**Department:** {me.department or 'N/A'}\n\n"
                f"**Office:** {me.office_location or 'N/A'}"
            )
            await ctx.send(profile_info)
        else:
            await ctx.send("❌ Could not retrieve your profile information.")

    except ClientAuthenticationError as e:
        ctx.logger.error(f"Authentication error: {e}")
        await ctx.send("🔐 Authentication failed. Please try signing in again.")
        await ctx.sign_in()

    except Exception as e:
        ctx.logger.error(f"Error getting profile: {e}")
        await ctx.send(f"❌ Failed to get your profile: {str(e)}")


@app.on_message_pattern("emails")
async def handle_emails_command(ctx: ActivityContext[MessageActivity]):
    """Handle emails command using Graph API with direct token usage."""
    try:
        graph = await get_authenticated_graph_client(ctx)
        if not graph:
            return

        # Fetch recent messages (top 5) using proper RequestConfiguration pattern
        query_params = MessagesRequestBuilder.MessagesRequestBuilderGetQueryParameters(
            select=["subject", "from", "receivedDateTime"], top=5
        )
        request_config = MessagesRequestBuilder.MessagesRequestBuilderGetRequestConfiguration(
            query_parameters=query_params
        )

        messages = await graph.me.messages.get(request_configuration=request_config)

        if messages and messages.value:
            email_list = "📧 **Your Recent Emails**\n\n"

            for i, message in enumerate(messages.value[:5], 1):
                subject = message.subject or "No Subject"
                sender = (
                    message.from_.email_address.name if message.from_ and message.from_.email_address else "Unknown"
                )
                received = (
                    message.received_date_time.strftime("%Y-%m-%d %H:%M") if message.received_date_time else "Unknown"
                )

                email_list += f"**{i}.** {subject}\n"
                email_list += f"   **From:** {sender}\n"
                email_list += f"   **Received:** {received}\n\n"

            await ctx.send(email_list)
        else:
            await ctx.send("📪 No recent emails found.")

    except ClientAuthenticationError as e:
        ctx.logger.error(f"Authentication error: {e}")
        await ctx.send("🔐 Authentication failed. You may need additional permissions to read emails.")

    except Exception as e:
        ctx.logger.error(f"Error getting emails: {e}")
        await ctx.send(f"❌ Failed to get your emails: {str(e)}")


@app.on_message_pattern("help")
async def handle_help_command(ctx: ActivityContext[MessageActivity]):
    """Handle help command."""
    help_text = (
        "🤖 **Teams Graph Demo Bot - TokenProtocol Edition**\n\n"
        "This bot demonstrates Microsoft Graph integration using the TokenProtocol "
        "pattern with exact token expiration handling.\n\n"
        "**Available Commands:**\n\n"
        "• **signin** - Sign in to your Microsoft account\n\n"
        "• **signout** - Sign out of your account\n\n"
        "• **profile** - View your Microsoft profile information\n\n"
        "• **emails** - List your 5 most recent emails\n\n"
        "• **help** - Show this help message\n\n"
        "**Getting Started:**\n\n"
        "1. Type `signin` to authenticate\n\n"
        "2. Once signed in, try `profile` or `emails`\n\n"
        "3. Type `signout` when you're done\n\n"
        "**Technical Implementation:**\n\n"
        "• Uses TokenProtocol with callable-based approach for exact expiration times\n\n"
        "• Eliminates token expiration guesswork and provides better error handling\n\n"
        "• Direct integration with Microsoft Graph using structured token metadata\n\n"
        "**Note:** This bot requires appropriate permissions to access your Microsoft Graph data."
    )
    await ctx.send(help_text)


@app.on_message
async def handle_default_message(ctx: ActivityContext[MessageActivity]):
    """Handle default message when no pattern matches."""
    # Default response with help
    await ctx.send(
        "👋 **Hello! I'm a Teams Graph demo bot.**\n\n"
        "**Available commands:**\n\n"
        "• **signin** - Sign in to your Microsoft account\n\n"
        "• **signout** - Sign out\n\n"
        "• **profile** - Show your profile information\n\n"
        "• **emails** - List your recent emails\n\n"
        "• **help** - Show detailed help with technical info"
    )


@app.event("sign_in")
async def handle_sign_in_event(event: SignInEvent):
    """Handle successful sign-in events."""
    await event.activity_ctx.send(
        "✅ **Successfully signed in!**\n\n"
        "You can now use these commands:\n\n"
        "• **profile** - View your profile\n\n"
        "• **emails** - View your recent emails\n\n"
        "• **signout** - Sign out when done"
    )


@app.event("error")
async def handle_error_event(event: ErrorEvent):
    """Handle error events."""
    logger.error(f"Error occurred: {event.error}")
    if event.context:
        logger.error(f"Context: {event.context}")


if __name__ == "__main__":
    logger.info("Starting Teams Graph Demo Bot...")
    port = int(os.getenv("PORT", "3979"))  # Default to 3979 if not set
    asyncio.run(app.start(port))
