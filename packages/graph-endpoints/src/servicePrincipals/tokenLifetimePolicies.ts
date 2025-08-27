import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /servicePrincipals/{servicePrincipal-id}/tokenLifetimePolicies': Operation<
    '/servicePrincipals/{servicePrincipal-id}/tokenLifetimePolicies',
    'get'
  >;
}

/**
 * `GET /servicePrincipals/{servicePrincipal-id}/tokenLifetimePolicies`
 *
 * List the tokenLifetimePolicy objects that are assigned to a servicePrincipal. Only one object is returned in the collection because only one tokenLifetimePolicy can be assigned to a service principal.
 */
export function list(
  params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/tokenLifetimePolicies']['parameters']
): EndpointRequest<
  IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/tokenLifetimePolicies']['response']
> {
  return {
    method: 'get',
    path: '/servicePrincipals/{servicePrincipal-id}/tokenLifetimePolicies',
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
