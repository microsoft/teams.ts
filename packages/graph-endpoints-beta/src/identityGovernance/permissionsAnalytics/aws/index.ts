export * as permissionsCreepIndexDistributions from './permissionsCreepIndexDistributions';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/permissionsAnalytics/aws': Operation<
    '/identityGovernance/permissionsAnalytics/aws',
    'delete'
  >;
  'GET /identityGovernance/permissionsAnalytics/aws': Operation<
    '/identityGovernance/permissionsAnalytics/aws',
    'get'
  >;
  'PATCH /identityGovernance/permissionsAnalytics/aws': Operation<
    '/identityGovernance/permissionsAnalytics/aws',
    'patch'
  >;
  'GET /identityGovernance/permissionsAnalytics/aws/findings': Operation<
    '/identityGovernance/permissionsAnalytics/aws/findings',
    'get'
  >;
  'POST /identityGovernance/permissionsAnalytics/aws/findings': Operation<
    '/identityGovernance/permissionsAnalytics/aws/findings',
    'post'
  >;
  'GET /identityGovernance/permissionsAnalytics/aws/findings/{finding-id}': Operation<
    '/identityGovernance/permissionsAnalytics/aws/findings/{finding-id}',
    'get'
  >;
  'PATCH /identityGovernance/permissionsAnalytics/aws/findings/{finding-id}': Operation<
    '/identityGovernance/permissionsAnalytics/aws/findings/{finding-id}',
    'patch'
  >;
  'DELETE /identityGovernance/permissionsAnalytics/aws/findings/{finding-id}': Operation<
    '/identityGovernance/permissionsAnalytics/aws/findings/{finding-id}',
    'delete'
  >;
}

/**
 * `DELETE /identityGovernance/permissionsAnalytics/aws`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/permissionsAnalytics/aws']['parameters']
): EndpointRequest<IEndpoints['DELETE /identityGovernance/permissionsAnalytics/aws']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/permissionsAnalytics/aws',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/permissionsAnalytics/aws`
 *
 * AWS permissions analytics findings.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/permissionsAnalytics/aws']['parameters']
): EndpointRequest<IEndpoints['GET /identityGovernance/permissionsAnalytics/aws']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/permissionsAnalytics/aws',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/permissionsAnalytics/aws`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/permissionsAnalytics/aws']['body']
): EndpointRequest<IEndpoints['PATCH /identityGovernance/permissionsAnalytics/aws']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/permissionsAnalytics/aws',
    body,
  };
}

export const findings = {
  /**
   * `GET /identityGovernance/permissionsAnalytics/aws/findings`
   *
   * The output of the permissions usage data analysis performed by Permissions Management to assess risk with identities and resources.
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/permissionsAnalytics/aws/findings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/permissionsAnalytics/aws/findings']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/permissionsAnalytics/aws/findings',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /identityGovernance/permissionsAnalytics/aws/findings`
   *
   */
  create: function create(
    body: IEndpoints['POST /identityGovernance/permissionsAnalytics/aws/findings']['body']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/permissionsAnalytics/aws/findings']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identityGovernance/permissionsAnalytics/aws/findings',
      body,
    };
  },
  /**
   * `GET /identityGovernance/permissionsAnalytics/aws/findings/{finding-id}`
   *
   * The output of the permissions usage data analysis performed by Permissions Management to assess risk with identities and resources.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/permissionsAnalytics/aws/findings/{finding-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/permissionsAnalytics/aws/findings/{finding-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/permissionsAnalytics/aws/findings/{finding-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['finding-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /identityGovernance/permissionsAnalytics/aws/findings/{finding-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /identityGovernance/permissionsAnalytics/aws/findings/{finding-id}']['body'],
    params?: IEndpoints['PATCH /identityGovernance/permissionsAnalytics/aws/findings/{finding-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identityGovernance/permissionsAnalytics/aws/findings/{finding-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/identityGovernance/permissionsAnalytics/aws/findings/{finding-id}',
      paramDefs: {
        path: ['finding-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /identityGovernance/permissionsAnalytics/aws/findings/{finding-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /identityGovernance/permissionsAnalytics/aws/findings/{finding-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /identityGovernance/permissionsAnalytics/aws/findings/{finding-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/identityGovernance/permissionsAnalytics/aws/findings/{finding-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['finding-id'],
      },
      params,
    };
  },
};
