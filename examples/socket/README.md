# Socket Mode echo bot

A minimal echo bot that runs entirely over inbound **Socket Mode** and shows how
to observe the socket lifecycle.

Socket Mode lets a bot receive activities over a Teams backend service-negotiated
WebSocket instead of an HTTP messaging endpoint — so there's no public URL or dev
tunnel to expose for inbound delivery. Only inbound delivery changes; your
handlers and outbound sends are unaffected.

WebSocket is only recommended for use when developing agents.
Socket Mode bots should not be submitted to Marketplace for publishing.

## What this sample shows

- **Enabling Socket Mode** — `new App({ socketMode: true })` for WebSocket inbound delivery with no HTTP endpoint.
- **Multi-geo by default** — a single bot opens one connection per geo
  (`amer`, `emea`, `apac`) so it has inbound coverage across regions. Override
  with `geos: [...]` or point at a custom ring with `negotiateBaseUrl`.
- **Lifecycle events** — subscribing to `app.socketMode.events` for `ready`,
  `disconnected`, and `reconnected`. Each event carries the `geo` it relates to,
  since connections are per geo. Reconnects are automatic; the events are purely
  observational.
- **Status introspection** — `app.socketMode.status` (aggregate) and
  `app.socketMode.geoStatuses` / `geoList` (per geo).

## Run it

1. Copy `.env.example` to `.env` and fill in your bot's `CLIENT_ID`,
   `CLIENT_SECRET`, and `TENANT_ID` (the classic bot identity — its app id must
   match the bot's MSA App Id).
2. Install deps from the repo root and start the sample:

   ```sh
   npm install
   npm run dev --workspace @examples/socket
   ```

You should see per-geo `ready` logs as each connection comes up, then `you said
"..."` echoes for every message.

## Notes

- **No HTTP surface** — tabs, remote functions, OAuth callbacks, and other
  browser routes are unavailable in Socket Mode.
- **Canary endpoint** — the sample currently overrides `negotiateBaseUrl`
  because Socket Mode negotiate is available on the canary ring while the
  production default returns 503. Remove the override when production is
  enabled.
- **Classic bot identity only** — Socket Mode connects with the bot's MSA App Id.
  Agentic identities are not supported today.
