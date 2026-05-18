import { Client as HttpClient } from '@microsoft/teams.common';

/**
 * Route variant for POST /v3/websockets/connect.
 *
 * - `global`: `POST /v3/websockets/connect`
 * - `regional`: `POST /{cloud}/v3/websockets/connect`
 * - `regional-tenant`: `POST /{cloud}/{tenantId}/v3/websockets/connect`
 */
export type NegotiateRoute =
  | { kind: 'global' }
  | { kind: 'regional'; cloud: string }
  | { kind: 'regional-tenant'; cloud: string; tenantId: string };

export type NegotiateResult = {
  /** Opaque WSS URL returned by Azure SignalR via APX. */
  readonly url: string;
  /** Client access token for the WSS connect. */
  readonly accessToken: string;
  /** APX-generated session id — include in logs for support correlation. */
  readonly sessionId: string;
  /** Token lifetime in seconds — re-negotiate before this expires. */
  readonly expiresIn: number;
};

/** Returned when APX explicitly signals socket mode is unavailable (503). */
export class NegotiateUnavailableError extends Error {
  readonly status: number;
  constructor(status: number, message: string) {
    super(message);
    this.name = 'NegotiateUnavailableError';
    this.status = status;
  }
}

export type NegotiateOptions = {
  readonly client: HttpClient;
  readonly serviceUrl: string;
  readonly route: NegotiateRoute;
  /** Bot Framework JWT as a raw string. */
  readonly bearerToken: string;
};

function routePath(route: NegotiateRoute): string {
  switch (route.kind) {
    case 'global':
      return '/v3/websockets/connect';
    case 'regional':
      return `/${encodeURIComponent(route.cloud)}/v3/websockets/connect`;
    case 'regional-tenant':
      return `/${encodeURIComponent(route.cloud)}/${encodeURIComponent(route.tenantId)}/v3/websockets/connect`;
  }
}

function trimTrailingSlash(s: string): string {
  return s.replace(/\/+$/, '');
}

/**
 * Calls APX's negotiate endpoint and returns the SignalR connect coordinates.
 *
 * Throws `NegotiateUnavailableError` when APX returns 503 — the caller can decide
 * whether to fall back to HTTP delivery or rethrow.
 */
export async function negotiate(opts: NegotiateOptions): Promise<NegotiateResult> {
  const { client, serviceUrl, route, bearerToken } = opts;
  const url = `${trimTrailingSlash(serviceUrl)}${routePath(route)}`;

  try {
    const res = await client.post<NegotiateResult>(url, undefined, {
      token: bearerToken,
    });
    return res.data;
  } catch (err: unknown) {
    const e = err as { response?: { status?: number; data?: { error?: string } }; message?: string };
    const status = e.response?.status;
    const message = e.response?.data?.error ?? e.message ?? 'Negotiate failed';
    if (status === 503) {
      throw new NegotiateUnavailableError(503, message);
    }
    throw err;
  }
}
