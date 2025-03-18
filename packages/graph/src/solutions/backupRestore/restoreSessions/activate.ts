import qs from 'qs';
import * as http from '@microsoft/spark.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './activate-types.ts';

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
 * /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}/activate
 * Provides operations to call the activate method.
 */
export class ActivateClient {
  protected baseUrl = '/solutions/backupRestore/restoreSessions/{restoreSessionBase-id}/activate';
  protected http: http.Client;

  constructor(
    protected readonly restoreSessionBaseId: string,
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
   * `POST /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}/activate`
   *
   * Activate a draft restoreSessionBase object. The following points apply to restoring a protection unit:
   */
  async create(
    body: Endpoints['POST /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}/activate']['body'],
    params?: Endpoints['POST /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}/activate']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/restoreSessions/{restoreSessionBase-id}/activate',
      [{ name: 'restoreSessionBase-id', in: 'path' }],
      {
        ...(params || {}),
        'restoreSessionBase-id': this.restoreSessionBaseId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}/activate']['response']
      );
  }
}
