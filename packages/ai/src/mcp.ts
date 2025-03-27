import type { Function } from './function';
import type { Schema } from './schema';

export type McpClientParams = {
  name: string;
  description: string;
  schema: Schema;
};

export interface IMcpClient {
  buildFunctions(
    args: {
      url: string;
      params?: McpClientParams[];
    }[]
  ): Promise<Function[]>;
}
