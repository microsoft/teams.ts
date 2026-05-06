import { randomUUID } from 'crypto';
import http from 'http';

import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import express from 'express';


import { app, expressApp } from './app';
import { mcpServer } from './mcpTools';

const MCP_PATH = '/mcp';
const PORT = parseInt(process.env.PORT || '3978', 10);

async function main() {
  // Initialize first so the teams.ts plugins register /api/messages on expressApp.
  await app.initialize();

  const transport = new StreamableHTTPServerTransport({
    sessionIdGenerator: () => randomUUID(),
  });
  await mcpServer.connect(transport);

  const handle: express.RequestHandler = async (req, res) => {
    await transport.handleRequest(req, res, req.body);
  };
  expressApp.post(MCP_PATH, express.json(), handle);
  expressApp.get(MCP_PATH, handle);
  expressApp.delete(MCP_PATH, handle);

  // We manage the http server ourselves
  const server = http.createServer(expressApp);
  await new Promise<void>((resolve, reject) => {
    server.once('error', reject);
    server.listen(PORT, () => resolve());
  });

  app.log.info(`listening on http://localhost:${PORT} (MCP at ${MCP_PATH})`);
}

main().catch(console.error);
