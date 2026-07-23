import { ActivityParams, Client, ConversationReference, MessageActivity } from '@microsoft/teams.api';

import { ActivitySender } from './activity-sender';

describe('ActivitySender', () => {
  let sender: ActivitySender;
  let mockClient: Client;
  let ref: ConversationReference;
  let createClient: jest.Mock;

  beforeEach(() => {
    mockClient = {
      conversations: {
        createActivity: jest.fn().mockResolvedValue({ id: 'activity-1' }),
        updateActivity: jest.fn().mockResolvedValue({ id: 'activity-1' }),
        createTargetedActivity: jest.fn().mockResolvedValue({ id: 'activity-1' }),
        updateTargetedActivity: jest.fn().mockResolvedValue({ id: 'activity-1' }),
      },
    } as any;

    ref = {
      channelId: 'msteams',
      serviceUrl: 'https://smba.trafficmanager.net/teams',
      bot: { id: 'bot-id', name: 'Bot', role: 'bot' },
      conversation: { id: 'conv-123', conversationType: 'personal' },
    };

    createClient = jest.fn().mockReturnValue(mockClient);
    sender = new ActivitySender(undefined as any, createClient);
  });

  describe('send', () => {
    it('should call create for a new activity', async () => {
      const activity: ActivityParams = { type: 'message', text: 'hello' };

      const result = await sender.send(activity, ref);

      const conversations = (mockClient as any).conversations;
      expect(conversations.createActivity).toHaveBeenCalledWith(
        'conv-123',
        expect.objectContaining({
          type: 'message',
          text: 'hello',
          from: ref.bot,
          conversation: ref.conversation,
        })
      );
      expect(createClient).toHaveBeenCalledWith(ref.serviceUrl, undefined);
      expect(result).toEqual(expect.objectContaining({ id: 'activity-1' }));
    });

    it('should call update for an existing activity', async () => {
      const activity: ActivityParams = {
        type: 'message',
        text: 'updated',
        id: 'existing-id',
      };

      await sender.send(activity, ref);

      const conversations = (mockClient as any).conversations;
      expect(conversations.updateActivity).toHaveBeenCalledWith(
        'conv-123',
        'existing-id',
        expect.objectContaining({ type: 'message', text: 'updated' })
      );
      expect(conversations.createActivity).not.toHaveBeenCalled();
    });

    it('should call createTargeted for targeted messages in group chat', async () => {
      const groupRef = {
        ...ref,
        conversation: { id: 'conv-123', conversationType: 'groupChat' },
      };
      const activity = {
        type: 'message',
        text: 'targeted',
        recipient: { id: 'user-1', name: 'User', role: 'user', isTargeted: true },
      } as ActivityParams;

      await sender.send(activity, groupRef);

      const conversations = (mockClient as any).conversations;
      expect(conversations.createTargetedActivity).toHaveBeenCalledWith(
        'conv-123',
        expect.objectContaining({ type: 'message', text: 'targeted' })
      );
    });

    it('should call updateTargeted for targeted updates in group chat', async () => {
      const groupRef = {
        ...ref,
        conversation: { id: 'conv-123', conversationType: 'groupChat' },
      };
      const activity = {
        type: 'message',
        text: 'targeted update',
        id: 'existing-id',
        recipient: { id: 'user-1', name: 'User', role: 'user', isTargeted: true },
      } as ActivityParams;

      await sender.send(activity, groupRef);

      const conversations = (mockClient as any).conversations;
      expect(conversations.updateTargetedActivity).toHaveBeenCalledWith(
        'conv-123',
        'existing-id',
        expect.objectContaining({ recipient: expect.objectContaining({ isTargeted: true }) })
      );
      expect(conversations.createActivity).not.toHaveBeenCalled();
    });

    it('should merge bot and conversation from ref into activity', async () => {
      const activity: ActivityParams = { type: 'message', text: 'hello' };

      await sender.send(activity, ref);

      const conversations = (mockClient as any).conversations;
      expect(conversations.createActivity).toHaveBeenCalledWith(
        'conv-123',
        expect.objectContaining({
          from: { id: 'bot-id', name: 'Bot', role: 'bot' },
          conversation: { id: 'conv-123', conversationType: 'personal' },
        })
      );
    });

    it('should use custom serviceUrl from ref for the API client', async () => {
      const customRef = {
        ...ref,
        serviceUrl: 'https://custom-service.botframework.com',
        conversation: { id: 'conv-456', conversationType: 'personal' },
      };

      await sender.send({ type: 'message', text: 'hi' }, customRef);

      const conversations = (mockClient as any).conversations;
      expect(conversations.createActivity).toHaveBeenCalledWith(
        'conv-456',
        expect.any(Object)
      );
      expect(createClient).toHaveBeenCalledWith('https://custom-service.botframework.com', undefined);
    });

    it('should convert legacy message builders before merging conversation reference fields', async () => {
      const activity = new MessageActivity('hello')
        .withFrom({ id: 'legacy-bot-id', name: 'Legacy Bot', role: 'bot' })
        .withConversation({ id: 'legacy-conversation-id', conversationType: 'personal' })
        .withChannelId('legacy-channel')
        .withServiceUrl('https://legacy.service.url');

      await sender.send(activity, ref);

      const conversations = (mockClient as any).conversations;
      const body = conversations.createActivity.mock.calls[0][1];
      expect(body).toEqual(expect.objectContaining({
        type: 'message',
        text: 'hello',
        from: ref.bot,
        conversation: ref.conversation,
      }));
      expect(body).not.toHaveProperty('channelId');
      expect(body).not.toHaveProperty('serviceUrl');
    });

    it('should use the ref serviceUrl when no agentic user option is provided', async () => {
      await sender.send({ type: 'message', text: 'hi' }, ref);

      expect(createClient).toHaveBeenCalledWith(ref.serviceUrl, undefined);
    });

    it('should use agentic user option for the API client', async () => {
      const agenticUser = { agentAppInstanceId: 'agent-app', agenticUserId: 'agentic-user' };

      await sender.send({ type: 'message', text: 'hi' }, ref, { agenticUser });

      expect(createClient).toHaveBeenCalledWith(ref.serviceUrl, agenticUser);
    });

    it('should throw when sending targeted message in personal chat', async () => {
      const activity: ActivityParams = {
        type: 'message',
        text: 'hello',
        recipient: { id: 'user-1', name: 'User', role: 'user', isTargeted: true },
      };

      await expect(sender.send(activity, ref)).rejects.toThrow(
        'Targeted messages are not supported in 1:1 (personal) chats.'
      );
    });

    it('should allow targeted message in group chat', async () => {
      const groupRef = {
        ...ref,
        conversation: { id: 'conv-123', conversationType: 'groupChat' },
      };
      const activity: ActivityParams = {
        type: 'message',
        text: 'hello',
        recipient: { id: 'user-1', name: 'User', role: 'user', isTargeted: true },
      };

      const result = await sender.send(activity, groupRef);
      expect(result).toEqual(expect.objectContaining({ id: 'activity-1' }));
    });
  });

  describe('createStream', () => {
    it('should return a stream instance', () => {
      const stream = sender.createStream(ref);
      expect(stream).toBeDefined();
      expect(stream.emit).toBeDefined();
      expect(stream.close).toBeDefined();
      expect(createClient).toHaveBeenCalledWith(ref.serviceUrl);
    });
  });
});
