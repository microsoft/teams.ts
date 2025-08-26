import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /reports/dailyPrintUsageByUser/{printUsageByUser-id}': Operation<
    '/reports/dailyPrintUsageByUser/{printUsageByUser-id}',
    'delete'
  >;
  'GET /reports/dailyPrintUsageByUser': Operation<'/reports/dailyPrintUsageByUser', 'get'>;
  'GET /reports/dailyPrintUsageByUser/{printUsageByUser-id}': Operation<
    '/reports/dailyPrintUsageByUser/{printUsageByUser-id}',
    'get'
  >;
  'PATCH /reports/dailyPrintUsageByUser/{printUsageByUser-id}': Operation<
    '/reports/dailyPrintUsageByUser/{printUsageByUser-id}',
    'patch'
  >;
  'POST /reports/dailyPrintUsageByUser': Operation<'/reports/dailyPrintUsageByUser', 'post'>;
}

/**
 * `DELETE /reports/dailyPrintUsageByUser/{printUsageByUser-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /reports/dailyPrintUsageByUser/{printUsageByUser-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /reports/dailyPrintUsageByUser/{printUsageByUser-id}']['response']
> {
  return {
    method: 'delete',
    path: '/reports/dailyPrintUsageByUser/{printUsageByUser-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'printUsageByUser-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /reports/dailyPrintUsageByUser`
 *
 * Retrieve a list of daily print usage summaries, grouped by user.
 */
export function get(
  params?: IEndpoints['GET /reports/dailyPrintUsageByUser']['parameters']
): EndpointRequest<IEndpoints['GET /reports/dailyPrintUsageByUser']['response']> {
  return {
    method: 'get',
    path: '/reports/dailyPrintUsageByUser',
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
 * `GET /reports/dailyPrintUsageByUser/{printUsageByUser-id}`
 *
 * Retrieve a user&#x27;s usage summary for a particular time period. For descriptions of each endpoint, see printUsageByUser.
 */
export function get$1(
  params?: IEndpoints['GET /reports/dailyPrintUsageByUser/{printUsageByUser-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /reports/dailyPrintUsageByUser/{printUsageByUser-id}']['response']
> {
  return {
    method: 'get',
    path: '/reports/dailyPrintUsageByUser/{printUsageByUser-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'printUsageByUser-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /reports/dailyPrintUsageByUser/{printUsageByUser-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /reports/dailyPrintUsageByUser/{printUsageByUser-id}']['body'],
  params?: IEndpoints['PATCH /reports/dailyPrintUsageByUser/{printUsageByUser-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /reports/dailyPrintUsageByUser/{printUsageByUser-id}']['response']
> {
  return {
    method: 'patch',
    path: '/reports/dailyPrintUsageByUser/{printUsageByUser-id}',
    paramDefs: [{ name: 'printUsageByUser-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /reports/dailyPrintUsageByUser`
 *
 */
export function create(
  body: IEndpoints['POST /reports/dailyPrintUsageByUser']['body'],
  params?: IEndpoints['POST /reports/dailyPrintUsageByUser']['parameters']
): EndpointRequest<IEndpoints['POST /reports/dailyPrintUsageByUser']['response']> {
  return {
    method: 'post',
    path: '/reports/dailyPrintUsageByUser',
    paramDefs: [],
    params,
    body,
  };
}
