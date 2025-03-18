import qs from 'qs';
import * as http from '@microsoft/spark.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { AssociatedTeamsClient } from './associatedTeams';
import { InstalledAppsClient } from './installedApps';
import { SendActivityNotificationClient } from './sendActivityNotification';

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
 * /users/{user-id}/teamwork
 * Provides operations to manage the teamwork property of the microsoft.graph.user entity.
 */
export class TeamworkClient {
  protected baseUrl = '/users/{user-id}/teamwork';
  protected http: http.Client;

  constructor(
    protected readonly userId: string,
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
   * `/users/{user-id}/teamwork/associatedTeams`
   *
   * Provides operations to manage the associatedTeams property of the microsoft.graph.userTeamwork entity.
   */
  get associatedTeams() {
    return new AssociatedTeamsClient(this.http);
  }

  /**
   * `/users/{user-id}/teamwork/installedApps`
   *
   * Provides operations to manage the installedApps property of the microsoft.graph.userTeamwork entity.
   */
  get installedApps() {
    return new InstalledAppsClient(this.http);
  }

  /**
   * `/users/{user-id}/teamwork/sendActivityNotification`
   *
   * Provides operations to call the sendActivityNotification method.
   */
  get sendActivityNotification() {
    return new SendActivityNotificationClient(this.http);
  }

  /**
   * `DELETE /users/{user-id}/teamwork`
   *
   */
  async delete(
    params?: Endpoints['DELETE /users/{user-id}/teamwork']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/teamwork',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'user-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'user-id': this.userId,
      }
    );

    return this.http
      .delete(url, config)
      .then((res) => res.data as Endpoints['DELETE /users/{user-id}/teamwork']['response']);
  }

  /**
   * `GET /users/{user-id}/teamwork`
   *
   * Get the userTeamwork settings for a specified user, which includes the Microsoft Teams region and the locale chosen by the user.
   */
  async get(
    params?: Endpoints['GET /users/{user-id}/teamwork']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/teamwork',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'user-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'user-id': this.userId,
      }
    );

    return this.http
      .get(url, config)
      .then((res) => res.data as Endpoints['GET /users/{user-id}/teamwork']['response']);
  }

  /**
   * `PATCH /users/{user-id}/teamwork`
   *
   */
  async update(
    body: Endpoints['PATCH /users/{user-id}/teamwork']['body'],
    params?: Endpoints['PATCH /users/{user-id}/teamwork']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/users/{user-id}/teamwork', [{ name: 'user-id', in: 'path' }], {
      ...(params || {}),
      'user-id': this.userId,
    });

    return this.http
      .patch(url, body, config)
      .then((res) => res.data as Endpoints['PATCH /users/{user-id}/teamwork']['response']);
  }
}
