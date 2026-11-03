import { buildCallToolResponse, buildCallToolResult } from './call-tool-result';

describe('buildCallToolResult', () => {
  it('should default every field when called with no result', () => {
    expect(buildCallToolResult()).toEqual({ content: [], structuredContent: {}, isError: false });
  });

  it('should default only the omitted fields', () => {
    const result = buildCallToolResult({ content: [{ type: 'text', text: 'hi' }] });
    expect(result).toEqual({ content: [{ type: 'text', text: 'hi' }], structuredContent: {}, isError: false });
  });

  it('should default fields explicitly set to null or undefined', () => {
    const result = buildCallToolResult({ content: undefined, structuredContent: null, isError: undefined });
    expect(result).toEqual({ content: [], structuredContent: {}, isError: false });
  });

  it('should preserve provided values', () => {
    const result = buildCallToolResult({ content: [], structuredContent: { a: 1 }, isError: true });
    expect(result).toEqual({ content: [], structuredContent: { a: 1 }, isError: true });
  });
});

describe('buildCallToolResponse', () => {
  it('should wrap the defaulted result in the calltoolresult envelope', () => {
    expect(buildCallToolResponse()).toEqual({
      responseType: 'htmlwidget/calltoolresult',
      callToolResult: { content: [], structuredContent: {}, isError: false },
    });
  });

  it('should serialize all three fields', () => {
    const json = JSON.parse(JSON.stringify(buildCallToolResponse({ isError: true })));
    expect(Object.keys(json.callToolResult).sort()).toEqual(['content', 'isError', 'structuredContent']);
  });
});
