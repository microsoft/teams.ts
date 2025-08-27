import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCategory': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/deviceCategory',
    'delete'
  >;
  'GET /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCategory': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/deviceCategory',
    'get'
  >;
  'PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCategory': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/deviceCategory',
    'patch'
  >;
}

/**
 * `DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCategory`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCategory']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCategory']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/comanagedDevices/{managedDevice-id}/deviceCategory',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCategory`
 *
 * Device category
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCategory']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCategory']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/comanagedDevices/{managedDevice-id}/deviceCategory',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCategory`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCategory']['body'],
  params?: IEndpoints['PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCategory']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCategory']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/comanagedDevices/{managedDevice-id}/deviceCategory',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
