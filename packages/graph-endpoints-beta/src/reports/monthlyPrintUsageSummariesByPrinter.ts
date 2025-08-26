import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /reports/monthlyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}': Operation<
    '/reports/monthlyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}',
    'delete'
  >;
  'GET /reports/monthlyPrintUsageSummariesByPrinter': Operation<
    '/reports/monthlyPrintUsageSummariesByPrinter',
    'get'
  >;
  'GET /reports/monthlyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}': Operation<
    '/reports/monthlyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}',
    'get'
  >;
  'PATCH /reports/monthlyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}': Operation<
    '/reports/monthlyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}',
    'patch'
  >;
  'POST /reports/monthlyPrintUsageSummariesByPrinter': Operation<
    '/reports/monthlyPrintUsageSummariesByPrinter',
    'post'
  >;
}

/**
 * `DELETE /reports/monthlyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /reports/monthlyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /reports/monthlyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/reports/monthlyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'printUsageByPrinter-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /reports/monthlyPrintUsageSummariesByPrinter`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /reports/monthlyPrintUsageSummariesByPrinter']['parameters']
): EndpointRequest<IEndpoints['GET /reports/monthlyPrintUsageSummariesByPrinter']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/monthlyPrintUsageSummariesByPrinter',
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
 * `GET /reports/monthlyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}`
 *
 * @deprecated
 */
export function get$1(
  params?: IEndpoints['GET /reports/monthlyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /reports/monthlyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/monthlyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'printUsageByPrinter-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /reports/monthlyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /reports/monthlyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}']['body'],
  params?: IEndpoints['PATCH /reports/monthlyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /reports/monthlyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/reports/monthlyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}',
    paramDefs: [{ name: 'printUsageByPrinter-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /reports/monthlyPrintUsageSummariesByPrinter`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /reports/monthlyPrintUsageSummariesByPrinter']['body'],
  params?: IEndpoints['POST /reports/monthlyPrintUsageSummariesByPrinter']['parameters']
): EndpointRequest<IEndpoints['POST /reports/monthlyPrintUsageSummariesByPrinter']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/reports/monthlyPrintUsageSummariesByPrinter',
    paramDefs: [],
    params,
    body,
  };
}
