import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /devices/{device-id}/transitiveMemberOf': Operation<
    '/devices/{device-id}/transitiveMemberOf',
    'get'
  >;
  'GET /devices/{device-id}/transitiveMemberOf/{directoryObject-id}': Operation<
    '/devices/{device-id}/transitiveMemberOf/{directoryObject-id}',
    'get'
  >;
}

/**
 * `GET /devices/{device-id}/transitiveMemberOf`
 *
 * Get the groups and administrative units that the device is a member of. This API request is transitive, and will also return all groups and administrative units the device is a nested member of.
 */
export function get(
  params?: IEndpoints['GET /devices/{device-id}/transitiveMemberOf']['parameters']
): EndpointRequest<IEndpoints['GET /devices/{device-id}/transitiveMemberOf']['response']> {
  return {
    method: 'get',
    path: '/devices/{device-id}/transitiveMemberOf',
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
 * `GET /devices/{device-id}/transitiveMemberOf/{directoryObject-id}`
 *
 * Groups and administrative units that the device is a member of. This operation is transitive. Supports $expand.
 */
export function get$1(
  params?: IEndpoints['GET /devices/{device-id}/transitiveMemberOf/{directoryObject-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /devices/{device-id}/transitiveMemberOf/{directoryObject-id}']['response']
> {
  return {
    method: 'get',
    path: '/devices/{device-id}/transitiveMemberOf/{directoryObject-id}',
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
