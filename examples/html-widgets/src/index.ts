/**
 * HTML Widgets Example Bot
 *
 * This example demonstrates the full HTML widget capabilities for Teams bots.
 * Each command shows a different widget feature that developers can use as
 * a reference for building their own widget-enabled bots.
 */

import { IMcpUiCallToolResult } from '@microsoft/teams.api';
import { App, buildHtmlWidgetMarkdown, buildHtmlWidgetMessage, validateSecurityPolicy } from '@microsoft/teams.apps';
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
// Simple static widget - no callbacks
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
      { before: 'Here is a simple static widget:', after: 'No callbacks needed for static content.' }
    );
    await send(message);

    // Alternative: use buildHtmlWidgetMarkdown for more control over the activity
    // const markdown = buildHtmlWidgetMarkdown(payload, { before: '...' });
    // await send({ type: 'message', text: markdown, textFormat: 'extendedmarkdown' });
    return;
  }

  // Widget with onCallTool callback
  // The widget calls tools on the bot and re-renders with the result.
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

  // Widget with onMessage (messageBack) callback
  // Tests that the widget can send messageBack to the bot.
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

  // Widget requesting fullscreen display mode
  // Tests onRequestDisplayMode with "fullscreen" value.
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

  // Widget with multiple tools
  // Tests that calltool dispatches correctly by tool name.
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

  // Widget using ui/open-link
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

  // Widget using ui/update-model-context
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

  // Host context inspector - shows hostContext from ui/initialize
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

  // Security policy validation
  // Demonstrates validateSecurityPolicy catching mismatched references.
  // This is a dev-time audit tool, not a security boundary - the browser's
  // CSP enforcement is the real protection. Use debugCspViolations for runtime.
  if (text === '/validate') {
    const htmlWithExternalRefs = `
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto">
      <div style="font-family: Roboto, sans-serif; padding: 16px;">
        <h2>Validation Demo</h2>
        <p>This widget was validated before sending.</p>
      </div>`;

    // Step 1: validate against a restrictive policy to catch issues
    const strictPolicy = {
      connectDomains: [],
      resourceDomains: ['\'self\'', 'data:'],
      frameDomains: [],
      baseUriDomains: [],
    };
    const warnings = validateSecurityPolicy(htmlWithExternalRefs, strictPolicy);

    // Step 2: fix the policy based on warnings, then build the widget
    const correctedPolicy = {
      ...strictPolicy,
      resourceDomains: [...strictPolicy.resourceDomains, 'https://fonts.googleapis.com'],
    };
    const warningText = warnings
      .map((w) => `- **${w.source}**: \`${w.url}\` not in \`${w.policyField}\``)
      .join('\n');
    const markdown = buildHtmlWidgetMarkdown(
      {
        type: 'widget/mcp-ui',
        name: 'Validated Widget',
        description: 'Widget built after security policy validation.',
        html: htmlWithExternalRefs,
        domain: 'https://teams.microsoft.com',
        securityPolicy: correctedPolicy,
      },
      {
        before:
          `**Validation found ${warnings.length} warning(s):**\n\n` +
          warningText + '\n\n' +
          'Policy was corrected before sending:',
      }
    );
    await send({ type: 'message', text: markdown, textFormat: 'extendedmarkdown' });
    return;
  }

  // Default: show help
  if (text === '/help' || text === 'help') {
    await send({
      type: 'message',
      textFormat: 'markdown',
      text:
        '**HTML Widget Test Commands:**\n\n' +
        '- `/simple` - Static widget (no callbacks)\n' +
        '- `/calltool` - Widget with onCallTool\n' +
        '- `/messageback` - Widget with onMessage\n' +
        '- `/fullscreen` - Widget requesting fullscreen\n' +
        '- `/multi` - Widget with multiple tools\n' +
        '- `/openlink` - Widget with ui/open-link\n' +
        '- `/context` - Widget with ui/update-model-context\n' +
        '- `/hostcontext` - Inspect hostContext from initialize\n' +
        '- `/validate` - Security policy validation demo\n' +
        '- `/help` - This message',
    });
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
// Handle htmlwidget/calltool invoke
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
