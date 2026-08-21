import { Readable } from 'stream';

import { AxiosError } from 'axios';
import { type MockedObject } from 'jest-mock';

import {
  Activity,
  ConversationReference,
  FILE_DOWNLOAD_INFO_CONTENT_TYPE,
  IMessageActivity,
  MessageActivity,
  TokenExchangeResource,
  TokenPostResource,
} from '@microsoft/teams.api';
import { Client as HttpClient, ILogger, IStorage } from '@microsoft/teams.common';

import { ApiClient, GraphClient } from '../api';

import { ActivityContext } from './activity';

const missingTokenError = () =>
  new AxiosError('No token', '404', undefined, undefined, {
    status: 404,
    statusText: 'Not Found',
    headers: {},
    config: {} as never,
    data: {},
  });

describe('ActivityContext', () => {
  let mockSender: { send: jest.Mock; createStream: jest.Mock };
  let mockApiClient: MockedObject<ApiClient>;
  let mockLogger: ILogger;
  let mockStorage: MockedObject<IStorage>;
  let mockRef: ConversationReference;
  let context: ActivityContext;

  beforeEach(() => {
    mockSender = {
      createStream: jest.fn().mockReturnValue({ write: jest.fn() }),
      send: jest.fn(),
    };

    mockApiClient = {
      users: {
        getToken: jest.fn(),
        signOut: jest.fn(),
      },
      conversations: {
        create: jest.fn(),
      },
      bots: {
        signIn: {
          getResource: jest.fn(),
        },
      },
    } as unknown as MockedObject<ApiClient>;

    mockStorage = {} as MockedObject<IStorage>;
    const partialLogger = {
      debug: jest.fn(),
      info: jest.fn(),
      warn: jest.fn(),
      error: jest.fn(),
      trace: jest.fn(),
      log: jest.fn(),
    };
    mockLogger = {
      ...partialLogger,
      child: jest.fn().mockReturnValue(partialLogger),
    };

    mockRef = {
      activityId: 'test-activity-id',
      channelId: 'test-channel',
      conversation: {
        id: 'test-conversation',
        conversationType: 'channel',
        isGroup: false,
      },
      serviceUrl: 'https://test.com',
      user: { id: 'test-user', name: 'Test User', role: 'user' },
      bot: { id: 'bot-id', name: 'Bot', role: 'bot' },
    };
  });

  const buildIncomingMessageActivity = (
    text: string,
    id?: string
  ): IMessageActivity => {
    return new MessageActivity(text)
      .withFrom({
        id: 'test-user',
        name: 'Test User',
        role: 'user',
      })
      .withRecipient({
        id: 'bot-id',
        name: 'Bot',
        role: 'bot',
      })
      .withChannelId('test-channel')
      .withConversation({
        id: 'test-conversation',
        conversationType: 'channel',
        isGroup: false,
      })
      .withId(id ?? 'test-activity-id');
  };

  const buildActivityContext = (activity: Activity): ActivityContext => {
    return new ActivityContext({
      appId: 'test-app',
      activity,
      ref: mockRef,
      log: mockLogger,
      api: mockApiClient,
      appGraph: {} as GraphClient,
      userGraph: {} as GraphClient,
      storage: mockStorage,
      connectionName: 'test-connection',
      next: jest.fn(),
      activitySender: mockSender,
    });
  };

  describe('activity channelData accessors', () => {
    // Inbound activities arrive as plain JSON objects off the wire, so the
    // computed `channelData` getters (channel/team/meeting/notification/tenant)
    // are not present on them. The ActivityContext must rehydrate the payload
    // into an activity instance so those accessors resolve. A regression where
    // the payload was flattened via `toInterface()` silently dropped these
    // prototype getters, making them return `undefined`.
    const buildInboundPayload = (): Activity => {
      return {
        type: 'message',
        id: 'test-activity-id',
        channelId: 'test-channel',
        from: { id: 'test-user', name: 'Test User', role: 'user' },
        recipient: { id: 'bot-id', name: 'Bot', role: 'bot' },
        conversation: {
          id: 'test-conversation',
          conversationType: 'channel',
          isGroup: false,
        },
        text: 'Hello world',
        channelData: {
          tenant: { id: 'tenant-id' },
          channel: { id: 'channel-id' },
          team: { id: 'team-id' },
          meeting: { id: 'meeting-id' },
          notification: { alert: true },
        },
      } as unknown as Activity;
    };

    it('resolves computed channelData accessors on a flattened inbound payload', () => {
      const ctx = buildActivityContext(buildInboundPayload());

      expect(ctx.activity.channel?.id).toEqual('channel-id');
      expect(ctx.activity.team?.id).toEqual('team-id');
      expect(ctx.activity.meeting?.id).toEqual('meeting-id');
      expect(ctx.activity.notification?.alert).toEqual(true);
      // `tenant` is a class-only getter (not declared on the public interface),
      // so read it through the concrete instance shape.
      expect((ctx.activity as { tenant?: { id: string } }).tenant?.id).toEqual('tenant-id');
    });
  });

  describe('reply', () => {
    it('stamps quotedReply entity with activity id', async () => {
      const activity = buildIncomingMessageActivity('Hello world');
      context = buildActivityContext(activity);

      await context.reply('What is up?');

      expect(mockSender.send).toHaveBeenCalledTimes(1);
      const sentActivity = (mockSender.send as jest.Mock).mock.calls[0][0];
      expect(sentActivity.entities).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            type: 'quotedReply',
            quotedReply: { messageId: 'test-activity-id' },
          }),
        ])
      );
    });

    it('prepends placeholder to text', async () => {
      const activity = buildIncomingMessageActivity('Hello world');
      context = buildActivityContext(activity);

      await context.reply('What is up?');

      const sentActivity = (mockSender.send as jest.Mock).mock.calls[0][0];
      expect(sentActivity.text).toEqual('<quoted messageId="test-activity-id"/> What is up?');
    });

    it('sets placeholder as text when reply text is empty', async () => {
      const activity = buildIncomingMessageActivity('Hello world');
      context = buildActivityContext(activity);

      await context.reply('');

      const sentActivity = (mockSender.send as jest.Mock).mock.calls[0][0];
      expect(sentActivity.text).toEqual('<quoted messageId="test-activity-id"/>');
    });

    it('sets placeholder as text when reply has no text', async () => {
      const activity = buildIncomingMessageActivity('Hello world');
      context = buildActivityContext(activity);

      await context.reply({ type: 'message' });

      const sentActivity = (mockSender.send as jest.Mock).mock.calls[0][0];
      expect(sentActivity.text).toEqual('<quoted messageId="test-activity-id"/>');
    });

    it('does not stamp entity when activity has no id', async () => {
      const activity = buildIncomingMessageActivity('Hello world', '');
      context = buildActivityContext(activity);

      await context.reply('What is up?');

      const sentActivity = (mockSender.send as jest.Mock).mock.calls[0][0];
      expect(sentActivity.entities).toBeUndefined();
    });

  });

  describe('quote', () => {
    it('stamps quotedReply entity with given messageId', async () => {
      const activity = buildIncomingMessageActivity('Hello world');
      context = buildActivityContext(activity);

      await context.quote('arbitrary-msg-id', 'some text');

      expect(mockSender.send).toHaveBeenCalledTimes(1);
      const sentActivity = (mockSender.send as jest.Mock).mock.calls[0][0];
      expect(sentActivity.entities).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            type: 'quotedReply',
            quotedReply: { messageId: 'arbitrary-msg-id' },
          }),
        ])
      );
    });

    it('prepends placeholder to text', async () => {
      const activity = buildIncomingMessageActivity('Hello world');
      context = buildActivityContext(activity);

      await context.quote('msg-42', 'reply text');

      const sentActivity = (mockSender.send as jest.Mock).mock.calls[0][0];
      expect(sentActivity.text).toEqual('<quoted messageId="msg-42"/> reply text');
    });

    it('sets placeholder as text when no text provided', async () => {
      const activity = buildIncomingMessageActivity('Hello world');
      context = buildActivityContext(activity);

      await context.quote('msg-42', { type: 'message' });

      const sentActivity = (mockSender.send as jest.Mock).mock.calls[0][0];
      expect(sentActivity.text).toEqual('<quoted messageId="msg-42"/>');
    });
    
    it('reply to targeted message strips blockquote via addTargetedMessageInfo', async () => {
      const activity = new MessageActivity('Hello world')
        .withFrom({ id: 'test-user', name: 'Test User', role: 'user' })
        .withRecipient({ id: 'bot-id', name: 'Bot', role: 'bot' }, true)
        .withChannelId('test-channel')
        .withConversation({ id: 'test-conversation', conversationType: 'channel', isGroup: false })
        .withId('test-activity-id');

      context = buildActivityContext(activity);

      await context.reply('Here is your agenda');

      expect(mockSender.send).toHaveBeenCalledTimes(1);
      const sentActivity = (mockSender.send as jest.Mock).mock.calls[0][0];
      // Reply prepends blockquote, but send() auto-populates addTargetedMessageInfo
      // which strips quotedReply entities — the blockquote text remains since it's
      // the legacy format, not the <quoted .../> placeholder.
      expect(sentActivity.recipient).toEqual(
        expect.objectContaining({
          id: 'test-user',
          name: 'Test User',
          role: 'user',
          isTargeted: true,
        })
      );
      expect(sentActivity.entities).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            type: 'targetedMessageInfo',
            messageId: 'test-activity-id',
          }),
        ])
      );
    });

  });

  describe('send', () => {
    it('sends the activity to the sender plugin', async () => {
      const activity = buildIncomingMessageActivity('Hello world');
      context = buildActivityContext(activity);
      await context.send('What is up?');

      expect(mockSender.send).toHaveBeenCalledTimes(1);
      expect(mockSender.send).toHaveBeenCalledWith(
        expect.objectContaining({
          text: 'What is up?',
          type: 'message',
        }),
        mockRef
      );
    });

    describe('targeted messages', () => {
      it('defaults send to targeted when inbound message is targeted', async () => {
        const activity = new MessageActivity('Hello world')
          .withFrom({ id: 'test-user', name: 'Test User', role: 'user' })
          .withRecipient({ id: 'bot-id', name: 'Bot', role: 'bot' }, true)
          .withChannelId('test-channel')
          .withConversation({ id: 'test-conversation', conversationType: 'channel', isGroup: false })
          .withId('test-activity-id');
        context = buildActivityContext(activity);

        await context.send('Secret message');

        expect(mockSender.send).toHaveBeenCalledTimes(1);
        expect(mockSender.send).toHaveBeenCalledWith(
          expect.objectContaining({
            text: 'Secret message',
            type: 'message',
            recipient: expect.objectContaining({ id: 'test-user', name: 'Test User', role: 'user', isTargeted: true }),
          }),
          mockRef
        );
      });

      it('does not default send to targeted for a different conversation', async () => {
        const activity = new MessageActivity('Hello world')
          .withFrom({ id: 'test-user', name: 'Test User', role: 'user' })
          .withRecipient({ id: 'bot-id', name: 'Bot', role: 'bot' }, true)
          .withChannelId('test-channel')
          .withConversation({ id: 'test-conversation', conversationType: 'channel', isGroup: false })
          .withId('test-activity-id');
        context = buildActivityContext(activity);

        const otherRef = {
          ...mockRef,
          conversation: {
            ...mockRef.conversation,
            id: 'other-conversation',
          },
        };

        await context.send('Secret message', otherRef);

        expect(mockSender.send).toHaveBeenCalledTimes(1);
        expect(mockSender.send).toHaveBeenCalledWith(
          expect.objectContaining({
            text: 'Secret message',
            type: 'message',
          }),
          otherRef
        );
        const sentActivity = (mockSender.send as jest.Mock).mock.calls[0][0];
        expect(sentActivity.recipient).toBeUndefined();
        expect(sentActivity.entities).toBeUndefined();
      });

      it('does not default send to targeted when an explicit different recipient is supplied', async () => {
        const activity = new MessageActivity('Hello world')
          .withFrom({ id: 'test-user', name: 'Test User', role: 'user' })
          .withRecipient({ id: 'bot-id', name: 'Bot', role: 'bot' }, true)
          .withChannelId('test-channel')
          .withConversation({ id: 'test-conversation', conversationType: 'channel', isGroup: false })
          .withId('test-activity-id');
        context = buildActivityContext(activity);

        const otherRecipient = { id: 'other-user', name: 'Other User', role: 'user' as const };
        await context.send(new MessageActivity('Public message').withRecipient(otherRecipient));

        expect(mockSender.send).toHaveBeenCalledTimes(1);
        const sentActivity = (mockSender.send as jest.Mock).mock.calls[0][0];
        expect(sentActivity).toEqual(
          expect.objectContaining({
            text: 'Public message',
            type: 'message',
            recipient: expect.objectContaining(otherRecipient),
          })
        );
        expect(sentActivity.recipient.isTargeted).toBeUndefined();
        expect(sentActivity.entities).toBeUndefined();
      });

      it('sends targeted message with recipient from incoming activity', async () => {
        const activity = buildIncomingMessageActivity('Hello world');
        context = buildActivityContext(activity);

        const targetedActivity = new MessageActivity('Secret message')
          .withRecipient({ id: 'test-user', name: 'Test User', role: 'user' }, true);

        await context.send(targetedActivity);

        expect(mockSender.send).toHaveBeenCalledTimes(1);
        expect(mockSender.send).toHaveBeenCalledWith(
          expect.objectContaining({
            text: 'Secret message',
            type: 'message',
            recipient: expect.objectContaining({ id: 'test-user', name: 'Test User', role: 'user', isTargeted: true }),
          }),
          mockRef
        );
        const sentActivity = (mockSender.send as jest.Mock).mock.calls[0][0];
        expect(sentActivity.entities).toBeUndefined();
      });

      it('allows explicitly public send from a targeted inbound message', async () => {
        const activity = new MessageActivity('Hello world')
          .withFrom({ id: 'test-user', name: 'Test User', role: 'user' })
          .withRecipient({ id: 'bot-id', name: 'Bot', role: 'bot' }, true)
          .withChannelId('test-channel')
          .withConversation({ id: 'test-conversation', conversationType: 'channel', isGroup: false })
          .withId('test-activity-id');
        context = buildActivityContext(activity);

        await context.send(new MessageActivity('Public message').withRecipient(activity.from));

        expect(mockSender.send).toHaveBeenCalledTimes(1);
        const sentActivity = (mockSender.send as jest.Mock).mock.calls[0][0];
        expect(sentActivity).toEqual(
          expect.objectContaining({
            text: 'Public message',
            type: 'message',
            recipient: expect.objectContaining({ id: 'test-user', name: 'Test User', role: 'user' }),
          })
        );
        expect(sentActivity.recipient.isTargeted).toBeUndefined();
        expect(sentActivity.entities).toBeUndefined();
      });

      it('sends targeted message with explicit recipient id', async () => {
        const activity = buildIncomingMessageActivity('Hello world');
        context = buildActivityContext(activity);

        const targetedActivity = new MessageActivity('Secret message')
          .withRecipient({ id: 'explicit-user-id', name: '', role: 'user' }, true);

        await context.send(targetedActivity);

        expect(mockSender.send).toHaveBeenCalledTimes(1);
        expect(mockSender.send).toHaveBeenCalledWith(
          expect.objectContaining({
            text: 'Secret message',
            type: 'message',
            recipient: expect.objectContaining({ id: 'explicit-user-id', name: '', role: 'user', isTargeted: true }),
          }),
          mockRef
        );
      });

      it('does not set recipient for targeted message updates', async () => {
        const activity = buildIncomingMessageActivity('Hello world');
        context = buildActivityContext(activity);

        const updateActivity = new MessageActivity('Updated message')
          .withId('existing-activity-id')
          .withRecipient({ id: 'user-1', name: '', role: 'user' }, true);

        await context.send(updateActivity);

        expect(mockSender.send).toHaveBeenCalledTimes(1);
        const sentActivity = (mockSender.send as jest.Mock).mock.calls[0][0];
        expect(sentActivity.id).toBe('existing-activity-id');
        expect(sentActivity.recipient.isTargeted).toBe(true);
      });
    });

    describe('prompt preview', () => {
      it('auto-populates targetedMessageInfo entity when incoming activity is targeted', async () => {
        const activity = new MessageActivity('Hello world')
          .withFrom({ id: 'test-user', name: 'Test User', role: 'user' })
          .withRecipient({ id: 'bot-id', name: 'Bot', role: 'bot' }, true)
          .withChannelId('test-channel')
          .withConversation({ id: 'test-conversation', conversationType: 'channel', isGroup: false })
          .withId('1772129782775');

        context = buildActivityContext(activity);

        await context.send('Here is your agenda');

        expect(mockSender.send).toHaveBeenCalledTimes(1);
        expect(mockSender.send).toHaveBeenCalledWith(
          expect.objectContaining({
            text: 'Here is your agenda',
            type: 'message',
            entities: expect.arrayContaining([
              expect.objectContaining({
                type: 'targetedMessageInfo',
                messageId: '1772129782775',
              }),
            ]),
          }),
          mockRef
        );
      });

      it('does not auto-populate targetedMessageInfo when incoming activity is not targeted', async () => {
        const activity = buildIncomingMessageActivity('Hello world');
        context = buildActivityContext(activity);

        await context.send('Response');

        expect(mockSender.send).toHaveBeenCalledTimes(1);
        const sentActivity = (mockSender.send as jest.Mock).mock.calls[0][0];
        expect(sentActivity.entities).toBeUndefined();
      });

      it('does not overwrite existing targetedMessageInfo entity', async () => {
        const activity = new MessageActivity('Hello world')
          .withFrom({ id: 'test-user', name: 'Test User', role: 'user' })
          .withRecipient({ id: 'bot-id', name: 'Bot', role: 'bot' }, true)
          .withChannelId('test-channel')
          .withConversation({ id: 'test-conversation', conversationType: 'channel', isGroup: false })
          .withId('1772129782775');

        context = buildActivityContext(activity);

        const outgoing = new MessageActivity('Response')
          .addTargetedMessageInfo('custom-message-id');

        await context.send(outgoing);

        expect(mockSender.send).toHaveBeenCalledTimes(1);
        const sentActivity = (mockSender.send as jest.Mock).mock.calls[0][0];
        const targetedEntities = sentActivity.entities.filter((e: any) => e.type === 'targetedMessageInfo');
        expect(targetedEntities).toHaveLength(1);
        expect(targetedEntities[0].messageId).toBe('custom-message-id');
      });

      it('auto-populates targetedMessageInfo on reply to targeted message', async () => {
        const activity = new MessageActivity('Hello world')
          .withFrom({ id: 'test-user', name: 'Test User', role: 'user' })
          .withRecipient({ id: 'bot-id', name: 'Bot', role: 'bot' }, true)
          .withChannelId('test-channel')
          .withConversation({ id: 'test-conversation', conversationType: 'channel', isGroup: false })
          .withId('1772129782775');

        context = buildActivityContext(activity);

        await context.reply('Here is your agenda');

        expect(mockSender.send).toHaveBeenCalledTimes(1);
        expect(mockSender.send).toHaveBeenCalledWith(
          expect.objectContaining({
            type: 'message',
            entities: expect.arrayContaining([
              expect.objectContaining({
                type: 'targetedMessageInfo',
                messageId: '1772129782775',
              }),
            ]),
          }),
          mockRef
        );
      });
    });
  });

  describe('signin/signout flow', () => {
    beforeEach(() => {
      context = buildActivityContext(
        buildIncomingMessageActivity('Test message')
      );
    });

    it('returns existing token if available', async () => {
      const expectedToken = 'test-token';
      mockApiClient.users.getToken.mockResolvedValueOnce({
        token: expectedToken,
        connectionName: 'test-connection',
        channelId: 'test-channel',
        expiration: new Date(Date.now() + 1000 * 60 * 60).getTime().toString(),
      });

      const result = await context.signin();

      expect(result).toBe(expectedToken);
      expect(mockApiClient.users.getToken).toHaveBeenCalledWith({
        channelId: 'test-channel',
        userId: 'test-user',
        connectionName: 'test-connection',
      });
    });

    it('creates oauth card for new signin in 1:1 chat', async () => {
      context = new ActivityContext({
        ...context,
        activity: {
          ...buildIncomingMessageActivity('Test message'),
          conversation: {
            id: 'personal-conv',
            conversationType: 'personal',
            isGroup: false,
          },
        },
        activitySender: mockSender,
      });

      mockApiClient.users.getToken.mockRejectedValueOnce(
        missingTokenError()
      );
      const mockResource = {
        tokenExchangeResource: {
          uri: 'my-token-exhcange-resource-uri',
        } as TokenExchangeResource,
        tokenPostResource: {
          sasUrl: 'my-token-post-resource-sas-url',
        } as TokenPostResource,
        signInLink: 'https://login.url',
      };
      mockApiClient.bots.signIn.getResource.mockResolvedValueOnce(mockResource);

      await context.signin();

      // No 1:1 fallback conversation is created.
      expect(mockApiClient.conversations.create).not.toHaveBeenCalled();
      const sentActivity = (mockSender.send as jest.Mock).mock.calls[0][0];
      // 1:1 sign-in cards are not targeted and keep the token exchange resource (SSO possible).
      expect(sentActivity.recipient.isTargeted).toBeUndefined();
      expect(sentActivity.attachments[0].content.tokenExchangeResource).toEqual({
        uri: 'my-token-exhcange-resource-uri',
      });
    });

    it('sends a targeted oauth card in a group chat without creating a 1:1', async () => {
      context = new ActivityContext({
        ...context,
        activity: {
          ...buildIncomingMessageActivity('Test message'),
          conversation: {
            id: 'group-conv',
            conversationType: 'groupChat',
            isGroup: true,
          },
        },
        activitySender: mockSender,
      });

      mockApiClient.users.getToken.mockRejectedValueOnce(
        missingTokenError()
      );
      const mockResource = {
        tokenExchangeResource: {
          uri: 'my-token-exhcange-resource-uri',
        } as TokenExchangeResource,
        tokenPostResource: {} as TokenPostResource,
        signInLink: 'https://login.url',
      };
      mockApiClient.bots.signIn.getResource.mockResolvedValueOnce(mockResource);

      await context.signin();

      // No 1:1 fallback; the card is sent directly in the group chat, targeted to the user.
      expect(mockApiClient.conversations.create).not.toHaveBeenCalled();
      const sentActivity = (mockSender.send as jest.Mock).mock.calls[0][0];
      expect(sentActivity.recipient.isTargeted).toBe(true);
      // SSO token exchange remains available in group chats.
      expect(sentActivity.attachments[0].content.tokenExchangeResource).toEqual({
        uri: 'my-token-exhcange-resource-uri',
      });
    });

    it('sends a targeted oauth card and omits token exchange in a channel', async () => {
      context = new ActivityContext({
        ...context,
        activity: {
          ...buildIncomingMessageActivity('Test message'),
          conversation: {
            id: 'channel-conv',
            conversationType: 'channel',
            isGroup: true,
          },
        },
        activitySender: mockSender,
      });

      mockApiClient.users.getToken.mockRejectedValueOnce(
        missingTokenError()
      );
      const mockResource = {
        tokenExchangeResource: {
          uri: 'my-token-exhcange-resource-uri',
        } as TokenExchangeResource,
        tokenPostResource: {} as TokenPostResource,
        signInLink: 'https://login.url',
      };
      mockApiClient.bots.signIn.getResource.mockResolvedValueOnce(mockResource);

      await context.signin();

      // No 1:1 fallback; card sent directly in the channel, targeted to the user.
      expect(mockApiClient.conversations.create).not.toHaveBeenCalled();
      const sentActivity = (mockSender.send as jest.Mock).mock.calls[0][0];
      expect(sentActivity.recipient.isTargeted).toBe(true);
      // Channels cannot do silent SSO, so the token exchange resource is omitted.
      expect(sentActivity.attachments[0].content.tokenExchangeResource).toBeUndefined();
    });

    it('passes the channel-filtered token exchange resource to overrideSignInActivity', async () => {
      context = new ActivityContext({
        ...context,
        activity: {
          ...buildIncomingMessageActivity('Test message'),
          conversation: {
            id: 'channel-conv',
            conversationType: 'channel',
            isGroup: true,
          },
        },
        activitySender: mockSender,
      });

      mockApiClient.users.getToken.mockRejectedValueOnce(missingTokenError());
      const mockResource = {
        tokenExchangeResource: {
          uri: 'my-token-exhcange-resource-uri',
        } as TokenExchangeResource,
        tokenPostResource: { sasUrl: 'sas' } as TokenPostResource,
        signInLink: 'https://login.url',
      };
      mockApiClient.bots.signIn.getResource.mockResolvedValueOnce(mockResource);

      const overrideSignInActivity = jest
        .fn()
        .mockReturnValue({ type: 'message', text: 'custom sign-in' });

      await context.signin({ overrideSignInActivity });

      // In channels the override callback receives no token exchange resource, so a
      // custom override can't trigger a silent SSO exchange Teams can't complete.
      expect(overrideSignInActivity).toHaveBeenCalledWith(
        undefined,
        mockResource.tokenPostResource,
        mockResource.signInLink
      );
    });

    it('propagates unexpected token lookup failures', async () => {
      const error = new Error('token service unavailable');
      mockApiClient.users.getToken.mockRejectedValueOnce(error);

      await expect(context.signin()).rejects.toBe(error);

      expect(mockApiClient.bots.signIn.getResource).not.toHaveBeenCalled();
    });

    it('forwards signout request to api client', async () => {
      await context.signout();

      expect(mockApiClient.users.signOut).toHaveBeenCalledWith({
        channelId: 'test-channel',
        userId: 'test-user',
        connectionName: 'test-connection',
      });
    });
  });

  describe('constructor — prototype method shadowing', () => {
    it('drops context properties that would shadow prototype methods', () => {
      const activity = buildIncomingMessageActivity('Hello world');
      const malicious = {
        send: jest.fn(),
        reply: jest.fn(),
        quote: jest.fn(),
        signin: jest.fn(),
        signout: jest.fn(),
      };

      const ctx = new ActivityContext({
        appId: 'test-app',
        activity,
        ref: mockRef,
        log: mockLogger,
        api: mockApiClient,
        appGraph: {} as GraphClient,
        userGraph: {} as GraphClient,
        storage: mockStorage,
        connectionName: 'test-connection',
        next: jest.fn(),
        activitySender: mockSender,
        ...malicious,
      } as any);

      for (const name of ['send', 'reply', 'quote', 'signin', 'signout'] as const) {
        expect(Object.prototype.hasOwnProperty.call(ctx, name)).toBe(false);
        expect(ctx[name]).toBe(ActivityContext.prototype[name]);
      }
    });

    it('still allows new properties from extra context', () => {
      const activity = buildIncomingMessageActivity('Hello world');
      const ctx = new ActivityContext({
        appId: 'test-app',
        activity,
        ref: mockRef,
        log: mockLogger,
        api: mockApiClient,
        appGraph: {} as GraphClient,
        userGraph: {} as GraphClient,
        storage: mockStorage,
        connectionName: 'test-connection',
        next: jest.fn(),
        activitySender: mockSender,
        customField: 'still here',
      } as any);

      expect((ctx as any).customField).toBe('still here');
    });

    it('routes ctx.send() to the prototype method even when a colliding key is supplied', async () => {
      const activity = buildIncomingMessageActivity('Hello world');
      const maliciousSend = jest.fn();

      const ctx = new ActivityContext({
        appId: 'test-app',
        activity,
        ref: mockRef,
        log: mockLogger,
        api: mockApiClient,
        appGraph: {} as GraphClient,
        userGraph: {} as GraphClient,
        storage: mockStorage,
        connectionName: 'test-connection',
        next: jest.fn(),
        activitySender: mockSender,
        // Simulates a plugin's onActivity context attempting to inject its own send.
        send: maliciousSend,
      } as any);

      await ctx.send({ type: 'message', text: 'real send' });

      expect(maliciousSend).not.toHaveBeenCalled();
      expect(mockSender.send).toHaveBeenCalledTimes(1);
    });
  });

  describe('files accessor', () => {
    // `ctx.files` must receive the app's HTTP client so file downloads inherit its
    // User-Agent, middleware, and user-supplied configuration. The download path
    // falls back to a bare global `fetch` when no client is present, so dropping
    // it here would silently bypass the SDK's outbound pipeline instead of
    // failing loudly. This asserts the hand-off at the context boundary.
    it('passes the app HTTP client through to ctx.files', async () => {
      const seen: string[] = [];
      const client = new HttpClient();
      client.use({
        async invoke(mwContext: any, next: any) {
          mwContext.config.adapter = async (config: any) => {
            seen.push(String(config.url));
            return {
              status: 200,
              statusText: '',
              headers: {},
              config,
              data: Readable.from([Buffer.from('bytes')]),
            };
          };
          return next();
        },
      });

      const activity = MessageActivity.from({
        type: 'message',
        conversation: { id: 'test-conversation', conversationType: 'personal' },
        attachments: [
          {
            contentType: FILE_DOWNLOAD_INFO_CONTENT_TYPE,
            name: 'report.pdf',
            content: { downloadUrl: 'https://download.example/report.pdf?tempauth=abc' },
          },
        ],
      } as unknown as IMessageActivity);

      const ctx = new ActivityContext({
        appId: 'test-app',
        activity,
        ref: mockRef,
        log: mockLogger,
        api: mockApiClient,
        client,
        appGraph: {} as GraphClient,
        userGraph: {} as GraphClient,
        storage: mockStorage,
        connectionName: 'test-connection',
        next: jest.fn(),
        activitySender: mockSender,
      });

      const file = await ctx.files.first();
      expect(file).toBeDefined();

      await file!.download();

      expect(seen).toEqual(['https://download.example/report.pdf?tempauth=abc']);
    });
  });
});
