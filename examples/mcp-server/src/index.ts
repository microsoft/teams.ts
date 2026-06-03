import { randomUUID } from 'crypto';
import http from 'http';

import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import { isInitializeRequest } from '@modelcontextprotocol/sdk/types.js';
import express from 'express';


import { app, expressApp } from './app';
import { createMcpServer } from './mcpTools';

const MCP_PATH = '/mcp';
const PORT = parseInt(process.env.PORT || '3978', 10);

async function main() {
  // Initialize first so the teams.ts plugins register /api/messages on expressApp.
  await app.initialize();

  // One transport + McpServer per client session, keyed by Mcp-Session-Id.
  // The SDK binds a server to a single transport, so we can't share one across
  // clients — each session gets its own pair, created on the initialize request.
  const transports = new Map<string, StreamableHTTPServerTransport>();

  // POST carries JSON-RPC. A request with a known session reuses its transport;
  // an initialize request with no session spins up a new one.
  const handlePost: express.RequestHandler = async (req, res) => {
    const sessionId = req.headers['mcp-session-id'] as string | undefined;
    let transport = sessionId ? transports.get(sessionId) : undefined;

    if (!transport) {
      if (sessionId || !isInitializeRequest(req.body)) {
        // Unknown/missing session on a non-initialize request — reject per spec.
        res.status(400).json({
          jsonrpc: '2.0',
          error: { code: -32000, message: 'Bad Request: no valid session for this request.' },
          id: null,
        });
        return;
      }

      // New client: spin up a fresh transport + server for this session.
      const newTransport = new StreamableHTTPServerTransport({
        sessionIdGenerator: () => randomUUID(),
        onsessioninitialized: (id) => {
          transports.set(id, newTransport);
        },
      });
      // Drop the session when the client disconnects so the map doesn't leak.
      newTransport.onclose = () => {
        if (newTransport.sessionId) {
          transports.delete(newTransport.sessionId);
        }
      };
      await createMcpServer().connect(newTransport);
      transport = newTransport;
    }

    await transport.handleRequest(req, res, req.body);
  };

  // GET (SSE notification stream) and DELETE (session teardown) must target an
  // already-established session.
  const handleSession: express.RequestHandler = async (req, res) => {
    const sessionId = req.headers['mcp-session-id'] as string | undefined;
    const transport = sessionId ? transports.get(sessionId) : undefined;
    if (!transport) {
      res.status(400).send('Invalid or missing Mcp-Session-Id header.');
      return;
    }
    await transport.handleRequest(req, res);
  };

  expressApp.post(MCP_PATH, express.json(), handlePost);
  expressApp.get(MCP_PATH, handleSession);
  expressApp.delete(MCP_PATH, handleSession);

  // We manage the http server ourselves
  const server = http.createServer(expressApp);
  await new Promise<void>((resolve, reject) => {
    server.once('error', reject);
    server.listen(PORT, () => resolve());
  });

  app.log.info(`listening on http://localhost:${PORT} (MCP at ${MCP_PATH})`);
}

main().catch(console.error);