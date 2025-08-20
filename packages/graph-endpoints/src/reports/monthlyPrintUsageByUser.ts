import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /reports/monthlyPrintUsageByUser/{printUsageByUser-id}': Operation<
    '/reports/monthlyPrintUsageByUser/{printUsageByUser-id}',
    'delete'
  >;
  'GET /reports/monthlyPrintUsageByUser': Operation<'/reports/monthlyPrintUsageByUser', 'get'>;
  'GET /reports/monthlyPrintUsageByUser/{printUsageByUser-id}': Operation<
    '/reports/monthlyPrintUsageByUser/{printUsageByUser-id}',
    'get'
  >;
  'PATCH /reports/monthlyPrintUsageByUser/{printUsageByUser-id}': Operation<
    '/reports/monthlyPrintUsageByUser/{printUsageByUser-id}',
    'patch'
  >;
  'POST /reports/monthlyPrintUsageByUser': Operation<'/reports/monthlyPrintUsageByUser', 'post'>;
}

/**
 * `DELETE /reports/monthlyPrintUsageByUser/{printUsageByUser-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /reports/monthlyPrintUsageByUser/{printUsageByUser-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /reports/monthlyPrintUsageByUser/{printUsageByUser-id}']['response']
> {
  return {
    method: 'delete',
    path: '/reports/monthlyPrintUsageByUser/{printUsageByUser-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'printUsageByUser-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /reports/monthlyPrintUsageByUser`
 *
 * Retrieve a list of monthly print usage summaries, grouped by user.
 */
export function get(
  params?: IEndpoints['GET /reports/monthlyPrintUsageByUser']['parameters']
): EndpointRequest<IEndpoints['GET /reports/monthlyPrintUsageByUser']['response']> {
  return {
    method: 'get',
    path: '/reports/monthlyPrintUsageByUser',
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
 * `GET /reports/monthlyPrintUsageByUser/{printUsageByUser-id}`
 *
 * Retrieve a list of monthly print usage summaries, grouped by user.
 */
export function get$1(
  params?: IEndpoints['GET /reports/monthlyPrintUsageByUser/{printUsageByUser-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /reports/monthlyPrintUsageByUser/{printUsageByUser-id}']['response']
> {
  return {
    method: 'get',
    path: '/reports/monthlyPrintUsageByUser/{printUsageByUser-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'printUsageByUser-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /reports/monthlyPrintUsageByUser/{printUsageByUser-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /reports/monthlyPrintUsageByUser/{printUsageByUser-id}']['body'],
  params?: IEndpoints['PATCH /reports/monthlyPrintUsageByUser/{printUsageByUser-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /reports/monthlyPrintUsageByUser/{printUsageByUser-id}']['response']
> {
  return {
    method: 'patch',
    path: '/reports/monthlyPrintUsageByUser/{printUsageByUser-id}',
    paramDefs: [{ name: 'printUsageByUser-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /reports/monthlyPrintUsageByUser`
 *
 */
export function create(
  body: IEndpoints['POST /reports/monthlyPrintUsageByUser']['body'],
  params?: IEndpoints['POST /reports/monthlyPrintUsageByUser']['parameters']
): EndpointRequest<IEndpoints['POST /reports/monthlyPrintUsageByUser']['response']> {
  return {
    method: 'post',
    path: '/reports/monthlyPrintUsageByUser',
    paramDefs: [],
    params,
    body,
  };
}
