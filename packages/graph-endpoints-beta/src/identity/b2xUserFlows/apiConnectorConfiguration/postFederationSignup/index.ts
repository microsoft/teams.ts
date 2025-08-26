export * as uploadClientCertificate from './uploadClientCertificate';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/postFederationSignup': Operation<
    '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/postFederationSignup',
    'delete'
  >;
  'GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/postFederationSignup': Operation<
    '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/postFederationSignup',
    'get'
  >;
  'PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/postFederationSignup': Operation<
    '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/postFederationSignup',
    'patch'
  >;
}

/**
 * `DELETE /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/postFederationSignup`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/postFederationSignup']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/postFederationSignup']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/postFederationSignup',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'b2xIdentityUserFlow-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/postFederationSignup`
 *
 */
export function get(
  params?: IEndpoints['GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/postFederationSignup']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/postFederationSignup']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/postFederationSignup',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'b2xIdentityUserFlow-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/postFederationSignup`
 *
 */
export function update(
  body: IEndpoints['PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/postFederationSignup']['body'],
  params?: IEndpoints['PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/postFederationSignup']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/postFederationSignup']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/postFederationSignup',
    paramDefs: [{ name: 'b2xIdentityUserFlow-id', in: 'path' }],
    params,
    body,
  };
}
