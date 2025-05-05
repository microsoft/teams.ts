import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { InstantiateClient } from './instantiate';

/**
 * /applicationTemplates
 * Provides operations to manage the collection of applicationTemplate entities.
 */
export class ApplicationTemplatesClient {
  protected baseUrl = '/applicationTemplates';
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
   * `/applicationTemplates/{applicationTemplate-id}/instantiate`
   *
   * Provides operations to call the instantiate method.
   */
  instantiate(applicationTemplateId: string) {
    return new InstantiateClient(applicationTemplateId, this.http);
  }

  /**
   * `GET /applicationTemplates`
   *
   * Retrieve a list of applicationTemplate objects from the Microsoft Entra application gallery.
   */
  async list(
    params?: Endpoints['GET /applicationTemplates']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applicationTemplates',
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
      .then((res) => res.data as Endpoints['GET /applicationTemplates']['response']);
  }

  /**
   * `GET /applicationTemplates/{applicationTemplate-id}`
   *
   * Retrieve the properties of an applicationTemplate object.
   */
  async get(
    params?: Endpoints['GET /applicationTemplates/{applicationTemplate-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applicationTemplates/{applicationTemplate-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'applicationTemplate-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /applicationTemplates/{applicationTemplate-id}']['response']
      );
  }
}
