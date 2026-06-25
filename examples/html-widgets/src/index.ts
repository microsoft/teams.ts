/**
 * HTML Widgets Example Bot
 *
 * This example demonstrates the full HTML widget contract for Teams bots.
 * Commands are annotated to distinguish between:
 *   - [CONTRACT TEST] Tests that verify the contract works end-to-end
 *   - [EXAMPLE] Code patterns useful for customers building widget bots
 */

import { IMcpUiCallToolResult } from '@microsoft/teams.api';
import { App, buildHtmlWidgetMarkdown, buildHtmlWidgetMessage } from '@microsoft/teams.apps';
import { ConsoleLogger } from '@microsoft/teams.common';

import { CALLTOOL_WIDGET_HTML } from './widgets/calltool';
import { FULLSCREEN_WIDGET_HTML } from './widgets/fullscreen';
import { HOST_CONTEXT_WIDGET_HTML } from './widgets/host-context';
import { MESSAGEBACK_WIDGET_HTML } from './widgets/messageback';
import { MULTI_WIDGET_HTML } from './widgets/multi-tool';
import { OPEN_LINK_WIDGET_HTML } from './widgets/open-link';
import { SIMPLE_WIDGET_HTML } from './widgets/simple';
import { UPDATE_CONTEXT_WIDGET_HTML } from './widgets/update-context';

const app = new App({
  logger: new ConsoleLogger('@examples/html-widgets', { level: 'debug' }),
});

