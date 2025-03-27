import type { Function } from './function';
import type { Schema } from './schema';

export type MCPClientParams = {
    name: string;
    description: string;
    schema: Schema;
  };

  export interface IMCPClient {
    buildFunctions(args: { 
      url: string; 
      params?: MCPClientParams[] 
    }[]): Promise<Function[]>;
  }