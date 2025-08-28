import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/devices/{device-id}/commands/{command-id}/responsepayload': Operation<
    '/users/{user-id}/devices/{device-id}/commands/{command-id}/responsepayload',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/devices/{device-id}/commands/{command-id}/responsepayload`
 *
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/devices/{device-id}/commands/{command-id}/responsepayload']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/devices/{device-id}/commands/{command-id}/responsepayload']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/devices/{device-id}/commands/{command-id}/responsepayload',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'device-id', in: 'path' },
      { name: 'command-id', in: 'path' },
    ],
    params,
  };
}
