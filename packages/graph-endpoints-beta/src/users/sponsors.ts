import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/sponsors': Operation<'/users/{user-id}/sponsors', 'get'>;
  'GET /users/{user-id}/sponsors/{directoryObject-id}': Operation<
    '/users/{user-id}/sponsors/{directoryObject-id}',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/sponsors`
 *
 * Get a user&#x27;s sponsors. Sponsors are users and groups that are responsible for this guest&#x27;s privileges in the tenant and for keeping the guest&#x27;s information and access up to date.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/sponsors']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/sponsors']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/sponsors',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/sponsors/{directoryObject-id}`
 *
 * The users and groups responsible for this guest user&#x27;s privileges in the tenant and keep the guest user&#x27;s information and access updated. (HTTP Methods: GET, POST, DELETE.). Supports $expand.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/sponsors/{directoryObject-id}']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/sponsors/{directoryObject-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/sponsors/{directoryObject-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'directoryObject-id', in: 'path' },
    ],
    params,
  };
}
