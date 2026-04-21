import { McpPlugin } from './plugin';

// Test subclass to access protected method
class TestMcpPlugin extends McpPlugin {
  public testIsCallToolResult(value: any): boolean {
    return this.isCallToolResult(value);
  }
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
});
