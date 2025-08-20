import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/monitoring/alertRecords/{alertRecord-id}': Operation<
    '/deviceManagement/monitoring/alertRecords/{alertRecord-id}',
    'delete'
  >;
  'GET /deviceManagement/monitoring/alertRecords': Operation<
    '/deviceManagement/monitoring/alertRecords',
    'get'
  >;
  'GET /deviceManagement/monitoring/alertRecords/{alertRecord-id}': Operation<
    '/deviceManagement/monitoring/alertRecords/{alertRecord-id}',
    'get'
  >;
  'PATCH /deviceManagement/monitoring/alertRecords/{alertRecord-id}': Operation<
    '/deviceManagement/monitoring/alertRecords/{alertRecord-id}',
    'patch'
  >;
  'POST /deviceManagement/monitoring/alertRecords': Operation<
    '/deviceManagement/monitoring/alertRecords',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/monitoring/alertRecords/{alertRecord-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/monitoring/alertRecords/{alertRecord-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/monitoring/alertRecords/{alertRecord-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/monitoring/alertRecords/{alertRecord-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'alertRecord-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/monitoring/alertRecords`
 *
 * Get a list of the alertRecord objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/monitoring/alertRecords']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/monitoring/alertRecords']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/monitoring/alertRecords',
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
 * `GET /deviceManagement/monitoring/alertRecords/{alertRecord-id}`
 *
 * Read the properties and relationships of an alertRecord object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/monitoring/alertRecords/{alertRecord-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/monitoring/alertRecords/{alertRecord-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/monitoring/alertRecords/{alertRecord-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'alertRecord-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/monitoring/alertRecords/{alertRecord-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/monitoring/alertRecords/{alertRecord-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/monitoring/alertRecords/{alertRecord-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/monitoring/alertRecords/{alertRecord-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/monitoring/alertRecords/{alertRecord-id}',
    paramDefs: [{ name: 'alertRecord-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/monitoring/alertRecords`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/monitoring/alertRecords']['body'],
  params?: IEndpoints['POST /deviceManagement/monitoring/alertRecords']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/monitoring/alertRecords']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/monitoring/alertRecords',
    paramDefs: [],
    params,
    body,
  };
}
