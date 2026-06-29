import { IHtmlWidgetPayload, IHtmlWidgetSecurityPolicy } from '@microsoft/teams.api';

import { buildHtmlWidgetMarkdown, buildHtmlWidgetMessage, injectWidgetProtocol, validateSecurityPolicy } from './html-widget';

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
    resourceDomains: ['\'self\'', 'data:'],
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
    expect(result.startsWith('```html-widget\n')).toBe(true);
    expect(result.endsWith('\n```')).toBe(true);
  });

  it('should auto-inject the widget protocol into the HTML', () => {
    const result = buildHtmlWidgetMarkdown(MINIMAL_PAYLOAD);
    const jsonLine = result.split('\n').slice(1, -1).join('\n');
    const parsed = JSON.parse(jsonLine);
    expect(parsed.html).toContain('ui/initialize');
    expect(parsed.html).toContain('<div>Hello</div>');
  });

  it('should not double-inject if HTML already has the protocol', () => {
    const htmlWithInit = '<div>Hello</div><script>ui/initialize</script>';
    const payload = { ...MINIMAL_PAYLOAD, html: htmlWithInit };
    const result = buildHtmlWidgetMarkdown(payload);
    const jsonLine = result.split('\n').slice(1, -1).join('\n');
    const parsed = JSON.parse(jsonLine);
    expect(parsed.html).toBe(htmlWithInit);
  });

  it('should use the payload name as the protocol app name', () => {
    const result = buildHtmlWidgetMarkdown(MINIMAL_PAYLOAD);
    const jsonLine = result.split('\n').slice(1, -1).join('\n');
    const parsed = JSON.parse(jsonLine);
    expect(parsed.html).toContain('name:\'Test Widget\'');
  });

  it('should include text before the widget', () => {
    const result = buildHtmlWidgetMarkdown(MINIMAL_PAYLOAD, { before: 'Check this out:' });
    expect(result.startsWith('Check this out:\n\n```html-widget\n')).toBe(true);
  });

  it('should include text after the widget', () => {
    const result = buildHtmlWidgetMarkdown(MINIMAL_PAYLOAD, { after: 'Pretty cool, right?' });
    expect(result.endsWith('\n```\n\nPretty cool, right?')).toBe(true);
  });

  it('should include text before and after the widget', () => {
    const result = buildHtmlWidgetMarkdown(MINIMAL_PAYLOAD, {
      before: 'Before',
      after: 'After',
    });
    expect(result.startsWith('Before\n\n```html-widget\n')).toBe(true);
    expect(result.endsWith('\n```\n\nAfter')).toBe(true);
  });

  it('should forward protocolOptions to injectWidgetProtocol', () => {
    const result = buildHtmlWidgetMarkdown(MINIMAL_PAYLOAD, {
      protocolOptions: {
        notifications: ['tool-result'],
      },
    });
    const jsonLine = result.split('\n').slice(1, -1).join('\n');
    const parsed = JSON.parse(jsonLine);
    expect(parsed.html).toContain('ui/notifications/tool-result');
    expect(parsed.html).toContain('window.onToolResult');
  });

  it('should forward debugCspViolations through protocolOptions', () => {
    const result = buildHtmlWidgetMarkdown(MINIMAL_PAYLOAD, {
      protocolOptions: {
        debugCspViolations: true,
      },
    });
    const jsonLine = result.split('\n').slice(1, -1).join('\n');
    const parsed = JSON.parse(jsonLine);
    expect(parsed.html).toContain('securitypolicyviolation');
  });

  it('should use payload name even when protocolOptions is provided', () => {
    const result = buildHtmlWidgetMarkdown(MINIMAL_PAYLOAD, {
      protocolOptions: {
        version: '2.0.0',
      },
    });
    const jsonLine = result.split('\n').slice(1, -1).join('\n');
    const parsed = JSON.parse(jsonLine);
    expect(parsed.html).toContain('name:\'Test Widget\'');
    expect(parsed.html).toContain('version:\'2.0.0\'');
  });

  it('should serialize a full payload with all fields', () => {
    const result = buildHtmlWidgetMarkdown(FULL_PAYLOAD);
    const parsed = JSON.parse(result.replace('```html-widget\n', '').replace('\n```', ''));
    expect(parsed.type).toBe('widget/mcp-ui');
    expect(parsed.name).toBe('Weather Widget');
    expect(parsed.description).toBe('Current weather conditions');
    expect(parsed.html).toContain('<div class="weather">72F</div>');
    expect(parsed.html).toContain('ui/initialize');
    expect(parsed.domain).toBe('https://weather.example.com');
    expect(parsed.securityPolicy.connectDomains).toEqual(['https://api.example.com']);
    expect(parsed.toolInput).toEqual({ location: 'Seattle, WA' });
    expect(parsed.permissions).toEqual({ clipboardWrite: {} });
  });

  it('should not overwrite a user-provided securityPolicy with defaults', () => {
    const customPolicy = {
      connectDomains: ['https://api.custom.com'],
      resourceDomains: ['https://cdn.custom.com'],
      frameDomains: ['https://embed.custom.com'],
      baseUriDomains: [],
    };
    const payload: IHtmlWidgetPayload = {
      ...MINIMAL_PAYLOAD,
      securityPolicy: customPolicy,
    };
    const result = buildHtmlWidgetMarkdown(payload);
    const parsed = JSON.parse(result.split('\n')[1]);
    expect(parsed.securityPolicy).toEqual(customPolicy);
  });

  it('should handle HTML containing backticks without breaking the fence', () => {
    const payload: IHtmlWidgetPayload = {
      ...MINIMAL_PAYLOAD,
      html: '<code>```some code```</code>',
    };
    const result = buildHtmlWidgetMarkdown(payload);
    expect(result.startsWith('```html-widget\n')).toBe(true);
    expect(result.endsWith('\n```')).toBe(true);
    const jsonLine = result.split('\n').slice(1, -1).join('\n');
    const parsed = JSON.parse(jsonLine);
    expect(parsed.html).toContain('<code>```some code```</code>');
  });

  it('should handle HTML with newlines and special characters', () => {
    const payload: IHtmlWidgetPayload = {
      ...MINIMAL_PAYLOAD,
      html: '<div>\n  <p>"Hello" & \'world\'</p>\n</div>',
    };
    const result = buildHtmlWidgetMarkdown(payload);
    const jsonLine = result.split('\n')[1];
    const parsed = JSON.parse(jsonLine);
    expect(parsed.html).toContain('<div>\n  <p>"Hello" & \'world\'</p>\n</div>');
  });

  it('should handle empty string options without adding extra lines', () => {
    const result = buildHtmlWidgetMarkdown(MINIMAL_PAYLOAD, { before: '', after: '' });
    expect(result.startsWith('```html-widget\n')).toBe(true);
    expect(result.endsWith('\n```')).toBe(true);
    // No extra blank lines from empty before/after
    expect(result).not.toMatch(/^\n/);
  });

  it('should handle payload with undefined optional fields', () => {
    const payload: IHtmlWidgetPayload = {
      type: 'widget/mcp-ui',
      name: 'Bare',
      html: '<p>minimal</p>',
      domain: 'https://example.com',
    };
    const result = buildHtmlWidgetMarkdown(payload);
    const jsonLine = result.split('\n')[1];
    const parsed = JSON.parse(jsonLine);
    expect(parsed.type).toBe('widget/mcp-ui');
    expect(parsed.description).toBeUndefined();
    expect(parsed.securityPolicy).toEqual({
      connectDomains: [],
      resourceDomains: ['\'self\'', 'data:'],
      frameDomains: [],
      baseUriDomains: [],
    });
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

describe('injectWidgetProtocol', () => {
  const BARE_HTML = '<body><h1>Hello</h1></body>';
  const BARE_HTML_NO_BODY = '<h1>Hello</h1>';

  it('should inject the protocol script before </body>', () => {
    const result = injectWidgetProtocol(BARE_HTML);
    expect(result).toContain('ui/initialize');
    expect(result).toContain('ui/notifications/size-changed');
    expect(result).toContain('ui/notifications/initialized');
    expect(result).toContain('</body>');
    // Script should come before </body>
    const scriptIdx = result.indexOf('ui/initialize');
    const bodyIdx = result.indexOf('</body>');
    expect(scriptIdx).toBeLessThan(bodyIdx);
  });

  it('should append script if no </body> tag exists', () => {
    const result = injectWidgetProtocol(BARE_HTML_NO_BODY);
    expect(result).toContain('ui/initialize');
    expect(result).toContain('<h1>Hello</h1>');
  });

  it('should use custom app name and version', () => {
    const result = injectWidgetProtocol(BARE_HTML, { name: 'my-widget', version: '2.0.0' });
    expect(result).toContain('name:\'my-widget\'');
    expect(result).toContain('version:\'2.0.0\'');
  });

  it('should use default name and version when not provided', () => {
    const result = injectWidgetProtocol(BARE_HTML);
    expect(result).toContain('name:\'widget\'');
    expect(result).toContain('version:\'1.0.0\'');
  });

  it('should not modify HTML that already contains ui/initialize', () => {
    const htmlWithInit = '<body><script>ui/initialize</script></body>';
    const result = injectWidgetProtocol(htmlWithInit);
    expect(result).toBe(htmlWithInit);
  });

  it('should be idempotent -- calling twice produces the same output', () => {
    const first = injectWidgetProtocol(BARE_HTML);
    const second = injectWidgetProtocol(first);
    expect(second).toBe(first);
  });

  it('should handle empty string HTML', () => {
    const result = injectWidgetProtocol('');
    expect(result).toContain('ui/initialize');
    expect(result).toContain('<script>');
  });

  it('should inject before </body> in a full HTML document', () => {
    const fullDoc = '<!DOCTYPE html><html><head><meta charset="utf-8"></head><body><div>Content</div></body></html>';
    const result = injectWidgetProtocol(fullDoc);
    expect(result).toContain('ui/initialize');
    // Script should be between content and </body>
    const contentIdx = result.indexOf('Content</div>');
    const scriptIdx = result.indexOf('<script>');
    const bodyIdx = result.indexOf('</body>');
    expect(contentIdx).toBeLessThan(scriptIdx);
    expect(scriptIdx).toBeLessThan(bodyIdx);
  });

  it('should match </body> naively even inside comments or strings', () => {
    // Documents this known limitation: we do naive string matching
    const htmlWithBodyInComment = '<body><!-- </body> --><p>Real content</p></body>';
    const result = injectWidgetProtocol(htmlWithBodyInComment);
    // Injects at first </body> occurrence (the one in the comment)
    expect(result).toContain('ui/initialize');
    const scriptIdx = result.indexOf('<script>');
    const commentBodyIdx = result.indexOf('<!-- ');
    // Script is injected before the first </body> (inside comment)
    expect(scriptIdx).toBeGreaterThan(commentBodyIdx);
  });

  it('should include notification hooks only when opted in via notifications option', () => {
    const withHooks = injectWidgetProtocol(BARE_HTML, {
      notifications: ['tool-result', 'tool-input', 'host-context-changed'],
    });
    expect(withHooks).toContain('ui/notifications/tool-result');
    expect(withHooks).toContain('window.onToolResult');
    expect(withHooks).toContain('ui/notifications/tool-input');
    expect(withHooks).toContain('window.onToolInput');
    expect(withHooks).toContain('ui/notifications/host-context-changed');
    expect(withHooks).toContain('window.onHostContextChanged');

    const withoutHooks = injectWidgetProtocol(BARE_HTML);
    expect(withoutHooks).not.toContain('onToolResult');
    expect(withoutHooks).not.toContain('onToolInput');
    expect(withoutHooks).not.toContain('onHostContextChanged');
  });

  it('should ignore unknown notification names', () => {
    const result = injectWidgetProtocol(BARE_HTML, {
      notifications: ['some-future-event'],
    });
    expect(result).not.toContain('ui/notifications/some-future-event');
    expect(result).not.toContain('onSomeFutureEvent');
  });

  it('should inject hooks for all known notification types', () => {
    const result = injectWidgetProtocol(BARE_HTML, {
      notifications: ['tool-result', 'tool-input', 'tool-input-partial', 'tool-cancelled', 'host-context-changed', 'resource-teardown'],
    });
    expect(result).toContain('ui/notifications/tool-result');
    expect(result).toContain('window.onToolResult');
    expect(result).toContain('ui/notifications/tool-input-partial');
    expect(result).toContain('window.onToolInputPartial');
    expect(result).toContain('ui/notifications/tool-cancelled');
    expect(result).toContain('window.onToolCancelled');
    expect(result).toContain('ui/notifications/resource-teardown');
    expect(result).toContain('window.onResourceTeardown');
  });

  it('should include availableDisplayModes in appCapabilities when provided', () => {
    const result = injectWidgetProtocol(BARE_HTML, {
      appCapabilities: { availableDisplayModes: ['inline', 'fullscreen'] },
    });
    expect(result).toContain('availableDisplayModes');
    expect(result).toContain(JSON.stringify(['inline', 'fullscreen']));
  });

  it('should omit availableDisplayModes when not provided', () => {
    const result = injectWidgetProtocol(BARE_HTML);
    expect(result).not.toContain('availableDisplayModes');
    expect(result).toContain('appCapabilities:{}');
  });
});

describe('buildHtmlWidgetMarkdown integration', () => {
  it('should inject protocol using payload name as appInfo name', () => {
    const payload: IHtmlWidgetPayload = {
      type: 'widget/mcp-ui',
      name: 'My Custom Widget',
      html: '<body><p>Hello</p></body>',
      domain: 'https://example.com',
    };
    const result = buildHtmlWidgetMarkdown(payload);
    const jsonLine = result.split('\n').slice(1, -1).join('\n');
    const parsed = JSON.parse(jsonLine);
    expect(parsed.html).toContain('name:\'My Custom Widget\'');
  });

  it('should not double-inject when HTML already has protocol', () => {
    const htmlWithProtocol = '<body><script>ui/initialize already here</script></body>';
    const payload: IHtmlWidgetPayload = {
      type: 'widget/mcp-ui',
      name: 'Test',
      html: htmlWithProtocol,
      domain: 'https://example.com',
    };
    const result = buildHtmlWidgetMarkdown(payload);
    const jsonLine = result.split('\n').slice(1, -1).join('\n');
    const parsed = JSON.parse(jsonLine);
    expect(parsed.html).toBe(htmlWithProtocol);
  });

  it('should produce valid output with minimal payload fields', () => {
    const payload: IHtmlWidgetPayload = {
      type: 'widget/mcp-ui',
      name: 'Bare',
      html: '<p>minimal</p>',
      domain: 'https://example.com',
    };
    const result = buildHtmlWidgetMarkdown(payload);
    expect(result.startsWith('```html-widget\n')).toBe(true);
    expect(result.endsWith('\n```')).toBe(true);
    const jsonLine = result.split('\n').slice(1, -1).join('\n');
    const parsed = JSON.parse(jsonLine);
    expect(parsed.html).toContain('ui/initialize');
    expect(parsed.html).toContain('<p>minimal</p>');
  });

  it('should produce message with protocol injected end-to-end', () => {
    const payload: IHtmlWidgetPayload = {
      type: 'widget/mcp-ui',
      name: 'E2E Widget',
      html: '<body><div>test</div></body>',
      domain: 'https://teams.microsoft.com',
    };
    const msg = buildHtmlWidgetMessage(payload);
    expect(msg.type).toBe('message');
    expect(msg.textFormat).toBe('extendedmarkdown');
    // Parse the JSON from the markdown
    const jsonLine = msg.text.split('\n').slice(1, -1).join('\n');
    const parsed = JSON.parse(jsonLine);
    expect(parsed.html).toContain('ui/initialize');
    expect(parsed.html).toContain('name:\'E2E Widget\'');
  });
});

describe('payload validation', () => {
  it('should throw if name is empty', () => {
    const payload: IHtmlWidgetPayload = {
      type: 'widget/mcp-ui',
      name: '',
      html: '<div>Hello</div>',
      domain: 'https://example.com',
    };
    expect(() => buildHtmlWidgetMarkdown(payload)).toThrow('non-empty "name"');
  });

  it('should throw if name is only whitespace', () => {
    const payload: IHtmlWidgetPayload = {
      type: 'widget/mcp-ui',
      name: '   ',
      html: '<div>Hello</div>',
      domain: 'https://example.com',
    };
    expect(() => buildHtmlWidgetMarkdown(payload)).toThrow('non-empty "name"');
  });

  it('should throw if html is empty', () => {
    const payload: IHtmlWidgetPayload = {
      type: 'widget/mcp-ui',
      name: 'Widget',
      html: '',
      domain: 'https://example.com',
    };
    expect(() => buildHtmlWidgetMarkdown(payload)).toThrow('non-empty "html"');
  });

  it('should throw if html is only whitespace', () => {
    const payload: IHtmlWidgetPayload = {
      type: 'widget/mcp-ui',
      name: 'Widget',
      html: '   ',
      domain: 'https://example.com',
    };
    expect(() => buildHtmlWidgetMarkdown(payload)).toThrow('non-empty "html"');
  });

  it('should not throw for valid payload', () => {
    expect(() => buildHtmlWidgetMarkdown(MINIMAL_PAYLOAD)).not.toThrow();
  });

  it('should validate through buildHtmlWidgetMessage', () => {
    const payload: IHtmlWidgetPayload = {
      type: 'widget/mcp-ui',
      name: '',
      html: '<div>Hello</div>',
      domain: 'https://example.com',
    };
    expect(() => buildHtmlWidgetMessage(payload)).toThrow('non-empty "name"');
  });

  it('should throw if domain is empty', () => {
    const payload: IHtmlWidgetPayload = {
      type: 'widget/mcp-ui',
      name: 'Widget',
      html: '<div>Hello</div>',
      domain: '',
    };
    expect(() => buildHtmlWidgetMarkdown(payload)).toThrow('https://');
  });

  it('should throw if domain does not start with https://', () => {
    const payload: IHtmlWidgetPayload = {
      type: 'widget/mcp-ui',
      name: 'Widget',
      html: '<div>Hello</div>',
      domain: 'example.com',
    };
    expect(() => buildHtmlWidgetMarkdown(payload)).toThrow('https://');
  });
});

describe('validateSecurityPolicy', () => {
  const EMPTY_POLICY: IHtmlWidgetSecurityPolicy = {
    connectDomains: [],
    resourceDomains: [],
    frameDomains: [],
    baseUriDomains: [],
  };

  it('should return no warnings for HTML with no external references', () => {
    const html = '<div><p>Hello world</p></div>';
    const warnings = validateSecurityPolicy(html, EMPTY_POLICY);
    expect(warnings).toEqual([]);
  });

  it('should warn about <script src> not in resourceDomains', () => {
    const html = '<script src="https://cdn.example.com/lib.js"></script>';
    const warnings = validateSecurityPolicy(html, EMPTY_POLICY);
    expect(warnings).toHaveLength(1);
    expect(warnings[0].policyField).toBe('resourceDomains');
    expect(warnings[0].source).toBe('<script src>');
    expect(warnings[0].url).toBe('https://cdn.example.com/lib.js');
  });

  it('should not warn when origin is in resourceDomains', () => {
    const html = '<script src="https://cdn.example.com/lib.js"></script>';
    const policy: IHtmlWidgetSecurityPolicy = {
      ...EMPTY_POLICY,
      resourceDomains: ['https://cdn.example.com'],
    };
    const warnings = validateSecurityPolicy(html, policy);
    expect(warnings).toEqual([]);
  });

  it('should warn about <link href> not in resourceDomains', () => {
    const html = '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto">';
    const warnings = validateSecurityPolicy(html, EMPTY_POLICY);
    expect(warnings).toHaveLength(1);
    expect(warnings[0].policyField).toBe('resourceDomains');
    expect(warnings[0].source).toBe('<link href>');
  });

  it('should warn about <img src> not in resourceDomains', () => {
    const html = '<img src="https://images.example.com/photo.png">';
    const warnings = validateSecurityPolicy(html, EMPTY_POLICY);
    expect(warnings).toHaveLength(1);
    expect(warnings[0].policyField).toBe('resourceDomains');
    expect(warnings[0].source).toBe('<img src>');
  });

  it('should warn about fetch() not in connectDomains', () => {
    const html = '<script>fetch("https://api.example.com/data")</script>';
    const warnings = validateSecurityPolicy(html, EMPTY_POLICY);
    expect(warnings).toHaveLength(1);
    expect(warnings[0].policyField).toBe('connectDomains');
    expect(warnings[0].source).toBe('fetch()');
  });

  it('should not warn when fetch origin is in connectDomains', () => {
    const html = '<script>fetch("https://api.example.com/data")</script>';
    const policy: IHtmlWidgetSecurityPolicy = {
      ...EMPTY_POLICY,
      connectDomains: ['https://api.example.com'],
    };
    const warnings = validateSecurityPolicy(html, policy);
    expect(warnings).toEqual([]);
  });

  it('should warn about XMLHttpRequest.open() not in connectDomains', () => {
    const html = '<script>xhr.open("GET", "https://api.example.com/data")</script>';
    const warnings = validateSecurityPolicy(html, EMPTY_POLICY);
    expect(warnings).toHaveLength(1);
    expect(warnings[0].policyField).toBe('connectDomains');
    expect(warnings[0].source).toBe('XMLHttpRequest.open()');
  });

  it('should warn about new WebSocket() not in connectDomains', () => {
    const html = '<script>new WebSocket("wss://ws.example.com/stream")</script>';
    const warnings = validateSecurityPolicy(html, EMPTY_POLICY);
    expect(warnings).toHaveLength(1);
    expect(warnings[0].policyField).toBe('connectDomains');
  });

  it('should warn about <iframe src> not in frameDomains', () => {
    const html = '<iframe src="https://embed.youtube.com/video123"></iframe>';
    const warnings = validateSecurityPolicy(html, EMPTY_POLICY);
    expect(warnings).toHaveLength(1);
    expect(warnings[0].policyField).toBe('frameDomains');
    expect(warnings[0].source).toBe('<iframe src>');
  });

  it('should not warn when iframe origin is in frameDomains', () => {
    const html = '<iframe src="https://embed.youtube.com/video123"></iframe>';
    const policy: IHtmlWidgetSecurityPolicy = {
      ...EMPTY_POLICY,
      frameDomains: ['https://embed.youtube.com'],
    };
    const warnings = validateSecurityPolicy(html, policy);
    expect(warnings).toEqual([]);
  });

  it('should warn about CSS url() not in resourceDomains', () => {
    const html = '<style>body { background-image: url("https://images.example.com/bg.png"); }</style>';
    const warnings = validateSecurityPolicy(html, EMPTY_POLICY);
    expect(warnings).toHaveLength(1);
    expect(warnings[0].policyField).toBe('resourceDomains');
    expect(warnings[0].source).toBe('CSS url()');
  });

  it('should warn about CSS @import not in resourceDomains', () => {
    const html = '<style>@import "https://fonts.googleapis.com/css2?family=Roboto";</style>';
    const warnings = validateSecurityPolicy(html, EMPTY_POLICY);
    expect(warnings).toHaveLength(1);
    expect(warnings[0].policyField).toBe('resourceDomains');
    expect(warnings[0].source).toBe('CSS @import');
  });

  it('should warn about <form action> not in connectDomains', () => {
    const html = '<form action="https://api.example.com/submit"><input type="text"></form>';
    const warnings = validateSecurityPolicy(html, EMPTY_POLICY);
    expect(warnings).toHaveLength(1);
    expect(warnings[0].policyField).toBe('connectDomains');
    expect(warnings[0].source).toBe('<form action>');
  });

  it('should not warn when form action origin is in connectDomains', () => {
    const html = '<form action="https://api.example.com/submit"><input type="text"></form>';
    const policy: IHtmlWidgetSecurityPolicy = {
      ...EMPTY_POLICY,
      connectDomains: ['https://api.example.com'],
    };
    const warnings = validateSecurityPolicy(html, policy);
    expect(warnings).toEqual([]);
  });

  it('should warn about new EventSource() not in connectDomains', () => {
    const html = '<script>new EventSource("https://sse.example.com/events")</script>';
    const warnings = validateSecurityPolicy(html, EMPTY_POLICY);
    expect(warnings).toHaveLength(1);
    expect(warnings[0].policyField).toBe('connectDomains');
    expect(warnings[0].source).toBe('new EventSource()');
  });

  it('should warn about <audio src> not in resourceDomains', () => {
    const html = '<audio src="https://media.example.com/song.mp3"></audio>';
    const warnings = validateSecurityPolicy(html, EMPTY_POLICY);
    expect(warnings).toHaveLength(1);
    expect(warnings[0].policyField).toBe('resourceDomains');
    expect(warnings[0].source).toBe('<audio src>');
  });

  it('should warn about <video src> not in resourceDomains', () => {
    const html = '<video src="https://media.example.com/clip.mp4"></video>';
    const warnings = validateSecurityPolicy(html, EMPTY_POLICY);
    expect(warnings).toHaveLength(1);
    expect(warnings[0].policyField).toBe('resourceDomains');
    expect(warnings[0].source).toBe('<video src>');
  });

  it('should ignore relative URLs', () => {
    const html = '<img src="./logo.png"><script src="/app.js"></script>';
    const warnings = validateSecurityPolicy(html, EMPTY_POLICY);
    expect(warnings).toEqual([]);
  });

  it('should ignore data: URIs', () => {
    const html = '<img src="data:image/png;base64,abc123">';
    const warnings = validateSecurityPolicy(html, EMPTY_POLICY);
    expect(warnings).toEqual([]);
  });

  it('should detect multiple violations across different policy fields', () => {
    const html = [
      '<script src="https://cdn.example.com/lib.js"></script>',
      '<script>fetch("https://api.example.com/data")</script>',
      '<iframe src="https://embed.example.com/widget"></iframe>',
    ].join('');
    const warnings = validateSecurityPolicy(html, EMPTY_POLICY);
    expect(warnings).toHaveLength(3);
    expect(warnings.map((w) => w.policyField).sort()).toEqual([
      'connectDomains',
      'frameDomains',
      'resourceDomains',
    ]);
  });

  it('should handle wildcard * in policy', () => {
    const html = '<script src="https://any-cdn.com/lib.js"></script>';
    const policy: IHtmlWidgetSecurityPolicy = {
      ...EMPTY_POLICY,
      resourceDomains: ['*'],
    };
    const warnings = validateSecurityPolicy(html, policy);
    expect(warnings).toEqual([]);
  });

  it('should handle protocol-relative URLs', () => {
    const html = '<script src="//cdn.example.com/lib.js"></script>';
    const warnings = validateSecurityPolicy(html, EMPTY_POLICY);
    expect(warnings).toHaveLength(1);
    expect(warnings[0].policyField).toBe('resourceDomains');
  });

  it('should handle undefined policy fields gracefully', () => {
    const html = '<script src="https://cdn.example.com/lib.js"></script>';
    const warnings = validateSecurityPolicy(html, {});
    expect(warnings).toHaveLength(1);
  });
});

describe('debugCspViolations', () => {
  it('should inject CSP violation listener when enabled', () => {
    const result = injectWidgetProtocol('<body><p>Hello</p></body>', {
      debugCspViolations: true,
    });
    expect(result).toContain('securitypolicyviolation');
    expect(result).toContain('blockedURI');
    expect(result).toContain('violatedDirective');
  });

  it('should not inject CSP violation listener by default', () => {
    const result = injectWidgetProtocol('<body><p>Hello</p></body>');
    expect(result).not.toContain('securitypolicyviolation');
  });

  it('should not inject CSP violation listener when explicitly false', () => {
    const result = injectWidgetProtocol('<body><p>Hello</p></body>', {
      debugCspViolations: false,
    });
    expect(result).not.toContain('securitypolicyviolation');
  });
});
