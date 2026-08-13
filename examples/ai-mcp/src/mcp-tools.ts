import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';

import type { RunnableToolFunction } from 'openai/lib/RunnableFunction';

import { ILogger } from '@microsoft/teams.common';

import { CitationCollector } from './citation-collector';



/**
 * Owns the MCP client lifetime and surfaces remote tools as
 * RunnableToolFunctions for the OpenAI SDK's auto tool loop.
 *
 * Each tool's `function` callback invokes the MCP server, feeds the raw
 * result into the per-turn CitationCollector, and returns the same text to
 * the model so it can ground its reply.
 */
export class McpToolSet {
  private readonly _client: Client;
  private readonly _tools: McpTool[];
  private readonly _log: ILogger;

  private constructor(client: Client, tools: McpTool[], log: ILogger) {
    this._client = client;
    this._tools = tools;
    this._log = log;
  }

  /**
   * Connects to an MCP server and captures its available tools.
   */
  static async create(serverUrl: string, log: ILogger): Promise<McpToolSet> {
    const client = new Client({ name: 'ai-mcp-sample', version: '0.0.0' });
    const transport = new StreamableHTTPClientTransport(new URL(serverUrl));
    await client.connect(transport);

    const listed = await client.listTools();
    const tools: McpTool[] = listed.tools.map((t) => ({
      name: t.name,
      description: t.description ?? '',
      parameters: (t.inputSchema as Record<string, unknown> | undefined) ?? { type: 'object' },
    }));

    log.info(`Connected to MCP server ${serverUrl}; discovered ${tools.length} tools.`);
    return new McpToolSet(client, tools, log);
  }

  /**
   * Provider-neutral MCP tool definitions discovered from the server.
   */
  get tools(): readonly McpTool[] {
    return this._tools;
  }

  /**
   * Executes a discovered MCP tool and records citation metadata from its result.
   */
  async execute(
    name: string,
    args: Record<string, unknown>,
    citations: CitationCollector
  ): Promise<string> {
    const tool = this._tools.find((candidate) => candidate.name === name);
    if (!tool) {
      throw new Error(`MCP tool ${name} was not discovered.`);
    }

    this._log.info(
      `[mcp] ${tool.name}(${Object.entries(args)
        .map(([key, value]) => `${key}=${JSON.stringify(value)}`)
        .join(', ')})`
    );
    const result = await this._client.callTool({ name: tool.name, arguments: args });
    const text = stringifyResult(result.content);
    citations.tryExtract(text);
    return text;
  }

  /**
   * Returns a fresh array of RunnableToolFunctions for one turn. The
   * citation collector is captured by closure so every MCP tool call on
   * that turn writes into the same collector.
   */
  asRunnableTools(citations: CitationCollector): RunnableToolFunction<Record<string, unknown>>[] {
    return this._tools.map((tool) => ({
      type: 'function',
      function: {
        name: tool.name,
        description: tool.description,
        parameters: tool.parameters,
        function: (args: Record<string, unknown>) => this.execute(tool.name, args, citations),
        parse: (raw: string) => JSON.parse(raw) as Record<string, unknown>,
      },
    }));
  }

  async close(): Promise<void> {
    await this._client.close();
  }
}

export type McpTool = {
  /** Name exposed to the model. */
  name: string;
  /** Description exposed to the model. */
  description: string;
  /** JSON Schema accepted by the MCP tool. */
  parameters: Record<string, unknown>;
};

/**
 * MCP tool results are an array of content parts. For search-style tools the
 * relevant payload is in `text` parts; we concatenate them so both the model
 * and the citation collector see the full JSON.
 */
function stringifyResult(content: unknown): string {
  if (!Array.isArray(content)) return JSON.stringify(content ?? '');
  const parts: string[] = [];
  for (const part of content) {
    if (
      part &&
      typeof part === 'object' &&
      'text' in part &&
      typeof (part as { text: unknown }).text === 'string'
    ) {
      parts.push((part as { text: string }).text);
    } else {
      parts.push(JSON.stringify(part));
    }
  }
  return parts.join('\n');
}
