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

  it('does not expose a settable http client', () => {
    const descriptor = Object.getOwnPropertyDescriptor(Client.prototype, 'http');

    expect(descriptor?.get).toBeDefined();
    expect(descriptor?.set).toBeUndefined();
  });

  it('creates an agentic identity scoped clone', () => {
    const authProvider: AuthProvider = { token: async () => 'token' };
    const agenticIdentity = { agenticAppId: 'agent-app', agenticUserId: 'agent-user' };
    const api = new Client('https://service.example.com', undefined, { authProvider });

    const scoped = api.fromAgenticIdentity({ agenticIdentity });

    const scopedInterceptors = scoped.http.interceptors.filter((interceptor) => interceptor instanceof AuthProviderInterceptor);
    expect(scoped.serviceUrl).toBe(api.serviceUrl);
    expect(scopedInterceptors).toHaveLength(1);
    expect(scopedInterceptors[0].defaultAgenticIdentity).toBe(agenticIdentity);
  });

  it('keeps forAgenticIdentity as an agentic identity convenience alias', () => {
    const authProvider: AuthProvider = { token: async () => 'token' };
    const agenticIdentity = { agenticAppId: 'agent-app', agenticUserId: 'agent-user' };
    const api = new Client('https://service.example.com', undefined, { authProvider });

    const scoped = api.forAgenticIdentity(agenticIdentity);

    const scopedInterceptors = scoped.http.interceptors.filter((interceptor) => interceptor instanceof AuthProviderInterceptor);
    expect(scopedInterceptors).toHaveLength(1);
    expect(scopedInterceptors[0].defaultAgenticIdentity).toBe(agenticIdentity);
  });

  it('creates a service url scoped clone', () => {
    const authProvider: AuthProvider = { token: async () => 'token' };
    const agenticIdentity = { agenticAppId: 'agent-app', agenticUserId: 'agent-user' };
    const api = new Client('https://service.example.com', undefined, { authProvider, agenticIdentity });

    const scoped = api.fromServiceUrl({ serviceUrl: 'https://another.service.example.com/' });

    const scopedInterceptors = scoped.http.interceptors.filter((interceptor) => interceptor instanceof AuthProviderInterceptor);
    expect(scoped.serviceUrl).toBe('https://another.service.example.com');
    expect(scoped.conversations.serviceUrl).toBe('https://another.service.example.com');
    expect(scopedInterceptors).toHaveLength(1);
    expect(scopedInterceptors[0].defaultAgenticIdentity).toBe(agenticIdentity);
  });

  it('creates a clone scoped to service url and agentic identity', () => {
    const authProvider: AuthProvider = { token: async () => 'token' };
    const agenticIdentity = { agenticAppId: 'agent-app', agenticUserId: 'agent-user' };
    const api = new Client('https://service.example.com', undefined, { authProvider });

    const scoped = api.clone({
      serviceUrl: 'https://another.service.example.com/',
      agenticIdentity,
    });

    const scopedInterceptors = scoped.http.interceptors.filter((interceptor) => interceptor instanceof AuthProviderInterceptor);
    expect(scoped.serviceUrl).toBe('https://another.service.example.com');
    expect(scoped.conversations.serviceUrl).toBe('https://another.service.example.com');
    expect(scopedInterceptors).toHaveLength(1);
    expect(scopedInterceptors[0].defaultAgenticIdentity).toBe(agenticIdentity);
  });
});
