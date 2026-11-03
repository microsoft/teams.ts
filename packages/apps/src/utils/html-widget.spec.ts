import { IHtmlWidgetPayload, IHtmlWidgetSecurityPolicy } from '@microsoft/teams.api';

import { buildHtmlWidgetMarkdown, buildHtmlWidgetMessage, validateSecurityPolicy, tryGetWidgetModelContext } from './html-widget';

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

  it('should not modify the HTML', () => {
    const result = buildHtmlWidgetMarkdown(MINIMAL_PAYLOAD);
    const jsonLine = result.split('\n').slice(1, -1).join('\n');
    const parsed = JSON.parse(jsonLine);
    expect(parsed.html).toBe('<div>Hello</div>');
    expect(parsed.html).not.toContain('<script');
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

describe('buildHtmlWidgetMarkdown payload passthrough', () => {
  it('should leave the widget HTML unchanged', () => {
    const html = '<body><p>Hello</p></body>';
    const result = buildHtmlWidgetMarkdown({ ...MINIMAL_PAYLOAD, html });
    const parsed = JSON.parse(result.split('\n').slice(1, -1).join('\n'));
    expect(parsed.html).toBe(html);
  });

  it('should serialize mcpUrl and correlationId only when set', () => {
    const without = JSON.parse(buildHtmlWidgetMarkdown(MINIMAL_PAYLOAD).split('\n')[1]);
    expect(without).not.toHaveProperty('mcpUrl');
    expect(without).not.toHaveProperty('correlationId');

    const withBoth = JSON.parse(
      buildHtmlWidgetMarkdown({
        ...MINIMAL_PAYLOAD,
        mcpUrl: 'https://mcp.example.com',
        correlationId: 'cv-123.0',
      }).split('\n')[1]
    );
    expect(withBoth.mcpUrl).toBe('https://mcp.example.com');
    expect(withBoth.correlationId).toBe('cv-123.0');
  });

  it('should produce a message carrying the unmodified HTML', () => {
    const msg = buildHtmlWidgetMessage({ ...MINIMAL_PAYLOAD, html: '<body><div>test</div></body>' });
    expect(msg.type).toBe('message');
    expect(msg.textFormat).toBe('extendedmarkdown');
    const parsed = JSON.parse(msg.text.split('\n').slice(1, -1).join('\n'));
    expect(parsed.html).toBe('<body><div>test</div></body>');
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

  it('should throw if domain is a malformed https URL', () => {
    for (const domain of ['https://', 'https:// not a url', 'http://example.com']) {
      const payload: IHtmlWidgetPayload = {
        type: 'widget/mcp-ui',
        name: 'Widget',
        html: '<div>Hello</div>',
        domain,
      };
      expect(() => buildHtmlWidgetMarkdown(payload)).toThrow('https://');
    }
  });

  it('should not throw for a valid https domain', () => {
    const payload: IHtmlWidgetPayload = {
      type: 'widget/mcp-ui',
      name: 'Widget',
      html: '<div>Hello</div>',
      domain: 'https://teams.microsoft.com',
    };
    expect(() => buildHtmlWidgetMarkdown(payload)).not.toThrow();
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

  it('should warn when a subdomain uses a different scheme than the pinned policy entry', () => {
    const html = '<script src="http://cdn.example.com/lib.js"></script>';
    const policy: IHtmlWidgetSecurityPolicy = {
      ...EMPTY_POLICY,
      resourceDomains: ['https://example.com'],
    };
    const warnings = validateSecurityPolicy(html, policy);
    expect(warnings).toHaveLength(1);
    expect(warnings[0].url).toBe('http://cdn.example.com/lib.js');
  });

  it('should allow any scheme for a host-only policy entry', () => {
    const html = '<script src="http://cdn.example.com/lib.js"></script>';
    const policy: IHtmlWidgetSecurityPolicy = {
      ...EMPTY_POLICY,
      resourceDomains: ['example.com'],
    };
    const warnings = validateSecurityPolicy(html, policy);
    expect(warnings).toEqual([]);
  });

  it('should warn about <base href> not in baseUriDomains', () => {
    const html = '<base href="https://evil.example.com/">';
    const warnings = validateSecurityPolicy(html, EMPTY_POLICY);
    expect(warnings).toHaveLength(1);
    expect(warnings[0].policyField).toBe('baseUriDomains');
    expect(warnings[0].source).toBe('<base href>');
    expect(warnings[0].url).toBe('https://evil.example.com/');
  });

  it('should not warn about <base href> in baseUriDomains', () => {
    const html = '<base href="https://cdn.example.com/">';
    const policy: IHtmlWidgetSecurityPolicy = {
      ...EMPTY_POLICY,
      baseUriDomains: ['https://cdn.example.com'],
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

describe('subdomain matching in security policy', () => {
  it('should allow subdomain when parent domain is in policy', () => {
    const html = '<script src="https://cdn.example.com/lib.js"></script>';
    const warnings = validateSecurityPolicy(html, {
      resourceDomains: ['https://example.com'],
    });
    // cdn.example.com is a subdomain of example.com - should be allowed
    expect(warnings.length).toBe(0);
  });

  it('should not allow unrelated domain that shares a suffix', () => {
    const html = '<script src="https://notexample.com/lib.js"></script>';
    const warnings = validateSecurityPolicy(html, {
      resourceDomains: ['https://example.com'],
    });
    expect(warnings.length).toBe(1);
  });
});

describe('unicode in widget name', () => {
  it('should pass unicode characters through correctly', () => {
    const result = buildHtmlWidgetMarkdown({ ...MINIMAL_PAYLOAD, name: 'Widget \u2764\uFE0F' });
    const parsed = JSON.parse(result.split('\n')[1]);
    expect(parsed.name).toBe('Widget \u2764\uFE0F');
  });
});

describe('tryGetWidgetModelContext', () => {
  it('should parse a raw update-model-context request', () => {
    const activity = {
      value: {
        method: 'ui/update-model-context',
        params: { content: [{ type: 'text', text: 'hello' }] },
      },
    };
    const result = tryGetWidgetModelContext(activity);
    expect(result).toBeDefined();
    expect(result!.method).toBe('ui/update-model-context');
    expect(result!.params.content).toEqual([{ type: 'text', text: 'hello' }]);
  });

  it('should parse a structuredContent-only request', () => {
    const activity = {
      value: {
        method: 'ui/update-model-context',
        params: { structuredContent: { count: 5 } },
      },
    };
    const result = tryGetWidgetModelContext(activity);
    expect(result?.params.structuredContent).toEqual({ count: 5 });
  });

  it('should unwrap a widgetModelContext envelope', () => {
    const activity = {
      value: {
        type: 'widgetModelContext',
        data: {
          method: 'ui/update-model-context',
          params: { content: [{ type: 'text', text: 'wrapped' }] },
        },
      },
    };
    const result = tryGetWidgetModelContext(activity);
    expect(result?.params.content).toEqual([{ type: 'text', text: 'wrapped' }]);
  });

  it('should return undefined when value is missing', () => {
    expect(tryGetWidgetModelContext({})).toBeUndefined();
    expect(tryGetWidgetModelContext(undefined)).toBeUndefined();
    expect(tryGetWidgetModelContext(null)).toBeUndefined();
  });

  it('should return undefined when value is not an object', () => {
    expect(tryGetWidgetModelContext({ value: 'hello' })).toBeUndefined();
    expect(tryGetWidgetModelContext({ value: 42 })).toBeUndefined();
  });

  it('should return undefined for a non-matching method', () => {
    expect(
      tryGetWidgetModelContext({ value: { method: 'something/else', params: {} } })
    ).toBeUndefined();
  });

  it('should return undefined when params are missing', () => {
    expect(
      tryGetWidgetModelContext({ value: { method: 'ui/update-model-context' } })
    ).toBeUndefined();
  });

  it('should return undefined for an envelope with the wrong type', () => {
    expect(
      tryGetWidgetModelContext({
        value: { type: 'other', data: { method: 'ui/update-model-context', params: {} } },
      })
    ).toBeUndefined();
  });
});
