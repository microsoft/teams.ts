import qs from 'qs';
import * as http from '@microsoft/spark.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './homeRealmDiscoveryPolicies-types.ts';

interface Param {
  readonly in: string;
  readonly name: string;
  readonly explode?: boolean;
}

function getInjectedUrl(url: string, params: Array<Param>, data: Record<string, any>) {
  const query: Record<string, any> = {};

  for (const param of params) {
    if (param.in === 'query') {
      const arrayFormat = param.explode == null || param.explode ? 'repeat' : 'comma'; // Assuming params are in form style
      query[param.name] = qs.stringify(data[param.name], { arrayFormat });
    }

    if (param.in !== 'path') {
      continue;
    }

    url = url.replace(`{${param.name}}`, data[param.name]);
  }

  return `${url}${qs.stringify(query, { addQueryPrefix: true })}`;
}

/**
 * /applications/{application-id}/homeRealmDiscoveryPolicies
 * Provides operations to manage the homeRealmDiscoveryPolicies property of the microsoft.graph.application entity.
 */
export class HomeRealmDiscoveryPoliciesClient {
  protected baseUrl = '/applications/{application-id}/homeRealmDiscoveryPolicies';
  protected http: http.Client;

  constructor(
    protected readonly applicationId: string,
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
   * `GET /applications/{application-id}/homeRealmDiscoveryPolicies`
   *
   */
  async list(
    params?: Endpoints['GET /applications/{application-id}/homeRealmDiscoveryPolicies']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applications/{application-id}/homeRealmDiscoveryPolicies',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'application-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'application-id': this.applicationId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /applications/{application-id}/homeRealmDiscoveryPolicies']['response']
      );
  }

  /**
   * `GET /applications/{application-id}/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}`
   *
   */
  async get(
    params?: Endpoints['GET /applications/{application-id}/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applications/{application-id}/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'application-id', in: 'path' },
        { name: 'homeRealmDiscoveryPolicy-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'application-id': this.applicationId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /applications/{application-id}/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}']['response']
      );
  }
}
