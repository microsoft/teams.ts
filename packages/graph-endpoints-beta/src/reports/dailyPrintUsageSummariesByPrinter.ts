import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /reports/dailyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}': Operation<
    '/reports/dailyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}',
    'delete'
  >;
  'GET /reports/dailyPrintUsageSummariesByPrinter': Operation<
    '/reports/dailyPrintUsageSummariesByPrinter',
    'get'
  >;
  'GET /reports/dailyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}': Operation<
    '/reports/dailyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}',
    'get'
  >;
  'PATCH /reports/dailyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}': Operation<
    '/reports/dailyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}',
    'patch'
  >;
  'POST /reports/dailyPrintUsageSummariesByPrinter': Operation<
    '/reports/dailyPrintUsageSummariesByPrinter',
    'post'
  >;
}

/**
 * `DELETE /reports/dailyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /reports/dailyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /reports/dailyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/reports/dailyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'printUsageByPrinter-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /reports/dailyPrintUsageSummariesByPrinter`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /reports/dailyPrintUsageSummariesByPrinter']['parameters']
): EndpointRequest<IEndpoints['GET /reports/dailyPrintUsageSummariesByPrinter']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/dailyPrintUsageSummariesByPrinter',
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
 * `GET /reports/dailyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}`
 *
 * @deprecated
 */
export function get$1(
  params?: IEndpoints['GET /reports/dailyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /reports/dailyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/dailyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'printUsageByPrinter-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /reports/dailyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /reports/dailyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}']['body'],
  params?: IEndpoints['PATCH /reports/dailyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /reports/dailyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/reports/dailyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}',
    paramDefs: [{ name: 'printUsageByPrinter-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /reports/dailyPrintUsageSummariesByPrinter`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /reports/dailyPrintUsageSummariesByPrinter']['body'],
  params?: IEndpoints['POST /reports/dailyPrintUsageSummariesByPrinter']['parameters']
): EndpointRequest<IEndpoints['POST /reports/dailyPrintUsageSummariesByPrinter']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/reports/dailyPrintUsageSummariesByPrinter',
    paramDefs: [],
    params,
    body,
  };
}
