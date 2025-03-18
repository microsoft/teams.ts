import qs from 'qs';
import * as http from '@microsoft/spark.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './tokenIssuancePolicies-types.ts';

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
 * /applications/{application-id}/tokenIssuancePolicies
 * Provides operations to manage the tokenIssuancePolicies property of the microsoft.graph.application entity.
 */
export class TokenIssuancePoliciesClient {
  protected baseUrl = '/applications/{application-id}/tokenIssuancePolicies';
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
   * `GET /applications/{application-id}/tokenIssuancePolicies`
   *
   * List the tokenIssuancePolicy objects that are assigned to an application.
   */
  async list(
    params?: Endpoints['GET /applications/{application-id}/tokenIssuancePolicies']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applications/{application-id}/tokenIssuancePolicies',
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
          res.data as Endpoints['GET /applications/{application-id}/tokenIssuancePolicies']['response']
      );
  }
}
