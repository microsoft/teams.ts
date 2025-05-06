import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './deactivate-types.ts';

/**
 * /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}/deactivate
 * Provides operations to call the deactivate method.
 */
export class DeactivateClient {
  protected baseUrl =
    '/solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}/deactivate';
  protected http: http.Client;

  constructor(
    protected readonly protectionPolicyBaseId: string,
    options?: http.Client | http.ClientOptions
  ) {
    if (!options) {
      this.http = new http.Client({
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `teams.ts[graph]/${pkg.version}`,
        },
      });
    } else if ('request' in options) {
      this.http = options.clone({
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `teams.ts[graph]/${pkg.version}`,
        },
      });
    } else {
      this.http = new http.Client({
        ...options,
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `teams.ts[graph]/${pkg.version}`,
          ...options.headers,
        },
      });
    }
  }

  /**
   * `POST /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}/deactivate`
   *
   * Deactivate a protectionPolicyBase.
   */
  async create(
    body: Endpoints['POST /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}/deactivate']['body'],
    params?: Endpoints['POST /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}/deactivate']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}/deactivate',
      [{ name: 'protectionPolicyBase-id', in: 'path' }],
      {
        ...(params || {}),
        'protectionPolicyBase-id': this.protectionPolicyBaseId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}/deactivate']['response']
      );
  }
}
