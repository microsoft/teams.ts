import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/managedDevices/{managedDevice-id}/detectedApps': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/detectedApps',
    'get'
  >;
  'GET /users/{user-id}/managedDevices/{managedDevice-id}/detectedApps/{detectedApp-id}': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/detectedApps/{detectedApp-id}',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/managedDevices/{managedDevice-id}/detectedApps`
 *
 * All applications currently installed on the device
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/detectedApps']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/detectedApps']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/detectedApps',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/managedDevices/{managedDevice-id}/detectedApps/{detectedApp-id}`
 *
 * All applications currently installed on the device
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/detectedApps/{detectedApp-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/detectedApps/{detectedApp-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/detectedApps/{detectedApp-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
      { name: 'detectedApp-id', in: 'path' },
    ],
    params,
  };
}
