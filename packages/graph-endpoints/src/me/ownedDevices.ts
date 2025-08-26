import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /me/ownedDevices': Operation<'/me/ownedDevices', 'get'>;
  'GET /me/ownedDevices/{directoryObject-id}': Operation<
    '/me/ownedDevices/{directoryObject-id}',
    'get'
  >;
}

/**
 * `GET /me/ownedDevices`
 *
 * Get the list of devices that are owned by the user.
 */
export function list(
  params?: IEndpoints['GET /me/ownedDevices']['parameters']
): EndpointRequest<IEndpoints['GET /me/ownedDevices']['response']> {
  return {
    method: 'get',
    path: '/me/ownedDevices',
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
 * `GET /me/ownedDevices/{directoryObject-id}`
 *
 * Devices the user owns. Read-only. Nullable. Supports $expand and $filter (/$count eq 0, /$count ne 0, /$count eq 1, /$count ne 1).
 */
export function get(
  params?: IEndpoints['GET /me/ownedDevices/{directoryObject-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/ownedDevices/{directoryObject-id}']['response']> {
  return {
    method: 'get',
    path: '/me/ownedDevices/{directoryObject-id}',
    paramDefs: [
      { name: 'ConsistencyLevel', in: 'header' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'directoryObject-id', in: 'path' },
    ],
    params,
  };
}
