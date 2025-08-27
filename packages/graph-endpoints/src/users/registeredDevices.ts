import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/registeredDevices': Operation<'/users/{user-id}/registeredDevices', 'get'>;
  'GET /users/{user-id}/registeredDevices/{directoryObject-id}': Operation<
    '/users/{user-id}/registeredDevices/{directoryObject-id}',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/registeredDevices`
 *
 * Devices that are registered for the user. Read-only. Nullable. Supports $expand and returns up to 100 objects.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/registeredDevices']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/registeredDevices']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/registeredDevices',
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
 * `GET /users/{user-id}/registeredDevices/{directoryObject-id}`
 *
 * Devices that are registered for the user. Read-only. Nullable. Supports $expand and returns up to 100 objects.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/registeredDevices/{directoryObject-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/registeredDevices/{directoryObject-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/registeredDevices/{directoryObject-id}',
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
