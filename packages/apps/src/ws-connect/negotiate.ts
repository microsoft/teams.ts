import { ILogger } from '@microsoft/teams.common';

import { NegotiateResult } from './types';

/**
 * Dependencies for {@link negotiate}. Kept explicit so the call is unit-testable
 * without a live APX endpoint (pass a `fetchImpl` stub).
 */
export type NegotiateDeps = {
  /** Fully-resolved negotiate URL (`{base}/v3/websockets/connect`). */
  readonly negotiateUrl: string;
  /**
   * Acquire the Bot Framework access token. This reuses the app's existing
   * credentials — Socket Mode does not introduce a second app-level token.
   */
  readonly getBotToken: () => Promise<string>;
  readonly log?: ILogger;
  /** Injectable `fetch` for tests. Defaults to the global `fetch`. */
  readonly fetchImpl?: typeof fetch;
};

/**
 * Perform the APX Socket Mode handshake: `POST {negotiateUrl}` authenticated
 * with a Bot Framework JWT minted from the bot's own credentials. APX returns
 * the Azure SignalR `url` + `accessToken` to open the socket against.
 *
 * @throws if the bot token is missing (the app has no credentials configured)
 * or APX returns a non-2xx response.
 */
export async function negotiate(deps: NegotiateDeps): Promise<NegotiateResult> {
  const fetchImpl = deps.fetchImpl ?? globalThis.fetch;
  if (typeof fetchImpl !== 'function') {
    throw new Error(
      'Socket Mode negotiate requires a global `fetch` (Node 20+) or an explicit fetchImpl.'
    );
  }

  const token = await deps.getBotToken();
  if (!token) {
    throw new Error(
      'Socket Mode negotiate has no bot token: configure app credentials ' +
      '(clientId/clientSecret, managed identity, or a token provider).'
    );
  }

  deps.log?.debug(`ws-connect negotiate >> POST ${deps.negotiateUrl}`);

  const res = await fetchImpl(deps.negotiateUrl, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${token}`,
      'content-length': '0',
    },
  });

  if (!res.ok) {
    const body = await res.text().catch(() => '');
    deps.log?.error(
      `ws-connect negotiate << FAIL status=${res.status} body=${body || '(empty)'}`
    );
    throw new Error(`Socket Mode negotiate failed: HTTP ${res.status} ${body}`);
  }

  const json = (await res.json()) as Partial<NegotiateResult>;
  if (!json.url || !json.accessToken) {
    throw new Error('Socket Mode negotiate response missing url/accessToken');
  }

  deps.log?.debug(
    `ws-connect negotiate << OK status=${res.status} expiresIn=${json.expiresIn ?? 0}`
  );

  return {
    url: json.url,
    accessToken: json.accessToken,
    expiresIn: json.expiresIn ?? 0,
  };
}
