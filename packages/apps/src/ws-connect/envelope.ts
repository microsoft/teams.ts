import { Activity } from '@microsoft/teams.api';

import {
  ReplyFrame,
  SocketActivityEnvelope,
  WS_CONNECT_PROTOCOL_VERSION,
} from './types';

/**
 * Read a field from an APX-serialized object case-insensitively. APX may encode
 * frames with either camelCase or PascalCase depending on the hub protocol, so
 * every envelope read goes through this to stay robust to casing changes.
 */
export function readField<T = unknown>(obj: unknown, name: string): T | undefined {
  if (obj == null || typeof obj !== 'object') return undefined;
  const record = obj as Record<string, unknown>;
  if (record[name] !== undefined) return record[name] as T;
  const cap = name.charAt(0).toUpperCase() + name.slice(1);
  return record[cap] as T | undefined;
}

/**
 * Extract the Bot Framework {@link Activity} from an inbound envelope. APX
 * carries it under `payload` (or `activity` on some builds).
 */
export function readEnvelopeActivity(env: SocketActivityEnvelope): Activity | undefined {
  const payload = readField(env, 'payload') ?? readField(env, 'activity');
  return payload as Activity | undefined;
}

/**
 * Whether an envelope represents an invoke activity — which expects a full
 * result over client results — versus a one-way activity, which expects a
 * post-handler delivery acknowledgement.
 *
 * An envelope is treated as an invoke when its `type` is `"invoke"` and it does
 * not request an ack. As a fallback (APX builds that only set the activity
 * type), the embedded activity's own `type` is also checked.
 */
export function isInvokeEnvelope(env: SocketActivityEnvelope): boolean {
  const type = String(readField(env, 'type') ?? '').toLowerCase();
  const ackRequired = Boolean(readField(env, 'ackRequired'));
  if (type === 'invoke') return !ackRequired;
  if (type) return false;
  // No envelope-level type: fall back to the embedded activity type.
  const activity = readEnvelopeActivity(env);
  return String(activity?.type ?? '').toLowerCase() === 'invoke' && !ackRequired;
}

/**
 * Fields shared by every reply frame the bot returns, resolved once per
 * envelope.
 */
export type ReplyFrameBase = {
  readonly envelopeId?: string;
  readonly botKey?: string;
  readonly recvAt: number;
};

/**
 * Resolve the common reply-frame fields for an inbound envelope.
 * @param botKey the bot's client id, echoed back for APX routing/validation.
 */
export function replyFrameBase(env: SocketActivityEnvelope, botKey?: string): ReplyFrameBase {
  return {
    envelopeId: readField<string>(env, 'envelopeId'),
    botKey,
    recvAt: Date.now(),
  };
}

/**
 * The subset of a processed-activity result the reply builders need. An
 * {@link InvokeResponse} satisfies this shape, so the socket server can build a
 * reply frame from whatever the app pipeline returns without depending on HTTP.
 */
export type ReplyResult = {
  /** HTTP-style status; defaults to 200 when omitted. */
  readonly status?: number;
  /** Optional response body (returned only for invoke replies). */
  readonly body?: unknown;
};

/**
 * Build the reply frame for an invoke activity from the pipeline's processed
 * result. The invoke status/body are returned to APX over client results.
 */
export function buildInvokeReplyFrame(base: ReplyFrameBase, response: ReplyResult): ReplyFrame {
  return {
    protocolVersion: WS_CONNECT_PROTOCOL_VERSION,
    envelopeId: base.envelopeId,
    botKey: base.botKey,
    status: response.status ?? 200,
    body: response.body,
    recvAt: base.recvAt,
    ts: Date.now(),
  };
}

/**
 * Build the post-handler acknowledgement frame for a one-way activity. Emitted
 * only after the handler pipeline has run, so it doubles as a "processed"
 * signal — any content reply the handler produced was already sent over HTTP.
 *
 * @param status delivery status to report; defaults to 200. Passing the
 *   processed result's status lets a failed handler surface as a non-200 ack.
 */
export function buildAckReplyFrame(base: ReplyFrameBase, status: number = 200): ReplyFrame {
  return {
    protocolVersion: WS_CONNECT_PROTOCOL_VERSION,
    envelopeId: base.envelopeId,
    botKey: base.botKey,
    status,
    recvAt: base.recvAt,
    ts: Date.now(),
  };
}
