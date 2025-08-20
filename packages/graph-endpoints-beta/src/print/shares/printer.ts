import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /print/shares/{printerShare-id}/printer': Operation<
    '/print/shares/{printerShare-id}/printer',
    'get'
  >;
}

/**
 * `GET /print/shares/{printerShare-id}/printer`
 *
 * The printer that this printer share is related to.
 */
export function get(
  params?: IEndpoints['GET /print/shares/{printerShare-id}/printer']['parameters']
): EndpointRequest<IEndpoints['GET /print/shares/{printerShare-id}/printer']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/print/shares/{printerShare-id}/printer',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'printerShare-id', in: 'path' },
    ],
    params,
  };
}
