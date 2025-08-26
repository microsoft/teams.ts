import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /servicePrincipals/{servicePrincipal-id}/homeRealmDiscoveryPolicies': Operation<
    '/servicePrincipals/{servicePrincipal-id}/homeRealmDiscoveryPolicies',
    'get'
  >;
}

/**
 * `GET /servicePrincipals/{servicePrincipal-id}/homeRealmDiscoveryPolicies`
 *
 * List the homeRealmDiscoveryPolicy objects that are assigned to a servicePrincipal.
 */
export function list(
  params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/homeRealmDiscoveryPolicies']['parameters']
): EndpointRequest<
  IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/homeRealmDiscoveryPolicies']['response']
> {
  return {
    method: 'get',
    path: '/servicePrincipals/{servicePrincipal-id}/homeRealmDiscoveryPolicies',
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
