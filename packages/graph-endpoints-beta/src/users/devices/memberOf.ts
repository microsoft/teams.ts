import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/devices/{device-id}/memberOf': Operation<
    '/users/{user-id}/devices/{device-id}/memberOf',
    'get'
  >;
  'GET /users/{user-id}/devices/{device-id}/memberOf/{directoryObject-id}': Operation<
    '/users/{user-id}/devices/{device-id}/memberOf/{directoryObject-id}',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/devices/{device-id}/memberOf`
 *
 * Groups and administrative units that this device is a member of. Read-only. Nullable. Supports $expand.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/devices/{device-id}/memberOf']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/devices/{device-id}/memberOf']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/devices/{device-id}/memberOf',
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
 * `GET /users/{user-id}/devices/{device-id}/memberOf/{directoryObject-id}`
 *
 * Groups and administrative units that this device is a member of. Read-only. Nullable. Supports $expand.
 */
export function get$1(
  params?: IEndpoints['GET /users/{user-id}/devices/{device-id}/memberOf/{directoryObject-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/devices/{device-id}/memberOf/{directoryObject-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/devices/{device-id}/memberOf/{directoryObject-id}',
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
