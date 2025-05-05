import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './mailboxInclusionRules-types.ts';

/**
 * /solutions/backupRestore/mailboxInclusionRules
 * Provides operations to manage the mailboxInclusionRules property of the microsoft.graph.backupRestoreRoot entity.
 */
export class MailboxInclusionRulesClient {
  protected baseUrl = '/solutions/backupRestore/mailboxInclusionRules';
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
   * `DELETE /solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'mailboxProtectionRule-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}']['response']
      );
  }

  /**
   * `GET /solutions/backupRestore/mailboxInclusionRules`
   *
   * The list of mailbox inclusion rules applied to the tenant.
   */
  async list(
    params?: Endpoints['GET /solutions/backupRestore/mailboxInclusionRules']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/mailboxInclusionRules',
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
          res.data as Endpoints['GET /solutions/backupRestore/mailboxInclusionRules']['response']
      );
  }

  /**
   * `GET /solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}`
   *
   * The list of mailbox inclusion rules applied to the tenant.
   */
  async get(
    params?: Endpoints['GET /solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'mailboxProtectionRule-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}']['response']
      );
  }

  /**
   * `PATCH /solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}']['body'],
    params?: Endpoints['PATCH /solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}',
      [{ name: 'mailboxProtectionRule-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}']['response']
      );
  }

  /**
   * `POST /solutions/backupRestore/mailboxInclusionRules`
   *
   */
  async create(
    body: Endpoints['POST /solutions/backupRestore/mailboxInclusionRules']['body'],
    params?: Endpoints['POST /solutions/backupRestore/mailboxInclusionRules']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/solutions/backupRestore/mailboxInclusionRules', [], {
      ...(params || {}),
    });

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /solutions/backupRestore/mailboxInclusionRules']['response']
      );
  }
}
