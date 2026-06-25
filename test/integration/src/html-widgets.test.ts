import { getFixture, TestFixture } from './fixture';
import { buildHtmlWidgetMarkdown } from '@microsoft/teams.apps';

describe('HTML Widgets', () => {
  let f: TestFixture;

  beforeAll(async () => {
    f = await getFixture();
  });

  it('should accept a widget message with extendedmarkdown textFormat', async () => {
    if (!f.isCanary) return; // Widgets require canary service

    const markdown = buildHtmlWidgetMarkdown(
      {
        type: 'widget/mcp-ui',
        name: 'Integration Test Widget',
        description: 'Verifies Teams accepts widget payload.',
        html: '<body><p>Integration test widget</p></body>',
        domain: 'https://teams.microsoft.com',
        securityPolicy: {
          connectDomains: [],
          resourceDomains: ["'self'", 'data:'],
          frameDomains: [],
          baseUriDomains: [],
        },
        permissions: {},
      },
      { before: '[TS Integration] HTML widget send test' }
    );

    const response = await f.api.conversations
      .activities(f.config.conversationId)
      .create({
        type: 'message',
        text: markdown,
        textFormat: 'extendedmarkdown',
      });

    expect(response).toBeDefined();
    expect(response.id).toBeDefined();
  });

  it('should accept a widget payload with toolInput and toolOutput fields', async () => {
    if (!f.isCanary) return; // Widgets require canary service

    const markdown = buildHtmlWidgetMarkdown({
      type: 'widget/mcp-ui',
      name: 'ToolOutput Widget',
      description: 'Widget with initial tool data.',
      html: '<body><p>Widget with tool data</p></body>',
      domain: 'https://teams.microsoft.com',
      securityPolicy: {
        connectDomains: [],
        resourceDomains: ["'self'"],
        frameDomains: [],
        baseUriDomains: [],
      },
      toolInput: { query: 'test' },
      toolOutput: {
        content: [{ type: 'text', text: 'Result data' }],
        structuredContent: { key: 'value' },
        isError: false,
      },
      permissions: { clipboardWrite: {} },
    });

    const response = await f.api.conversations
      .activities(f.config.conversationId)
      .create({
        type: 'message',
        text: markdown,
        textFormat: 'extendedmarkdown',
      });

    expect(response).toBeDefined();
    expect(response.id).toBeDefined();
  });

  it('should update a widget message without error', async () => {
    if (!f.isCanary) return; // Widgets require canary service

    const markdown = buildHtmlWidgetMarkdown(
      {
        type: 'widget/mcp-ui',
        name: 'Update Test Widget',
        html: '<body><p>Original content</p></body>',
        domain: 'https://teams.microsoft.com',
      },
      { before: '[TS Integration] Widget update test - original' }
    );

    const sent = await f.api.conversations
      .activities(f.config.conversationId)
      .create({
        type: 'message',
        text: markdown,
        textFormat: 'extendedmarkdown',
      });

    expect(sent?.id).toBeDefined();

    const updatedMarkdown = buildHtmlWidgetMarkdown(
      {
        type: 'widget/mcp-ui',
        name: 'Update Test Widget',
        html: '<body><p>Updated content</p></body>',
        domain: 'https://teams.microsoft.com',
      },
      { before: '[TS Integration] Widget update test - updated' }
    );

    await f.api.conversations
      .activities(f.config.conversationId)
      .update(sent.id!, {
        type: 'message',
        text: updatedMarkdown,
        textFormat: 'extendedmarkdown',
      });
  });

  it('should delete a widget message without error', async () => {
    if (!f.isCanary) return; // Widgets require canary service

    const markdown = buildHtmlWidgetMarkdown({
      type: 'widget/mcp-ui',
      name: 'Delete Test Widget',
      html: '<body><p>Will be deleted</p></body>',
      domain: 'https://teams.microsoft.com',
    });

    const sent = await f.api.conversations
      .activities(f.config.conversationId)
      .create({
        type: 'message',
        text: markdown,
        textFormat: 'extendedmarkdown',
      });

    expect(sent?.id).toBeDefined();

    await f.api.conversations
      .activities(f.config.conversationId)
      .delete(sent.id!);
  });
});
