import { Client } from '@microsoft/teams.common/http';

import { MeetingClient } from './meeting';

describe('MeetingClient', () => {
  it('should use existing client', async () => {
    const http = new Client();
    const client = new MeetingClient('', http);
    const spy = jest.spyOn(http, 'get').mockResolvedValueOnce({});
    await client.getById('1');
    expect(spy).toHaveBeenCalledWith('/v1/meetings/1');
  });

  it('should use client options', async () => {
    const client = new MeetingClient('', {});
    const spy = jest.spyOn(client.http, 'get').mockResolvedValueOnce({});
    await client.getById('1');
    expect(spy).toHaveBeenCalledWith('/v1/meetings/1');
  });

  it('should use replaced http client for subsequent calls', async () => {
    const client = new MeetingClient('');
    const oldSpy = jest.spyOn(client.http, 'get').mockResolvedValueOnce({});
    const http = new Client();
    const newSpy = jest.spyOn(http, 'get').mockResolvedValueOnce({});
    client.http = http;
    await client.getById('123');
    expect(newSpy).toHaveBeenCalledWith('/v1/meetings/123');
    expect(oldSpy).not.toHaveBeenCalled();
  });

  it('should get by id', async () => {
    const client = new MeetingClient('');
    const spy = jest.spyOn(client.http, 'get').mockResolvedValueOnce({});
    await client.getById('1');
    expect(spy).toHaveBeenCalledWith('/v1/meetings/1');
  });

  it('should get participant', async () => {
    const client = new MeetingClient('');
    const spy = jest.spyOn(client.http, 'get').mockResolvedValueOnce({});
    await client.getParticipant('1', '2', '3');
    expect(spy).toHaveBeenCalledWith('/v1/meetings/1/participants/2?tenantId=3');
  });

  it('should URL-encode meeting id in getById', async () => {
    const client = new MeetingClient('');
    const spy = jest.spyOn(client.http, 'get').mockResolvedValueOnce({});
    await client.getById('abc+def/ghi=');
    expect(spy).toHaveBeenCalledWith('/v1/meetings/abc%2Bdef%2Fghi%3D');
  });

  it('should URL-encode participant parameters', async () => {
    const client = new MeetingClient('');
    const spy = jest.spyOn(client.http, 'get').mockResolvedValueOnce({});
    await client.getParticipant('abc+def/ghi=', 'user=1', 'tenant/1');
    expect(spy).toHaveBeenCalledWith(
      '/v1/meetings/abc%2Bdef%2Fghi%3D/participants/user%3D1?tenantId=tenant%2F1'
    );
  });
});
