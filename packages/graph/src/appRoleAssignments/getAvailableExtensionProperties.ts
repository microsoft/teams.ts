import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './getAvailableExtensionProperties-types.ts';

/**
 * /appRoleAssignments/getAvailableExtensionProperties
 * Provides operations to call the getAvailableExtensionProperties method.
 */
export class GetAvailableExtensionPropertiesClient {
  protected baseUrl = '/appRoleAssignments/getAvailableExtensionProperties';
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
   * `POST /appRoleAssignments/getAvailableExtensionProperties`
   *
   * Return all directory extension definitions that have been registered in a directory, including through multi-tenant apps. The following entities support extension properties:
   */
  async create(
    body: Endpoints['POST /appRoleAssignments/getAvailableExtensionProperties']['body'],
    params?: Endpoints['POST /appRoleAssignments/getAvailableExtensionProperties']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/appRoleAssignments/getAvailableExtensionProperties', [], {
      ...(params || {}),
    });

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /appRoleAssignments/getAvailableExtensionProperties']['response']
      );
  }
}
