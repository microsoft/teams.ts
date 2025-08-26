import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /reports/dailyPrintUsage/{printUsage-id}': Operation<
    '/reports/dailyPrintUsage/{printUsage-id}',
    'delete'
  >;
  'GET /reports/dailyPrintUsage': Operation<'/reports/dailyPrintUsage', 'get'>;
  'GET /reports/dailyPrintUsage/{printUsage-id}': Operation<
    '/reports/dailyPrintUsage/{printUsage-id}',
    'get'
  >;
  'PATCH /reports/dailyPrintUsage/{printUsage-id}': Operation<
    '/reports/dailyPrintUsage/{printUsage-id}',
    'patch'
  >;
  'POST /reports/dailyPrintUsage': Operation<'/reports/dailyPrintUsage', 'post'>;
}

/**
 * `DELETE /reports/dailyPrintUsage/{printUsage-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /reports/dailyPrintUsage/{printUsage-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /reports/dailyPrintUsage/{printUsage-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/reports/dailyPrintUsage/{printUsage-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'printUsage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /reports/dailyPrintUsage`
 *
 */
export function get(
  params?: IEndpoints['GET /reports/dailyPrintUsage']['parameters']
): EndpointRequest<IEndpoints['GET /reports/dailyPrintUsage']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/dailyPrintUsage',
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
 * `GET /reports/dailyPrintUsage/{printUsage-id}`
 *
 */
export function get$1(
  params?: IEndpoints['GET /reports/dailyPrintUsage/{printUsage-id}']['parameters']
): EndpointRequest<IEndpoints['GET /reports/dailyPrintUsage/{printUsage-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/dailyPrintUsage/{printUsage-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'printUsage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /reports/dailyPrintUsage/{printUsage-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /reports/dailyPrintUsage/{printUsage-id}']['body'],
  params?: IEndpoints['PATCH /reports/dailyPrintUsage/{printUsage-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /reports/dailyPrintUsage/{printUsage-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/reports/dailyPrintUsage/{printUsage-id}',
    paramDefs: [{ name: 'printUsage-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /reports/dailyPrintUsage`
 *
 */
export function create(
  body: IEndpoints['POST /reports/dailyPrintUsage']['body'],
  params?: IEndpoints['POST /reports/dailyPrintUsage']['parameters']
): EndpointRequest<IEndpoints['POST /reports/dailyPrintUsage']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/reports/dailyPrintUsage',
    paramDefs: [],
    params,
    body,
  };
}
