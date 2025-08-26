import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/devices/{device-id}/transitiveMemberOf': Operation<
    '/users/{user-id}/devices/{device-id}/transitiveMemberOf',
    'get'
  >;
  'GET /users/{user-id}/devices/{device-id}/transitiveMemberOf/{directoryObject-id}': Operation<
    '/users/{user-id}/devices/{device-id}/transitiveMemberOf/{directoryObject-id}',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/devices/{device-id}/transitiveMemberOf`
 *
 * Groups and administrative units that this device is a member of. This operation is transitive. Supports $expand.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/devices/{device-id}/transitiveMemberOf']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/devices/{device-id}/transitiveMemberOf']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/devices/{device-id}/transitiveMemberOf',
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
      { name: 'device-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/devices/{device-id}/transitiveMemberOf/{directoryObject-id}`
 *
 * Groups and administrative units that this device is a member of. This operation is transitive. Supports $expand.
 */
export function get$1(
  params?: IEndpoints['GET /users/{user-id}/devices/{device-id}/transitiveMemberOf/{directoryObject-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/devices/{device-id}/transitiveMemberOf/{directoryObject-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/devices/{device-id}/transitiveMemberOf/{directoryObject-id}',
    paramDefs: [
      { name: 'ConsistencyLevel', in: 'header' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'device-id', in: 'path' },
      { name: 'directoryObject-id', in: 'path' },
    ],
    params,
  };
}
