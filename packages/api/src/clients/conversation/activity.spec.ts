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
    const spy = jest.spyOn(client.http, 'get').mockResolvedValueOnce({});
    await client.getMembers('1', '2');
    expect(spy).toHaveBeenCalledWith('/v3/conversations/1/activities/2/members');
  });
});
