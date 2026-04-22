import { Client } from '@microsoft/teams.common/http';

import { ConversationMemberClient } from './member';

describe('ConversationMemberClient', () => {
  it('should use existing client', async () => {
    const http = new Client();
    const client = new ConversationMemberClient('', http);
    const spy = jest.spyOn(http, 'get').mockResolvedValueOnce({ data: [] });
    await client.get('1');
    expect(spy).toHaveBeenCalledWith('/v3/conversations/1/members');
  });

  it('should use client options', async () => {
    const client = new ConversationMemberClient('', {});
    const spy = jest.spyOn(client.http, 'get').mockResolvedValueOnce({ data: [] });
    await client.get('1');
    expect(spy).toHaveBeenCalledWith('/v3/conversations/1/members');
  });

  it('should get', async () => {
    const client = new ConversationMemberClient('');
    const spy = jest.spyOn(client.http, 'get').mockResolvedValueOnce({ data: [] });
    await client.get('1');
    expect(spy).toHaveBeenCalledWith('/v3/conversations/1/members');
  });

  it('should get by id', async () => {
    const client = new ConversationMemberClient('');
    const spy = jest.spyOn(client.http, 'get').mockResolvedValueOnce({ data: {} });
    await client.getById('1', '2');
    expect(spy).toHaveBeenCalledWith('/v3/conversations/1/members/2');
  });

  it('should get paged', async () => {
    const client = new ConversationMemberClient('');
    const spy = jest.spyOn(client.http, 'get').mockResolvedValueOnce({ data: { members: [] } });
    await client.getPaged('1');
    expect(spy).toHaveBeenCalledWith('/v3/conversations/1/pagedMembers', { params: {} });
  });

  it('should get paged with params', async () => {
    const client = new ConversationMemberClient('');
    const spy = jest.spyOn(client.http, 'get').mockResolvedValueOnce({ data: { members: [] } });
    await client.getPaged('1', 50, 'some-token');
    expect(spy).toHaveBeenCalledWith('/v3/conversations/1/pagedMembers', {
      params: { pageSize: 50, continuationToken: 'some-token' },
    });
  });

  it('should delete', async () => {
    const client = new ConversationMemberClient('');
    const spy = jest.spyOn(client.http, 'delete').mockResolvedValueOnce({});
    await client.delete('1', '2');
    expect(spy).toHaveBeenCalledWith('/v3/conversations/1/members/2');
  });
});
