export * as permissionsCreepIndexDistributions from './permissionsCreepIndexDistributions';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/permissionsAnalytics/gcp': Operation<
    '/identityGovernance/permissionsAnalytics/gcp',
    'delete'
  >;
  'GET /identityGovernance/permissionsAnalytics/gcp': Operation<
    '/identityGovernance/permissionsAnalytics/gcp',
    'get'
  >;
  'PATCH /identityGovernance/permissionsAnalytics/gcp': Operation<
    '/identityGovernance/permissionsAnalytics/gcp',
    'patch'
  >;
  'GET /identityGovernance/permissionsAnalytics/gcp/findings': Operation<
    '/identityGovernance/permissionsAnalytics/gcp/findings',
    'get'
  >;
  'POST /identityGovernance/permissionsAnalytics/gcp/findings': Operation<
    '/identityGovernance/permissionsAnalytics/gcp/findings',
    'post'
  >;
  'GET /identityGovernance/permissionsAnalytics/gcp/findings/{finding-id}': Operation<
    '/identityGovernance/permissionsAnalytics/gcp/findings/{finding-id}',
    'get'
  >;
  'PATCH /identityGovernance/permissionsAnalytics/gcp/findings/{finding-id}': Operation<
    '/identityGovernance/permissionsAnalytics/gcp/findings/{finding-id}',
    'patch'
  >;
  'DELETE /identityGovernance/permissionsAnalytics/gcp/findings/{finding-id}': Operation<
    '/identityGovernance/permissionsAnalytics/gcp/findings/{finding-id}',
    'delete'
  >;
}

/**
 * `DELETE /identityGovernance/permissionsAnalytics/gcp`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/permissionsAnalytics/gcp']['parameters']
): EndpointRequest<IEndpoints['DELETE /identityGovernance/permissionsAnalytics/gcp']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/permissionsAnalytics/gcp',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/permissionsAnalytics/gcp`
 *
 * GCP permissions analytics findings.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/permissionsAnalytics/gcp']['parameters']
): EndpointRequest<IEndpoints['GET /identityGovernance/permissionsAnalytics/gcp']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/permissionsAnalytics/gcp',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/permissionsAnalytics/gcp`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/permissionsAnalytics/gcp']['body']
): EndpointRequest<IEndpoints['PATCH /identityGovernance/permissionsAnalytics/gcp']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/permissionsAnalytics/gcp',
    body,
  };
}

export const findings = {
  /**
   * `GET /identityGovernance/permissionsAnalytics/gcp/findings`
   *
   * The output of the permissions usage data analysis performed by Permissions Management to assess risk with identities and resources.
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/permissionsAnalytics/gcp/findings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/permissionsAnalytics/gcp/findings']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/permissionsAnalytics/gcp/findings',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /identityGovernance/permissionsAnalytics/gcp/findings`
   *
   */
  create: function create(
    body: IEndpoints['POST /identityGovernance/permissionsAnalytics/gcp/findings']['body']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/permissionsAnalytics/gcp/findings']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identityGovernance/permissionsAnalytics/gcp/findings',
      body,
    };
  },
  /**
   * `GET /identityGovernance/permissionsAnalytics/gcp/findings/{finding-id}`
   *
   * The output of the permissions usage data analysis performed by Permissions Management to assess risk with identities and resources.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/permissionsAnalytics/gcp/findings/{finding-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/permissionsAnalytics/gcp/findings/{finding-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/permissionsAnalytics/gcp/findings/{finding-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['finding-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /identityGovernance/permissionsAnalytics/gcp/findings/{finding-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /identityGovernance/permissionsAnalytics/gcp/findings/{finding-id}']['body'],
    params?: IEndpoints['PATCH /identityGovernance/permissionsAnalytics/gcp/findings/{finding-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identityGovernance/permissionsAnalytics/gcp/findings/{finding-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/identityGovernance/permissionsAnalytics/gcp/findings/{finding-id}',
      paramDefs: {
        path: ['finding-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /identityGovernance/permissionsAnalytics/gcp/findings/{finding-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /identityGovernance/permissionsAnalytics/gcp/findings/{finding-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /identityGovernance/permissionsAnalytics/gcp/findings/{finding-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/identityGovernance/permissionsAnalytics/gcp/findings/{finding-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['finding-id'],
      },
      params,
    };
  },
};
