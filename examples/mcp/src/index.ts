import { AuthInfo } from '@modelcontextprotocol/sdk/server/auth/types.js';

import { z } from 'zod';

import { App } from '@microsoft/teams.apps';
import { ConsoleLogger } from '@microsoft/teams.common/logging';
import { DevtoolsPlugin } from '@microsoft/teams.dev';
import { McpPlugin } from '@microsoft/teams.mcp';

const mcpServerPlugin = new McpPlugin({
  // Describe the MCP server with a helpful name and description
  // for MCP clients to discover and use it.
  name: 'test-mcp',
  description: 'Allows you to test the mcp server',
  // Optionally, you can provide a URL to the mcp dev-tools
  // during development
  inspector: 'http://localhost:5173?proxyPort=9000',
}).tool(
  // Describe the tools with helpful names and descriptions
  'echo',
  'echos back whatever you said',
  {
    input: z.string().describe('the text to echo back'),
  },
  {
    readOnlyHint: true,
    idempotentHint: true
  },
  async ({ input }) => {
    return {
      content: [
        {
          type: 'text',
          text: `you said "${input}"`,
        },
      ],
    };
  }
);

const app = new App({
  logger: new ConsoleLogger('@tests/mcp-server', { level: 'debug' }),
  plugins: [
    new DevtoolsPlugin(),
    // Add this plugin
    mcpServerPlugin,
  ],
});

const isAuthValid = (_authInfo: AuthInfo | undefined): boolean => {
  // Mocking yes.
  return true;
};

// Keep a store of the user to the conversation id
// In a production app, you probably would want to use a
// persistent store like a database
const userToConversationId = new Map<string, string>();

// Add a an MCP server tool
mcpServerPlugin.tool(
  'alertUser',
  'alerts the user about something important',
  {
    input: z.string().describe('the text to echo back'),
    userAadObjectId: z.string().describe('the user to alert'),
  },
  {
    readOnlyHint: true,
    idempotentHint: true
  },
  async ({ input, userAadObjectId }, { authInfo }) => {
    if (!isAuthValid(authInfo)) {
      throw new Error('Not allowed to call this tool');
    }

    const conversationId = userToConversationId.get(userAadObjectId);
    if (!conversationId) {
      console.log('Current conversation map', userToConversationId);
      return {
        content: [
          {
            type: 'text',
            text: `user ${userAadObjectId} is not in a conversation`,
          },
        ],
      };
    }

    // Leverage the app's proactive messaging capabilities to send a mesage to
    // correct conversation id.
    await app.send(conversationId, `Notification: ${input}`);
    return {
      content: [
        {
          type: 'text',
          text: 'User was notified',
        },
      ],
    };
  }
);

app.on('message', async ({ send, activity }) => {
  await send({ type: 'typing' });
  await send(`you said "${activity.text}"`);
  if (activity.from.aadObjectId && !userToConversationId.has(activity.from.aadObjectId)) {
    userToConversationId.set(activity.from.aadObjectId, activity.conversation.id);
    app.log.info(
      `Just added user ${activity.from.aadObjectId} to conversation ${activity.conversation.id}`
    );
  }
});

app.start().catch(console.error);
