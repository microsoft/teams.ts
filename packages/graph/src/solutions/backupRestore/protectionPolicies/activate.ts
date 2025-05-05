import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './activate-types.ts';

/**
 * /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}/activate
 * Provides operations to call the activate method.
 */
export class ActivateClient {
  protected baseUrl =
    '/solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}/activate';
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
   * `POST /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}/activate`
   *
   * Activate a protectionPolicyBase. Currently, only one active backup policy per underlying service is supported (that is, one for OneDrive accounts, one for SharePoint sites, and one for Exchange Online users). You can add or remove artifacts (sites or user accounts) to or from each active policy.
   */
  async create(
    body: Endpoints['POST /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}/activate']['body'],
    params?: Endpoints['POST /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}/activate']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}/activate',
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
          res.data as Endpoints['POST /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}/activate']['response']
      );
  }
}
