import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /reports/dailyPrintUsageSummariesByUser/{printUsageByUser-id}': Operation<
    '/reports/dailyPrintUsageSummariesByUser/{printUsageByUser-id}',
    'delete'
  >;
  'GET /reports/dailyPrintUsageSummariesByUser': Operation<
    '/reports/dailyPrintUsageSummariesByUser',
    'get'
  >;
  'GET /reports/dailyPrintUsageSummariesByUser/{printUsageByUser-id}': Operation<
    '/reports/dailyPrintUsageSummariesByUser/{printUsageByUser-id}',
    'get'
  >;
  'PATCH /reports/dailyPrintUsageSummariesByUser/{printUsageByUser-id}': Operation<
    '/reports/dailyPrintUsageSummariesByUser/{printUsageByUser-id}',
    'patch'
  >;
  'POST /reports/dailyPrintUsageSummariesByUser': Operation<
    '/reports/dailyPrintUsageSummariesByUser',
    'post'
  >;
}

/**
 * `DELETE /reports/dailyPrintUsageSummariesByUser/{printUsageByUser-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /reports/dailyPrintUsageSummariesByUser/{printUsageByUser-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /reports/dailyPrintUsageSummariesByUser/{printUsageByUser-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/reports/dailyPrintUsageSummariesByUser/{printUsageByUser-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'printUsageByUser-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /reports/dailyPrintUsageSummariesByUser`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /reports/dailyPrintUsageSummariesByUser']['parameters']
): EndpointRequest<IEndpoints['GET /reports/dailyPrintUsageSummariesByUser']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/dailyPrintUsageSummariesByUser',
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
 * `GET /reports/dailyPrintUsageSummariesByUser/{printUsageByUser-id}`
 *
 * @deprecated
 */
export function get$1(
  params?: IEndpoints['GET /reports/dailyPrintUsageSummariesByUser/{printUsageByUser-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /reports/dailyPrintUsageSummariesByUser/{printUsageByUser-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/dailyPrintUsageSummariesByUser/{printUsageByUser-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'printUsageByUser-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /reports/dailyPrintUsageSummariesByUser/{printUsageByUser-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /reports/dailyPrintUsageSummariesByUser/{printUsageByUser-id}']['body'],
  params?: IEndpoints['PATCH /reports/dailyPrintUsageSummariesByUser/{printUsageByUser-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /reports/dailyPrintUsageSummariesByUser/{printUsageByUser-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/reports/dailyPrintUsageSummariesByUser/{printUsageByUser-id}',
    paramDefs: [{ name: 'printUsageByUser-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /reports/dailyPrintUsageSummariesByUser`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /reports/dailyPrintUsageSummariesByUser']['body'],
  params?: IEndpoints['POST /reports/dailyPrintUsageSummariesByUser']['parameters']
): EndpointRequest<IEndpoints['POST /reports/dailyPrintUsageSummariesByUser']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/reports/dailyPrintUsageSummariesByUser',
    paramDefs: [],
    params,
    body,
  };
}
