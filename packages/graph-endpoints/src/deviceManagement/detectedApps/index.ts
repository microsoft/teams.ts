export * as managedDevices from './managedDevices';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/detectedApps/{detectedApp-id}': Operation<
    '/deviceManagement/detectedApps/{detectedApp-id}',
    'delete'
  >;
  'GET /deviceManagement/detectedApps': Operation<'/deviceManagement/detectedApps', 'get'>;
  'GET /deviceManagement/detectedApps/{detectedApp-id}': Operation<
    '/deviceManagement/detectedApps/{detectedApp-id}',
    'get'
  >;
  'PATCH /deviceManagement/detectedApps/{detectedApp-id}': Operation<
    '/deviceManagement/detectedApps/{detectedApp-id}',
    'patch'
  >;
  'POST /deviceManagement/detectedApps': Operation<'/deviceManagement/detectedApps', 'post'>;
}

/**
 * `DELETE /deviceManagement/detectedApps/{detectedApp-id}`
 *
 * Deletes a detectedApp.
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/detectedApps/{detectedApp-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/detectedApps/{detectedApp-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/detectedApps/{detectedApp-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'detectedApp-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/detectedApps`
 *
 * List properties and relationships of the detectedApp objects.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/detectedApps']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/detectedApps']['response']> {
  return {
    method: 'get',
    path: '/deviceManagement/detectedApps',
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
 * `GET /deviceManagement/detectedApps/{detectedApp-id}`
 *
 * Read properties and relationships of the detectedApp object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/detectedApps/{detectedApp-id}']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/detectedApps/{detectedApp-id}']['response']> {
  return {
    method: 'get',
    path: '/deviceManagement/detectedApps/{detectedApp-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'detectedApp-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/detectedApps/{detectedApp-id}`
 *
 * Update the properties of a detectedApp object.
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/detectedApps/{detectedApp-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/detectedApps/{detectedApp-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/detectedApps/{detectedApp-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/detectedApps/{detectedApp-id}',
    paramDefs: [{ name: 'detectedApp-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/detectedApps`
 *
 * Create a new detectedApp object.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/detectedApps']['body'],
  params?: IEndpoints['POST /deviceManagement/detectedApps']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/detectedApps']['response']> {
  return {
    method: 'post',
    path: '/deviceManagement/detectedApps',
    paramDefs: [],
    params,
    body,
  };
}
