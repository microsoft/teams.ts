import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { Transport } from '@modelcontextprotocol/sdk/shared/transport.js';

import type { Schema } from '@microsoft/teams.ai';

import { McpClientPlugin } from './mcp-client-plugin';
import {
  CreateTransport,
  McpClientPluginParams,
  McpClientToolDetails,
} from './mcp-client-types';

class MockTransport implements Transport {
  async connect(): Promise<void> { }
  async disconnect(): Promise<void> { }
  async send(): Promise<void> { }
  onMessage(): void { }
  async start(): Promise<void> { }
  async close(): Promise<void> { }
}

describe('McpClientPlugin', () => {
  let mockListTools: jest.SpyInstance;
  let mockCallTool: jest.SpyInstance;
  const mockDate = new Date('2025-05-19T16:05:00Z');

  beforeEach(() => {
    jest.resetAllMocks();
    jest.spyOn(Client.prototype, 'connect').mockResolvedValue();
    jest.spyOn(Client.prototype, 'close').mockResolvedValue();
    mockListTools = jest
      .spyOn(Client.prototype, 'listTools')
      .mockResolvedValue({ tools: [] });
    mockCallTool = jest
      .spyOn(Client.prototype, 'callTool')
      .mockResolvedValue({ content: 'result' });

    jest.useFakeTimers().setSystemTime(mockDate);
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  describe('onUsePlugin', () => {
    it('stores plugin parameters', async () => {
      const plugin = new McpClientPlugin();
      const schema: Schema = {
        type: 'object',
        properties: {},
        required: [],
      };

      const testTools: McpClientToolDetails[] = [
        {
          name: 'test-tool',
          description: 'Test tool description',
          schema,
        },
      ];

      const params: McpClientPluginParams = {
        availableTools: testTools,
      };

      plugin.onUsePlugin({ url: 'http://test.com', params });
      const functions = await plugin.onBuildFunctions([]);

      expect(functions).toHaveLength(1);
      expect(functions[0].name).toBe('test-tool');
      expect(functions[0].description).toBe('Test tool description');
    });
  });

  describe('onBuildFunctions', () => {
    it('fetches tools when not cached', async () => {
      const plugin = new McpClientPlugin();
      const testTools = [
        {
          name: 'remote-tool',
          description: 'Remote tool',
          inputSchema: {
            type: 'object' as const,
            properties: {},
            required: [] as string[],
          },
        },
      ];

      mockListTools.mockResolvedValue({ tools: testTools });

      plugin.onUsePlugin({ url: 'http://test.com' });
      const functions = await plugin.onBuildFunctions([]);

      expect(mockListTools).toHaveBeenCalled();
      expect(functions).toHaveLength(1);
      expect(functions[0].name).toBe('remote-tool');
    });

    it('uses cached tools when available and not expired', async () => {
      const schema: Schema = {
        type: 'object',
        properties: {},
        required: [],
      };

      const testTools: McpClientToolDetails[] = [
        {
          name: 'cached-tool',
          description: 'Cached tool',
          schema,
        },
      ];

      const plugin = new McpClientPlugin({
        cache: {
          'http://test.com': {
            availableTools: testTools,
          },
        },
      });

      plugin.onUsePlugin({ url: 'http://test.com' });
      const functions = await plugin.onBuildFunctions([]);

      if (mockListTools.mock.calls.length > 0) {
        throw new Error(
          'Expected listTools to not be called ' + mockListTools.mock.calls
        );
      }
      expect(mockListTools).not.toHaveBeenCalled();
      expect(functions).toHaveLength(1);
      expect(functions[0].name).toBe('cached-tool');
    });

    it('refetches when cache is expired', async () => {
      const schema: Schema = {
        type: 'object',
        properties: {},
        required: [],
      };

      const oldTools: McpClientToolDetails[] = [
        {
          name: 'old-tool',
          description: 'Old tool',
          schema,
        },
      ];

      const newTools = [
        {
          name: 'new-tool',
          description: 'New tool',
          inputSchema: {
            type: 'object' as const,
            properties: {},
            required: [] as string[],
          },
        },
      ];

      const plugin = new McpClientPlugin({
        refetchTimeoutMs: 1, // Force immediate expiry
        cache: {
          'http://test.com': {
            availableTools: oldTools,
          },
        },
      });

      mockListTools.mockResolvedValue({ tools: newTools });

      plugin.onUsePlugin({ url: 'http://test.com' });

      // Wait for 2 ms for the timeout to happen
      jest.advanceTimersByTime(2);

      const functions = await plugin.onBuildFunctions([]);

      expect(mockListTools).toHaveBeenCalled();
      expect(functions).toHaveLength(1);
      expect(functions[0].name).toBe('new-tool');
    });

    it('refetches when cache is expired for a specific server', async () => {
      const schema: Schema = {
        type: 'object',
        properties: {},
        required: [],
      };

      const oldToolServer1: McpClientToolDetails[] = [
        {
          name: 'old-tool-server1',
          description: 'Old tool',
          schema,
        },
      ];
      const oldToolServer2: McpClientToolDetails[] = [
        {
          name: 'old-tool-server2',
          description: 'Old tool',
          schema,
        },
      ];

      const newTools = [
        {
          name: 'new-tool-server-2',
          description: 'New tool',
          inputSchema: {
            type: 'object' as const,
            properties: {},
            required: [] as string[],
          },
        },
      ];

      const plugin = new McpClientPlugin({
        refetchTimeoutMs: undefined, // Use default refetch timeout
        cache: {
          'http://server1.com': {
            availableTools: oldToolServer1,
          },
          'http://server2.com': {
            availableTools: oldToolServer2,
          },
        },
      });

      mockListTools.mockResolvedValue({ tools: newTools });

      plugin.onUsePlugin({ url: 'http://server1.com' });
      plugin.onUsePlugin({
        url: 'http://server2.com',
        params: {
          refetchTimeoutMs: 1,
        },
      });

      // Wait for 2 ms for the timeout to happen
      jest.advanceTimersByTime(2);

      const functions = await plugin.onBuildFunctions([]);

      expect(mockListTools).toHaveBeenCalledTimes(1);
      expect(functions).toHaveLength(2);
      expect(functions.map((f) => f.name)).toEqual(
        [...oldToolServer1, ...newTools].map((t) => t.name)
      );
    });

    it('fetches tools from multiple servers in parallel', async () => {
      const plugin = new McpClientPlugin();

      const schema: Schema = {
        type: 'object',
        properties: {},
        required: [],
      };

      const tools1 = [
        {
          name: 'tool1',
          description: 'Tool 1',
          inputSchema: schema,
        },
      ];

      const tools2 = [
        {
          name: 'tool2',
          description: 'Tool 2',
          inputSchema: schema,
        },
      ];

      mockListTools
        .mockResolvedValueOnce({ tools: tools1 })
        .mockResolvedValueOnce({ tools: tools2 });

      plugin.onUsePlugin({ url: 'http://server1.com' });
      plugin.onUsePlugin({ url: 'http://server2.com' });

      const functions = await plugin.onBuildFunctions([]);

      expect(Object.keys(functions)).toHaveLength(2);
      expect(functions.map((f) => f.name).sort()).toEqual(['tool1', 'tool2']);
    });

    test.each([true, undefined])(
      'handles server unavailability with skipIfUnavailable=%s',
      async (skipIfUnavailable) => {
        const plugin = new McpClientPlugin();
        mockListTools.mockRejectedValue(new Error('Server error'));

        plugin.onUsePlugin({
          url: 'http://error.com',
          params: {
            skipIfUnavailable,
          },
        });
        const functions = await plugin.onBuildFunctions([]);

        expect(mockListTools).toHaveBeenCalled();
        expect(functions).toHaveLength(0);
      }
    );

    it('handles server unavailability with skipIfUnavailable=false', async () => {
      const plugin = new McpClientPlugin();
      mockListTools.mockRejectedValue(new Error('Server error'));

      plugin.onUsePlugin({
        url: 'http://error.com',
        params: {
          skipIfUnavailable: false,
        },
      });
      await expect(() => plugin.onBuildFunctions([])).rejects.toThrow(
        'Server error'
      );
    });
  });

  describe('function execution', () => {
    it('calls tool with arguments and returns result', async () => {
      const plugin = new McpClientPlugin();
      const schema: Schema = {
        type: 'object',
        properties: {
          arg: { type: 'string' },
        },
        required: ['arg'],
      };

      const testTool: McpClientToolDetails = {
        name: 'test-tool',
        description: 'Test tool',
        schema,
      };

      plugin.onUsePlugin({
        url: 'http://test.com',
        params: { availableTools: [testTool] },
      });

      const functions = await plugin.onBuildFunctions([]);
      const result = await functions[0].handler({ arg: 'value' });

      expect(mockCallTool).toHaveBeenCalledWith({
        name: 'test-tool',
        arguments: { arg: 'value' },
      });
      expect(result).toBe('result');
    });

    it('logs and rethrows errors from tool handler', async () => {
      const error = new Error('Tool failed');
      mockCallTool.mockRejectedValueOnce(error);
      const mockLogger = {
        error: jest.fn(),
        info: jest.fn(),
        debug: jest.fn(),
        warn: jest.fn(),
        trace: jest.fn(),
        log: jest.fn(),
        child: () => mockLogger,
      };
      const schema: Schema = {
        type: 'object',
        properties: {},
        required: [],
      };
      const testTool: McpClientToolDetails = {
        name: 'fail-tool',
        description: 'Always fails',
        schema,
      };
      const plugin = new McpClientPlugin({ logger: mockLogger as any });
      plugin.onUsePlugin({
        url: 'http://fail.com',
        params: { availableTools: [testTool] },
      });
      const functions = await plugin.onBuildFunctions([]);
      await expect(functions[0].handler({})).rejects.toThrow('Tool failed');
      expect(mockLogger.error).toHaveBeenCalledWith(
        expect.stringContaining('Error calling tool fail-tool on http://fail.com:'),
        error
      );
    });
  });

  describe('custom transport', () => {
    it('uses custom transport when provided', async () => {
      const mockTransport = new MockTransport();
      const createTransport = jest.fn(() => mockTransport) as CreateTransport;

      const plugin = new McpClientPlugin({ createTransport });
      plugin.onUsePlugin({ url: 'http://test.com' });

      await plugin.onBuildFunctions([]);

      expect(createTransport).toHaveBeenCalledWith('http://test.com');
    });
  });
});
