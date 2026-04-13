import { Client } from '@microsoft/teams.common/http';

import { ConversationActivityClient } from './activity';

describe('ConversationActivityClient', () => {
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
});
