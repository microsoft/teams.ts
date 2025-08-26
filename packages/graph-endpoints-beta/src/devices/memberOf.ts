import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /devices/{device-id}/memberOf': Operation<'/devices/{device-id}/memberOf', 'get'>;
  'GET /devices/{device-id}/memberOf/{directoryObject-id}': Operation<
    '/devices/{device-id}/memberOf/{directoryObject-id}',
    'get'
  >;
}

/**
 * `GET /devices/{device-id}/memberOf`
 *
 * Get groups and administrative units that the device is a direct member of. This operation is not transitive.
 */
export function get(
  params?: IEndpoints['GET /devices/{device-id}/memberOf']['parameters']
): EndpointRequest<IEndpoints['GET /devices/{device-id}/memberOf']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/devices/{device-id}/memberOf',
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
      { name: 'device-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /devices/{device-id}/memberOf/{directoryObject-id}`
 *
 * Groups and administrative units that this device is a member of. Read-only. Nullable. Supports $expand.
 */
export function get$1(
  params?: IEndpoints['GET /devices/{device-id}/memberOf/{directoryObject-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /devices/{device-id}/memberOf/{directoryObject-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/devices/{device-id}/memberOf/{directoryObject-id}',
    paramDefs: [
      { name: 'ConsistencyLevel', in: 'header' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'device-id', in: 'path' },
      { name: 'directoryObject-id', in: 'path' },
    ],
    params,
  };
}
