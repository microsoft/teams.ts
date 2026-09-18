import { InvokeResponse } from '@microsoft/teams.api';

import {
  buildAckReplyFrame,
  buildInvokeReplyFrame,
  isInvokeEnvelope,
  readEnvelopeActivity,
  readField,
  replyFrameBase,
} from './envelope';
import { SocketActivityEnvelope, SOCKET_MODE_PROTOCOL_VERSION } from './types';

describe('socket-mode envelope', () => {
  describe('readField', () => {
    it('reads camelCase and PascalCase interchangeably', () => {
      expect(readField({ envelopeId: 'a' }, 'envelopeId')).toBe('a');
      expect(readField({ EnvelopeId: 'b' }, 'envelopeId')).toBe('b');
      expect(readField({ other: 1 }, 'envelopeId')).toBeUndefined();
      expect(readField(null, 'envelopeId')).toBeUndefined();
    });
  });

  describe('readEnvelopeActivity', () => {
    it('reads the activity from payload or the activity alias', () => {
      expect(readEnvelopeActivity({ payload: { type: 'message' } } as any)?.type).toBe('message');
      expect(readEnvelopeActivity({ activity: { type: 'invoke' } } as any)?.type).toBe('invoke');
      expect(readEnvelopeActivity({} as SocketActivityEnvelope)).toBeUndefined();
    });

    it('ignores a malformed payload and falls back to a valid activity alias', () => {
      // A non-object / typeless payload must not be returned as a bogus activity,
      // nor suppress a valid `activity` alias on the same envelope.
      expect(readEnvelopeActivity({ payload: 'oops', activity: { type: 'message' } } as any)?.type)
        .toBe('message');
      expect(readEnvelopeActivity({ payload: { noType: true }, activity: { type: 'invoke' } } as any)?.type)
        .toBe('invoke');
    });

    it('returns undefined when neither payload nor activity is activity-shaped', () => {
      expect(readEnvelopeActivity({ payload: 'oops' } as any)).toBeUndefined();
      expect(readEnvelopeActivity({ payload: ['not', 'an', 'activity'] } as any)).toBeUndefined();
      expect(readEnvelopeActivity({ payload: { id: 1 } } as any)).toBeUndefined();
    });
  });

  describe('isInvokeEnvelope', () => {
    it('treats type=invoke without ack as an invoke', () => {
      expect(isInvokeEnvelope({ type: 'invoke' })).toBe(true);
    });

    it('classifies type=invoke as an invoke even when an ack is also requested', () => {
      // ackRequired is a delivery concern; it must not downgrade an invoke to a
      // one-way activity, which would drop the invoke status/body.
      expect(isInvokeEnvelope({ type: 'invoke', ackRequired: true })).toBe(true);
    });

    it('treats a non-invoke type as one-way', () => {
      expect(isInvokeEnvelope({ type: 'message' })).toBe(false);
      expect(isInvokeEnvelope({ type: 'message', ackRequired: true })).toBe(false);
    });

    it('falls back to the embedded activity type when the envelope has none', () => {
      expect(isInvokeEnvelope({ payload: { type: 'invoke' } } as any)).toBe(true);
      expect(isInvokeEnvelope({ payload: { type: 'message' } } as any)).toBe(false);
    });
  });

  describe('reply frames', () => {
    const env: SocketActivityEnvelope = { envelopeId: 'env-1', type: 'invoke' };

    it('maps an InvokeResponse into a versioned invoke reply frame', () => {
      const base = replyFrameBase(env, 'bot-123');
      const response: InvokeResponse = { status: 201, body: { echo: 'hi' } };
      const frame = buildInvokeReplyFrame(base, response);

      expect(frame.protocolVersion).toBe(SOCKET_MODE_PROTOCOL_VERSION);
      expect(frame.envelopeId).toBe('env-1');
      expect(frame.botKey).toBe('bot-123');
      expect(frame.status).toBe(201);
      expect(frame.body).toEqual({ echo: 'hi' });
    });

    it('defaults invoke status to 200 when the response omits it', () => {
      const base = replyFrameBase(env, 'bot-123');
      const frame = buildInvokeReplyFrame(base, { body: { ok: true } } as InvokeResponse);
      expect(frame.status).toBe(200);
    });

    it('builds a bodyless 200 acknowledgement for one-way activities', () => {
      const base = replyFrameBase(env, 'bot-123');
      const frame = buildAckReplyFrame(base);

      expect(frame.protocolVersion).toBe(SOCKET_MODE_PROTOCOL_VERSION);
      expect(frame.envelopeId).toBe('env-1');
      expect(frame.status).toBe(200);
      expect(frame.body).toBeUndefined();
    });
  });
});
