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

  it('should get by id', async () => {
    const client = new MeetingClient('');
    const spy = jest.spyOn(client.http, 'get').mockResolvedValueOnce({});
    await client.getById('1');
    expect(spy).toHaveBeenCalledWith('/v1/meetings/1');
  });

  it('should get participant', async () => {
    const client = new MeetingClient('');
    const spy = jest.spyOn(client.http, 'get').mockResolvedValueOnce({});
    await client.getParticipant('1', '2');
    expect(spy).toHaveBeenCalledWith('/v1/meetings/1/participants/2');
  });
});
