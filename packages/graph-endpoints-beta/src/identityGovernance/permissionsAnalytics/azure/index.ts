export * as permissionsCreepIndexDistributions from './permissionsCreepIndexDistributions';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/permissionsAnalytics/azure': Operation<
    '/identityGovernance/permissionsAnalytics/azure',
    'delete'
  >;
  'GET /identityGovernance/permissionsAnalytics/azure': Operation<
    '/identityGovernance/permissionsAnalytics/azure',
    'get'
  >;
  'PATCH /identityGovernance/permissionsAnalytics/azure': Operation<
    '/identityGovernance/permissionsAnalytics/azure',
    'patch'
  >;
  'GET /identityGovernance/permissionsAnalytics/azure/findings': Operation<
    '/identityGovernance/permissionsAnalytics/azure/findings',
    'get'
  >;
  'POST /identityGovernance/permissionsAnalytics/azure/findings': Operation<
    '/identityGovernance/permissionsAnalytics/azure/findings',
    'post'
  >;
  'GET /identityGovernance/permissionsAnalytics/azure/findings/{finding-id}': Operation<
    '/identityGovernance/permissionsAnalytics/azure/findings/{finding-id}',
    'get'
  >;
  'PATCH /identityGovernance/permissionsAnalytics/azure/findings/{finding-id}': Operation<
    '/identityGovernance/permissionsAnalytics/azure/findings/{finding-id}',
    'patch'
  >;
  'DELETE /identityGovernance/permissionsAnalytics/azure/findings/{finding-id}': Operation<
    '/identityGovernance/permissionsAnalytics/azure/findings/{finding-id}',
    'delete'
  >;
}

/**
 * `DELETE /identityGovernance/permissionsAnalytics/azure`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/permissionsAnalytics/azure']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/permissionsAnalytics/azure']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/permissionsAnalytics/azure',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/permissionsAnalytics/azure`
 *
 * Azure permissions analytics findings.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/permissionsAnalytics/azure']['parameters']
): EndpointRequest<IEndpoints['GET /identityGovernance/permissionsAnalytics/azure']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/permissionsAnalytics/azure',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/permissionsAnalytics/azure`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/permissionsAnalytics/azure']['body']
): EndpointRequest<IEndpoints['PATCH /identityGovernance/permissionsAnalytics/azure']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/permissionsAnalytics/azure',
    body,
  };
}

export const findings = {
  /**
   * `GET /identityGovernance/permissionsAnalytics/azure/findings`
   *
   * The output of the permissions usage data analysis performed by Permissions Management to assess risk with identities and resources.
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/permissionsAnalytics/azure/findings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/permissionsAnalytics/azure/findings']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/permissionsAnalytics/azure/findings',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /identityGovernance/permissionsAnalytics/azure/findings`
   *
   */
  create: function create(
    body: IEndpoints['POST /identityGovernance/permissionsAnalytics/azure/findings']['body']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/permissionsAnalytics/azure/findings']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identityGovernance/permissionsAnalytics/azure/findings',
      body,
    };
  },
  /**
   * `GET /identityGovernance/permissionsAnalytics/azure/findings/{finding-id}`
   *
   * The output of the permissions usage data analysis performed by Permissions Management to assess risk with identities and resources.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/permissionsAnalytics/azure/findings/{finding-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/permissionsAnalytics/azure/findings/{finding-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/permissionsAnalytics/azure/findings/{finding-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['finding-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /identityGovernance/permissionsAnalytics/azure/findings/{finding-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /identityGovernance/permissionsAnalytics/azure/findings/{finding-id}']['body'],
    params?: IEndpoints['PATCH /identityGovernance/permissionsAnalytics/azure/findings/{finding-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identityGovernance/permissionsAnalytics/azure/findings/{finding-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/identityGovernance/permissionsAnalytics/azure/findings/{finding-id}',
      paramDefs: {
        path: ['finding-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /identityGovernance/permissionsAnalytics/azure/findings/{finding-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /identityGovernance/permissionsAnalytics/azure/findings/{finding-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /identityGovernance/permissionsAnalytics/azure/findings/{finding-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/identityGovernance/permissionsAnalytics/azure/findings/{finding-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['finding-id'],
      },
      params,
    };
  },
};
