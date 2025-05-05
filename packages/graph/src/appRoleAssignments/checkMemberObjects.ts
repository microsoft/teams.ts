import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './checkMemberObjects-types.ts';

/**
 * /appRoleAssignments/{appRoleAssignment-id}/checkMemberObjects
 * Provides operations to call the checkMemberObjects method.
 */
export class CheckMemberObjectsClient {
  protected baseUrl = '/appRoleAssignments/{appRoleAssignment-id}/checkMemberObjects';
  protected http: http.Client;

  constructor(
    protected readonly appRoleAssignmentId: string,
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
   * `POST /appRoleAssignments/{appRoleAssignment-id}/checkMemberObjects`
   *
   */
  async create(
    body: Endpoints['POST /appRoleAssignments/{appRoleAssignment-id}/checkMemberObjects']['body'],
    params?: Endpoints['POST /appRoleAssignments/{appRoleAssignment-id}/checkMemberObjects']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/appRoleAssignments/{appRoleAssignment-id}/checkMemberObjects',
      [{ name: 'appRoleAssignment-id', in: 'path' }],
      {
        ...(params || {}),
        'appRoleAssignment-id': this.appRoleAssignmentId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /appRoleAssignments/{appRoleAssignment-id}/checkMemberObjects']['response']
      );
  }
}
