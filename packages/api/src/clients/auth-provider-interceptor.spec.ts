import { Client } from '@microsoft/teams.common';

import { AgenticIdentity } from '../models';
import { AuthProvider } from './auth';
import { AGENTIC_IDENTITY_EXTENSION, AuthProviderInterceptor } from './auth-provider-interceptor';

class HttpClient extends Client {
  get instance() {
    return this.http;
  }
}

function mockAdapter(client: HttpClient) {
  const requests: any[] = [];
  client.instance.defaults.adapter = async (config) => {
    requests.push(config);
    return { data: {}, status: 200, statusText: 'OK', headers: {}, config };
  };
  return requests;
}

describe('AuthProviderInterceptor', () => {
  it('adds bot token when no authorization header exists', async () => {
    const calls: unknown[] = [];
    const authProvider: AuthProvider = {
      token: async (options) => {
        calls.push(options);
        return 'bot-token';
      }
    };
    const client = new HttpClient({ interceptors: [new AuthProviderInterceptor(authProvider)] });
    const requests = mockAdapter(client);

    await client.get('/test');

    expect(calls).toEqual([{ scope: 'https://api.botframework.com/.default', agenticIdentity: undefined }]);
    expect(requests[0].headers.Authorization).toBe('Bearer bot-token');
  });

  it('does not overwrite explicit authorization header', async () => {
    const authProvider: AuthProvider = { token: jest.fn(async () => 'bot-token') };
    const client = new HttpClient({ interceptors: [new AuthProviderInterceptor(authProvider)] });
    const requests = mockAdapter(client);

    await client.get('/test', { headers: { Authorization: 'Bearer explicit-token' } });

    expect(authProvider.token).not.toHaveBeenCalled();
    expect(requests[0].headers.Authorization).toBe('Bearer explicit-token');
  });

  it('passes agentic identity extension and uses agentic scope', async () => {
    const identity: AgenticIdentity = { agenticAppId: 'agent-app', agenticUserId: 'agent-user', tenantId: 'tenant-id' };
    const calls: unknown[] = [];
    const authProvider: AuthProvider = {
      token: async (options) => {
        calls.push(options);
        return 'agentic-token';
      }
    };
    const client = new HttpClient({ interceptors: [new AuthProviderInterceptor(authProvider)] });
    const requests = mockAdapter(client);

    await client.post('/test', {}, {
      extensions: { [AGENTIC_IDENTITY_EXTENSION]: identity }
    });

    expect(calls).toEqual([{ scope: 'https://botapi.skype.com/.default', agenticIdentity: identity }]);
    expect(requests[0].extensions).toEqual({ [AGENTIC_IDENTITY_EXTENSION]: identity });
    expect(requests[0].headers.Authorization).toBe('Bearer agentic-token');
  });

  it('does not add authorization for blank token', async () => {
    const authProvider: AuthProvider = { token: jest.fn(async () => '   ') };
    const logger = { warn: jest.fn() };
    const client = new HttpClient({
      logger: logger as any,
      interceptors: [new AuthProviderInterceptor(authProvider)]
    });
    const requests = mockAdapter(client);

    await client.get('/test');

    expect(logger.warn).toHaveBeenCalledWith('Auth provider returned an empty token; Authorization header was not added.');
    expect(requests[0].headers.Authorization).toBeUndefined();
  });
});
