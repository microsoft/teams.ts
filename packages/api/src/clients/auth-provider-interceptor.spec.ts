import { AxiosHeaders } from 'axios';

import { Client } from '@microsoft/teams.common';

import { AgenticIdentity } from '../models';

import { AuthProvider } from './auth';
import { AuthProviderInterceptor } from './auth-provider-interceptor';

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

function authorizationHeader(request: { headers?: unknown }): string | undefined {
  const value = AxiosHeaders.from(request.headers as any).get('Authorization');
  return value == null ? undefined : String(value);
}

function bearer(token: string): string {
  return ['Bearer', token].join(' ');
}

describe('AuthProviderInterceptor', () => {
  it('adds bot token when no authorization header exists', async () => {
    const calls: unknown[] = [];
    const token = 'bot-token';
    const authProvider: AuthProvider = {
      token: async (options) => {
        calls.push(options);
        return token;
      }
    };
    const client = new HttpClient({ interceptors: [new AuthProviderInterceptor(authProvider)] });
    const requests = mockAdapter(client);

    await client.get('/test');

    expect(calls).toEqual([{ agenticIdentity: undefined }]);
    expect(authorizationHeader(requests[0])).toBe(bearer(token));
  });

  it('does not overwrite explicit authorization header', async () => {
    const authProvider: AuthProvider = { token: jest.fn(async () => 'bot-token') };
    const client = new HttpClient({ interceptors: [new AuthProviderInterceptor(authProvider)] });
    const requests = mockAdapter(client);
    const callerToken = bearer('caller-token');

    await client.get('/test', { headers: { Authorization: callerToken } });

    expect(authProvider.token).not.toHaveBeenCalled();
    expect(authorizationHeader(requests[0])).toBe(callerToken);
  });

  it('forwards default agentic identity to auth provider and sets token', async () => {
    const identity: AgenticIdentity = { agenticAppId: 'agent-app', agenticUserId: 'agent-user', tenantId: 'tenant-id' };
    const calls: unknown[] = [];
    const token = 'agentic-token';
    const authProvider: AuthProvider = {
      token: async (options) => {
        calls.push(options);
        return token;
      }
    };
    const client = new HttpClient({ interceptors: [new AuthProviderInterceptor(authProvider, identity)] });
    const requests = mockAdapter(client);

    await client.post('/test', {});

    expect(calls).toEqual([{ agenticIdentity: identity }]);
    expect(authorizationHeader(requests[0])).toBe(bearer(token));
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
    expect(authorizationHeader(requests[0])).toBeUndefined();
  });

  it('uses default agentic identity when no per-request extension is set', async () => {
    const defaultIdentity: AgenticIdentity = { agenticAppId: 'default-app', agenticUserId: 'default-user', tenantId: 'tenant-id' };
    const calls: unknown[] = [];
    const token = 'default-agentic-token';
    const authProvider: AuthProvider = {
      token: async (options) => {
        calls.push(options);
        return token;
      }
    };
    const client = new HttpClient({
      interceptors: [new AuthProviderInterceptor(authProvider, defaultIdentity)]
    });
    const requests = mockAdapter(client);

    await client.get('/test');

    expect(calls).toEqual([{ agenticIdentity: defaultIdentity }]);
    expect(authorizationHeader(requests[0])).toBe(bearer(token));
  });

  it('does not use request extensions to override default agentic identity', async () => {
    const defaultIdentity: AgenticIdentity = { agenticAppId: 'default-app', agenticUserId: 'default-user', tenantId: 'tenant-id' };
    const requestIdentity: AgenticIdentity = { agenticAppId: 'req-app', agenticUserId: 'req-user', tenantId: 'tenant-id' };
    const calls: unknown[] = [];
    const token = 'request-agentic-token';
    const authProvider: AuthProvider = {
      token: async (options) => {
        calls.push(options);
        return token;
      }
    };
    const client = new HttpClient({
      interceptors: [new AuthProviderInterceptor(authProvider, defaultIdentity)]
    });
    const requests = mockAdapter(client);

    await client.post('/test', {}, {
      extensions: { agenticIdentity: requestIdentity }
    });

    expect(calls).toEqual([{ agenticIdentity: defaultIdentity }]);
    expect(authorizationHeader(requests[0])).toBe(bearer(token));
  });
});
