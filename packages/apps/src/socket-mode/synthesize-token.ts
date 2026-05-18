import { IToken } from '@microsoft/teams.api';

export type SynthesizeTokenOptions = {
  readonly clientId?: string;
  readonly tenantId?: string;
  readonly appDisplayName?: string;
  readonly serviceUrl: string;
  /** Epoch-ms expiry derived from the SignalR access token's expiresIn. */
  readonly expirationMs: number;
};

/**
 * Builds an IToken for activities arriving over Socket Mode.
 *
 * The platform validates the bot's bearer token once at POST /v3/websockets/connect.
 * Subsequent activity frames carry no per-activity JWT — we synthesize one so the
 * activity can re-enter App.onActivity unchanged.
 */
export function synthesizeToken(opts: SynthesizeTokenOptions): IToken {
  const { clientId, tenantId, appDisplayName, serviceUrl, expirationMs } = opts;
  return {
    appId: clientId ?? '',
    appDisplayName,
    tenantId,
    serviceUrl,
    from: 'azure',
    fromId: clientId ?? '',
    expiration: expirationMs,
    isExpired: (bufferMs = 5 * 60_000) => Date.now() + bufferMs >= expirationMs,
    toString: () => '<socket-mode-synthesized>',
  };
}
