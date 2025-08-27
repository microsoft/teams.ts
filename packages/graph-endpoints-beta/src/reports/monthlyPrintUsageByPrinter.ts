import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}': Operation<
    '/reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}',
    'delete'
  >;
  'GET /reports/monthlyPrintUsageByPrinter': Operation<
    '/reports/monthlyPrintUsageByPrinter',
    'get'
  >;
  'GET /reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}': Operation<
    '/reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}',
    'get'
  >;
  'PATCH /reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}': Operation<
    '/reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}',
    'patch'
  >;
  'POST /reports/monthlyPrintUsageByPrinter': Operation<
    '/reports/monthlyPrintUsageByPrinter',
    'post'
  >;
}

/**
 * `DELETE /reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'printUsageByPrinter-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /reports/monthlyPrintUsageByPrinter`
 *
 * Retrieve a list of monthly print usage summaries, grouped by printer.
 */
export function get(
  params?: IEndpoints['GET /reports/monthlyPrintUsageByPrinter']['parameters']
): EndpointRequest<IEndpoints['GET /reports/monthlyPrintUsageByPrinter']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/monthlyPrintUsageByPrinter',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}`
 *
 * Retrieve a list of monthly print usage summaries, grouped by printer.
 */
export function get$1(
  params?: IEndpoints['GET /reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'printUsageByPrinter-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}']['body'],
  params?: IEndpoints['PATCH /reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}',
    paramDefs: [{ name: 'printUsageByPrinter-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /reports/monthlyPrintUsageByPrinter`
 *
 */
export function create(
  body: IEndpoints['POST /reports/monthlyPrintUsageByPrinter']['body'],
  params?: IEndpoints['POST /reports/monthlyPrintUsageByPrinter']['parameters']
): EndpointRequest<IEndpoints['POST /reports/monthlyPrintUsageByPrinter']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/reports/monthlyPrintUsageByPrinter',
    paramDefs: [],
    params,
    body,
  };
}
