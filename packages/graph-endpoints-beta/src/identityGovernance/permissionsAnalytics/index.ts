export * as aws from './aws';
export * as azure from './azure';
export * as gcp from './gcp';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/permissionsAnalytics': Operation<
    '/identityGovernance/permissionsAnalytics',
    'delete'
  >;
  'GET /identityGovernance/permissionsAnalytics': Operation<
    '/identityGovernance/permissionsAnalytics',
    'get'
  >;
  'PATCH /identityGovernance/permissionsAnalytics': Operation<
    '/identityGovernance/permissionsAnalytics',
    'patch'
  >;
}

/**
 * `DELETE /identityGovernance/permissionsAnalytics`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/permissionsAnalytics']['parameters']
): EndpointRequest<IEndpoints['DELETE /identityGovernance/permissionsAnalytics']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/permissionsAnalytics',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/permissionsAnalytics`
 *
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/permissionsAnalytics']['parameters']
): EndpointRequest<IEndpoints['GET /identityGovernance/permissionsAnalytics']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/permissionsAnalytics',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/permissionsAnalytics`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/permissionsAnalytics']['body']
): EndpointRequest<IEndpoints['PATCH /identityGovernance/permissionsAnalytics']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/permissionsAnalytics',
    body,
  };
}
