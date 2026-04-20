import { randomUUID } from 'crypto';

import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';

import { ExpressAdapter } from '@microsoft/teams.apps';


import { app } from './app';
import { mcpServer } from './mcpTools';

const MCP_PATH = '/mcp';

async function main() {
  // Initialize first so /api/messages is registered before we mount /mcp.
  await app.initialize();

  const adapter = app.server.adapter;
  if (!(adapter instanceof ExpressAdapter)) {
    throw new Error(
      `This example requires ExpressAdapter, got ${adapter.constructor.name}.`
    );
  }

  const transport = new StreamableHTTPServerTransport({
    sessionIdGenerator: () => randomUUID(),
  });
  await mcpServer.connect(transport);

  const handle = async (req: any, res: any) => {
    await transport.handleRequest(req, res, req.body);
  };
  adapter.post(MCP_PATH, handle);
  adapter.get(MCP_PATH, handle);
  adapter.delete(MCP_PATH, handle);

  await app.start();
  app.log.info(`MCP server listening at ${MCP_PATH}`);
}

main().catch(console.error);
