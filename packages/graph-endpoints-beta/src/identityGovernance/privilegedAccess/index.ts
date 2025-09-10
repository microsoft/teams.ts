export * as group from './group';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/privilegedAccess': Operation<
    '/identityGovernance/privilegedAccess',
    'delete'
  >;
  'GET /identityGovernance/privilegedAccess': Operation<
    '/identityGovernance/privilegedAccess',
    'get'
  >;
  'PATCH /identityGovernance/privilegedAccess': Operation<
    '/identityGovernance/privilegedAccess',
    'patch'
  >;
}

/**
 * `DELETE /identityGovernance/privilegedAccess`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/privilegedAccess']['parameters']
): EndpointRequest<IEndpoints['DELETE /identityGovernance/privilegedAccess']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/privilegedAccess',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/privilegedAccess`
 *
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/privilegedAccess']['parameters']
): EndpointRequest<IEndpoints['GET /identityGovernance/privilegedAccess']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/privilegedAccess',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/privilegedAccess`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/privilegedAccess']['body']
): EndpointRequest<IEndpoints['PATCH /identityGovernance/privilegedAccess']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/privilegedAccess',
    body,
  };
}
