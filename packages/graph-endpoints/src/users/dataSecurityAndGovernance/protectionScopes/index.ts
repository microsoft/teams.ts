export * as compute from './compute';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/dataSecurityAndGovernance/protectionScopes': Operation<
    '/users/{user-id}/dataSecurityAndGovernance/protectionScopes',
    'delete'
  >;
  'GET /users/{user-id}/dataSecurityAndGovernance/protectionScopes': Operation<
    '/users/{user-id}/dataSecurityAndGovernance/protectionScopes',
    'get'
  >;
  'PATCH /users/{user-id}/dataSecurityAndGovernance/protectionScopes': Operation<
    '/users/{user-id}/dataSecurityAndGovernance/protectionScopes',
    'patch'
  >;
}

/**
 * `DELETE /users/{user-id}/dataSecurityAndGovernance/protectionScopes`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/dataSecurityAndGovernance/protectionScopes']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/dataSecurityAndGovernance/protectionScopes']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/dataSecurityAndGovernance/protectionScopes',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/dataSecurityAndGovernance/protectionScopes`
 *
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/dataSecurityAndGovernance/protectionScopes']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/dataSecurityAndGovernance/protectionScopes']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/dataSecurityAndGovernance/protectionScopes',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/dataSecurityAndGovernance/protectionScopes`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/dataSecurityAndGovernance/protectionScopes']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/dataSecurityAndGovernance/protectionScopes']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/dataSecurityAndGovernance/protectionScopes']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/dataSecurityAndGovernance/protectionScopes',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
