import { App, ConfigurableHttpPlugin, ExpressAdapter } from '@microsoft/teams.apps';

// Create teams.ts app with ExpressAdapter
// This is functionally equivalent to using HttpPlugin, but demonstrates
// the explicit adapter pattern for consistency with other frameworks
export const app = new App({
  plugins: [
    new ConfigurableHttpPlugin(
      new ExpressAdapter(),
      { skipAuth: true }
    )
  ]
});

// Handle incoming messages
app.on('message', async ({ send, activity }) => {
  await send(`Echo from Express server: ${activity.text}`);
});

// Example: Access the underlying Express app to add custom routes
// const adapter = app.http.adapter as ExpressAdapter;
// adapter.get('/health', (req, res) => res.json({ status: 'ok' }));
