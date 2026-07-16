import { UserClient } from './index';

describe('UserClient', () => {
  it('getToken should GET the user token', async () => {
    const client = new UserClient();
    const spy = jest.spyOn(client.http, 'get').mockResolvedValueOnce({});

    await client.getToken({
      connectionName: 'graph',
      userId: '1',
      channelId: 'msteams',
      code: '123',
    });

    expect(spy).toHaveBeenCalledWith(
      'https://token.botframework.com/api/usertoken/GetToken?connectionName=graph&userId=1&channelId=msteams&code=123'
    );
  });

  it('getAadTokens should POST for AAD tokens', async () => {
    const client = new UserClient();
    const spy = jest.spyOn(client.http, 'post').mockResolvedValueOnce({});

    await client.getAadTokens({
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

  it('getTokenStatus should GET the token status', async () => {
    const client = new UserClient();
    const spy = jest.spyOn(client.http, 'get').mockResolvedValueOnce({});

    await client.getTokenStatus({
      userId: '1',
      channelId: 'msteams',
      includeFilter: '',
    });

    expect(spy).toHaveBeenCalledWith(
      'https://token.botframework.com/api/usertoken/GetTokenStatus?userId=1&channelId=msteams&includeFilter='
    );
  });

  it('signOut should DELETE the user token', async () => {
    const client = new UserClient();
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

  it('exchangeToken should POST to exchange', async () => {
    const client = new UserClient();
    const spy = jest.spyOn(client.http, 'post').mockResolvedValueOnce({});

    await client.exchangeToken({
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

  // The pre-flattening `token` sub-client accessor is still supported until
  // officially removed; keep full coverage of it alongside the flattened
  // methods above.
  describe('deprecated token sub-client', () => {
    it('token.get should GET the user token', async () => {
      const client = new UserClient();
      const spy = jest.spyOn(client.http, 'get').mockResolvedValueOnce({});

      await client.token.get({
        connectionName: 'graph',
        userId: '1',
        channelId: 'msteams',
        code: '123',
      });

      expect(spy).toHaveBeenCalledWith(
        'https://token.botframework.com/api/usertoken/GetToken?connectionName=graph&userId=1&channelId=msteams&code=123'
      );
    });

    it('token.getAad should POST for AAD tokens', async () => {
      const client = new UserClient();
      const spy = jest.spyOn(client.http, 'post').mockResolvedValueOnce({});

      await client.token.getAad({
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

    it('token.getStatus should GET the token status', async () => {
      const client = new UserClient();
      const spy = jest.spyOn(client.http, 'get').mockResolvedValueOnce({});

      await client.token.getStatus({
        userId: '1',
        channelId: 'msteams',
        includeFilter: '',
      });

      expect(spy).toHaveBeenCalledWith(
        'https://token.botframework.com/api/usertoken/GetTokenStatus?userId=1&channelId=msteams&includeFilter='
      );
    });

    it('token.signOut should DELETE the user token', async () => {
      const client = new UserClient();
      const spy = jest.spyOn(client.http, 'delete').mockResolvedValueOnce({});

      await client.token.signOut({
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

    it('token.exchange should POST to exchange', async () => {
      const client = new UserClient();
      const spy = jest.spyOn(client.http, 'post').mockResolvedValueOnce({});

      await client.token.exchange({
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
  });
});
