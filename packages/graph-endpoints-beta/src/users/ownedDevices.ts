import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/ownedDevices': Operation<'/users/{user-id}/ownedDevices', 'get'>;
  'GET /users/{user-id}/ownedDevices/{directoryObject-id}': Operation<
    '/users/{user-id}/ownedDevices/{directoryObject-id}',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/ownedDevices`
 *
 * Devices owned by the user. Read-only. Nullable. Supports $expand.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/ownedDevices']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/ownedDevices']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/ownedDevices',
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
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/ownedDevices/{directoryObject-id}`
 *
 * Devices owned by the user. Read-only. Nullable. Supports $expand.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/ownedDevices/{directoryObject-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/ownedDevices/{directoryObject-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/ownedDevices/{directoryObject-id}',
    paramDefs: [
      { name: 'ConsistencyLevel', in: 'header' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'directoryObject-id', in: 'path' },
    ],
    params,
  };
}
