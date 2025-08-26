import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/managedDeviceCleanupRules/{managedDeviceCleanupRule-id}': Operation<
    '/deviceManagement/managedDeviceCleanupRules/{managedDeviceCleanupRule-id}',
    'delete'
  >;
  'GET /deviceManagement/managedDeviceCleanupRules': Operation<
    '/deviceManagement/managedDeviceCleanupRules',
    'get'
  >;
  'GET /deviceManagement/managedDeviceCleanupRules/{managedDeviceCleanupRule-id}': Operation<
    '/deviceManagement/managedDeviceCleanupRules/{managedDeviceCleanupRule-id}',
    'get'
  >;
  'PATCH /deviceManagement/managedDeviceCleanupRules/{managedDeviceCleanupRule-id}': Operation<
    '/deviceManagement/managedDeviceCleanupRules/{managedDeviceCleanupRule-id}',
    'patch'
  >;
  'POST /deviceManagement/managedDeviceCleanupRules': Operation<
    '/deviceManagement/managedDeviceCleanupRules',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/managedDeviceCleanupRules/{managedDeviceCleanupRule-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/managedDeviceCleanupRules/{managedDeviceCleanupRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/managedDeviceCleanupRules/{managedDeviceCleanupRule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/managedDeviceCleanupRules/{managedDeviceCleanupRule-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'managedDeviceCleanupRule-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/managedDeviceCleanupRules`
 *
 * Device cleanup rule V2
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/managedDeviceCleanupRules']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/managedDeviceCleanupRules']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/managedDeviceCleanupRules',
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
 * `GET /deviceManagement/managedDeviceCleanupRules/{managedDeviceCleanupRule-id}`
 *
 * Device cleanup rule V2
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/managedDeviceCleanupRules/{managedDeviceCleanupRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/managedDeviceCleanupRules/{managedDeviceCleanupRule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/managedDeviceCleanupRules/{managedDeviceCleanupRule-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedDeviceCleanupRule-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/managedDeviceCleanupRules/{managedDeviceCleanupRule-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/managedDeviceCleanupRules/{managedDeviceCleanupRule-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/managedDeviceCleanupRules/{managedDeviceCleanupRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/managedDeviceCleanupRules/{managedDeviceCleanupRule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/managedDeviceCleanupRules/{managedDeviceCleanupRule-id}',
    paramDefs: [{ name: 'managedDeviceCleanupRule-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/managedDeviceCleanupRules`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/managedDeviceCleanupRules']['body'],
  params?: IEndpoints['POST /deviceManagement/managedDeviceCleanupRules']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/managedDeviceCleanupRules']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/managedDeviceCleanupRules',
    paramDefs: [],
    params,
    body,
  };
}
