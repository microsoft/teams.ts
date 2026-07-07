import { ActivityParams, Client, ConversationReference } from '@microsoft/teams.api';

import { ActivitySender } from './activity-sender';

describe('ActivitySender', () => {
  let sender: ActivitySender;
  let mockClient: Client;
  let ref: ConversationReference;

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

    sender = new ActivitySender(mockClient, undefined as any);
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
        }),
        { serviceUrl: ref.serviceUrl },
      );
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
        expect.objectContaining({ type: 'message', text: 'updated' }),
        { serviceUrl: ref.serviceUrl },
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
        expect.objectContaining({ type: 'message', text: 'targeted' }),
        { serviceUrl: ref.serviceUrl },
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
        expect.objectContaining({ recipient: expect.objectContaining({ isTargeted: true }) }),
        { serviceUrl: ref.serviceUrl },
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
        }),
        { serviceUrl: ref.serviceUrl },
      );
    });

    it('should pass custom serviceUrl from ref as option', async () => {
      const customRef = {
        ...ref,
        serviceUrl: 'https://custom-service.botframework.com',
        conversation: { id: 'conv-456', conversationType: 'personal' },
      };

      await sender.send({ type: 'message', text: 'hi' }, customRef);

      const activities = (mockClient as any).conversations.activities;
      expect(activities('conv-456').create).toHaveBeenCalledWith(
        expect.any(Object),
        { serviceUrl: 'https://custom-service.botframework.com' },
      );
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
    });
  });
});
