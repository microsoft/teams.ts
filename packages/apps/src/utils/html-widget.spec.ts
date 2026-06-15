import { buildHtmlWidgetMarkdown, buildHtmlWidgetMessage } from './html-widget';
import { IHtmlWidgetPayload } from '@microsoft/teams.api';

const MINIMAL_PAYLOAD: IHtmlWidgetPayload = {
  type: 'widget/mcp-ui',
  name: 'Test Widget',
  html: '<div>Hello</div>',
  domain: 'https://example.com',
};

const FULL_PAYLOAD: IHtmlWidgetPayload = {
  type: 'widget/mcp-ui',
  name: 'Weather Widget',
  description: 'Current weather conditions',
  html: '<div class="weather">72F</div>',
  domain: 'https://weather.example.com',
  securityPolicy: {
    connectDomains: ['https://api.example.com'],
    resourceDomains: ["'self'", 'data:'],
    frameDomains: [],
    baseUriDomains: [],
  },
  toolInput: { location: 'Seattle, WA' },
  toolOutput: { content: [{ type: 'text', text: 'Seattle: 72F' }], structuredContent: { tempF: 72 }, isError: false },
  permissions: { clipboardWrite: {} },
};

describe('buildHtmlWidgetMarkdown', () => {
  it('should wrap payload in html-widget code fence', () => {
    const result = buildHtmlWidgetMarkdown(MINIMAL_PAYLOAD);
    expect(result).toBe(
      '```html-widget\n' + JSON.stringify(MINIMAL_PAYLOAD) + '\n```'
    );
  });

  it('should include text before the widget', () => {
    const result = buildHtmlWidgetMarkdown(MINIMAL_PAYLOAD, { before: 'Check this out:' });
    expect(result).toBe(
      'Check this out:\n\n```html-widget\n' + JSON.stringify(MINIMAL_PAYLOAD) + '\n```'
    );
  });

  it('should include text after the widget', () => {
    const result = buildHtmlWidgetMarkdown(MINIMAL_PAYLOAD, { after: 'Pretty cool, right?' });
    expect(result).toBe(
      '```html-widget\n' + JSON.stringify(MINIMAL_PAYLOAD) + '\n```\n\nPretty cool, right?'
    );
  });

  it('should include text before and after the widget', () => {
    const result = buildHtmlWidgetMarkdown(MINIMAL_PAYLOAD, {
      before: 'Before',
      after: 'After',
    });
    expect(result).toBe(
      'Before\n\n```html-widget\n' + JSON.stringify(MINIMAL_PAYLOAD) + '\n```\n\nAfter'
    );
  });

  it('should serialize a full payload with all fields', () => {
    const result = buildHtmlWidgetMarkdown(FULL_PAYLOAD);
    const parsed = JSON.parse(result.replace('```html-widget\n', '').replace('\n```', ''));
    expect(parsed.type).toBe('widget/mcp-ui');
    expect(parsed.name).toBe('Weather Widget');
    expect(parsed.description).toBe('Current weather conditions');
    expect(parsed.html).toBe('<div class="weather">72F</div>');
    expect(parsed.domain).toBe('https://weather.example.com');
    expect(parsed.securityPolicy.connectDomains).toEqual(['https://api.example.com']);
    expect(parsed.toolInput).toEqual({ location: 'Seattle, WA' });
    expect(parsed.permissions).toEqual({ clipboardWrite: {} });
  });

  it('should produce valid markdown with no options', () => {
    const result = buildHtmlWidgetMarkdown(MINIMAL_PAYLOAD);
    expect(result.startsWith('```html-widget\n')).toBe(true);
    expect(result.endsWith('\n```')).toBe(true);
  });

  it('should handle HTML containing backticks without breaking the fence', () => {
    const payload: IHtmlWidgetPayload = {
      ...MINIMAL_PAYLOAD,
      html: '<code>```some code```</code>',
    };
    const result = buildHtmlWidgetMarkdown(payload);
    // JSON.stringify escapes nothing about backticks, but they appear inside
    // a JSON string value (quoted), so the code fence boundary is unambiguous
    // because the fence opener/closer are on their own lines.
    expect(result.startsWith('```html-widget\n')).toBe(true);
    expect(result.endsWith('\n```')).toBe(true);
    const jsonLine = result.split('\n').slice(1, -1).join('\n');
    const parsed = JSON.parse(jsonLine);
    expect(parsed.html).toBe('<code>```some code```</code>');
  });

  it('should handle HTML with newlines and special characters', () => {
    const payload: IHtmlWidgetPayload = {
      ...MINIMAL_PAYLOAD,
      html: '<div>\n  <p>"Hello" & \'world\'</p>\n</div>',
    };
    const result = buildHtmlWidgetMarkdown(payload);
    // JSON.stringify will escape the newlines and quotes inside the string
    const jsonLine = result.split('\n')[1];
    const parsed = JSON.parse(jsonLine);
    expect(parsed.html).toBe('<div>\n  <p>"Hello" & \'world\'</p>\n</div>');
  });

  it('should handle empty string options without adding extra lines', () => {
    const result = buildHtmlWidgetMarkdown(MINIMAL_PAYLOAD, { before: '', after: '' });
    expect(result).toBe(
      '```html-widget\n' + JSON.stringify(MINIMAL_PAYLOAD) + '\n```'
    );
  });

  it('should handle payload with undefined optional fields', () => {
    const payload: IHtmlWidgetPayload = {
      type: 'widget/mcp-ui',
      name: 'Bare',
      html: '',
      domain: '',
    };
    const result = buildHtmlWidgetMarkdown(payload);
    const jsonLine = result.split('\n')[1];
    const parsed = JSON.parse(jsonLine);
    expect(parsed.type).toBe('widget/mcp-ui');
    expect(parsed.description).toBeUndefined();
    expect(parsed.securityPolicy).toBeUndefined();
    expect(parsed.toolInput).toBeUndefined();
    expect(parsed.permissions).toBeUndefined();
  });
});

describe('buildHtmlWidgetMessage', () => {
  it('should return a message activity with extendedmarkdown format', () => {
    const result = buildHtmlWidgetMessage(MINIMAL_PAYLOAD);
    expect(result.type).toBe('message');
    expect(result.textFormat).toBe('extendedmarkdown');
  });

  it('should contain the widget markdown in the text field', () => {
    const result = buildHtmlWidgetMessage(MINIMAL_PAYLOAD);
    expect(result.text).toBe(buildHtmlWidgetMarkdown(MINIMAL_PAYLOAD));
  });

  it('should pass options through to markdown builder', () => {
    const result = buildHtmlWidgetMessage(FULL_PAYLOAD, { before: 'Weather today:' });
    expect(result.text).toBe(buildHtmlWidgetMarkdown(FULL_PAYLOAD, { before: 'Weather today:' }));
  });

  it('should produce a message sendable as ActivityLike', () => {
    const result = buildHtmlWidgetMessage(MINIMAL_PAYLOAD);
    // ActivityLike requires at minimum a `type` field
    expect(result).toHaveProperty('type');
    expect(result).toHaveProperty('text');
    expect(result).toHaveProperty('textFormat');
  });
});
