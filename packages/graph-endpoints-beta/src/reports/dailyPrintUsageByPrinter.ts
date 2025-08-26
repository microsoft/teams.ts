import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}': Operation<
    '/reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}',
    'delete'
  >;
  'GET /reports/dailyPrintUsageByPrinter': Operation<'/reports/dailyPrintUsageByPrinter', 'get'>;
  'GET /reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}': Operation<
    '/reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}',
    'get'
  >;
  'PATCH /reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}': Operation<
    '/reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}',
    'patch'
  >;
  'POST /reports/dailyPrintUsageByPrinter': Operation<'/reports/dailyPrintUsageByPrinter', 'post'>;
}

/**
 * `DELETE /reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'printUsageByPrinter-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /reports/dailyPrintUsageByPrinter`
 *
 * Retrieve a list of daily print usage summaries, grouped by printer.
 */
export function get(
  params?: IEndpoints['GET /reports/dailyPrintUsageByPrinter']['parameters']
): EndpointRequest<IEndpoints['GET /reports/dailyPrintUsageByPrinter']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/dailyPrintUsageByPrinter',
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
 * `GET /reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}`
 *
 * Retrieve a printer&#x27;s usage summary for a particular time period. For descriptions of each of the endpoints, see printUsageByPrinter.
 */
export function get$1(
  params?: IEndpoints['GET /reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'printUsageByPrinter-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}']['body'],
  params?: IEndpoints['PATCH /reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}',
    paramDefs: [{ name: 'printUsageByPrinter-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /reports/dailyPrintUsageByPrinter`
 *
 */
export function create(
  body: IEndpoints['POST /reports/dailyPrintUsageByPrinter']['body'],
  params?: IEndpoints['POST /reports/dailyPrintUsageByPrinter']['parameters']
): EndpointRequest<IEndpoints['POST /reports/dailyPrintUsageByPrinter']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/reports/dailyPrintUsageByPrinter',
    paramDefs: [],
    params,
    body,
  };
}
