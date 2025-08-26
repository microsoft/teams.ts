import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /me/registeredDevices': Operation<'/me/registeredDevices', 'get'>;
  'GET /me/registeredDevices/{directoryObject-id}': Operation<
    '/me/registeredDevices/{directoryObject-id}',
    'get'
  >;
}

/**
 * `GET /me/registeredDevices`
 *
 * Get the list of user&#x27;s registered devices.
 */
export function list(
  params?: IEndpoints['GET /me/registeredDevices']['parameters']
): EndpointRequest<IEndpoints['GET /me/registeredDevices']['response']> {
  return {
    method: 'get',
    path: '/me/registeredDevices',
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
    ],
    params,
  };
}

/**
 * `GET /me/registeredDevices/{directoryObject-id}`
 *
 * Devices that are registered for the user. Read-only. Nullable. Supports $expand and returns up to 100 objects.
 */
export function get(
  params?: IEndpoints['GET /me/registeredDevices/{directoryObject-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/registeredDevices/{directoryObject-id}']['response']> {
  return {
    method: 'get',
    path: '/me/registeredDevices/{directoryObject-id}',
    paramDefs: [
      { name: 'ConsistencyLevel', in: 'header' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'directoryObject-id', in: 'path' },
    ],
    params,
  };
}
