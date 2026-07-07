import { Client as HttpClient } from '@microsoft/teams.common';

import { AuthProvider } from './auth';
import { AuthProviderInterceptor } from './auth-provider-interceptor';

import { Client } from './index';

describe('Api Client auth provider', () => {
  it('adds auth provider interceptor once to shared http client', () => {
    const http = new HttpClient();
    const authProvider: AuthProvider = { token: async () => 'token' };

    new Client('https://service.example.com', http, { authProvider });
    new Client('https://service.example.com', http, { authProvider });

    expect(http.interceptors.filter((interceptor) => interceptor instanceof AuthProviderInterceptor)).toHaveLength(1);
  });

  it('reapplies auth provider when http client is replaced', () => {
    const authProvider: AuthProvider = { token: async () => 'token' };
    const api = new Client('https://service.example.com', undefined, { authProvider });
    const replacement = new HttpClient();

    api.http = replacement;

    expect(replacement.interceptors.filter((interceptor) => interceptor instanceof AuthProviderInterceptor)).toHaveLength(1);
    expect(api.conversations.http).toBe(replacement);
    expect(api.users.http).toBe(replacement);
  });
});
