import { Client } from '@microsoft/teams.common/http';

import { UserTokenClient } from './token';

describe('UserTokenClient', () => {
  it('should use existing client', async () => {
    const http = new Client();
    const client = new UserTokenClient(http);
    const spy = jest.spyOn(http, 'get').mockResolvedValueOnce({});

    await client.get({
      connectionName: 'graph',
      userId: '1',
      channelId: 'msteams',
      code: '123',
    });

    expect(spy).toHaveBeenCalledWith(
      'https://token.botframework.com/api/usertoken/GetToken?connectionName=graph&userId=1&channelId=msteams&code=123'
    );
  });

  it('should use client options', async () => {
    const client = new UserTokenClient({});
    const spy = jest.spyOn(client.http, 'get').mockResolvedValueOnce({});

    await client.get({
      connectionName: 'graph',
      userId: '1',
      channelId: 'msteams',
      code: '123',
    });

    expect(spy).toHaveBeenCalledWith(
      'https://token.botframework.com/api/usertoken/GetToken?connectionName=graph&userId=1&channelId=msteams&code=123'
    );
  });

    it('should use client options and regional endpoint', async () => {
    const client = new UserTokenClient({}, { oauthUrl: 'https://europe.token.botframework.com' });
    const spy = jest.spyOn(client.http, 'get').mockResolvedValueOnce({});

    await client.get({
      connectionName: 'graph',
      userId: '1',
      channelId: 'msteams',
      code: '123',
    });

    expect(spy).toHaveBeenCalledWith(
      'https://europe.token.botframework.com/api/usertoken/GetToken?connectionName=graph&userId=1&channelId=msteams&code=123'
    );
  });


  it('should get token', async () => {
    const client = new UserTokenClient();
    const spy = jest.spyOn(client.http, 'get').mockResolvedValueOnce({});

    await client.get({
      connectionName: 'graph',
      userId: '1',
      channelId: 'msteams',
      code: '123',
    });

    expect(spy).toHaveBeenCalledWith(
      'https://token.botframework.com/api/usertoken/GetToken?connectionName=graph&userId=1&channelId=msteams&code=123'
    );
  });

  it('should get AAD token', async () => {
    const client = new UserTokenClient();
    const spy = jest.spyOn(client.http, 'post').mockResolvedValueOnce({});

    await client.getAad({
      connectionName: 'graph',
      userId: '1',
      channelId: 'msteams',
      resourceUrls: [],
    });

    expect(spy).toHaveBeenCalledWith(
      'https://token.botframework.com/api/usertoken/GetAadTokens?connectionName=graph&userId=1&channelId=msteams',
      {
        connectionName: 'graph',
        userId: '1',
        channelId: 'msteams',
        resourceUrls: [],
      }
    );
  });

  
  it('should get AAD token in regional endpoint', async () => {
    const client = new UserTokenClient({}, { oauthUrl: 'https://europe.token.botframework.com' });
    const spy = jest.spyOn(client.http, 'post').mockResolvedValueOnce({});

    await client.getAad({
      connectionName: 'graph',
      userId: '1',
      channelId: 'msteams',
      resourceUrls: [],
    });

    expect(spy).toHaveBeenCalledWith(
      'https://europe.token.botframework.com/api/usertoken/GetAadTokens?connectionName=graph&userId=1&channelId=msteams',
      {
        connectionName: 'graph',
        userId: '1',
        channelId: 'msteams',
        resourceUrls: [],
      }
    );
  });


  it('should get token status', async () => {
    const client = new UserTokenClient();
    const spy = jest.spyOn(client.http, 'get').mockResolvedValueOnce({});

    await client.getStatus({
      userId: '1',
      channelId: 'msteams',
      includeFilter: '',
    });

    expect(spy).toHaveBeenCalledWith(
      'https://token.botframework.com/api/usertoken/GetTokenStatus?userId=1&channelId=msteams&includeFilter='
    );
  });

    it('should get token status with regional endpoint', async () => {
    const client = new UserTokenClient({}, { oauthUrl: 'https://europe.token.botframework.com' });
    const spy = jest.spyOn(client.http, 'get').mockResolvedValueOnce({});

    await client.getStatus({
      userId: '1',
      channelId: 'msteams',
      includeFilter: '',
    });

    expect(spy).toHaveBeenCalledWith(
      'https://europe.token.botframework.com/api/usertoken/GetTokenStatus?userId=1&channelId=msteams&includeFilter='
    );
  });

  it('should delete token', async () => {
    const client = new UserTokenClient();
    const spy = jest.spyOn(client.http, 'delete').mockResolvedValueOnce({});

    await client.signOut({
      channelId: 'msteams',
      connectionName: 'graph',
      userId: '1',
    });

    expect(spy).toHaveBeenCalledWith(
      'https://token.botframework.com/api/usertoken/SignOut?channelId=msteams&connectionName=graph&userId=1',
      {
        data: {
          channelId: 'msteams',
          connectionName: 'graph',
          userId: '1',
        },
      }
    );
  });

    it('should delete token in regional endpoint', async () => {
    const client = new UserTokenClient({}, { oauthUrl: 'https://europe.token.botframework.com' });
    const spy = jest.spyOn(client.http, 'delete').mockResolvedValueOnce({});

    await client.signOut({
      channelId: 'msteams',
      connectionName: 'graph',
      userId: '1',
    });

    expect(spy).toHaveBeenCalledWith(
      'https://europe.token.botframework.com/api/usertoken/SignOut?channelId=msteams&connectionName=graph&userId=1',
      {
        data: {
          channelId: 'msteams',
          connectionName: 'graph',
          userId: '1',
        },
      }
    );
  });

  it('should exchange token', async () => {
    const client = new UserTokenClient();
    const spy = jest.spyOn(client.http, 'post').mockResolvedValueOnce({});

    await client.exchange({
      channelId: 'msteams',
      connectionName: 'graph',
      userId: '1',
      exchangeRequest: {
        uri: 'http://localhost',
        token: 'test',
      },
    });

    expect(spy).toHaveBeenCalledWith(
      'https://token.botframework.com/api/usertoken/exchange?userId=1&connectionName=graph&channelId=msteams',
      {
        uri: 'http://localhost',
        token: 'test',
      }
    );
  });

    it('should exchange token with regional endpoint', async () => {
    const client = new UserTokenClient({}, { oauthUrl: 'https://europe.token.botframework.com' });
    const spy = jest.spyOn(client.http, 'post').mockResolvedValueOnce({});

    await client.exchange({
      channelId: 'msteams',
      connectionName: 'graph',
      userId: '1',
      exchangeRequest: {
        uri: 'http://localhost',
        token: 'test',
      },
    });

    expect(spy).toHaveBeenCalledWith(
      'https://europe.token.botframework.com/api/usertoken/exchange?userId=1&connectionName=graph&channelId=msteams',
      {
        uri: 'http://localhost',
        token: 'test',
      }
    );
  });
});
