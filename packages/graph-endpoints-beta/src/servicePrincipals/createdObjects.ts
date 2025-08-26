import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /servicePrincipals/{servicePrincipal-id}/createdObjects': Operation<
    '/servicePrincipals/{servicePrincipal-id}/createdObjects',
    'get'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/createdObjects/{directoryObject-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/createdObjects/{directoryObject-id}',
    'get'
  >;
}

/**
 * `GET /servicePrincipals/{servicePrincipal-id}/createdObjects`
 *
 * Retrieve a list of directoryobject objects.
 */
export function list(
  params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/createdObjects']['parameters']
): EndpointRequest<
  IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/createdObjects']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/servicePrincipals/{servicePrincipal-id}/createdObjects',
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
 * `GET /servicePrincipals/{servicePrincipal-id}/createdObjects/{directoryObject-id}`
 *
 * Directory objects created by this service principal. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/createdObjects/{directoryObject-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/createdObjects/{directoryObject-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/servicePrincipals/{servicePrincipal-id}/createdObjects/{directoryObject-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'servicePrincipal-id', in: 'path' },
      { name: 'directoryObject-id', in: 'path' },
    ],
    params,
  };
}
