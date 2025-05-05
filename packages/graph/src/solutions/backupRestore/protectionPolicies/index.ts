import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { ActivateClient } from './activate';
import { DeactivateClient } from './deactivate';

/**
 * /solutions/backupRestore/protectionPolicies
 * Provides operations to manage the protectionPolicies property of the microsoft.graph.backupRestoreRoot entity.
 */
export class ProtectionPoliciesClient {
  protected baseUrl = '/solutions/backupRestore/protectionPolicies';
  protected http: http.Client;

  constructor(options?: http.Client | http.ClientOptions) {
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
   * `/solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}/activate`
   *
   * Provides operations to call the activate method.
   */
  activate(protectionPolicyBaseId: string) {
    return new ActivateClient(protectionPolicyBaseId, this.http);
  }

  /**
   * `/solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}/deactivate`
   *
   * Provides operations to call the deactivate method.
   */
  deactivate(protectionPolicyBaseId: string) {
    return new DeactivateClient(protectionPolicyBaseId, this.http);
  }

  /**
   * `DELETE /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}`
   *
   * Delete a protection policy. Read the properties and relationships of a protectionPolicyBase object.
   */
  async delete(
    params?: Endpoints['DELETE /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'protectionPolicyBase-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}']['response']
      );
  }

  /**
   * `GET /solutions/backupRestore/protectionPolicies`
   *
   * List of protection policies in the tenant.
   */
  async list(
    params?: Endpoints['GET /solutions/backupRestore/protectionPolicies']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/protectionPolicies',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/backupRestore/protectionPolicies']['response']
      );
  }

  /**
   * `GET /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}`
   *
   * List of protection policies in the tenant.
   */
  async get(
    params?: Endpoints['GET /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'protectionPolicyBase-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}']['response']
      );
  }

  /**
   * `PATCH /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}']['body'],
    params?: Endpoints['PATCH /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}',
      [{ name: 'protectionPolicyBase-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}']['response']
      );
  }

  /**
   * `POST /solutions/backupRestore/protectionPolicies`
   *
   */
  async create(
    body: Endpoints['POST /solutions/backupRestore/protectionPolicies']['body'],
    params?: Endpoints['POST /solutions/backupRestore/protectionPolicies']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/solutions/backupRestore/protectionPolicies', [], {
      ...(params || {}),
    });

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /solutions/backupRestore/protectionPolicies']['response']
      );
  }
}
