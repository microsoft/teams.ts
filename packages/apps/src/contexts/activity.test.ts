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
import { ISender } from '../types';

import { ActivityContext } from './activity';

describe('ActivityContext', () => {
  let mockSender: ISender;
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
    return new ActivityContext(mockSender, {
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
    });
  };

  describe('reply', () => {
    it('generates blockquote for message activity with short text', async () => {
      const activity = buildIncomingMessageActivity('Hello world');

      context = buildActivityContext(activity);

      await context.reply('What is up?');

      expect(mockSender.send).toHaveBeenCalledTimes(1);
      expect(mockSender.send).toHaveBeenCalledWith(
        expect.objectContaining({
          text: `<blockquote itemscope="" itemtype="http://schema.skype.com/Reply" itemid="test-activity-id">
<strong itemprop="mri" itemid="test-user">Test User</strong><span itemprop="time" itemid="test-activity-id"></span>
<p itemprop="preview">Hello world</p>
</blockquote>\r\nWhat is up?`,
          type: 'message',
        }),
        mockRef
      );
    });

    it('truncates long messages over 120 characters in blockquote', async () => {
      const longText = 'A'.repeat(150);
      const activity = buildIncomingMessageActivity(longText);

      context = buildActivityContext(activity);

      await context.reply('What is up?');

      expect(mockSender.send).toHaveBeenCalledTimes(1);
      expect(mockSender.send).toHaveBeenCalledWith(
        expect.objectContaining({
          text: `<blockquote itemscope="" itemtype="http://schema.skype.com/Reply" itemid="test-activity-id">
<strong itemprop="mri" itemid="test-user">Test User</strong><span itemprop="time" itemid="test-activity-id"></span>
<p itemprop="preview">${'A'.repeat(120)}...</p>
</blockquote>\r\nWhat is up?`,
          type: 'message',
        }),
        mockRef
      );
    });

    it('does not add blockquotes for empty quoted messages', async () => {
      const activity = buildIncomingMessageActivity('');

      context = buildActivityContext(activity);

      await context.reply('What is up?');

      expect(mockSender.send).toHaveBeenCalledTimes(1);
      expect(mockSender.send).toHaveBeenCalledWith(
        expect.objectContaining({
          text: 'What is up?',
          type: 'message',
        }),
        mockRef
      );
    });

    it('does not add blockquotes for empty messages', async () => {
      const activity = buildIncomingMessageActivity('Original Message');

      context = buildActivityContext(activity);

      await context.reply('');

      expect(mockSender.send).toHaveBeenCalledTimes(1);
      expect(mockSender.send).toHaveBeenCalledWith(
        expect.objectContaining({
          text: '',
          type: 'message',
        }),
        mockRef
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
      context = new ActivityContext(mockSender, {
        ...context,
        activity: {
          ...buildIncomingMessageActivity('Test message'),
          conversation: {
            id: 'group-conv',
            isGroup: true,
            conversationType: 'group',
          },
        },
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
