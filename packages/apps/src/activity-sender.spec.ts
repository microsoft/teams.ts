import { ActivityParams, Client, ConversationReference } from '@microsoft/teams.api';

import { ActivitySender } from './activity-sender';

describe('ActivitySender', () => {
  let sender: ActivitySender;
  let mockCreate: jest.Mock;
  let mockUpdate: jest.Mock;
  let mockCreateTargeted: jest.Mock;
  let mockUpdateTargeted: jest.Mock;
  let mockApi: Client;
  let ref: ConversationReference;

  beforeEach(() => {
    mockCreate = jest.fn().mockResolvedValue({ id: 'activity-1' });
    mockUpdate = jest.fn().mockResolvedValue({ id: 'activity-1' });
    mockCreateTargeted = jest.fn().mockResolvedValue({ id: 'activity-1' });
    mockUpdateTargeted = jest.fn().mockResolvedValue({ id: 'activity-1' });

    mockApi = {
      conversations: {
        activities: () => ({
          create: mockCreate,
          update: mockUpdate,
          createTargeted: mockCreateTargeted,
          updateTargeted: mockUpdateTargeted,
        }),
      },
    } as any;

    ref = {
      channelId: 'msteams',
      serviceUrl: 'https://smba.trafficmanager.net/teams',
      bot: { id: 'bot-id', name: 'Bot', role: 'bot' },
      conversation: { id: 'conv-123', conversationType: 'personal' },
    };

    sender = new ActivitySender(mockApi, undefined as any);
  });

  describe('send', () => {
    it('should call create for a new activity', async () => {
      const activity: ActivityParams = { type: 'message', text: 'hello' };

      const result = await sender.send(activity, ref);

      expect(mockCreate).toHaveBeenCalledWith(
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

      expect(mockUpdate).toHaveBeenCalledWith(
        'existing-id',
        expect.objectContaining({ type: 'message', text: 'updated' }),
        { serviceUrl: ref.serviceUrl },
      );
      expect(mockCreate).not.toHaveBeenCalled();
    });

    it('should call createTargeted for targeted messages', async () => {
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

      expect(mockCreateTargeted).toHaveBeenCalledWith(
        expect.objectContaining({ type: 'message', text: 'targeted' }),
        { serviceUrl: groupRef.serviceUrl },
      );
    });

    it('should call updateTargeted for targeted updates', async () => {
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

      expect(mockUpdateTargeted).toHaveBeenCalledWith(
        'existing-id',
        expect.objectContaining({
          recipient: expect.objectContaining({ isTargeted: true }),
        }),
        { serviceUrl: groupRef.serviceUrl },
      );
      expect(mockUpdateTargeted).toHaveBeenCalledTimes(1);
      expect(mockCreate).not.toHaveBeenCalled();
    });

    it('should merge bot and conversation from ref into activity', async () => {
      const activity: ActivityParams = { type: 'message', text: 'hello' };

      await sender.send(activity, ref);

      expect(mockCreate).toHaveBeenCalledWith(
        expect.objectContaining({
          from: { id: 'bot-id', name: 'Bot', role: 'bot' },
          conversation: { id: 'conv-123', conversationType: 'personal' },
        }),
        { serviceUrl: ref.serviceUrl },
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
