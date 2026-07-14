import { AxiosHeaders } from 'axios';


import type { Interceptor } from '@microsoft/teams.common';

import { AgenticIdentity } from '../models';

import type { AuthProvider } from './auth';

export class AuthProviderInterceptor implements Interceptor {
  constructor(
    readonly authProvider: AuthProvider,
    readonly defaultAgenticIdentity?: AgenticIdentity
  ) { }

  request: Interceptor['request'] = async ({ config, log }) => {
    if (config.headers?.Authorization || config.headers?.authorization) {
      return config;
    }

    const token = await this.authProvider.token({ agenticIdentity: this.defaultAgenticIdentity });
    const resolvedToken = token?.toString();

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
