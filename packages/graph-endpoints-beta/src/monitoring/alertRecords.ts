import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /monitoring/alertRecords/{alertRecord-id}': Operation<
    '/monitoring/alertRecords/{alertRecord-id}',
    'delete'
  >;
  'GET /monitoring/alertRecords': Operation<'/monitoring/alertRecords', 'get'>;
  'GET /monitoring/alertRecords/{alertRecord-id}': Operation<
    '/monitoring/alertRecords/{alertRecord-id}',
    'get'
  >;
  'PATCH /monitoring/alertRecords/{alertRecord-id}': Operation<
    '/monitoring/alertRecords/{alertRecord-id}',
    'patch'
  >;
  'POST /monitoring/alertRecords': Operation<'/monitoring/alertRecords', 'post'>;
}

/**
 * `DELETE /monitoring/alertRecords/{alertRecord-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /monitoring/alertRecords/{alertRecord-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /monitoring/alertRecords/{alertRecord-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/monitoring/alertRecords/{alertRecord-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'alertRecord-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /monitoring/alertRecords`
 *
 * The collection of records of alert events.
 */
export function list(
  params?: IEndpoints['GET /monitoring/alertRecords']['parameters']
): EndpointRequest<IEndpoints['GET /monitoring/alertRecords']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/monitoring/alertRecords',
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
 * `GET /monitoring/alertRecords/{alertRecord-id}`
 *
 * The collection of records of alert events.
 */
export function get(
  params?: IEndpoints['GET /monitoring/alertRecords/{alertRecord-id}']['parameters']
): EndpointRequest<IEndpoints['GET /monitoring/alertRecords/{alertRecord-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/monitoring/alertRecords/{alertRecord-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'alertRecord-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /monitoring/alertRecords/{alertRecord-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /monitoring/alertRecords/{alertRecord-id}']['body'],
  params?: IEndpoints['PATCH /monitoring/alertRecords/{alertRecord-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /monitoring/alertRecords/{alertRecord-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/monitoring/alertRecords/{alertRecord-id}',
    paramDefs: [{ name: 'alertRecord-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /monitoring/alertRecords`
 *
 */
export function create(
  body: IEndpoints['POST /monitoring/alertRecords']['body'],
  params?: IEndpoints['POST /monitoring/alertRecords']['parameters']
): EndpointRequest<IEndpoints['POST /monitoring/alertRecords']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/monitoring/alertRecords',
    paramDefs: [],
    params,
    body,
  };
}
