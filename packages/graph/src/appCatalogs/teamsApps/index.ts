import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { AppDefinitionsClient } from './appDefinitions';

/**
 * /appCatalogs/teamsApps
 * Provides operations to manage the teamsApps property of the microsoft.graph.appCatalogs entity.
 */
export class TeamsAppsClient {
  protected baseUrl = '/appCatalogs/teamsApps';
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
   * `/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions`
   *
   * Provides operations to manage the appDefinitions property of the microsoft.graph.teamsApp entity.
   */
  appDefinitions(teamsAppId: string) {
    return new AppDefinitionsClient(teamsAppId, this.http);
  }

  /**
   * `DELETE /appCatalogs/teamsApps/{teamsApp-id}`
   *
   * Delete an app from an organization&#x27;s app catalog (the tenant app catalog). To delete an app, the distributionMethod property for the app must be set to organization. You can also use this API to remove a submitted app from the review process.
   */
  async delete(
    params?: Endpoints['DELETE /appCatalogs/teamsApps/{teamsApp-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/appCatalogs/teamsApps/{teamsApp-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'teamsApp-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) => res.data as Endpoints['DELETE /appCatalogs/teamsApps/{teamsApp-id}']['response']
      );
  }

  /**
   * `GET /appCatalogs/teamsApps`
   *
   * List apps from the Microsoft Teams app catalog, including apps from the Microsoft Teams store and apps from your organization&#x27;s app catalog (the tenant app catalog). To get apps from your organization&#x27;s app catalog only, specify organization as the distributionMethod in the request.
   */
  async list(
    params?: Endpoints['GET /appCatalogs/teamsApps']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/appCatalogs/teamsApps',
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
      .then((res) => res.data as Endpoints['GET /appCatalogs/teamsApps']['response']);
  }

  /**
   * `GET /appCatalogs/teamsApps/{teamsApp-id}`
   *
   */
  async get(
    params?: Endpoints['GET /appCatalogs/teamsApps/{teamsApp-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/appCatalogs/teamsApps/{teamsApp-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'teamsApp-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then((res) => res.data as Endpoints['GET /appCatalogs/teamsApps/{teamsApp-id}']['response']);
  }

  /**
   * `PATCH /appCatalogs/teamsApps/{teamsApp-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /appCatalogs/teamsApps/{teamsApp-id}']['body'],
    params?: Endpoints['PATCH /appCatalogs/teamsApps/{teamsApp-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/appCatalogs/teamsApps/{teamsApp-id}',
      [{ name: 'teamsApp-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) => res.data as Endpoints['PATCH /appCatalogs/teamsApps/{teamsApp-id}']['response']
      );
  }

  /**
   * `POST /appCatalogs/teamsApps`
   *
   * Publish an app to the Microsoft Teams app catalog.
Specifically, this API publishes the app to your organization&#x27;s catalog (the tenant app catalog);
the created resource has a distributionMethod property value of organization. The requiresReview property allows any user to submit an app for review by an administrator. Admins can approve or reject these apps via this API or the Microsoft Teams admin center.
   */
  async create(
    body: Endpoints['POST /appCatalogs/teamsApps']['body'],
    params?: Endpoints['POST /appCatalogs/teamsApps']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/appCatalogs/teamsApps', [], {
      ...(params || {}),
    });

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /appCatalogs/teamsApps']['response']);
  }
}
