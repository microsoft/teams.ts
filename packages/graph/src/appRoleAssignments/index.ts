import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { CheckMemberGroupsClient } from './checkMemberGroups';
import { CheckMemberObjectsClient } from './checkMemberObjects';
import { GetAvailableExtensionPropertiesClient } from './getAvailableExtensionProperties';
import { GetByIdsClient } from './getByIds';
import { GetMemberGroupsClient } from './getMemberGroups';
import { GetMemberObjectsClient } from './getMemberObjects';
import { RestoreClient } from './restore';
import { ValidatePropertiesClient } from './validateProperties';

/**
 * /appRoleAssignments
 * Provides operations to manage the collection of appRoleAssignment entities.
 */
export class AppRoleAssignmentsClient {
  protected baseUrl = '/appRoleAssignments';
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
   * `/appRoleAssignments/{appRoleAssignment-id}/checkMemberGroups`
   *
   * Provides operations to call the checkMemberGroups method.
   */
  checkMemberGroups(appRoleAssignmentId: string) {
    return new CheckMemberGroupsClient(appRoleAssignmentId, this.http);
  }

  /**
   * `/appRoleAssignments/{appRoleAssignment-id}/checkMemberObjects`
   *
   * Provides operations to call the checkMemberObjects method.
   */
  checkMemberObjects(appRoleAssignmentId: string) {
    return new CheckMemberObjectsClient(appRoleAssignmentId, this.http);
  }

  /**
   * `/appRoleAssignments/getAvailableExtensionProperties`
   *
   * Provides operations to call the getAvailableExtensionProperties method.
   */
  get getAvailableExtensionProperties() {
    return new GetAvailableExtensionPropertiesClient(this.http);
  }

  /**
   * `/appRoleAssignments/getByIds`
   *
   * Provides operations to call the getByIds method.
   */
  get getByIds() {
    return new GetByIdsClient(this.http);
  }

  /**
   * `/appRoleAssignments/{appRoleAssignment-id}/getMemberGroups`
   *
   * Provides operations to call the getMemberGroups method.
   */
  getMemberGroups(appRoleAssignmentId: string) {
    return new GetMemberGroupsClient(appRoleAssignmentId, this.http);
  }

  /**
   * `/appRoleAssignments/{appRoleAssignment-id}/getMemberObjects`
   *
   * Provides operations to call the getMemberObjects method.
   */
  getMemberObjects(appRoleAssignmentId: string) {
    return new GetMemberObjectsClient(appRoleAssignmentId, this.http);
  }

  /**
   * `/appRoleAssignments/{appRoleAssignment-id}/restore`
   *
   * Provides operations to call the restore method.
   */
  restore(appRoleAssignmentId: string) {
    return new RestoreClient(appRoleAssignmentId, this.http);
  }

  /**
   * `/appRoleAssignments/validateProperties`
   *
   * Provides operations to call the validateProperties method.
   */
  get validateProperties() {
    return new ValidatePropertiesClient(this.http);
  }

  /**
   * `DELETE /appRoleAssignments/{appRoleAssignment-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /appRoleAssignments/{appRoleAssignment-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/appRoleAssignments/{appRoleAssignment-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'appRoleAssignment-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /appRoleAssignments/{appRoleAssignment-id}']['response']
      );
  }

  /**
   * `GET /appRoleAssignments`
   *
   */
  async list(
    params?: Endpoints['GET /appRoleAssignments']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/appRoleAssignments',
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
      .then((res) => res.data as Endpoints['GET /appRoleAssignments']['response']);
  }

  /**
   * `GET /appRoleAssignments/{appRoleAssignment-id}`
   *
   */
  async get(
    params?: Endpoints['GET /appRoleAssignments/{appRoleAssignment-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/appRoleAssignments/{appRoleAssignment-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'appRoleAssignment-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) => res.data as Endpoints['GET /appRoleAssignments/{appRoleAssignment-id}']['response']
      );
  }

  /**
   * `PATCH /appRoleAssignments/{appRoleAssignment-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /appRoleAssignments/{appRoleAssignment-id}']['body'],
    params?: Endpoints['PATCH /appRoleAssignments/{appRoleAssignment-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/appRoleAssignments/{appRoleAssignment-id}',
      [{ name: 'appRoleAssignment-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /appRoleAssignments/{appRoleAssignment-id}']['response']
      );
  }

  /**
   * `POST /appRoleAssignments`
   *
   */
  async create(
    body: Endpoints['POST /appRoleAssignments']['body'],
    params?: Endpoints['POST /appRoleAssignments']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/appRoleAssignments', [], {
      ...(params || {}),
    });

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /appRoleAssignments']['response']);
  }
}
