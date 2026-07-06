import { Client } from '@microsoft/teams.common';

import { Client as ApiClient } from '../index';

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

  it('should delete reaction', async () => {
    const client = new ReactionClient('');
    const spy = jest.spyOn(client.http, 'delete').mockResolvedValueOnce({});
    await client.delete('conv1', 'act1', 'like');
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

  it('should URL-encode parameters in delete', async () => {
    const client = new ReactionClient('');
    const spy = jest.spyOn(client.http, 'delete').mockResolvedValueOnce({});
    await client.delete('conv+1/test=', 'act+1/test=', 'heart');
    expect(spy).toHaveBeenCalledWith('/v3/conversations/conv%2B1%2Ftest%3D/activities/act%2B1%2Ftest%3D/reactions/heart');
  });
});

// The reaction verbs now live on `ConversationClient`; the deprecated top-level
// `client.reactions` accessor (the old chained path) is still supported until
// officially removed.
describe('client.reactions (deprecated accessor)', () => {
  it('add should PUT a reaction', async () => {
    const client = new ApiClient('');
    const spy = jest.spyOn(client.http, 'put').mockResolvedValueOnce({});
    await client.reactions.add('conv1', 'act1', 'like');
    expect(spy).toHaveBeenCalledWith('/v3/conversations/conv1/activities/act1/reactions/like');
  });

  it('delete should DELETE a reaction', async () => {
    const client = new ApiClient('');
    const spy = jest.spyOn(client.http, 'delete').mockResolvedValueOnce({});
    await client.reactions.delete('conv1', 'act1', 'like');
    expect(spy).toHaveBeenCalledWith('/v3/conversations/conv1/activities/act1/reactions/like');
  });
});
