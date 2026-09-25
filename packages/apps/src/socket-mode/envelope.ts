import { Activity } from '@microsoft/teams.api';

import {
  ReplyFrame,
  SocketActivityEnvelope,
  SOCKET_MODE_PROTOCOL_VERSION,
} from './types';

/**
 * Read a field from a Teams backend service-serialized object case-insensitively. Teams backend service may encode
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
 * Thrown by {@link assertEnvelopeMetadata} when an inbound envelope's delivery
 * metadata does not match the Socket Mode envelope contract.
 *
 * @experimental This API is in preview and may change in the future.
 */
export class EnvelopeError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'EnvelopeError';
  }
}

/**
 * Validate the typed delivery metadata on an inbound envelope, accepting
 * camelCase or PascalCase. `botKey` must be a string and `deadlineMs` an
 * integer when present (`null`/absent are allowed); `headers` is not validated.
 * The activity itself is shape-checked separately by
 * {@link readEnvelopeActivity}.
 *
 * @throws {EnvelopeError} when the envelope is not an object or a field is malformed.
 */
export function assertEnvelopeMetadata(
  value: unknown
): asserts value is SocketActivityEnvelope {
  if (value == null || typeof value !== 'object' || Array.isArray(value)) {
    throw new EnvelopeError('Socket Mode activity envelope must be an object');
  }
  const botKey = readField(value, 'botKey');
  if (botKey != null && typeof botKey !== 'string') {
    throw new EnvelopeError('Socket Mode activity envelope botKey must be a string');
  }
  const deadlineMs = readField(value, 'deadlineMs');
  if (deadlineMs != null && !Number.isInteger(deadlineMs)) {
    throw new EnvelopeError('Socket Mode activity envelope deadlineMs must be an integer');
  }
}

/**
 * Whether a value is shaped like a Bot Framework {@link Activity}: a non-null,
 * non-array object carrying a string `type`. Used to reject a malformed
 * `payload` so it can't be returned as a bogus activity or suppress a valid
 * `activity` alias on the same envelope.
 */
export function isActivityShaped(value: unknown): value is Activity {
  return (
    value != null &&
    typeof value === 'object' &&
    !Array.isArray(value) &&
    typeof (value as { type?: unknown }).type === 'string'
  );
}

/**
 * Extract the Bot Framework {@link Activity} from an inbound envelope. Teams backend service
 * carries it under `payload` (or `activity` on some builds). Each candidate is
 * validated with {@link isActivityShaped}, so a malformed `payload` falls
 * through to the `activity` alias instead of masking it.
 */
export function readEnvelopeActivity(env: SocketActivityEnvelope): Activity | undefined {
  const payload = readField(env, 'payload');
  if (isActivityShaped(payload)) return payload;
  const activity = readField(env, 'activity');
  if (isActivityShaped(activity)) return activity;
  return undefined;
}

/**
 * Whether an envelope represents an invoke activity — which expects a full
 * result over client results — versus a one-way activity, which expects a
 * post-handler delivery acknowledgement.
 *
 * Classification is by activity type only: an envelope is an invoke when its
 * `type` is `"invoke"`, falling back to the embedded activity's own `type` when
 * the envelope carries none. `ackRequired` is a delivery concern (whether the
 * caller wants a delivery ack) and deliberately does not affect this shape — an
 * invoke must still return its status/body even when an ack was also requested,
 * otherwise the invoke result would be silently dropped.
 */
export function isInvokeEnvelope(env: SocketActivityEnvelope): boolean {
  const type = String(readField(env, 'type') ?? '').toLowerCase();
  if (type === 'invoke') return true;
  if (type) return false;
  // No envelope-level type: fall back to the embedded activity type.
  const activity = readEnvelopeActivity(env);
  return String(activity?.type ?? '').toLowerCase() === 'invoke';
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
 * @param botKey the bot's client id, echoed back for Teams backend service routing/validation.
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
 * result. The invoke status/body are returned to Teams backend service over client results.
 */
export function buildInvokeReplyFrame(base: ReplyFrameBase, response: ReplyResult): ReplyFrame {
  return {
    protocolVersion: SOCKET_MODE_PROTOCOL_VERSION,
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
    protocolVersion: SOCKET_MODE_PROTOCOL_VERSION,
    envelopeId: base.envelopeId,
    botKey: base.botKey,
    status,
    recvAt: base.recvAt,
    ts: Date.now(),
  };
}
