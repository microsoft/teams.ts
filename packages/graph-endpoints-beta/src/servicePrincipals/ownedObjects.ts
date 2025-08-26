import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /servicePrincipals/{servicePrincipal-id}/ownedObjects': Operation<
    '/servicePrincipals/{servicePrincipal-id}/ownedObjects',
    'get'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/ownedObjects/{directoryObject-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/ownedObjects/{directoryObject-id}',
    'get'
  >;
}

/**
 * `GET /servicePrincipals/{servicePrincipal-id}/ownedObjects`
 *
 * Retrieve a list of objects owned by the servicePrincipal.  This could include applications or groups.
 */
export function list(
  params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/ownedObjects']['parameters']
): EndpointRequest<
  IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/ownedObjects']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/servicePrincipals/{servicePrincipal-id}/ownedObjects',
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

/**
 * `GET /servicePrincipals/{servicePrincipal-id}/ownedObjects/{directoryObject-id}`
 *
 * Directory objects that are owned by this service principal. Read-only. Nullable. Supports $expand and $filter (/$count eq 0, /$count ne 0, /$count eq 1, /$count ne 1).
 */
export function get(
  params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/ownedObjects/{directoryObject-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/ownedObjects/{directoryObject-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/servicePrincipals/{servicePrincipal-id}/ownedObjects/{directoryObject-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'servicePrincipal-id', in: 'path' },
      { name: 'directoryObject-id', in: 'path' },
    ],
    params,
  };
}
