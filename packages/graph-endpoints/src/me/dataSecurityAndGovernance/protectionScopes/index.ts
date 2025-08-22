export * as compute from './compute';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/dataSecurityAndGovernance/protectionScopes': Operation<
    '/me/dataSecurityAndGovernance/protectionScopes',
    'delete'
  >;
  'GET /me/dataSecurityAndGovernance/protectionScopes': Operation<
    '/me/dataSecurityAndGovernance/protectionScopes',
    'get'
  >;
  'PATCH /me/dataSecurityAndGovernance/protectionScopes': Operation<
    '/me/dataSecurityAndGovernance/protectionScopes',
    'patch'
  >;
}

/**
 * `DELETE /me/dataSecurityAndGovernance/protectionScopes`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/dataSecurityAndGovernance/protectionScopes']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/dataSecurityAndGovernance/protectionScopes']['response']
> {
  return {
    method: 'delete',
    path: '/me/dataSecurityAndGovernance/protectionScopes',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /me/dataSecurityAndGovernance/protectionScopes`
 *
 */
export function list(
  params?: IEndpoints['GET /me/dataSecurityAndGovernance/protectionScopes']['parameters']
): EndpointRequest<IEndpoints['GET /me/dataSecurityAndGovernance/protectionScopes']['response']> {
  return {
    method: 'get',
    path: '/me/dataSecurityAndGovernance/protectionScopes',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /me/dataSecurityAndGovernance/protectionScopes`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/dataSecurityAndGovernance/protectionScopes']['body'],
  params?: IEndpoints['PATCH /me/dataSecurityAndGovernance/protectionScopes']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/dataSecurityAndGovernance/protectionScopes']['response']> {
  return {
    method: 'patch',
    path: '/me/dataSecurityAndGovernance/protectionScopes',
    paramDefs: [],
    params,
    body,
  };
}
