import qs from 'qs';
import * as http from '@microsoft/spark.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './teamsAppDefinition-types.ts';

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
 * /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition
 * Provides operations to manage the teamsAppDefinition property of the microsoft.graph.teamsAppInstallation entity.
 */
export class TeamsAppDefinitionClient {
  protected baseUrl =
    '/me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition';
  protected http: http.Client;

  constructor(
    protected readonly teamsAppInstallationId: string,
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
   * `GET /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition`
   *
   * The details of this version of the app.
   */
  async get(
    params?: Endpoints['GET /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'chat-id', in: 'path' },
        { name: 'teamsAppInstallation-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'teamsAppInstallation-id': this.teamsAppInstallationId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition']['response']
      );
  }
}
