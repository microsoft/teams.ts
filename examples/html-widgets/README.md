# HTML Widgets Example

This example bot demonstrates the HTML widget contract for Teams bots using the Teams SDK.

## What it tests

| Command | Purpose | Widget callbacks |
|---------|---------|-----------------|
| `/simple` | Static widget rendering | None |
| `/calltool` | Widget calling bot tools | `htmlwidget/calltool` invoke |
| `/messageback` | Widget sending messageBack | `onMessage` |
| `/fullscreen` | Widget requesting display mode change | `onRequestDisplayMode` (client-side) |
| `/multi` | Multiple tool dispatch | `htmlwidget/calltool` with different tool names |
| `/raw` | Direct markdown helper usage | None |
| `/permissions` | Widget requesting permissions | None (host-enforced) |

## Architecture

```
Bot sends message:
  textFormat: 'extendedmarkdown'
  text: "...\n```html-widget\n{JSON payload}\n```"

Teams client:
  McpWidgetRenderer loads widget HTML in sandboxed iframe
  @modelcontextprotocol/ext-apps SDK provides callServerTool API

Widget calls tool:
  ext-apps SDK -> postMessage -> McpWidgetRenderer -> htmlwidget/calltool invoke -> Bot

Bot returns:
  { status: 200, body: { content: [...], structuredContent: {...}, isError: false } }
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
- The response body format (`McpUiCallToolResult`) is accepted by the client
