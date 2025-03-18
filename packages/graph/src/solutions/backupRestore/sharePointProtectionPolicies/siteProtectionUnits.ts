import qs from 'qs';
import * as http from '@microsoft/spark.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './siteProtectionUnits-types.ts';

interface Param {
  readonly in: string;
  readonly name: string;
}

function getInjectedUrl(url: string, params: Array<Param>, data: Record<string, any>) {
  const query: Record<string, any> = {};

  for (const param of params) {
    if (param.in === 'query') {
      query[param.name] = data[param.name];
    }

    if (param.in !== 'path') {
      continue;
    }

    url = url.replace(`{${param.name}}`, data[param.name]);
  }

  return `${url}${qs.stringify(query, { addQueryPrefix: true })}`;
}

/**
 * /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteProtectionUnits
 * Provides operations to manage the siteProtectionUnits property of the microsoft.graph.sharePointProtectionPolicy entity.
 */
export class SiteProtectionUnitsClient {
  protected baseUrl =
    '/solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteProtectionUnits';
  protected http: http.Client;

  constructor(
    protected readonly sharePointProtectionPolicyId: string,
    options?: http.Client | http.ClientOptions
  ) {
    if (!options) {
      this.http = new http.Client({
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `spark[graph]/${pkg.version}`,
        },
      });
    } else if ('request' in options) {
      this.http = options.clone({
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `spark[graph]/${pkg.version}`,
        },
      });
    } else {
      this.http = new http.Client({
        ...options,
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `spark[graph]/${pkg.version}`,
          ...options.headers,
        },
      });
    }
  }

  /**
   * `GET /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteProtectionUnits`
   *
   * Get a list of the siteProtectionUnit objects that are associated with a sharePointProtectionPolicy.
   */
  async list(
    params?: Endpoints['GET /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteProtectionUnits']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteProtectionUnits',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'sharePointProtectionPolicy-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'sharePointProtectionPolicy-id': this.sharePointProtectionPolicyId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteProtectionUnits']['response']
      );
  }

  /**
   * `GET /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteProtectionUnits/{siteProtectionUnit-id}`
   *
   * The protection units (sites) that are protected under the site protection policy.
   */
  async get(
    params?: Endpoints['GET /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteProtectionUnits/{siteProtectionUnit-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteProtectionUnits/{siteProtectionUnit-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'sharePointProtectionPolicy-id', in: 'path' },
        { name: 'siteProtectionUnit-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'sharePointProtectionPolicy-id': this.sharePointProtectionPolicyId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteProtectionUnits/{siteProtectionUnit-id}']['response']
      );
  }
}
