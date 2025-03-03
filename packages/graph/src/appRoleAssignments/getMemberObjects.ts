import qs from 'qs';
import * as http from '@microsoft/spark.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './getMemberObjects-types.ts';

interface Param {
  readonly in: string;
  readonly name: string;
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

  return `${url}${qs.stringify(query, { addQueryPrefix: true })}`;
}

/**
 * /appRoleAssignments/{appRoleAssignment-id}/getMemberObjects
 * Provides operations to call the getMemberObjects method.
 */
export class GetMemberObjectsClient {
  protected baseUrl = '/appRoleAssignments/{appRoleAssignment-id}/getMemberObjects';
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
          'User-Agent': `teams[graph]/${pkg.version}`,
        },
      });
    } else if ('request' in options) {
      this.http = options.clone({
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `teams[graph]/${pkg.version}`,
        },
      });
    } else {
      this.http = new http.Client({
        ...options,
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `teams[graph]/${pkg.version}`,
          ...options.headers,
        },
      });
    }
  }

  /**
   * `POST /appRoleAssignments/{appRoleAssignment-id}/getMemberObjects`
   *
   * Return all IDs for the groups, administrative units, and directory roles that an object of one of the following types is a member of:
- user
- group
- service principal
- organizational contact
- device
- directory object This function is transitive. Only users and role-enabled groups can be members of directory roles.
   */
  async create(
    body: Endpoints['POST /appRoleAssignments/{appRoleAssignment-id}/getMemberObjects']['body'],
    params?: Endpoints['POST /appRoleAssignments/{appRoleAssignment-id}/getMemberObjects']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/appRoleAssignments/{appRoleAssignment-id}/getMemberObjects',
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
          res.data as Endpoints['POST /appRoleAssignments/{appRoleAssignment-id}/getMemberObjects']['response']
      );
  }
}
