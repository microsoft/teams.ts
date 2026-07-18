import { Client } from '@microsoft/teams.common';
import { SpanKind } from '@opentelemetry/api';
import type { Span, Tracer } from '@opentelemetry/api';

import { MessageActivity, MessageActivityInput, TypingActivity, TypingActivityInput } from '../../activities';
import {
  getTeamsApiTracer,
  recordTeamsApiException,
  recordTeamsApiOutboundCall,
  recordTeamsApiOutboundError
} from '../../diagnostics/helpers';

import { ConversationActivityClient } from './activity';

jest.mock('../../diagnostics/helpers', () => ({
  getTeamsApiTracer: jest.fn(),
  recordTeamsApiException: jest.fn(),
  recordTeamsApiOutboundCall: jest.fn(),
  recordTeamsApiOutboundError: jest.fn(),
}));

describe('ConversationActivityClient', () => {
  const span = {
    setAttribute: jest.fn(),
    recordException: jest.fn(),
    setStatus: jest.fn(),
    end: jest.fn(),
  } as unknown as Span;
  const startActiveSpan = jest.fn();
  const tracer = { startActiveSpan } as unknown as Tracer;

  beforeEach(() => {
    jest.clearAllMocks();
    jest.mocked(getTeamsApiTracer).mockReturnValue(tracer);
    startActiveSpan.mockImplementation((_name: string, _options: unknown, callback: (span: Span) => unknown) =>
      callback(span)
    );
  });

  it('should use existing client', async () => {
    const http = new Client();
    const client = new ConversationActivityClient('', http);
    const spy = jest.spyOn(http, 'post').mockResolvedValueOnce({});

    await client.create('1', {
      type: 'message',
      text: 'hi',
    });

    expect(spy).toHaveBeenCalledWith('/v3/conversations/1/activities', {
      type: 'message',
      text: 'hi',
    });
  });

  it('should use client options', async () => {
    const client = new ConversationActivityClient('', {});
    const spy = jest.spyOn(client.http, 'post').mockResolvedValueOnce({});

    await client.create('1', {
      type: 'message',
      text: 'hi',
    });

    expect(spy).toHaveBeenCalledWith('/v3/conversations/1/activities', {
      type: 'message',
      text: 'hi',
    });
  });

  it('should create', async () => {
    const client = new ConversationActivityClient('');
    const spy = jest.spyOn(client.http, 'post').mockResolvedValueOnce({});

    await client.create('1', {
      type: 'message',
      text: 'hi',
    });

    expect(spy).toHaveBeenCalledWith('/v3/conversations/1/activities', {
      type: 'message',
      text: 'hi',
    });
  });

  it('should use normalized constructor serviceUrl', async () => {
    const client = new ConversationActivityClient('https://default.service/');
    const spy = jest.spyOn(client.http, 'post').mockResolvedValueOnce({});

    await client.create('1', { type: 'message', text: 'hi' });

    expect(spy).toHaveBeenCalledWith(
      'https://default.service/v3/conversations/1/activities',
      { type: 'message', text: 'hi' }
    );
  });

  it('should convert legacy message activity builders before create', async () => {
    const client = new ConversationActivityClient('');
    const spy = jest.spyOn(client.http, 'post').mockResolvedValueOnce({});

    await client.create(
      '1',
      new MessageActivity('hi')
        .withId('activity-id')
        .withFrom({ id: 'bot-id', name: 'Bot', role: 'bot' })
        .withRecipient({ id: 'user-id', name: 'User', role: 'user' })
        .withConversation({ id: 'conversation-id', conversationType: 'personal' })
        .withChannelId('msteams')
        .withServiceUrl('https://service.url')
    );

    const body = spy.mock.calls[0][1] as Record<string, unknown>;
    expect(body).toEqual(expect.objectContaining({
      type: 'message',
      text: 'hi',
      id: 'activity-id',
      recipient: { id: 'user-id', name: 'User', role: 'user', isTargeted: undefined },
    }));
    expect(body).not.toHaveProperty('from');
    expect(body).not.toHaveProperty('conversation');
    expect(body).not.toHaveProperty('channelId');
    expect(body).not.toHaveProperty('serviceUrl');
  });

  it('should serialize message input extension fields', async () => {
    const client = new ConversationActivityClient('');
    const spy = jest.spyOn(client.http, 'post').mockResolvedValueOnce({});

    await client.create(
      '1',
      new MessageActivityInput('hi', {
        summary: 'fallback text',
        deliveryMode: 'ephemeral',
        value: { scenario: 'dynamics' },
      })
    );

    expect(spy).toHaveBeenCalledWith('/v3/conversations/1/activities', {
      type: 'message',
      text: 'hi',
      summary: 'fallback text',
      deliveryMode: 'ephemeral',
      value: { scenario: 'dynamics' },
    });
  });

  it('should preserve extension fields when converting legacy message activity builders', async () => {
    const client = new ConversationActivityClient('');
    const spy = jest.spyOn(client.http, 'post').mockResolvedValueOnce({});

    await client.create(
      '1',
      new MessageActivity('hi', {
        summary: 'fallback text',
        deliveryMode: 'ephemeral',
        value: { scenario: 'dynamics' },
      })
        .withFrom({ id: 'bot-id', name: 'Bot', role: 'bot' })
        .withConversation({ id: 'conversation-id', conversationType: 'personal' })
        .withChannelId('msteams')
        .withServiceUrl('https://service.url')
    );

    const body = spy.mock.calls[0][1] as Record<string, unknown>;
    expect(body).toEqual(expect.objectContaining({
      type: 'message',
      text: 'hi',
      summary: 'fallback text',
      deliveryMode: 'ephemeral',
      value: { scenario: 'dynamics' },
    }));
    expect(body).not.toHaveProperty('from');
    expect(body).not.toHaveProperty('conversation');
    expect(body).not.toHaveProperty('channelId');
    expect(body).not.toHaveProperty('serviceUrl');
  });

  it('should convert legacy typing activity builders before create', async () => {
    const client = new ConversationActivityClient('');
    const spy = jest.spyOn(client.http, 'post').mockResolvedValueOnce({});

    await client.create(
      '1',
      new TypingActivity()
        .withId('activity-id')
        .withFrom({ id: 'bot-id', name: 'Bot', role: 'bot' })
        .withRecipient({ id: 'user-id', name: 'User', role: 'user' })
        .withConversation({ id: 'conversation-id', conversationType: 'personal' })
        .withChannelId('msteams')
        .withServiceUrl('https://service.url')
    );

    const body = spy.mock.calls[0][1] as Record<string, unknown>;
    expect(body).toEqual(expect.objectContaining({
      type: 'typing',
      id: 'activity-id',
      recipient: { id: 'user-id', name: 'User', role: 'user', isTargeted: undefined },
    }));
    expect(body).not.toHaveProperty('from');
    expect(body).not.toHaveProperty('conversation');
    expect(body).not.toHaveProperty('channelId');
    expect(body).not.toHaveProperty('serviceUrl');
  });

  it('should serialize typing input extension fields', async () => {
    const client = new ConversationActivityClient('');
    const spy = jest.spyOn(client.http, 'post').mockResolvedValueOnce({});

    await client.create(
      '1',
      new TypingActivityInput({
        text: 'stream chunk',
        value: { scenario: 'streaming' },
      })
    );

    expect(spy).toHaveBeenCalledWith('/v3/conversations/1/activities', {
      type: 'typing',
      text: 'stream chunk',
      value: { scenario: 'streaming' },
    });
  });

  it('should preserve extension fields when converting legacy typing activity builders', async () => {
    const client = new ConversationActivityClient('');
    const spy = jest.spyOn(client.http, 'post').mockResolvedValueOnce({});

    await client.create(
      '1',
      Object.assign(new TypingActivity({ text: 'stream chunk' }), {
        value: { scenario: 'streaming' },
      })
        .withFrom({ id: 'bot-id', name: 'Bot', role: 'bot' })
        .withConversation({ id: 'conversation-id', conversationType: 'personal' })
        .withChannelId('msteams')
        .withServiceUrl('https://service.url')
    );

    const body = spy.mock.calls[0][1] as Record<string, unknown>;
    expect(body).toEqual(expect.objectContaining({
      type: 'typing',
      text: 'stream chunk',
      value: { scenario: 'streaming' },
    }));
    expect(body).not.toHaveProperty('from');
    expect(body).not.toHaveProperty('conversation');
    expect(body).not.toHaveProperty('channelId');
    expect(body).not.toHaveProperty('serviceUrl');
  });

  it('should update', async () => {
    const client = new ConversationActivityClient('');
    const spy = jest.spyOn(client.http, 'put').mockResolvedValueOnce({});

    await client.update('1', '2', {
      type: 'message',
      text: 'hi',
    });

    expect(spy).toHaveBeenCalledWith('/v3/conversations/1/activities/2', {
      type: 'message',
      text: 'hi',
    });
  });

  it('should reply', async () => {
    const client = new ConversationActivityClient('');
    const spy = jest.spyOn(client.http, 'post').mockResolvedValueOnce({});

    await client.reply('1', '2', {
      type: 'message',
      text: 'hi',
    });

    expect(spy).toHaveBeenCalledWith('/v3/conversations/1/activities/2', {
      type: 'message',
      text: 'hi',
      replyToId: '2',
    });
  });

  it('should delete', async () => {
    const client = new ConversationActivityClient('');
    const spy = jest.spyOn(client.http, 'delete').mockResolvedValueOnce({});
    await client.delete('1', '2');
    expect(spy).toHaveBeenCalledWith('/v3/conversations/1/activities/2');
  });

  it('should get members', async () => {
    const client = new ConversationActivityClient('');
    const spy = jest.spyOn(client.http, 'get').mockResolvedValueOnce({ data: [] });
    await client.getMembers('1', '2');
    expect(spy).toHaveBeenCalledWith('/v3/conversations/1/activities/2/members');
  });

  it('should resolve objectId to aadObjectId in getMembers', async () => {
    const client = new ConversationActivityClient('');
    jest.spyOn(client.http, 'get').mockResolvedValueOnce({
      data: [{ id: 'user1', objectId: 'aad-123' }],
    });
    const result = await client.getMembers('1', '2');
    expect(result).toEqual([{ id: 'user1', objectId: 'aad-123', aadObjectId: 'aad-123' }]);
  });

  describe('targeted activities', () => {
    it('should create targeted activity', async () => {
      const client = new ConversationActivityClient('');
      const spy = jest.spyOn(client.http, 'post').mockResolvedValueOnce({});

      await client.createTargeted('1', {
        type: 'message',
        text: 'hi',
      });

      expect(spy).toHaveBeenCalledWith(
        '/v3/conversations/1/activities?isTargetedActivity=true',
        {
          type: 'message',
          text: 'hi',
        }
      );
    });

    it('should update targeted activity', async () => {
      const client = new ConversationActivityClient('');
      const spy = jest.spyOn(client.http, 'put').mockResolvedValueOnce({});

      await client.updateTargeted('1', '2', {
        type: 'message',
        text: 'hi updated',
      });

      expect(spy).toHaveBeenCalledWith(
        '/v3/conversations/1/activities/2?isTargetedActivity=true',
        {
          type: 'message',
          text: 'hi updated',
        }
      );
    });

    it('should delete targeted activity', async () => {
      const client = new ConversationActivityClient('');
      const spy = jest.spyOn(client.http, 'delete').mockResolvedValueOnce({});

      await client.deleteTargeted('1', '2');

      expect(spy).toHaveBeenCalledWith(
        '/v3/conversations/1/activities/2?isTargetedActivity=true'
      );
    });
  });

  it('emits telemetry for created outbound activities without recording payload content', async () => {
    const client = new ConversationActivityClient('https://service.example.com/');
    jest.spyOn(client.http, 'post').mockResolvedValueOnce({ data: { id: 'activity-id' } });

    await client.create('conversation-id', {
      type: 'message',
      text: 'do not tag this text',
    });

    expect(startActiveSpan).toHaveBeenCalledWith(
      'conversation_client',
      {
        kind: SpanKind.CLIENT,
        attributes: {
          operation: 'create',
          'service.url': 'https://service.example.com',
          'conversation.id': 'conversation-id',
        },
      },
      expect.any(Function)
    );
    expect(recordTeamsApiOutboundCall).toHaveBeenCalledWith('create');
    expect(span.setAttribute).toHaveBeenCalledWith('activity.type', 'message');
    expect(span.setAttribute).toHaveBeenCalledWith('activity.id', 'activity-id');
    expect(span.end).toHaveBeenCalled();
    expect(startActiveSpan.mock.calls[0][1].attributes).not.toHaveProperty('text');
  });

  it.each([
    [
      'update',
      'update',
      async (client: ConversationActivityClient) => {
        jest.spyOn(client.http, 'put').mockResolvedValueOnce({ data: { id: 'updated-id' } });
        await client.update('conversation-id', 'activity-id', { type: 'message', text: 'hi' });
      },
    ],
    [
      'reply',
      'reply',
      async (client: ConversationActivityClient) => {
        jest.spyOn(client.http, 'post').mockResolvedValueOnce({ data: { id: 'reply-id' } });
        await client.reply('conversation-id', 'activity-id', { type: 'message', text: 'hi' });
      },
    ],
    [
      'delete',
      'delete',
      async (client: ConversationActivityClient) => {
        jest.spyOn(client.http, 'delete').mockResolvedValueOnce({ data: undefined });
        await client.delete('conversation-id', 'activity-id');
      },
    ],
    [
      'createTargeted',
      'create_targeted',
      async (client: ConversationActivityClient) => {
        jest.spyOn(client.http, 'post').mockResolvedValueOnce({ data: { id: 'targeted-id' } });
        await client.createTargeted('conversation-id', { type: 'message', text: 'hi' });
      },
    ],
    [
      'updateTargeted',
      'update_targeted',
      async (client: ConversationActivityClient) => {
        jest.spyOn(client.http, 'put').mockResolvedValueOnce({ data: { id: 'targeted-id' } });
        await client.updateTargeted('conversation-id', 'activity-id', { type: 'message', text: 'hi' });
      },
    ],
    [
      'deleteTargeted',
      'delete_targeted',
      async (client: ConversationActivityClient) => {
        jest.spyOn(client.http, 'delete').mockResolvedValueOnce({ data: undefined });
        await client.deleteTargeted('conversation-id', 'activity-id');
      },
    ],
  ])('emits telemetry for %s outbound activities', async (
    _name: string,
    operation: string,
    act: (client: ConversationActivityClient) => Promise<void>
  ) => {
    const client = new ConversationActivityClient('https://service.example.com/');

    await act(client);

    expect(startActiveSpan).toHaveBeenCalledWith(
      'conversation_client',
      expect.objectContaining({
        attributes: expect.objectContaining({
          operation,
          'service.url': 'https://service.example.com',
          'conversation.id': 'conversation-id',
        }),
      }),
      expect.any(Function)
    );
    expect(recordTeamsApiOutboundCall).toHaveBeenCalledWith(operation);
    expect(span.end).toHaveBeenCalled();
  });

  it('records outbound errors and preserves the thrown error', async () => {
    const client = new ConversationActivityClient('https://service.example.com/');
    const error = new Error('failed');
    jest.spyOn(client.http, 'post').mockRejectedValueOnce(error);

    await expect(client.create('conversation-id', { type: 'message', text: 'hi' })).rejects.toThrow(error);

    expect(recordTeamsApiOutboundCall).toHaveBeenCalledWith('create');
    expect(recordTeamsApiOutboundError).toHaveBeenCalledWith('create');
    expect(recordTeamsApiException).toHaveBeenCalledWith(span, error);
    expect(span.end).toHaveBeenCalled();
  });
});
