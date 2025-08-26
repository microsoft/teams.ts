import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /servicePrincipals/{servicePrincipal-id}/tokenIssuancePolicies': Operation<
    '/servicePrincipals/{servicePrincipal-id}/tokenIssuancePolicies',
    'get'
  >;
}

/**
 * `GET /servicePrincipals/{servicePrincipal-id}/tokenIssuancePolicies`
 *
 * The tokenIssuancePolicies assigned to this service principal. Supports $expand.
 */
export function list(
  params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/tokenIssuancePolicies']['parameters']
): EndpointRequest<
  IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/tokenIssuancePolicies']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/servicePrincipals/{servicePrincipal-id}/tokenIssuancePolicies',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'servicePrincipal-id', in: 'path' },
    ],
    params,
  };
}
