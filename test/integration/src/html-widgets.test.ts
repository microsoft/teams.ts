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
});
