import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/identityProviders': Operation<
    '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}/identityProviders',
    'get'
  >;
}

/**
 * `GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/identityProviders`
 *
 * Get the identity providers in a b2cIdentityUserFlow object.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/identityProviders']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/identityProviders']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}/identityProviders',
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
