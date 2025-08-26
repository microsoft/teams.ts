import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userFlowIdentityProviders': Operation<
    '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userFlowIdentityProviders',
    'get'
  >;
}

/**
 * `GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userFlowIdentityProviders`
 *
 */
export function list(
  params?: IEndpoints['GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userFlowIdentityProviders']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userFlowIdentityProviders']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userFlowIdentityProviders',
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
