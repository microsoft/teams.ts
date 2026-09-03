import { App } from '@microsoft/teams.apps';
import { ConsoleLogger } from '@microsoft/teams.common';

/**
 * Socket Mode echo bot.
 *
 * This sample shows how to run a bot entirely over inbound **Socket Mode** — no
 * public HTTP endpoint or dev tunnel required — and how to observe the socket
 * lifecycle. By default a single bot opens one connection per geo
 * (`amer`, `emea`, `apac`), so lifecycle events are reported per geo.
 */
const app = new App({
  logger: new ConsoleLogger('@examples/socket', { level: 'debug' }),

  // Socket-only: receive activities over the Teams backend service-negotiated
  // WebSocket with no HTTP messaging endpoint. Drop `fallbackToHttp: false` to
  // also stand up an HTTP endpoint alongside the socket (the experimental
  // default), in which case you still need a public URL/tunnel for HTTP.
  //
  // By default this connects to all three geos. To target specific geos (or a
  // single custom endpoint) set e.g. `geos: ['amer']`, or override the endpoint
  // with `negotiateBaseUrl`.
  socketMode: {
    fallbackToHttp: false,
    // geos: ['amer', 'emea', 'apac'], // the default

    // NOTE: Socket Mode negotiate is currently only available on the canary
    // ring — the production default (https://botapi.skype.com) returns 503
    // today. Remove this override once Socket Mode is enabled in production.
    negotiateBaseUrl: 'https://canary.botapi.skype.com',
  },
});

// --- Socket lifecycle events -------------------------------------------------
// `app.socketMode` is the inbound transport; subscribe to its events to observe
// each geo's connection independently. These are purely observational — inbound
// delivery keeps working across reconnects without any handler changes.

app.socketMode?.events.on('ready', ({ geo, frame }) => {
  app.log.info(`[socket] geo '${geo}' ready (connectionId=${frame.connectionId ?? 'n/a'})`);
  app.log.info(`[socket] aggregate status: ${app.socketMode?.status}`);
});

app.socketMode?.events.on('disconnected', ({ geo, error }) => {
  // Inbound delivery for this geo is paused while it reconnects; the other geos
  // keep serving. No action needed — the supervisor reconnects automatically.
  app.log.warn(`[socket] geo '${geo}' disconnected${error ? `: ${error.message}` : ''}; reconnecting…`);
});

app.socketMode?.events.on('reconnected', ({ geo }) => {
  app.log.info(`[socket] geo '${geo}' reconnected; inbound delivery resumed`);
});

// --- Bot logic ---------------------------------------------------------------
// Handlers are transport-agnostic: the exact same code works over HTTP or
// Socket Mode. Each activity is delivered over exactly one transport (socket or
// HTTP, never both), so no dedupe is required.
app.on('message', async ({ reply, activity }) => {
  await reply({ type: 'typing' });
  await reply(`you said "${activity.text}"`);
});

(async () => {
  await app.start();

  // Snapshot the per-geo status once we're up.
  app.log.info(`[socket] connected geos: ${app.socketMode?.geoList.join(', ')}`);
  for (const { geo, status } of app.socketMode?.geoStatuses ?? []) {
    app.log.info(`[socket]   ${geo}: ${status}`);
  }
})();
