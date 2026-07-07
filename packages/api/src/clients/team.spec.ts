import { Client } from '@microsoft/teams.common';

import { AGENTIC_IDENTITY_EXTENSION } from './auth-provider-interceptor';
import { TeamClient } from './team';

describe('TeamClient', () => {
  it('should use existing client', async () => {
    const http = new Client();
    const client = new TeamClient('', http);
    const spy = jest.spyOn(http, 'get').mockResolvedValueOnce({});
    await client.getById('1');
    expect(spy).toHaveBeenCalledWith('/v3/teams/1', {});
  });

  it('should use client options', async () => {
    const client = new TeamClient('', {});
    const spy = jest.spyOn(client.http, 'get').mockResolvedValueOnce({});
    await client.getById('1');
    expect(spy).toHaveBeenCalledWith('/v3/teams/1', {});
  });

  it('should get by id', async () => {
    const client = new TeamClient('');
    const spy = jest.spyOn(client.http, 'get').mockResolvedValueOnce({});
    await client.getById('1');
    expect(spy).toHaveBeenCalledWith('/v3/teams/1', {});
  });

  it('should get conversations', async () => {
    const client = new TeamClient('');
    const spy = jest
      .spyOn(client.http, 'get')
      .mockResolvedValueOnce({ data: { conversations: [] } });
    await client.getConversations('1');
    expect(spy).toHaveBeenCalledWith('/v3/teams/1/conversations', {});
  });

  it('should pass serviceUrl and agentic identity options', async () => {
    const client = new TeamClient('https://default.service');
    const spy = jest.spyOn(client.http, 'get').mockResolvedValueOnce({});
    const agenticIdentity = { agenticAppId: 'agent-app', agenticUserId: 'agent-user' };

    await client.getById('1', { serviceUrl: 'https://override.service/', agenticIdentity });

    expect(spy).toHaveBeenCalledWith(
      'https://override.service/v3/teams/1',
      { extensions: { [AGENTIC_IDENTITY_EXTENSION]: agenticIdentity } }
    );
  });
});
