import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './checkMemberGroups-types.ts';

/**
 * /appRoleAssignments/{appRoleAssignment-id}/checkMemberGroups
 * Provides operations to call the checkMemberGroups method.
 */
export class CheckMemberGroupsClient {
  protected baseUrl = '/appRoleAssignments/{appRoleAssignment-id}/checkMemberGroups';
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
   * `POST /appRoleAssignments/{appRoleAssignment-id}/checkMemberGroups`
   *
   * Check for membership in a specified list of group IDs, and return from that list the IDs of groups where a specified object is a member. The specified object can be of one of the following types:
- user
- group
- service principal
- organizational contact
- device
- directory object This function is transitive. You can check up to a maximum of 20 groups per request. This function supports all groups provisioned in Microsoft Entra ID. Because Microsoft 365 groups cannot contain other groups, membership in a Microsoft 365 group is always direct.
   */
  async create(
    body: Endpoints['POST /appRoleAssignments/{appRoleAssignment-id}/checkMemberGroups']['body'],
    params?: Endpoints['POST /appRoleAssignments/{appRoleAssignment-id}/checkMemberGroups']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/appRoleAssignments/{appRoleAssignment-id}/checkMemberGroups',
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
          res.data as Endpoints['POST /appRoleAssignments/{appRoleAssignment-id}/checkMemberGroups']['response']
      );
  }
}
