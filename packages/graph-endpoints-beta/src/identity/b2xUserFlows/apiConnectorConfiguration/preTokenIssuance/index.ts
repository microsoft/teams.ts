export * as uploadClientCertificate from './uploadClientCertificate';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/preTokenIssuance': Operation<
    '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/preTokenIssuance',
    'delete'
  >;
  'GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/preTokenIssuance': Operation<
    '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/preTokenIssuance',
    'get'
  >;
  'PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/preTokenIssuance': Operation<
    '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/preTokenIssuance',
    'patch'
  >;
}

/**
 * `DELETE /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/preTokenIssuance`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/preTokenIssuance']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/preTokenIssuance']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/preTokenIssuance',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'b2xIdentityUserFlow-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/preTokenIssuance`
 *
 */
export function get(
  params?: IEndpoints['GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/preTokenIssuance']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/preTokenIssuance']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/preTokenIssuance',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'b2xIdentityUserFlow-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/preTokenIssuance`
 *
 */
export function update(
  body: IEndpoints['PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/preTokenIssuance']['body'],
  params?: IEndpoints['PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/preTokenIssuance']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/preTokenIssuance']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/preTokenIssuance',
    paramDefs: [{ name: 'b2xIdentityUserFlow-id', in: 'path' }],
    params,
    body,
  };
}
