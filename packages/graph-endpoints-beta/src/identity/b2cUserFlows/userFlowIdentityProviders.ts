import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/userFlowIdentityProviders': Operation<
    '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}/userFlowIdentityProviders',
    'get'
  >;
  'GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/userFlowIdentityProviders/{identityProviderBase-id}': Operation<
    '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}/userFlowIdentityProviders/{identityProviderBase-id}',
    'get'
  >;
}

/**
 * `GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/userFlowIdentityProviders`
 *
 * The identity providers included in the user flow.
 */
export function list(
  params?: IEndpoints['GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/userFlowIdentityProviders']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/userFlowIdentityProviders']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}/userFlowIdentityProviders',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'b2cIdentityUserFlow-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/userFlowIdentityProviders/{identityProviderBase-id}`
 *
 * The identity providers included in the user flow.
 */
export function get(
  params?: IEndpoints['GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/userFlowIdentityProviders/{identityProviderBase-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/userFlowIdentityProviders/{identityProviderBase-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}/userFlowIdentityProviders/{identityProviderBase-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'b2cIdentityUserFlow-id', in: 'path' },
      { name: 'identityProviderBase-id', in: 'path' },
    ],
    params,
  };
}
