import { Client } from '@microsoft/teams.common/http';

import { TeamClient } from './team';

describe('TeamClient', () => {
  it('should use existing client', async () => {
    const http = new Client();
    const client = new TeamClient('', http);
    const spy = jest.spyOn(http, 'get').mockResolvedValueOnce({});
    await client.getById('1');
    expect(spy).toHaveBeenCalledWith('/v3/teams/1');
  });

  it('should use client options', async () => {
    const client = new TeamClient('', {});
    const spy = jest.spyOn(client.http, 'get').mockResolvedValueOnce({});
    await client.getById('1');
    expect(spy).toHaveBeenCalledWith('/v3/teams/1');
  });

  it('should get by id', async () => {
    const client = new TeamClient('');
    const spy = jest.spyOn(client.http, 'get').mockResolvedValueOnce({});
    await client.getById('1');
    expect(spy).toHaveBeenCalledWith('/v3/teams/1');
  });

  it('should get conversations', async () => {
    const client = new TeamClient('');
    const spy = jest.spyOn(client.http, 'get').mockResolvedValueOnce({});
    await client.getConversations('1');
    expect(spy).toHaveBeenCalledWith('/v3/teams/1/conversations');
  });
});
