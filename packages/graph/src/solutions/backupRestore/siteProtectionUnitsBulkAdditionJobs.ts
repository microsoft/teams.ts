import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './siteProtectionUnitsBulkAdditionJobs-types.ts';

/**
 * /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs
 * Provides operations to manage the siteProtectionUnitsBulkAdditionJobs property of the microsoft.graph.backupRestoreRoot entity.
 */
export class SiteProtectionUnitsBulkAdditionJobsClient {
  protected baseUrl = '/solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs';
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
   * `DELETE /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'siteProtectionUnitsBulkAdditionJob-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}']['response']
      );
  }

  /**
   * `GET /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs`
   *
   */
  async list(
    params?: Endpoints['GET /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs',
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
          res.data as Endpoints['GET /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs']['response']
      );
  }

  /**
   * `GET /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}`
   *
   */
  async get(
    params?: Endpoints['GET /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'siteProtectionUnitsBulkAdditionJob-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}']['response']
      );
  }

  /**
   * `PATCH /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}']['body'],
    params?: Endpoints['PATCH /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}',
      [{ name: 'siteProtectionUnitsBulkAdditionJob-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}']['response']
      );
  }

  /**
   * `POST /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs`
   *
   */
  async create(
    body: Endpoints['POST /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs']['body'],
    params?: Endpoints['POST /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs', [], {
      ...(params || {}),
    });

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs']['response']
      );
  }
}
