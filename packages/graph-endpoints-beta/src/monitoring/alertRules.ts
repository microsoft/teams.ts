import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /monitoring/alertRules/{alertRule-id}': Operation<
    '/monitoring/alertRules/{alertRule-id}',
    'delete'
  >;
  'GET /monitoring/alertRules': Operation<'/monitoring/alertRules', 'get'>;
  'GET /monitoring/alertRules/{alertRule-id}': Operation<
    '/monitoring/alertRules/{alertRule-id}',
    'get'
  >;
  'PATCH /monitoring/alertRules/{alertRule-id}': Operation<
    '/monitoring/alertRules/{alertRule-id}',
    'patch'
  >;
  'POST /monitoring/alertRules': Operation<'/monitoring/alertRules', 'post'>;
}

/**
 * `DELETE /monitoring/alertRules/{alertRule-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /monitoring/alertRules/{alertRule-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /monitoring/alertRules/{alertRule-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/monitoring/alertRules/{alertRule-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'alertRule-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /monitoring/alertRules`
 *
 * The collection of alert rules.
 */
export function list(
  params?: IEndpoints['GET /monitoring/alertRules']['parameters']
): EndpointRequest<IEndpoints['GET /monitoring/alertRules']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/monitoring/alertRules',
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
 * `GET /monitoring/alertRules/{alertRule-id}`
 *
 * The collection of alert rules.
 */
export function get(
  params?: IEndpoints['GET /monitoring/alertRules/{alertRule-id}']['parameters']
): EndpointRequest<IEndpoints['GET /monitoring/alertRules/{alertRule-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/monitoring/alertRules/{alertRule-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'alertRule-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /monitoring/alertRules/{alertRule-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /monitoring/alertRules/{alertRule-id}']['body'],
  params?: IEndpoints['PATCH /monitoring/alertRules/{alertRule-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /monitoring/alertRules/{alertRule-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/monitoring/alertRules/{alertRule-id}',
    paramDefs: [{ name: 'alertRule-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /monitoring/alertRules`
 *
 */
export function create(
  body: IEndpoints['POST /monitoring/alertRules']['body'],
  params?: IEndpoints['POST /monitoring/alertRules']['parameters']
): EndpointRequest<IEndpoints['POST /monitoring/alertRules']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/monitoring/alertRules',
    paramDefs: [],
    params,
    body,
  };
}
