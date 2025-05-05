import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { BotClient } from './bot';

/**
 * /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions
 * Provides operations to manage the appDefinitions property of the microsoft.graph.teamsApp entity.
 */
export class AppDefinitionsClient {
  protected baseUrl = '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions';
  protected http: http.Client;

  constructor(
    protected readonly teamsAppId: string,
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
   * `/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot`
   *
   * Provides operations to manage the bot property of the microsoft.graph.teamsAppDefinition entity.
   */
  bot(teamsAppDefinitionId: string) {
    return new BotClient(teamsAppDefinitionId, this.http);
  }

  /**
   * `DELETE /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'teamsApp-id', in: 'path' },
        { name: 'teamsAppDefinition-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'teamsApp-id': this.teamsAppId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}']['response']
      );
  }

  /**
   * `GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions`
   *
   * The details for each version of the app.
   */
  async list(
    params?: Endpoints['GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'teamsApp-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'teamsApp-id': this.teamsAppId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions']['response']
      );
  }

  /**
   * `GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}`
   *
   * The details for each version of the app.
   */
  async get(
    params?: Endpoints['GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'teamsApp-id', in: 'path' },
        { name: 'teamsAppDefinition-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'teamsApp-id': this.teamsAppId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}']['response']
      );
  }

  /**
   * `PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}`
   *
   * Publish an app to the Microsoft Teams app catalog.
Specifically, this API publishes the app to your organization&#x27;s catalog (the tenant app catalog);
the created resource has a distributionMethod property value of organization. The requiresReview property allows any user to submit an app for review by an administrator. Admins can approve or reject these apps via this API or the Microsoft Teams admin center.
   */
  async update(
    body: Endpoints['PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}']['body'],
    params?: Endpoints['PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}',
      [
        { name: 'teamsApp-id', in: 'path' },
        { name: 'teamsAppDefinition-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'teamsApp-id': this.teamsAppId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}']['response']
      );
  }

  /**
   * `POST /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions`
   *
   * Update an app previously published to the Microsoft Teams app catalog. To update an app, the distributionMethod property for the app must be set to organization. This API specifically updates an app published to your organization&#x27;s app catalog (the tenant app catalog).
   */
  async create(
    body: Endpoints['POST /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions']['body'],
    params?: Endpoints['POST /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions',
      [{ name: 'teamsApp-id', in: 'path' }],
      {
        ...(params || {}),
        'teamsApp-id': this.teamsAppId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions']['response']
      );
  }
}
