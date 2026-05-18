import { ActivityParams, ConversationReference } from '@microsoft/teams.api';
import  {Client as HttpClient } from '@microsoft/teams.common';

import { ActivitySender } from './activity-sender';
import { ApiClient } from './api';

describe('ActivitySender', () => {
  let sender: ActivitySender;
  let mockHttpClient: HttpClient;
  let ref: ConversationReference;

  beforeEach(() => {
    mockHttpClient = {
      post: jest.fn().mockResolvedValue({ data: { id: 'activity-1' } }),
      put: jest.fn().mockResolvedValue({ data: { id: 'activity-1' } }),
      request: jest.fn(),
    } as any;

    ref = {
      channelId: 'msteams',
      serviceUrl: 'https://smba.trafficmanager.net/teams',
      bot: { id: 'bot-id', name: 'Bot', role: 'bot' },
      conversation: { id: 'conv-123', conversationType: 'personal' },
    };

    sender = new ActivitySender(
      (serviceUrl) => new ApiClient(serviceUrl, mockHttpClient),
      undefined as any
    );
  });

  describe('send', () => {
    it('should POST to create a new activity', async () => {
      const activity: ActivityParams = { type: 'message', text: 'hello' };

      const result = await sender.send(activity, ref);

      expect(mockHttpClient.post).toHaveBeenCalledWith(
        'https://smba.trafficmanager.net/teams/v3/conversations/conv-123/activities',
        expect.objectContaining({
          type: 'message',
          text: 'hello',
          from: ref.bot,
          conversation: ref.conversation,
        })
      );
      expect(result).toEqual(expect.objectContaining({ id: 'activity-1' }));
    });

    it('should PUT to update an existing activity', async () => {
      const activity: ActivityParams = {
        type: 'message',
        text: 'updated',
        id: 'existing-id',
      };

      await sender.send(activity, ref);

      expect(mockHttpClient.put).toHaveBeenCalledWith(
        'https://smba.trafficmanager.net/teams/v3/conversations/conv-123/activities/existing-id',
        expect.objectContaining({ type: 'message', text: 'updated' })
      );
      expect(mockHttpClient.post).not.toHaveBeenCalled();
    });

    it('should POST with isTargetedActivity query param for targeted messages', async () => {
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

      expect(mockHttpClient.post).toHaveBeenCalledWith(
        'https://smba.trafficmanager.net/teams/v3/conversations/conv-123/activities?isTargetedActivity=true',
        expect.objectContaining({ type: 'message', text: 'targeted' })
      );
    });

    it('should PUT with isTargetedActivity query param for targeted updates', async () => {
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

      expect(mockHttpClient.put).toHaveBeenCalledWith(
        'https://smba.trafficmanager.net/teams/v3/conversations/conv-123/activities/existing-id?isTargetedActivity=true',
        expect.objectContaining({
          recipient: expect.objectContaining({ isTargeted: true }),
        })
      );
      expect(mockHttpClient.put).toHaveBeenCalledTimes(1);
      expect(mockHttpClient.post).not.toHaveBeenCalled();
    });

    it('should merge bot and conversation from ref into activity', async () => {
      const activity: ActivityParams = { type: 'message', text: 'hello' };

      await sender.send(activity, ref);

      expect(mockHttpClient.post).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({
          from: { id: 'bot-id', name: 'Bot', role: 'bot' },
          conversation: { id: 'conv-123', conversationType: 'personal' },
        })
      );
    });

    it('should use the serviceUrl from the conversation reference in the endpoint', async () => {
      const customRef = {
        ...ref,
        serviceUrl: 'https://custom-service.botframework.com',
        conversation: { id: 'conv-456', conversationType: 'personal' },
      };

      await sender.send({ type: 'message', text: 'hi' }, customRef);

      expect(mockHttpClient.post).toHaveBeenCalledWith(
        'https://custom-service.botframework.com/v3/conversations/conv-456/activities',
        expect.any(Object)
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
