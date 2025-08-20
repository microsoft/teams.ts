import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /reports/healthMonitoring/alerts/{alert-id}': Operation<
    '/reports/healthMonitoring/alerts/{alert-id}',
    'delete'
  >;
  'GET /reports/healthMonitoring/alerts': Operation<'/reports/healthMonitoring/alerts', 'get'>;
  'GET /reports/healthMonitoring/alerts/{alert-id}': Operation<
    '/reports/healthMonitoring/alerts/{alert-id}',
    'get'
  >;
  'PATCH /reports/healthMonitoring/alerts/{alert-id}': Operation<
    '/reports/healthMonitoring/alerts/{alert-id}',
    'patch'
  >;
  'POST /reports/healthMonitoring/alerts': Operation<'/reports/healthMonitoring/alerts', 'post'>;
}

/**
 * `DELETE /reports/healthMonitoring/alerts/{alert-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /reports/healthMonitoring/alerts/{alert-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /reports/healthMonitoring/alerts/{alert-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/reports/healthMonitoring/alerts/{alert-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'alert-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /reports/healthMonitoring/alerts`
 *
 * Get the list of the Microsoft Entra health monitoring alert objects and their properties from the past 30 days.
 */
export function list(
  params?: IEndpoints['GET /reports/healthMonitoring/alerts']['parameters']
): EndpointRequest<IEndpoints['GET /reports/healthMonitoring/alerts']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/healthMonitoring/alerts',
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
 * `GET /reports/healthMonitoring/alerts/{alert-id}`
 *
 * Read the properties and relationships of a Microsoft Entra health monitoring alert object. The returned alert object contains information about the state, type, date, and impact of each alert that fired within your tenant.
 */
export function get(
  params?: IEndpoints['GET /reports/healthMonitoring/alerts/{alert-id}']['parameters']
): EndpointRequest<IEndpoints['GET /reports/healthMonitoring/alerts/{alert-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/healthMonitoring/alerts/{alert-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'alert-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /reports/healthMonitoring/alerts/{alert-id}`
 *
 * Update the properties of a Microsoft Entra health monitoring alert object. For example, change an alert&#x27;s state from active to resolved.
 */
export function update(
  body: IEndpoints['PATCH /reports/healthMonitoring/alerts/{alert-id}']['body'],
  params?: IEndpoints['PATCH /reports/healthMonitoring/alerts/{alert-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /reports/healthMonitoring/alerts/{alert-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/reports/healthMonitoring/alerts/{alert-id}',
    paramDefs: [{ name: 'alert-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /reports/healthMonitoring/alerts`
 *
 */
export function create(
  body: IEndpoints['POST /reports/healthMonitoring/alerts']['body'],
  params?: IEndpoints['POST /reports/healthMonitoring/alerts']['parameters']
): EndpointRequest<IEndpoints['POST /reports/healthMonitoring/alerts']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/reports/healthMonitoring/alerts',
    paramDefs: [],
    params,
    body,
  };
}
