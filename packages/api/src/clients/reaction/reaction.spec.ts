import { Client } from '@microsoft/teams.common';

import { ReactionClient } from './reaction';

describe('ReactionClient', () => {
  it('should use existing client', async () => {
    const http = new Client();
    const client = new ReactionClient('', http);
    const spy = jest.spyOn(http, 'put').mockResolvedValueOnce({});
    await client.add('conv1', 'act1', 'like');
    expect(spy).toHaveBeenCalledWith('/v3/conversations/conv1/activities/act1/reactions/like');
  });

  it('should use client options', async () => {
    const client = new ReactionClient('', {});
    const spy = jest.spyOn(client.http, 'put').mockResolvedValueOnce({});
    await client.add('conv1', 'act1', 'like');
    expect(spy).toHaveBeenCalledWith('/v3/conversations/conv1/activities/act1/reactions/like');
  });

  it('should use replaced http client for subsequent calls', async () => {
    const client = new ReactionClient('');
    const oldSpy = jest.spyOn(client.http, 'put').mockResolvedValueOnce({});
    const http = new Client();
    const newSpy = jest.spyOn(http, 'put').mockResolvedValueOnce({});
    client.http = http;
    await client.add('conv1', 'act1', 'like');
    expect(newSpy).toHaveBeenCalledWith('/v3/conversations/conv1/activities/act1/reactions/like');
    expect(oldSpy).not.toHaveBeenCalled();
  });

  it('should add reaction', async () => {
    const client = new ReactionClient('');
    const spy = jest.spyOn(client.http, 'put').mockResolvedValueOnce({});
    await client.add('conv1', 'act1', 'like');
    expect(spy).toHaveBeenCalledWith('/v3/conversations/conv1/activities/act1/reactions/like');
  });

  it('should use normalized constructor serviceUrl', async () => {
    const client = new ReactionClient('https://default.service/');
    const spy = jest.spyOn(client.http, 'put').mockResolvedValueOnce({});

    await client.add('conv1', 'act1', 'like');

    expect(spy).toHaveBeenCalledWith(
      'https://default.service/v3/conversations/conv1/activities/act1/reactions/like'
    );
  });

  it('should delete reaction', async () => {
    const client = new ReactionClient('');
    const spy = jest.spyOn(client.http, 'delete').mockResolvedValueOnce({});
    await client.delete('conv1', 'act1', 'like');
    expect(spy).toHaveBeenCalledWith('/v3/conversations/conv1/activities/act1/reactions/like');
  });

});
