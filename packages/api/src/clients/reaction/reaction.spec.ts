import { Client } from '@microsoft/teams.common/http';

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

  it('should remove reaction', async () => {
    const client = new ReactionClient('');
    const spy = jest.spyOn(client.http, 'delete').mockResolvedValueOnce({});
    await client.remove('conv1', 'act1', 'like');
    expect(spy).toHaveBeenCalledWith('/v3/conversations/conv1/activities/act1/reactions/like');
  });

  it('should URL-encode conversation id in add', async () => {
    const client = new ReactionClient('');
    const spy = jest.spyOn(client.http, 'put').mockResolvedValueOnce({});
    await client.add('conv+1/test=', 'act1', 'like');
    expect(spy).toHaveBeenCalledWith('/v3/conversations/conv%2B1%2Ftest%3D/activities/act1/reactions/like');
  });

  it('should URL-encode activity id in add', async () => {
    const client = new ReactionClient('');
    const spy = jest.spyOn(client.http, 'put').mockResolvedValueOnce({});
    await client.add('conv1', 'act+1/test=', 'like');
    expect(spy).toHaveBeenCalledWith('/v3/conversations/conv1/activities/act%2B1%2Ftest%3D/reactions/like');
  });

  it('should URL-encode reaction type in add', async () => {
    const client = new ReactionClient('');
    const spy = jest.spyOn(client.http, 'put').mockResolvedValueOnce({});
    await client.add('conv1', 'act1', 'like');
    expect(spy).toHaveBeenCalledWith('/v3/conversations/conv1/activities/act1/reactions/like');
  });

  it('should URL-encode parameters in remove', async () => {
    const client = new ReactionClient('');
    const spy = jest.spyOn(client.http, 'delete').mockResolvedValueOnce({});
    await client.remove('conv+1/test=', 'act+1/test=', 'heart');
    expect(spy).toHaveBeenCalledWith('/v3/conversations/conv%2B1%2Ftest%3D/activities/act%2B1%2Ftest%3D/reactions/heart');
  });
});
