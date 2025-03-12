import { SSEServerTransport } from '@modelcontextprotocol/sdk/server/sse.js';

export interface IConnection {
  readonly id: number;
  readonly transport: SSEServerTransport;
  readonly createdAt: Date;
}
