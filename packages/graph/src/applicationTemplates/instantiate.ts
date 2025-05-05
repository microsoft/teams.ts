import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './instantiate-types.ts';

/**
 * /applicationTemplates/{applicationTemplate-id}/instantiate
 * Provides operations to call the instantiate method.
 */
export class InstantiateClient {
  protected baseUrl = '/applicationTemplates/{applicationTemplate-id}/instantiate';
  protected http: http.Client;

  constructor(
    protected readonly applicationTemplateId: string,
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
   * `POST /applicationTemplates/{applicationTemplate-id}/instantiate`
   *
   * Add an instance of an application from the Microsoft Entra application gallery into your directory. For non-gallery apps, use an application template with one of the following IDs to configure different single sign-on (SSO) modes like SAML SSO and password-based SSO.
   */
  async create(
    body: Endpoints['POST /applicationTemplates/{applicationTemplate-id}/instantiate']['body'],
    params?: Endpoints['POST /applicationTemplates/{applicationTemplate-id}/instantiate']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applicationTemplates/{applicationTemplate-id}/instantiate',
      [{ name: 'applicationTemplate-id', in: 'path' }],
      {
        ...(params || {}),
        'applicationTemplate-id': this.applicationTemplateId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /applicationTemplates/{applicationTemplate-id}/instantiate']['response']
      );
  }
}
