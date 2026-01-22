import { SSEServerTransport } from '@modelcontextprotocol/sdk/server/sse.js';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';

export type ServerTransport = SSEServerTransport | StreamableHTTPServerTransport;

export interface IConnection {
  readonly id: number;
  readonly transport: ServerTransport;
  readonly createdAt: Date;
}
