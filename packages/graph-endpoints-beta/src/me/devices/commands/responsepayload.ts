import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /me/devices/{device-id}/commands/{command-id}/responsepayload': Operation<
    '/me/devices/{device-id}/commands/{command-id}/responsepayload',
    'get'
  >;
}

/**
 * `GET /me/devices/{device-id}/commands/{command-id}/responsepayload`
 *
 */
export function get(
  params?: IEndpoints['GET /me/devices/{device-id}/commands/{command-id}/responsepayload']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/devices/{device-id}/commands/{command-id}/responsepayload']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/devices/{device-id}/commands/{command-id}/responsepayload',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'device-id', in: 'path' },
      { name: 'command-id', in: 'path' },
    ],
    params,
  };
}
