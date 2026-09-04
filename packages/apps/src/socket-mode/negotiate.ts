import { ILogger } from '@microsoft/teams.common';

import { NegotiateResult } from './types';

/**
 * Dependencies for {@link negotiate}. Kept explicit so the call is unit-testable
 * without a live Teams backend service endpoint.
 */
export type NegotiateDeps = {
  /** Fully-resolved negotiate URL (`{base}/v3/websockets/connect`). */
  readonly negotiateUrl: string;
  /** Acquire the Bot Framework access token, reusing the app's credentials. */
  readonly getBotToken: () => Promise<string>;
  /**
   * Abort the negotiate request after this many milliseconds so a bad
   * `negotiateBaseUrl` (or a hung endpoint) can't leave the caller pending
   * forever. Defaults to {@link DEFAULT_NEGOTIATE_TIMEOUT_MS}.
   */
  readonly timeoutMs?: number;
  readonly log?: ILogger;
};

/** Default negotiate request timeout — bounds a hung or misconfigured endpoint. */
export const DEFAULT_NEGOTIATE_TIMEOUT_MS = 15_000;

/**
 * Reject a negotiate URL that isn't HTTPS. The negotiate request carries a Bot
 * Framework JWT in the `authorization` header; sending it over plaintext `http`
 * would leak that token. A narrow exception is made for loopback hosts
 * (`localhost`/`127.0.0.1`/`::1`) so local test endpoints still work.
 */
export function assertSecureNegotiateUrl(negotiateUrl: string): void {
  let parsed: URL;
  try {
    parsed = new URL(negotiateUrl);
  } catch {
    throw new Error(`Socket Mode negotiate URL is not a valid URL: ${negotiateUrl}`);
  }
  if (parsed.protocol === 'https:') return;
  const host = parsed.hostname;
  const isLoopback = host === 'localhost' || host === '127.0.0.1' || host === '::1' || host === '[::1]';
  if (parsed.protocol === 'http:' && isLoopback) return;
  throw new Error(
    `Socket Mode negotiate URL must use https (got ${parsed.protocol}//${host}); ` +
    'the negotiate request carries a bearer token.'
  );
}

/**
 * Error thrown by {@link negotiate} when the service returns a non-2xx status.
 * Carries the parsed `Retry-After` (in milliseconds) when the service asked the
 * caller to back off — typically on `429` or `503` — so the reconnect
 * supervisor can honor it instead of using its own back-off.
 */
export class NegotiateError extends Error {
  constructor(message: string, readonly retryAfterMs?: number) {
    super(message);
    this.name = 'NegotiateError';
  }
}

/**
 * Parse an HTTP `Retry-After` header (delta-seconds or an HTTP date) into
 * milliseconds, returning `undefined` when absent or unparseable.
 */
function parseRetryAfterMs(res: { headers?: { get?: (name: string) => string | null } }): number | undefined {
  const raw = res.headers?.get?.('retry-after');
  if (!raw) return undefined;
  const seconds = Number(raw);
  if (Number.isFinite(seconds)) return Math.max(0, seconds * 1000);
  const date = Date.parse(raw);
  if (Number.isFinite(date)) return Math.max(0, date - Date.now());
  return undefined;
}

/**
 * Perform the Teams backend service Socket Mode handshake: `POST {negotiateUrl}` authenticated
 * with a Bot Framework JWT minted from the bot's own credentials. Teams backend service returns
 * the Azure SignalR `url` + `accessToken` to open the socket against.
 *
 * @throws {NegotiateError} if Teams backend service returns a non-2xx response.
 * @throws if the bot token is missing (the app has no credentials configured).
 */
export async function negotiate(deps: NegotiateDeps): Promise<NegotiateResult> {
  const fetchFn = globalThis.fetch;
  if (typeof fetchFn !== 'function') {
    throw new Error('Socket Mode negotiate requires a global `fetch` (Node 20+).');
  }

  const token = await deps.getBotToken();
  if (!token) {
    throw new Error(
      'Socket Mode negotiate has no bot token: configure app credentials ' +
      '(clientId/clientSecret, managed identity, or a token provider).'
    );
  }

  assertSecureNegotiateUrl(deps.negotiateUrl);

  deps.log?.debug(`socket-mode: negotiate POST ${deps.negotiateUrl}`);

  const res = await fetchFn(deps.negotiateUrl, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${token}`,
    },
    // `content-length` is a forbidden/managed header the runtime sets itself;
    // this POST has no body, so we omit it. A timeout bounds a hung endpoint.
    signal: AbortSignal.timeout(deps.timeoutMs ?? DEFAULT_NEGOTIATE_TIMEOUT_MS),
  });

  if (!res.ok) {
    const body = (await res.text().catch(() => '')).slice(0, 500);
    // Logged at debug because this failure is thrown and reported by the caller
    // (App.onError); logging it here as error too would double-report it.
    deps.log?.debug(
      `socket-mode: negotiate failed status=${res.status} body=${body || '(empty)'}`
    );
    throw new NegotiateError(
      `Socket Mode negotiate failed: HTTP ${res.status} ${body}`,
      parseRetryAfterMs(res)
    );
  }

  const json = (await res.json()) as Partial<NegotiateResult>;
  if (!json.url || !json.accessToken) {
    throw new Error('Socket Mode negotiate response missing url/accessToken');
  }

  deps.log?.debug(
    `socket-mode: negotiate ok status=${res.status} expiresIn=${json.expiresIn ?? 0}`
  );

  return {
    url: json.url,
    accessToken: json.accessToken,
    expiresIn: json.expiresIn ?? 0,
  };
}
