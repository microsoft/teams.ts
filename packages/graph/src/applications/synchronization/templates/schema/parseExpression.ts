import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './parseExpression-types.ts';

/**
 * /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema/parseExpression
 * Provides operations to call the parseExpression method.
 */
export class ParseExpressionClient {
  protected baseUrl =
    '/applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema/parseExpression';
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
   * `POST /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema/parseExpression`
   *
   * Parse a given string expression into an attributeMappingSource object. For more information about expressions, see Writing Expressions for Attribute Mappings in Microsoft Entra ID.
   */
  async create(
    body: Endpoints['POST /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema/parseExpression']['body'],
    params?: Endpoints['POST /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema/parseExpression']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema/parseExpression',
      [
        { name: 'application-id', in: 'path' },
        { name: 'synchronizationTemplate-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema/parseExpression']['response']
      );
  }
}
