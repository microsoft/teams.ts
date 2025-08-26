import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /servicePrincipals/{servicePrincipal-id}/claimsMappingPolicies': Operation<
    '/servicePrincipals/{servicePrincipal-id}/claimsMappingPolicies',
    'get'
  >;
}

/**
 * `GET /servicePrincipals/{servicePrincipal-id}/claimsMappingPolicies`
 *
 * List the claimsMappingPolicy objects that are assigned to a servicePrincipal.
 */
export function list(
  params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/claimsMappingPolicies']['parameters']
): EndpointRequest<
  IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/claimsMappingPolicies']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/servicePrincipals/{servicePrincipal-id}/claimsMappingPolicies',
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