// ---------------------------------------------------------------------------
// [EXAMPLE] Simple static widget - no callbacks
// Shows the minimal code to send an HTML widget.
// ---------------------------------------------------------------------------
app.on('message', async ({ send, activity }) => {
  if (!activity.text) return;
  const text = activity.text.trim().toLowerCase();

  if (text === '/simple') {
    const message = buildHtmlWidgetMessage(
      {
        type: 'widget/mcp-ui',
        name: 'Simple Widget',
        description: 'A static HTML widget with no callbacks.',
        html: SIMPLE_WIDGET_HTML,
        domain: 'https://teams.microsoft.com',
        securityPolicy: {
          connectDomains: [],
          resourceDomains: ['\'self\'', 'data:'],
          frameDomains: [],
          baseUriDomains: [],
        },
        permissions: {},
      },
      { before: 'Here is a simple static widget:' }
    );
    await send(message);
    return;
  }

  // ---------------------------------------------------------------------------
  // [EXAMPLE] Widget with onCallTool callback
  // The widget calls tools on the bot and re-renders with the result.
  // ---------------------------------------------------------------------------
  if (text === '/calltool') {
    const message = buildHtmlWidgetMessage(
      {
        type: 'widget/mcp-ui',
        name: 'CallTool Widget',
        description: 'Widget that calls tools on the bot.',
        html: CALLTOOL_WIDGET_HTML,
        domain: 'https://teams.microsoft.com',
        securityPolicy: {
          connectDomains: ['https://teams.microsoft.com', 'https://teams.cloud.microsoft.com'],
          resourceDomains: ['\'self\'', 'data:'],
          frameDomains: [],
          baseUriDomains: [],
        },
        toolInput: { demo: true },
        toolOutput: {
          content: [{ type: 'text', text: 'Initial data loaded.' }],
          structuredContent: { counter: 0, lastAction: 'init' },
          isError: false,
        },
        permissions: {},
      },
      { before: 'Here is a widget with callTool support (click Refresh):' }
    );
    await send(message);
    return;
  }

  // ---------------------------------------------------------------------------
  // [CONTRACT TEST] Widget with onMessage (messageBack) callback
  // Tests that the widget can send messageBack to the bot.
  // ---------------------------------------------------------------------------
  if (text === '/messageback') {
    const message = buildHtmlWidgetMessage(
      {
        type: 'widget/mcp-ui',
        name: 'MessageBack Widget',
        description: 'Widget that sends messageBack to the bot.',
        html: MESSAGEBACK_WIDGET_HTML,
        domain: 'https://teams.microsoft.com',
        securityPolicy: {
          connectDomains: [],
          resourceDomains: ['\'self\'', 'data:'],
          frameDomains: [],
          baseUriDomains: [],
        },
        permissions: {},
      },
      { before: 'This widget tests the onMessage (messageBack) callback:' }
    );
    await send(message);
    return;
  }

  // ---------------------------------------------------------------------------
  // [CONTRACT TEST] Widget requesting fullscreen display mode
  // Tests onRequestDisplayMode with "fullscreen" value.
  // ---------------------------------------------------------------------------
  if (text === '/fullscreen') {
    const message = buildHtmlWidgetMessage(
      {
        type: 'widget/mcp-ui',
        name: 'Fullscreen Widget',
        description: 'Widget that requests fullscreen mode.',
        html: FULLSCREEN_WIDGET_HTML,
        domain: 'https://teams.microsoft.com',
        securityPolicy: {
          connectDomains: [],
          resourceDomains: ['\'self\'', 'data:'],
          frameDomains: [],
          baseUriDomains: [],
        },
        permissions: {},
      },
      { before: 'This widget will request fullscreen mode:' }
    );
    await send(message);
    return;
  }

  // ---------------------------------------------------------------------------
  // [CONTRACT TEST] Widget with multiple tools
  // Tests that calltool dispatches correctly by tool name.
  // ---------------------------------------------------------------------------
  if (text === '/multi') {
    const message = buildHtmlWidgetMessage(
      {
        type: 'widget/mcp-ui',
        name: 'Multi-Tool Widget',
        description: 'Widget that calls multiple different tools.',
        html: MULTI_WIDGET_HTML,
        domain: 'https://teams.microsoft.com',
        securityPolicy: {
          connectDomains: ['https://teams.microsoft.com'],
          resourceDomains: ['\'self\'', 'data:'],
          frameDomains: [],
          baseUriDomains: [],
        },
        toolInput: {},
        toolOutput: {
          content: [{ type: 'text', text: 'Ready.' }],
          structuredContent: { tools: ['getTime', 'roll', 'echo'] },
          isError: false,
        },
        permissions: {},
      },
      { before: 'This widget has multiple tools to test dispatch:' }
    );
    await send(message);
    return;
  }

  // ---------------------------------------------------------------------------
  // [CONTRACT TEST] Raw markdown test - verifies extendedmarkdown format works
  // Uses buildHtmlWidgetMarkdown directly for more control.
  // ---------------------------------------------------------------------------
  if (text === '/raw') {
    const markdown = buildHtmlWidgetMarkdown(
      {
        type: 'widget/mcp-ui',
        name: 'Raw Test',
        description: 'Testing raw markdown assembly.',
        html: SIMPLE_WIDGET_HTML,
        domain: 'https://teams.microsoft.com',
      },
      { before: 'Text before widget.', after: 'Text after widget.' }
    );
    await send({ type: 'message', text: markdown, textFormat: 'extendedmarkdown' });
    return;
  }

  // ---------------------------------------------------------------------------
  // [CONTRACT TEST] Widget with permissions requested
  // Tests that the permissions field is accepted by the host.
  // ---------------------------------------------------------------------------
  if (text === '/permissions') {
    const message = buildHtmlWidgetMessage(
      {
        type: 'widget/mcp-ui',
        name: 'Permissions Widget',
        description: 'Widget requesting clipboard and geolocation.',
        html: SIMPLE_WIDGET_HTML,
        domain: 'https://teams.microsoft.com',
        securityPolicy: {
          connectDomains: [],
          resourceDomains: ['\'self\''],
          frameDomains: [],
          baseUriDomains: [],
        },
        permissions: {
          clipboardWrite: {},
          geolocation: {},
        },
      },
      { before: 'This widget requests permissions (clipboard + geolocation):' }
    );
    await send(message);
    return;
  }

  // [CONTRACT TEST] ui/open-link method
  if (text === '/openlink') {
    const message = buildHtmlWidgetMessage(
      {
        type: 'widget/mcp-ui',
        name: 'open-link-test',
        html: OPEN_LINK_WIDGET_HTML,
        domain: 'https://teams.microsoft.com',
      },
      { before: 'Widget with ui/open-link support (click a button to open a URL):' }
    );
    await send(message);
    return;
  }

  // [CONTRACT TEST] ui/update-model-context method
  if (text === '/context') {
    const message = buildHtmlWidgetMessage(
      {
        type: 'widget/mcp-ui',
        name: 'update-context-test',
        html: UPDATE_CONTEXT_WIDGET_HTML,
        domain: 'https://teams.microsoft.com',
      },
      { before: 'Widget with ui/update-model-context support:' }
    );
    await send(message);
    return;
  }

  // [CONTRACT TEST] Host context inspector - shows what hostContext is returned
  if (text === '/hostcontext') {
    const message = buildHtmlWidgetMessage(
      {
        type: 'widget/mcp-ui',
        name: 'host-context-inspector',
        html: HOST_CONTEXT_WIDGET_HTML,
        domain: 'https://teams.microsoft.com',
      },
      { before: 'Widget that inspects hostContext from ui/initialize:' }
    );
    await send(message);
    return;
  }

  // Default: show help
  if (text === '/help' || text === 'help') {
    await send(
      '**HTML Widget Test Commands:**\n\n' +
      '- `/simple` - Static widget (no callbacks)\n' +
      '- `/calltool` - Widget with onCallTool\n' +
      '- `/messageback` - Widget with onMessage\n' +
      '- `/fullscreen` - Widget requesting fullscreen\n' +
      '- `/multi` - Widget with multiple tools\n' +
      '- `/raw` - Raw markdown with before/after text\n' +
      '- `/permissions` - Widget requesting permissions\n' +
      '- `/openlink` - Widget with ui/open-link\n' +
      '- `/context` - Widget with ui/update-model-context\n' +
      '- `/hostcontext` - Inspect hostContext from initialize\n' +
      '- `/help` - This message'
    );
    return;
  }

  // Handle messageBack values from the messageback widget
  if (activity.value) {
    await send(`Received messageBack value: ${JSON.stringify(activity.value)}`);
    return;
  }

  await send('Send `/help` for available widget test commands.');
});

