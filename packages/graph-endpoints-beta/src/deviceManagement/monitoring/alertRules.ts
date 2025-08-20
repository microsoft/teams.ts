import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/monitoring/alertRules/{alertRule-id}': Operation<
    '/deviceManagement/monitoring/alertRules/{alertRule-id}',
    'delete'
  >;
  'GET /deviceManagement/monitoring/alertRules': Operation<
    '/deviceManagement/monitoring/alertRules',
    'get'
  >;
  'GET /deviceManagement/monitoring/alertRules/{alertRule-id}': Operation<
    '/deviceManagement/monitoring/alertRules/{alertRule-id}',
    'get'
  >;
  'PATCH /deviceManagement/monitoring/alertRules/{alertRule-id}': Operation<
    '/deviceManagement/monitoring/alertRules/{alertRule-id}',
    'patch'
  >;
  'POST /deviceManagement/monitoring/alertRules': Operation<
    '/deviceManagement/monitoring/alertRules',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/monitoring/alertRules/{alertRule-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/monitoring/alertRules/{alertRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/monitoring/alertRules/{alertRule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/monitoring/alertRules/{alertRule-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'alertRule-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/monitoring/alertRules`
 *
 * Get a list of the alertRule objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/monitoring/alertRules']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/monitoring/alertRules']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/monitoring/alertRules',
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
 * `GET /deviceManagement/monitoring/alertRules/{alertRule-id}`
 *
 * Read the properties and relationships of an alertRule object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/monitoring/alertRules/{alertRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/monitoring/alertRules/{alertRule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/monitoring/alertRules/{alertRule-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'alertRule-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/monitoring/alertRules/{alertRule-id}`
 *
 * Update the properties of an alertRule object.
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/monitoring/alertRules/{alertRule-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/monitoring/alertRules/{alertRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/monitoring/alertRules/{alertRule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/monitoring/alertRules/{alertRule-id}',
    paramDefs: [{ name: 'alertRule-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/monitoring/alertRules`
 *
 * Create an alertRule object.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/monitoring/alertRules']['body'],
  params?: IEndpoints['POST /deviceManagement/monitoring/alertRules']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/monitoring/alertRules']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/monitoring/alertRules',
    paramDefs: [],
    params,
    body,
  };
}
