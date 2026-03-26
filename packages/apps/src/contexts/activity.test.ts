import { type MockedObject } from 'jest-mock';

import {
  Activity,
  ConversationReference,
  IMessageActivity,
  MessageActivity,
  TokenExchangeResource,
  TokenPostResource,
} from '@microsoft/teams.api';
import { ILogger } from '@microsoft/teams.common/logging';
import { IStorage } from '@microsoft/teams.common/storage';

import { ApiClient, GraphClient } from '../api';

import { ActivityContext } from './activity';

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
        token: {
          get: jest.fn(),
          signOut: jest.fn(),
        },
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
  });

  describe('signin/signout flow', () => {
    beforeEach(() => {
      context = buildActivityContext(
        buildIncomingMessageActivity('Test message')
      );
    });

    it('returns existing token if available', async () => {
      const expectedToken = 'test-token';
      mockApiClient.users.token.get.mockResolvedValueOnce({
        token: expectedToken,
        connectionName: 'test-connection',
        channelId: 'test-channel',
        expiration: new Date(Date.now() + 1000 * 60 * 60).getTime().toString(),
      });

      const result = await context.signin();

      expect(result).toBe(expectedToken);
      expect(mockApiClient.users.token.get).toHaveBeenCalledWith({
        channelId: 'test-channel',
        userId: 'test-user',
        connectionName: 'test-connection',
      });
    });

    it('creates oauth card for new signin in 1:1 chat', async () => {
      mockApiClient.users.token.get.mockRejectedValueOnce(
        new Error('No token')
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

      expect(mockSender.send).toHaveBeenCalledWith(
        expect.objectContaining({
          type: 'message',
          attachments: [
            {
              content: {
                buttons: [
                  {
                    title: 'Sign In',
                    type: 'signin',
                    value: 'https://login.url',
                  },
                ],
                connectionName: 'test-connection',
                text: 'Please Sign In...',
                tokenExchangeResource: {
                  uri: 'my-token-exhcange-resource-uri',
                },
                tokenPostResource: { sasUrl: 'my-token-post-resource-sas-url' },
              },
              contentType: 'application/vnd.microsoft.card.oauth',
            },
          ],
          inputHint: 'acceptingInput',
          recipient: { id: 'test-user', name: 'Test User', role: 'user' },
        }),
        mockRef
      );
    });

    it('creates new 1:1 conversation for group chat signin', async () => {
      context = new ActivityContext({
        ...context,
        activity: {
          ...buildIncomingMessageActivity('Test message'),
          conversation: {
            id: 'group-conv',
            isGroup: true,
            conversationType: 'group',
          },
        },
        activitySender: mockSender,
      });

      mockApiClient.users.token.get.mockRejectedValueOnce(
        new Error('No token')
      );
      mockApiClient.conversations.create.mockResolvedValueOnce({
        id: 'new-conv-id',
        activityId: 'new-activity-id',
        serviceUrl: '',
      });
      const mockResource = {
        tokenExchangeResource: {} as TokenExchangeResource,
        tokenPostResource: {} as TokenPostResource,
        signInLink: 'https://login.url',
      };
      mockApiClient.bots.signIn.getResource.mockResolvedValueOnce(mockResource);

      await context.signin();

      expect(mockApiClient.conversations.create).toHaveBeenCalled();
      expect(mockSender.send).toHaveBeenCalledWith(
        expect.objectContaining({ type: 'message', text: 'Please Sign In...' }),
        expect.any(Object)
      );
    });

    it('forwards signout request to api client', async () => {
      await context.signout();

      expect(mockApiClient.users.token.signOut).toHaveBeenCalledWith({
        channelId: 'test-channel',
        userId: 'test-user',
        connectionName: 'test-connection',
      });
    });
  });
});
