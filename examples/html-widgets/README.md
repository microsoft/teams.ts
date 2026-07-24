# HTML Widgets Example

This example bot demonstrates the HTML widget contract for Teams bots using the Teams SDK.

## Demo

The bot renders several HTML widgets in Teams.
Each command below maps to a widget that exercises part of the widget contract.

### Static rendering (`/simple`)

A static widget renders directly from markdown with no callbacks.

![HTML widget simple demo: a static widget card rendered in Teams](./assets/widget-simple.png)

### Tool call round-trip (`/calltool`)

Clicking the widget button calls a bot tool via an `htmlwidget/calltool` invoke, and the widget renders the returned result.

![HTML widget callTool demo: clicking Refresh calls the bot's refresh tool and renders the result](./assets/widget-calltool.gif)

### Multi-tool dispatch (`/multi`)

The widget exposes several buttons that each dispatch to a different bot tool, showing per-tool arguments and results.

![HTML widget multi-tool demo: a widget with multiple buttons dispatches to different bot tools](./assets/widget-multi.gif)

### messageBack round-trip (`/messageback`)

Clicking the widget button sends a `messageBack` to the bot, which echoes the received value.

![HTML widget messageBack demo: an interactive widget card sends a messageBack that the bot echoes](./assets/widget-messageback.gif)

### Update model context (`/context`)

The widget sends structured and text context to the model using `ui/update-model-context`.

![HTML widget context demo: a widget sends update-model-context and shows a success status](./assets/widget-context.png)

### Fullscreen display mode (`/fullscreen`)

The widget requests fullscreen mode from Teams and expands to fill the available space.

![HTML widget fullscreen demo: a widget expands into a fullscreen dialog](./assets/widget-fullscreen.gif)

### Payload validation (`/validate`)

The SDK validates the widget payload before sending and reports policy warnings.

![HTML widget validation demo: a widget reports a resourceDomains policy warning that was corrected before sending](./assets/widget-validate.png)

### Host context inspection (`/hostcontext`)

The widget reads the `hostContext` from the `ui/initialize` response.

![HTML widget host context demo: a widget inspects the host context from ui/initialize](./assets/widget-hostcontext.png)

## What it shows

| Command | Purpose | Widget callbacks |
|---------|---------|-----------------|
| `/simple` | Static widget rendering (before + after markdown) | None |
| `/calltool` | Widget calling bot tools | `htmlwidget/calltool` invoke |
| `/messageback` | Widget sending messageBack | `onMessage` |
| `/fullscreen` | Widget requesting display mode change | `onRequestDisplayMode` (client-side) |
| `/multi` | Multiple tool dispatch | `htmlwidget/calltool` with different tool names |
| `/openlink` | Widget opening links via host | `ui/open-link` |
| `/context` | Widget updating model context | `ui/update-model-context` |
| `/hostcontext` | Inspecting host context from initialize | `ui/initialize` response |
| `/validate` | Security policy validation demo | None |

## Architecture

```
Bot sends message:
  textFormat: 'extendedmarkdown'
  text: "...\n```html-widget\n{JSON payload}\n```"

Teams client:
  McpWidgetRenderer loads widget HTML in sandboxed iframe
  MCP Apps protocol provides tools/call via postMessage

Widget calls tool:
  postMessage -> McpWidgetRenderer -> htmlwidget/calltool invoke -> Bot

Bot returns (invoke response body):
  {
    responseType: 'htmlwidget/calltoolresult',
    callToolResult: { content: [...], structuredContent: {...}, isError: false }
  }
```

## Running

1. Copy credentials:
   ```
   cp ../../../bots/.env .env
   ```

2. Start a devtunnel and update the Azure Bot endpoint

3. Run the bot:
   ```
   npm run dev
   ```

4. In Teams, message the bot with `/help` to see available commands

## Note on widget HTML

The widget HTML in `src/widgets/` is static HTML for rendering verification.
Interactive behavior (callTool, messageBack, displayMode) requires the
`@modelcontextprotocol/ext-apps` SDK which is provided by the Teams widget host
page (`mcpwidget.html` on `widget-renderer.usercontent.microsoft`).

The bot-side code (`widget.callTool` handler in `src/index.ts`) is the primary
test target. It verifies that:
- The SDK's invoke route alias correctly matches `htmlwidget/calltool`
- The typed handler receives `{ name, arguments }` in `activity.value`
- The response body uses the `IHtmlWidgetCallToolResponse` wrapper format (`{ responseType: 'htmlwidget/calltoolresult', callToolResult: {...} }`)
