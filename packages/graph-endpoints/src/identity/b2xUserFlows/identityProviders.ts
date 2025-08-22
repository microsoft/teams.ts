import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/identityProviders': Operation<
    '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/identityProviders',
    'get'
  >;
  'GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/identityProviders/{identityProvider-id}': Operation<
    '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/identityProviders/{identityProvider-id}',
    'get'
  >;
}

/**
 * `GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/identityProviders`
 *
 * Get the identity providers in a b2xIdentityUserFlow object.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/identityProviders']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/identityProviders']['response']
> {
  return {
    method: 'get',
    path: '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/identityProviders',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'b2xIdentityUserFlow-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/identityProviders/{identityProvider-id}`
 *
 * The identity providers included in the user flow.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/identityProviders/{identityProvider-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/identityProviders/{identityProvider-id}']['response']
> {
  return {
    method: 'get',
    path: '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/identityProviders/{identityProvider-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'b2xIdentityUserFlow-id', in: 'path' },
      { name: 'identityProvider-id', in: 'path' },
    ],
    params,
  };
}
