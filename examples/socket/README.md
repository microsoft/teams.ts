# Socket Mode echo bot

A minimal echo bot that runs entirely over inbound **Socket Mode** and shows how
to observe the socket lifecycle.

Socket Mode lets a bot receive activities over a Teams backend service-negotiated
WebSocket instead of an HTTP messaging endpoint — so there's no public URL or dev
tunnel to expose for inbound delivery. Only inbound delivery changes; your
handlers and outbound sends are unaffected.

## What this sample shows

- **Enabling Socket Mode** — `new App({ socketMode: true })` for a socket-only
  app by default (no HTTP endpoint).
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

- **HTTP fallback is opt-in** — `fallbackToHttp: true` is permitted only for
  production bots and is generally not recommended. It starts a local HTTP
  receiver, but you must separately enable and configure the matching public
  messaging endpoint in Teams Developer Portal (TDP).
- **Classic bot identity only** — Socket Mode connects with the bot's MSA App Id.
  Agentic identities are not supported today.
