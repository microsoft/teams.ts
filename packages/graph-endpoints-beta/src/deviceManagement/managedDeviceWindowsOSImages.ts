import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/managedDeviceWindowsOSImages/{managedDeviceWindowsOperatingSystemImage-id}': Operation<
    '/deviceManagement/managedDeviceWindowsOSImages/{managedDeviceWindowsOperatingSystemImage-id}',
    'delete'
  >;
  'GET /deviceManagement/managedDeviceWindowsOSImages': Operation<
    '/deviceManagement/managedDeviceWindowsOSImages',
    'get'
  >;
  'GET /deviceManagement/managedDeviceWindowsOSImages/{managedDeviceWindowsOperatingSystemImage-id}': Operation<
    '/deviceManagement/managedDeviceWindowsOSImages/{managedDeviceWindowsOperatingSystemImage-id}',
    'get'
  >;
  'PATCH /deviceManagement/managedDeviceWindowsOSImages/{managedDeviceWindowsOperatingSystemImage-id}': Operation<
    '/deviceManagement/managedDeviceWindowsOSImages/{managedDeviceWindowsOperatingSystemImage-id}',
    'patch'
  >;
  'POST /deviceManagement/managedDeviceWindowsOSImages': Operation<
    '/deviceManagement/managedDeviceWindowsOSImages',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/managedDeviceWindowsOSImages/{managedDeviceWindowsOperatingSystemImage-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/managedDeviceWindowsOSImages/{managedDeviceWindowsOperatingSystemImage-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/managedDeviceWindowsOSImages/{managedDeviceWindowsOperatingSystemImage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/managedDeviceWindowsOSImages/{managedDeviceWindowsOperatingSystemImage-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'managedDeviceWindowsOperatingSystemImage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/managedDeviceWindowsOSImages`
 *
 * A list of ManagedDeviceWindowsOperatingSystemImages
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/managedDeviceWindowsOSImages']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/managedDeviceWindowsOSImages']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/managedDeviceWindowsOSImages',
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
 * `GET /deviceManagement/managedDeviceWindowsOSImages/{managedDeviceWindowsOperatingSystemImage-id}`
 *
 * A list of ManagedDeviceWindowsOperatingSystemImages
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/managedDeviceWindowsOSImages/{managedDeviceWindowsOperatingSystemImage-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/managedDeviceWindowsOSImages/{managedDeviceWindowsOperatingSystemImage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/managedDeviceWindowsOSImages/{managedDeviceWindowsOperatingSystemImage-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedDeviceWindowsOperatingSystemImage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/managedDeviceWindowsOSImages/{managedDeviceWindowsOperatingSystemImage-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/managedDeviceWindowsOSImages/{managedDeviceWindowsOperatingSystemImage-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/managedDeviceWindowsOSImages/{managedDeviceWindowsOperatingSystemImage-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/managedDeviceWindowsOSImages/{managedDeviceWindowsOperatingSystemImage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/managedDeviceWindowsOSImages/{managedDeviceWindowsOperatingSystemImage-id}',
    paramDefs: [{ name: 'managedDeviceWindowsOperatingSystemImage-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/managedDeviceWindowsOSImages`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/managedDeviceWindowsOSImages']['body'],
  params?: IEndpoints['POST /deviceManagement/managedDeviceWindowsOSImages']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/managedDeviceWindowsOSImages']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/managedDeviceWindowsOSImages',
    paramDefs: [],
    params,
    body,
  };
}
