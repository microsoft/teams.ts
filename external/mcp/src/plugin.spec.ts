import express from 'express';

import { McpPlugin, McpPluginOptions } from './plugin';

// Test subclass to access protected methods
class TestMcpPlugin extends McpPlugin {
  public testIsCallToolResult(value: any): boolean {
    return this.isCallToolResult(value);
  }

  public testCheckAuth(req: express.Request, res: express.Response): Promise<boolean> {
    return this.checkAuth(req, res);
  }
}

function mockRes() {
  const res: any = {};
  res.status = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  res.set = jest.fn().mockReturnValue(res);
  return res as express.Response;
}

function mockReq(): express.Request {
  return {} as express.Request;
}

function makePlugin(options?: McpPluginOptions): TestMcpPlugin {
  const plugin = new TestMcpPlugin(options);
  // Stub the logger dependency normally injected by @Logger()
  (plugin as any).logger = { debug: jest.fn(), info: jest.fn(), warn: jest.fn(), error: jest.fn() };
  return plugin;
}

describe('McpPlugin', () => {
  describe('isCallToolResult', () => {
    let plugin: TestMcpPlugin;

    beforeEach(() => {
      plugin = new TestMcpPlugin();
    });

    it('should return true for valid CallToolResult with text content', () => {
      const result = {
        content: [{ type: 'text', text: 'hello' }],
      };
      expect(plugin.testIsCallToolResult(result)).toBe(true);
    });

    it('should return true for valid CallToolResult with image content', () => {
      const result = {
        content: [{ type: 'image', data: 'base64...', mimeType: 'image/png' }],
      };
      expect(plugin.testIsCallToolResult(result)).toBe(true);
    });

    it('should return true for valid CallToolResult with resource content', () => {
      const result = {
        content: [{ type: 'resource', resource: {} }],
      };
      expect(plugin.testIsCallToolResult(result)).toBe(true);
    });

    it('should return true for mixed content types', () => {
      const result = {
        content: [
          { type: 'text', text: 'hello' },
          { type: 'image', data: 'base64...' },
        ],
      };
      expect(plugin.testIsCallToolResult(result)).toBe(true);
    });

    it('should return false for null', () => {
      expect(plugin.testIsCallToolResult(null)).toBe(false);
    });

    it('should return false for undefined', () => {
      expect(plugin.testIsCallToolResult(undefined)).toBe(false);
    });

    it('should return false for object without content', () => {
      expect(plugin.testIsCallToolResult({ text: 'hello' })).toBe(false);
    });

    it('should return false for plain string', () => {
      expect(plugin.testIsCallToolResult('hello')).toBe(false);
    });

    it('should return false for content with unknown type', () => {
      const result = {
        content: [{ type: 'unknown', data: 'foo' }],
      };
      expect(plugin.testIsCallToolResult(result)).toBe(false);
    });

    it('should return false for non-array content', () => {
      const result = {
        content: 'not an array',
      };
      expect(plugin.testIsCallToolResult(result)).toBe(false);
    });
  });

  describe('checkAuth', () => {
    it('allows the request when requireAuth is not configured', async () => {
      const plugin = makePlugin();
      const res = mockRes();
      const ok = await plugin.testCheckAuth(mockReq(), res);
      expect(ok).toBe(true);
      expect(res.status).not.toHaveBeenCalled();
    });

    it('allows the request when requireAuth returns true', async () => {
      const plugin = makePlugin({ requireAuth: () => true });
      const res = mockRes();
      const ok = await plugin.testCheckAuth(mockReq(), res);
      expect(ok).toBe(true);
      expect(res.status).not.toHaveBeenCalled();
    });

    it('allows the request when requireAuth resolves true', async () => {
      const plugin = makePlugin({ requireAuth: async () => true });
      const res = mockRes();
      const ok = await plugin.testCheckAuth(mockReq(), res);
      expect(ok).toBe(true);
    });

    it('rejects with 401 when requireAuth returns false', async () => {
      const plugin = makePlugin({ requireAuth: () => false });
      const res = mockRes();
      const ok = await plugin.testCheckAuth(mockReq(), res);
      expect(ok).toBe(false);
      expect(res.set).toHaveBeenCalledWith('WWW-Authenticate', 'Bearer');
      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.send).toHaveBeenCalledWith('unauthorized');
    });

    it('rejects with 401 when requireAuth throws', async () => {
      const plugin = makePlugin({
        requireAuth: () => {
          throw new Error('bad token');
        },
      });
      const res = mockRes();
      const ok = await plugin.testCheckAuth(mockReq(), res);
      expect(ok).toBe(false);
      expect(res.status).toHaveBeenCalledWith(401);
    });

    it('rejects with 401 when async requireAuth rejects', async () => {
      const plugin = makePlugin({
        requireAuth: async () => {
          throw new Error('bad token');
        },
      });
      const res = mockRes();
      const ok = await plugin.testCheckAuth(mockReq(), res);
      expect(ok).toBe(false);
      expect(res.status).toHaveBeenCalledWith(401);
    });
  });
});
