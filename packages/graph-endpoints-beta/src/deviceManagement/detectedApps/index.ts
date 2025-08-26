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
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/detectedApps/{detectedApp-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/detectedApps/{detectedApp-id}']['response']
> {
  return {
    ver: 'beta',
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
 * The list of detected apps associated with a device.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/detectedApps']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/detectedApps']['response']> {
  return {
    ver: 'beta',
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
 * The list of detected apps associated with a device.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/detectedApps/{detectedApp-id}']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/detectedApps/{detectedApp-id}']['response']> {
  return {
    ver: 'beta',
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
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/detectedApps/{detectedApp-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/detectedApps/{detectedApp-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/detectedApps/{detectedApp-id}']['response']
> {
  return {
    ver: 'beta',
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
 */
export function create(
  body: IEndpoints['POST /deviceManagement/detectedApps']['body'],
  params?: IEndpoints['POST /deviceManagement/detectedApps']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/detectedApps']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/detectedApps',
    paramDefs: [],
    params,
    body,
  };
}