// ---------------------------------------------------------------------------
// [EXAMPLE] Handle htmlwidget/calltool invoke
// This is the typed handler for when a widget calls a tool on the bot.
// ---------------------------------------------------------------------------
app.on('widget.callTool', async ({ activity }) => {
  const { name, arguments: args } = activity.value;
  console.log(`[widget.callTool] tool="${name}" args=${JSON.stringify(args)}`);

  let callToolResult: IMcpUiCallToolResult;
  switch (name) {
    case 'refresh':
      callToolResult = {
        content: [{ type: 'text', text: 'Refreshed!' }],
        structuredContent: {
          counter: ((args as any)?.counter ?? 0) + 1,
          lastAction: 'refresh',
          timestamp: new Date().toISOString(),
        },
        isError: false,
      };
      break;

    case 'getTime':
      callToolResult = {
        content: [{ type: 'text', text: new Date().toLocaleTimeString() }],
        structuredContent: { time: new Date().toISOString() },
        isError: false,
      };
      break;

    case 'roll': {
      const sides = (args as any)?.sides ?? 6;
      const result = Math.floor(Math.random() * sides) + 1;
      callToolResult = {
        content: [{ type: 'text', text: `Rolled a ${result} (d${sides})` }],
        structuredContent: { result, sides },
        isError: false,
      };
      break;
    }

    case 'echo':
      callToolResult = {
        content: [{ type: 'text', text: JSON.stringify(args) }],
        structuredContent: args,
        isError: false,
      };
      break;

    default:
      callToolResult = {
        content: [{ type: 'text', text: `Unknown tool: ${name}` }],
        isError: true,
      };
      break;
  }

  console.log('[widget.callTool] result=', JSON.stringify(callToolResult));

  return {
    responseType: 'htmlwidget/calltoolresult',
    callToolResult,
  };
});

app.start(process.env.PORT || 3978).catch(console.error);
