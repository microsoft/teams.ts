import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /print/printers/{printer-id}/shares': Operation<
    '/print/printers/{printer-id}/shares',
    'get'
  >;
  'GET /print/printers/{printer-id}/shares/{printerShare-id}': Operation<
    '/print/printers/{printer-id}/shares/{printerShare-id}',
    'get'
  >;
}

/**
 * `GET /print/printers/{printer-id}/shares`
 *
 * Retrieve a list of printer shares associated with the printer.
 */
export function list(
  params?: IEndpoints['GET /print/printers/{printer-id}/shares']['parameters']
): EndpointRequest<IEndpoints['GET /print/printers/{printer-id}/shares']['response']> {
  return {
    method: 'get',
    path: '/print/printers/{printer-id}/shares',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'printer-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /print/printers/{printer-id}/shares/{printerShare-id}`
 *
 * The list of printerShares that are associated with the printer. Currently, only one printerShare can be associated with the printer. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /print/printers/{printer-id}/shares/{printerShare-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /print/printers/{printer-id}/shares/{printerShare-id}']['response']
> {
  return {
    method: 'get',
    path: '/print/printers/{printer-id}/shares/{printerShare-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'printer-id', in: 'path' },
      { name: 'printerShare-id', in: 'path' },
    ],
    params,
  };
}
