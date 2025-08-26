import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /commands/{command-id}/responsepayload': Operation<
    '/commands/{command-id}/responsepayload',
    'get'
  >;
}

/**
 * `GET /commands/{command-id}/responsepayload`
 *
 */
export function get(
  params?: IEndpoints['GET /commands/{command-id}/responsepayload']['parameters']
): EndpointRequest<IEndpoints['GET /commands/{command-id}/responsepayload']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/commands/{command-id}/responsepayload',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'command-id', in: 'path' },
    ],
    params,
  };
}
