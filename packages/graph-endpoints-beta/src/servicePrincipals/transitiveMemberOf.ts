import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /servicePrincipals/{servicePrincipal-id}/transitiveMemberOf': Operation<
    '/servicePrincipals/{servicePrincipal-id}/transitiveMemberOf',
    'get'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/transitiveMemberOf/{directoryObject-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/transitiveMemberOf/{directoryObject-id}',
    'get'
  >;
}

/**
 * `GET /servicePrincipals/{servicePrincipal-id}/transitiveMemberOf`
 *
 * Get the groups and directory roles that this servicePrincipal is a member of. This operation is transitive and will include all groups that this service principal is a nested member of.
 */
export function get(
  params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/transitiveMemberOf']['parameters']
): EndpointRequest<
  IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/transitiveMemberOf']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/servicePrincipals/{servicePrincipal-id}/transitiveMemberOf',
    paramDefs: [
      { name: 'ConsistencyLevel', in: 'header' },
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

/**
 * `GET /servicePrincipals/{servicePrincipal-id}/transitiveMemberOf/{directoryObject-id}`
 *
 */
export function get$1(
  params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/transitiveMemberOf/{directoryObject-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/transitiveMemberOf/{directoryObject-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/servicePrincipals/{servicePrincipal-id}/transitiveMemberOf/{directoryObject-id}',
    paramDefs: [
      { name: 'ConsistencyLevel', in: 'header' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'servicePrincipal-id', in: 'path' },
      { name: 'directoryObject-id', in: 'path' },
    ],
    params,
  };
}
