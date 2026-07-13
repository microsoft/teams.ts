import { ActivityParams, Client, ConversationReference } from '@microsoft/teams.api';

import { ActivitySender } from './activity-sender';

describe('ActivitySender', () => {
  let sender: ActivitySender;
  let mockClient: Client;
  let ref: ConversationReference;
  let createClient: jest.Mock;

  beforeEach(() => {
    const mockActivitiesResult = {
      create: jest.fn().mockResolvedValue({ id: 'activity-1' }),
      update: jest.fn().mockResolvedValue({ id: 'activity-1' }),
      createTargeted: jest.fn().mockResolvedValue({ id: 'activity-1' }),
      updateTargeted: jest.fn().mockResolvedValue({ id: 'activity-1' }),
    };

    mockClient = {
      conversations: {
        activities: jest.fn().mockReturnValue(mockActivitiesResult),
      },
    } as any;

    ref = {
      channelId: 'msteams',
      serviceUrl: 'https://smba.trafficmanager.net/teams',
      bot: { id: 'bot-id', name: 'Bot', role: 'bot' },
      conversation: { id: 'conv-123', conversationType: 'personal' },
    };

    createClient = jest.fn().mockReturnValue(mockClient);
    sender = new ActivitySender(mockClient, undefined as any, createClient);
  });

  describe('send', () => {
    it('should call create for a new activity', async () => {
      const activity: ActivityParams = { type: 'message', text: 'hello' };

      const result = await sender.send(activity, ref);

      const activities = (mockClient as any).conversations.activities;
      expect(activities).toHaveBeenCalledWith('conv-123');
      expect(activities('conv-123').create).toHaveBeenCalledWith(
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

      const activities = (mockClient as any).conversations.activities;
      expect(activities('conv-123').update).toHaveBeenCalledWith(
        'existing-id',
        expect.objectContaining({ type: 'message', text: 'updated' })
      );
      expect(activities('conv-123').create).not.toHaveBeenCalled();
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

      const activities = (mockClient as any).conversations.activities;
      expect(activities('conv-123').createTargeted).toHaveBeenCalledWith(
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

      const activities = (mockClient as any).conversations.activities;
      expect(activities('conv-123').updateTargeted).toHaveBeenCalledWith(
        'existing-id',
        expect.objectContaining({ recipient: expect.objectContaining({ isTargeted: true }) })
      );
      expect(activities('conv-123').create).not.toHaveBeenCalled();
    });

    it('should merge bot and conversation from ref into activity', async () => {
      const activity: ActivityParams = { type: 'message', text: 'hello' };

      await sender.send(activity, ref);

      const activities = (mockClient as any).conversations.activities;
      expect(activities('conv-123').create).toHaveBeenCalledWith(
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

      const activities = (mockClient as any).conversations.activities;
      expect(activities('conv-456').create).toHaveBeenCalledWith(
        expect.any(Object)
      );
      expect(createClient).toHaveBeenCalledWith('https://custom-service.botframework.com', undefined);
    });

    it('should ignore sender option shapes that contain a serviceUrl and use the ref serviceUrl', async () => {
      const options = {
        agenticIdentity: undefined,
        serviceUrl: 'https://ignored-service.botframework.com',
      };

      await sender.send(
        { type: 'message', text: 'hi' },
        ref,
        options,
      );

      expect(createClient).toHaveBeenCalledWith(ref.serviceUrl, undefined);
    });

    it('should use agentic identity option for the API client', async () => {
      const agenticIdentity = { agenticAppId: 'agent-app', agenticUserId: 'agent-user' };

      await sender.send({ type: 'message', text: 'hi' }, ref, { agenticIdentity });

      expect(createClient).toHaveBeenCalledWith(ref.serviceUrl, agenticIdentity);
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
