import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /print/printerShares/{printerShare-id}/printer': Operation<
    '/print/printerShares/{printerShare-id}/printer',
    'get'
  >;
}

/**
 * `GET /print/printerShares/{printerShare-id}/printer`
 *
 * The printer that this printer share is related to.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /print/printerShares/{printerShare-id}/printer']['parameters']
): EndpointRequest<IEndpoints['GET /print/printerShares/{printerShare-id}/printer']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/print/printerShares/{printerShare-id}/printer',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'printerShare-id', in: 'path' },
    ],
    params,
  };
}
