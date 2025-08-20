import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/devices/{device-id}/deviceTemplate': Operation<
    '/users/{user-id}/devices/{device-id}/deviceTemplate',
    'get'
  >;
  'GET /users/{user-id}/devices/{device-id}/deviceTemplate/{deviceTemplate-id}': Operation<
    '/users/{user-id}/devices/{device-id}/deviceTemplate/{deviceTemplate-id}',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/devices/{device-id}/deviceTemplate`
 *
 * Device template used to instantiate this device. Nullable. Read-only.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/devices/{device-id}/deviceTemplate']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/devices/{device-id}/deviceTemplate']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/devices/{device-id}/deviceTemplate',
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
      { name: 'device-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/devices/{device-id}/deviceTemplate/{deviceTemplate-id}`
 *
 * Device template used to instantiate this device. Nullable. Read-only.
 */
export function get$1(
  params?: IEndpoints['GET /users/{user-id}/devices/{device-id}/deviceTemplate/{deviceTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/devices/{device-id}/deviceTemplate/{deviceTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/devices/{device-id}/deviceTemplate/{deviceTemplate-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'device-id', in: 'path' },
      { name: 'deviceTemplate-id', in: 'path' },
    ],
    params,
  };
}
