import qs from 'qs';
import * as http from '@microsoft/spark.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './bot-types.ts';

interface Param {
  readonly in: string;
  readonly name: string;
  readonly explode?: boolean;
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

  return `${url}${qs.stringify(query, { addQueryPrefix: true, arrayFormat: 'comma' })}`;
}

/**
 * /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot
 * Provides operations to manage the bot property of the microsoft.graph.teamsAppDefinition entity.
 */
export class BotClient {
  protected baseUrl =
    '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot';
  protected http: http.Client;

  constructor(
    protected readonly teamsAppDefinitionId: string,
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
   * `DELETE /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot`
   *
   */
  async delete(
    params?: Endpoints['DELETE /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'teamsApp-id', in: 'path' },
        { name: 'teamsAppDefinition-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'teamsAppDefinition-id': this.teamsAppDefinitionId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot']['response']
      );
  }

  /**
   * `GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot`
   *
   * Get the bot associated with a specific definition of the  TeamsApp.
   */
  async get(
    params?: Endpoints['GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'teamsApp-id', in: 'path' },
        { name: 'teamsAppDefinition-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'teamsAppDefinition-id': this.teamsAppDefinitionId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot']['response']
      );
  }

  /**
   * `PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot`
   *
   */
  async update(
    body: Endpoints['PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot']['body'],
    params?: Endpoints['PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot',
      [
        { name: 'teamsApp-id', in: 'path' },
        { name: 'teamsAppDefinition-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'teamsAppDefinition-id': this.teamsAppDefinitionId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot']['response']
      );
  }
}
