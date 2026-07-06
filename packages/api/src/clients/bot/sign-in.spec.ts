import { Client } from '@microsoft/teams.common';

import { Client as ApiClient } from '../index';

import { BotSignInClient } from './sign-in';

describe('BotSignInClient', () => {
  it('should get url', async () => {
    const client = new BotSignInClient();
    const spy = jest.spyOn(client.http, 'get').mockResolvedValueOnce({});

    await client.getUrl({ state: 'test' });

    expect(spy).toHaveBeenCalledWith(
      'https://token.botframework.com/api/botsignin/GetSignInUrl?state=test'
    );
  });

  it('should get resource', async () => {
    const client = new BotSignInClient();
    const spy = jest.spyOn(client.http, 'get').mockResolvedValueOnce({});
    await client.getResource({ state: 'test' });
    expect(spy).toHaveBeenCalledWith(
      'https://token.botframework.com/api/botsignin/GetSignInResource?state=test'
    );
  });

  it('should use existing client', async () => {
    const http = new Client();
    const client = new BotSignInClient(http);
    const spy = jest.spyOn(http, 'get').mockResolvedValueOnce({});

    await client.getUrl({ state: 'test' });

    expect(spy).toHaveBeenCalledWith(
      'https://token.botframework.com/api/botsignin/GetSignInUrl?state=test'
    );
  });

  it('should use client options', async () => {
    const client = new BotSignInClient({});
    const spy = jest.spyOn(client.http, 'get').mockResolvedValueOnce({});

    await client.getUrl({ state: 'test' });

    expect(spy).toHaveBeenCalledWith(
      'https://token.botframework.com/api/botsignin/GetSignInUrl?state=test'
    );
  });

  it('should use regional endpoint', async () => {
    const client = new BotSignInClient({}, { oauthUrl: 'https://europe.token.botframework.com' });
    const spy = jest.spyOn(client.http, 'get').mockResolvedValueOnce({});

    await client.getUrl({ state: 'test' });

    expect(spy).toHaveBeenCalledWith(
      'https://europe.token.botframework.com/api/botsignin/GetSignInUrl?state=test'
    );
  });
});

// The bot client is deprecated but still supported; verify the deprecated
// `client.bots.signIn` accessor (the old chained path) still reaches
// BotSignInClient.
describe('client.bots.signIn (deprecated accessor)', () => {
  it('getUrl should GET the sign in url', async () => {
    const client = new ApiClient('');
    const spy = jest.spyOn(client.http, 'get').mockResolvedValueOnce({});

    await client.bots.signIn.getUrl({ state: 'test' });

    expect(spy).toHaveBeenCalledWith(
      'https://token.botframework.com/api/botsignin/GetSignInUrl?state=test'
    );
  });

  it('getResource should GET the sign in resource', async () => {
    const client = new ApiClient('');
    const spy = jest.spyOn(client.http, 'get').mockResolvedValueOnce({});

    await client.bots.signIn.getResource({ state: 'test' });

    expect(spy).toHaveBeenCalledWith(
      'https://token.botframework.com/api/botsignin/GetSignInResource?state=test'
    );
  });
});
