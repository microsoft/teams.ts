import { Client } from '@microsoft/teams.common';

import { AGENTIC_IDENTITY_EXTENSION } from './auth-provider-interceptor';
import { MeetingClient } from './meeting';

describe('MeetingClient', () => {
  it('should use existing client', async () => {
    const http = new Client();
    const client = new MeetingClient('', http);
    const spy = jest.spyOn(http, 'get').mockResolvedValueOnce({});
    await client.getById('1');
    expect(spy).toHaveBeenCalledWith('/v1/meetings/1', {});
  });

  it('should use client options', async () => {
    const client = new MeetingClient('', {});
    const spy = jest.spyOn(client.http, 'get').mockResolvedValueOnce({});
    await client.getById('1');
    expect(spy).toHaveBeenCalledWith('/v1/meetings/1', {});
  });

  it('should use replaced http client for subsequent calls', async () => {
    const client = new MeetingClient('');
    const oldSpy = jest.spyOn(client.http, 'get').mockResolvedValueOnce({});
    const http = new Client();
    const newSpy = jest.spyOn(http, 'get').mockResolvedValueOnce({});
    client.http = http;
    await client.getById('123');
    expect(newSpy).toHaveBeenCalledWith('/v1/meetings/123', {});
    expect(oldSpy).not.toHaveBeenCalled();
  });

  it('should get by id', async () => {
    const client = new MeetingClient('');
    const spy = jest.spyOn(client.http, 'get').mockResolvedValueOnce({});
    await client.getById('1');
    expect(spy).toHaveBeenCalledWith('/v1/meetings/1', {});
  });

  it('should get participant', async () => {
    const client = new MeetingClient('');
    const spy = jest.spyOn(client.http, 'get').mockResolvedValueOnce({});
    await client.getParticipant('1', '2', '3');
    expect(spy).toHaveBeenCalledWith('/v1/meetings/1/participants/2?tenantId=3', {});
  });

  it('should pass serviceUrl and agentic identity options', async () => {
    const client = new MeetingClient('https://default.service');
    const spy = jest.spyOn(client.http, 'get').mockResolvedValueOnce({});
    const agenticIdentity = { agenticAppId: 'agent-app', agenticUserId: 'agent-user' };

    await client.getById('1', { serviceUrl: 'https://override.service/', agenticIdentity });

    expect(spy).toHaveBeenCalledWith(
      'https://override.service/v1/meetings/1',
      { extensions: { [AGENTIC_IDENTITY_EXTENSION]: agenticIdentity } }
    );
  });

  it('should send notification', async () => {
    const client = new MeetingClient('');
    const spy = jest.spyOn(client.http, 'post').mockResolvedValueOnce({});
    await client.sendNotification('1', {
      value: { recipients: ['user1'], surfaces: [{ surface: 'meetingTabIcon' }] },
    });
    expect(spy).toHaveBeenCalledWith('/v1/meetings/1/notification', {
      type: 'targetedMeetingNotification',
      value: { recipients: ['user1'], surfaces: [{ surface: 'meetingTabIcon' }] },
    }, {});
  });

});
