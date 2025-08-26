import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /print/printers/{printer-id}/connectors': Operation<
    '/print/printers/{printer-id}/connectors',
    'get'
  >;
  'GET /print/printers/{printer-id}/connectors/{printConnector-id}': Operation<
    '/print/printers/{printer-id}/connectors/{printConnector-id}',
    'get'
  >;
}

/**
 * `GET /print/printers/{printer-id}/connectors`
 *
 * Retrieve a list of connectors associated with the printer.
 */
export function list(
  params?: IEndpoints['GET /print/printers/{printer-id}/connectors']['parameters']
): EndpointRequest<IEndpoints['GET /print/printers/{printer-id}/connectors']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/print/printers/{printer-id}/connectors',
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
 * `GET /print/printers/{printer-id}/connectors/{printConnector-id}`
 *
 * The connectors that are associated with the printer.
 */
export function get(
  params?: IEndpoints['GET /print/printers/{printer-id}/connectors/{printConnector-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /print/printers/{printer-id}/connectors/{printConnector-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/print/printers/{printer-id}/connectors/{printConnector-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'printer-id', in: 'path' },
      { name: 'printConnector-id', in: 'path' },
    ],
    params,
  };
}
