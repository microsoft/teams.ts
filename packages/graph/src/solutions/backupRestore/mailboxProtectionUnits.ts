import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './mailboxProtectionUnits-types.ts';

/**
 * /solutions/backupRestore/mailboxProtectionUnits
 * Provides operations to manage the mailboxProtectionUnits property of the microsoft.graph.backupRestoreRoot entity.
 */
export class MailboxProtectionUnitsClient {
  protected baseUrl = '/solutions/backupRestore/mailboxProtectionUnits';
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
   * `DELETE /solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'mailboxProtectionUnit-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}']['response']
      );
  }

  /**
   * `GET /solutions/backupRestore/mailboxProtectionUnits`
   *
   * The list of mailbox protection units in the tenant.
   */
  async list(
    params?: Endpoints['GET /solutions/backupRestore/mailboxProtectionUnits']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/mailboxProtectionUnits',
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
          res.data as Endpoints['GET /solutions/backupRestore/mailboxProtectionUnits']['response']
      );
  }

  /**
   * `GET /solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}`
   *
   * The list of mailbox protection units in the tenant.
   */
  async get(
    params?: Endpoints['GET /solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'mailboxProtectionUnit-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}']['response']
      );
  }

  /**
   * `PATCH /solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}']['body'],
    params?: Endpoints['PATCH /solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}',
      [{ name: 'mailboxProtectionUnit-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}']['response']
      );
  }

  /**
   * `POST /solutions/backupRestore/mailboxProtectionUnits`
   *
   */
  async create(
    body: Endpoints['POST /solutions/backupRestore/mailboxProtectionUnits']['body'],
    params?: Endpoints['POST /solutions/backupRestore/mailboxProtectionUnits']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/solutions/backupRestore/mailboxProtectionUnits', [], {
      ...(params || {}),
    });

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /solutions/backupRestore/mailboxProtectionUnits']['response']
      );
  }
}
