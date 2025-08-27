import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /me/createdObjects': Operation<'/me/createdObjects', 'get'>;
  'GET /me/createdObjects/{directoryObject-id}': Operation<
    '/me/createdObjects/{directoryObject-id}',
    'get'
  >;
}

/**
 * `GET /me/createdObjects`
 *
 * Get a list of directory objects that were created by the user. This API returns only those directory objects that were created by a user who isn&#x27;t in any administrator role; otherwise, it returns an empty object.
 */
export function list(
  params?: IEndpoints['GET /me/createdObjects']['parameters']
): EndpointRequest<IEndpoints['GET /me/createdObjects']['response']> {
  return {
    method: 'get',
    path: '/me/createdObjects',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /me/createdObjects/{directoryObject-id}`
 *
 * Directory objects that the user created. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /me/createdObjects/{directoryObject-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/createdObjects/{directoryObject-id}']['response']> {
  return {
    method: 'get',
    path: '/me/createdObjects/{directoryObject-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'directoryObject-id', in: 'path' },
    ],
    params,
  };
}
