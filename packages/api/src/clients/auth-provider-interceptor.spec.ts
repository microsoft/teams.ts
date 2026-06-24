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

    expect(calls).toEqual([{ agenticIdentity: undefined }]);
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

  it('forwards agentic identity to auth provider and sets token', async () => {
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

    expect(calls).toEqual([{ agenticIdentity: identity }]);
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

  it('uses default agentic identity when no per-request extension is set', async () => {
    const defaultIdentity: AgenticIdentity = { agenticAppId: 'default-app', agenticUserId: 'default-user', tenantId: 'tenant-id' };
    const calls: unknown[] = [];
    const authProvider: AuthProvider = {
      token: async (options) => {
        calls.push(options);
        return 'default-agentic-token';
      }
    };
    const client = new HttpClient({
      interceptors: [new AuthProviderInterceptor(authProvider, defaultIdentity)]
    });
    const requests = mockAdapter(client);

    await client.get('/test');

    expect(calls).toEqual([{ agenticIdentity: defaultIdentity }]);
    expect(requests[0].headers.Authorization).toBe('Bearer default-agentic-token');
  });

  it('per-request agentic identity overrides default', async () => {
    const defaultIdentity: AgenticIdentity = { agenticAppId: 'default-app', agenticUserId: 'default-user', tenantId: 'tenant-id' };
    const requestIdentity: AgenticIdentity = { agenticAppId: 'req-app', agenticUserId: 'req-user', tenantId: 'tenant-id' };
    const calls: unknown[] = [];
    const authProvider: AuthProvider = {
      token: async (options) => {
        calls.push(options);
        return 'request-agentic-token';
      }
    };
    const client = new HttpClient({
      interceptors: [new AuthProviderInterceptor(authProvider, defaultIdentity)]
    });
    const requests = mockAdapter(client);

    await client.post('/test', {}, {
      extensions: { [AGENTIC_IDENTITY_EXTENSION]: requestIdentity }
    });

    expect(calls).toEqual([{ agenticIdentity: requestIdentity }]);
    expect(requests[0].headers.Authorization).toBe('Bearer request-agentic-token');
  });
});
