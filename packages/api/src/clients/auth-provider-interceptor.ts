import { AxiosHeaders } from 'axios';

import { AgenticIdentity } from '../models';

import type { Interceptor } from '@microsoft/teams.common';

import { PUBLIC, type CloudEnvironment } from '../auth';

import type { AuthProvider } from './auth';

export const AGENTIC_IDENTITY_EXTENSION = 'microsoft.teams.agenticIdentity';

export class AuthProviderInterceptor implements Interceptor {
  constructor(
    readonly authProvider: AuthProvider,
    readonly cloud: CloudEnvironment = PUBLIC
  ) { }

  request: Interceptor['request'] = async ({ config, log }) => {
    if (config.headers?.Authorization || config.headers?.authorization) {
      return config;
    }

    const extensions = (config as typeof config & { extensions?: Record<string, unknown> }).extensions;
    const agenticIdentity = extensions?.[AGENTIC_IDENTITY_EXTENSION] as AgenticIdentity | undefined;
    const scope = agenticIdentity ? this.cloud.agenticBotScope : this.cloud.botScope;
    const token = await this.authProvider.token({ scope, agenticIdentity });
    const resolvedToken = token && typeof token === 'object' ? token.toString() : token;

    if (!resolvedToken?.trim()) {
      if (resolvedToken != null) {
        log.warn('Auth provider returned an empty token; Authorization header was not added.');
      }
      return config;
    }

    config.headers ??= new AxiosHeaders();
    config.headers.Authorization = `Bearer ${resolvedToken}`;
    return config;
  };
}
