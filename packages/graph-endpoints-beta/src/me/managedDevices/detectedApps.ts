import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /me/managedDevices/{managedDevice-id}/detectedApps': Operation<
    '/me/managedDevices/{managedDevice-id}/detectedApps',
    'get'
  >;
  'GET /me/managedDevices/{managedDevice-id}/detectedApps/{detectedApp-id}': Operation<
    '/me/managedDevices/{managedDevice-id}/detectedApps/{detectedApp-id}',
    'get'
  >;
}

/**
 * `GET /me/managedDevices/{managedDevice-id}/detectedApps`
 *
 * All applications currently installed on the device
 */
export function list(
  params?: IEndpoints['GET /me/managedDevices/{managedDevice-id}/detectedApps']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/managedDevices/{managedDevice-id}/detectedApps']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/managedDevices/{managedDevice-id}/detectedApps',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/managedDevices/{managedDevice-id}/detectedApps/{detectedApp-id}`
 *
 * All applications currently installed on the device
 */
export function get(
  params?: IEndpoints['GET /me/managedDevices/{managedDevice-id}/detectedApps/{detectedApp-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/managedDevices/{managedDevice-id}/detectedApps/{detectedApp-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/managedDevices/{managedDevice-id}/detectedApps/{detectedApp-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedDevice-id', in: 'path' },
      { name: 'detectedApp-id', in: 'path' },
    ],
    params,
  };
}
