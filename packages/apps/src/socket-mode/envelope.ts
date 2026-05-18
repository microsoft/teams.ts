/**
 * Wire envelope sent from APX over the Azure SignalR socket.
 * Method name on the hub is `"activity"` — see SocketModeDispatcher.cs on the platform side.
 */
export interface ISocketActivityEnvelope {
  /** Frame discriminator. v1 only emits `"activity"`. Future: `ping`, `ack`, `disconnect`. */
  readonly type: string;
  /** Unique per frame; the bot should log this and use it for dedup. */
  readonly envelopeId: string;
  /** APX correlation vector — log on every frame for cross-service traceability. */
  readonly cv?: string;
  /** The Bot Framework Activity JSON. */
  readonly payload: unknown;
}

export function isActivityEnvelope(v: unknown): v is ISocketActivityEnvelope {
  if (v == null || typeof v !== 'object') return false;
  const e = v as Record<string, unknown>;
  return (
    typeof e.type === 'string' &&
    typeof e.envelopeId === 'string' &&
    e.payload != null
  );
}
