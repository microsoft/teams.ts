import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /reports/monthlyPrintUsageSummariesByUser/{printUsageByUser-id}': Operation<
    '/reports/monthlyPrintUsageSummariesByUser/{printUsageByUser-id}',
    'delete'
  >;
  'GET /reports/monthlyPrintUsageSummariesByUser': Operation<
    '/reports/monthlyPrintUsageSummariesByUser',
    'get'
  >;
  'GET /reports/monthlyPrintUsageSummariesByUser/{printUsageByUser-id}': Operation<
    '/reports/monthlyPrintUsageSummariesByUser/{printUsageByUser-id}',
    'get'
  >;
  'PATCH /reports/monthlyPrintUsageSummariesByUser/{printUsageByUser-id}': Operation<
    '/reports/monthlyPrintUsageSummariesByUser/{printUsageByUser-id}',
    'patch'
  >;
  'POST /reports/monthlyPrintUsageSummariesByUser': Operation<
    '/reports/monthlyPrintUsageSummariesByUser',
    'post'
  >;
}

/**
 * `DELETE /reports/monthlyPrintUsageSummariesByUser/{printUsageByUser-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /reports/monthlyPrintUsageSummariesByUser/{printUsageByUser-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /reports/monthlyPrintUsageSummariesByUser/{printUsageByUser-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/reports/monthlyPrintUsageSummariesByUser/{printUsageByUser-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'printUsageByUser-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /reports/monthlyPrintUsageSummariesByUser`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /reports/monthlyPrintUsageSummariesByUser']['parameters']
): EndpointRequest<IEndpoints['GET /reports/monthlyPrintUsageSummariesByUser']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/monthlyPrintUsageSummariesByUser',
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
 * `GET /reports/monthlyPrintUsageSummariesByUser/{printUsageByUser-id}`
 *
 * @deprecated
 */
export function get$1(
  params?: IEndpoints['GET /reports/monthlyPrintUsageSummariesByUser/{printUsageByUser-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /reports/monthlyPrintUsageSummariesByUser/{printUsageByUser-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/monthlyPrintUsageSummariesByUser/{printUsageByUser-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'printUsageByUser-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /reports/monthlyPrintUsageSummariesByUser/{printUsageByUser-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /reports/monthlyPrintUsageSummariesByUser/{printUsageByUser-id}']['body'],
  params?: IEndpoints['PATCH /reports/monthlyPrintUsageSummariesByUser/{printUsageByUser-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /reports/monthlyPrintUsageSummariesByUser/{printUsageByUser-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/reports/monthlyPrintUsageSummariesByUser/{printUsageByUser-id}',
    paramDefs: [{ name: 'printUsageByUser-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /reports/monthlyPrintUsageSummariesByUser`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /reports/monthlyPrintUsageSummariesByUser']['body'],
  params?: IEndpoints['POST /reports/monthlyPrintUsageSummariesByUser']['parameters']
): EndpointRequest<IEndpoints['POST /reports/monthlyPrintUsageSummariesByUser']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/reports/monthlyPrintUsageSummariesByUser',
    paramDefs: [],
    params,
    body,
  };
}
