import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /print/printers/{printer-id}/share': Operation<'/print/printers/{printer-id}/share', 'get'>;
}

/**
 * `GET /print/printers/{printer-id}/share`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /print/printers/{printer-id}/share']['parameters']
): EndpointRequest<IEndpoints['GET /print/printers/{printer-id}/share']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/print/printers/{printer-id}/share',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'printer-id', in: 'path' },
    ],
    params,
  };
}
