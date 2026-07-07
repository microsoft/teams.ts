import { Client } from '@microsoft/teams.common';

import { AGENTIC_IDENTITY_EXTENSION } from '../auth-provider-interceptor';

import { ReactionClient } from './reaction';

describe('ReactionClient', () => {
  it('should use existing client', async () => {
    const http = new Client();
    const client = new ReactionClient('', http);
    const spy = jest.spyOn(http, 'put').mockResolvedValueOnce({});
    await client.add('conv1', 'act1', 'like');
    expect(spy).toHaveBeenCalledWith('/v3/conversations/conv1/activities/act1/reactions/like', undefined, {});
  });

  it('should use client options', async () => {
    const client = new ReactionClient('', {});
    const spy = jest.spyOn(client.http, 'put').mockResolvedValueOnce({});
    await client.add('conv1', 'act1', 'like');
    expect(spy).toHaveBeenCalledWith('/v3/conversations/conv1/activities/act1/reactions/like', undefined, {});
  });

  it('should use replaced http client for subsequent calls', async () => {
    const client = new ReactionClient('');
    const oldSpy = jest.spyOn(client.http, 'put').mockResolvedValueOnce({});
    const http = new Client();
    const newSpy = jest.spyOn(http, 'put').mockResolvedValueOnce({});
    client.http = http;
    await client.add('conv1', 'act1', 'like');
    expect(newSpy).toHaveBeenCalledWith('/v3/conversations/conv1/activities/act1/reactions/like', undefined, {});
    expect(oldSpy).not.toHaveBeenCalled();
  });

  it('should add reaction', async () => {
    const client = new ReactionClient('');
    const spy = jest.spyOn(client.http, 'put').mockResolvedValueOnce({});
    await client.add('conv1', 'act1', 'like');
    expect(spy).toHaveBeenCalledWith('/v3/conversations/conv1/activities/act1/reactions/like', undefined, {});
  });

  it('should pass serviceUrl and agentic identity options', async () => {
    const client = new ReactionClient('https://default.service');
    const spy = jest.spyOn(client.http, 'put').mockResolvedValueOnce({});
    const agenticIdentity = { agenticAppId: 'agent-app', agenticUserId: 'agent-user' };

    await client.add('conv1', 'act1', 'like', {
      serviceUrl: 'https://override.service/',
      agenticIdentity,
    });

    expect(spy).toHaveBeenCalledWith(
      'https://override.service/v3/conversations/conv1/activities/act1/reactions/like',
      undefined,
      { extensions: { [AGENTIC_IDENTITY_EXTENSION]: agenticIdentity } }
    );
  });

  it('should delete reaction', async () => {
    const client = new ReactionClient('');
    const spy = jest.spyOn(client.http, 'delete').mockResolvedValueOnce({});
    await client.delete('conv1', 'act1', 'like');
    expect(spy).toHaveBeenCalledWith('/v3/conversations/conv1/activities/act1/reactions/like', {});
  });

});
