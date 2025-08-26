import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /deviceManagement/detectedApps/{detectedApp-id}/managedDevices': Operation<
    '/deviceManagement/detectedApps/{detectedApp-id}/managedDevices',
    'get'
  >;
  'GET /deviceManagement/detectedApps/{detectedApp-id}/managedDevices/{managedDevice-id}': Operation<
    '/deviceManagement/detectedApps/{detectedApp-id}/managedDevices/{managedDevice-id}',
    'get'
  >;
}

/**
 * `GET /deviceManagement/detectedApps/{detectedApp-id}/managedDevices`
 *
 * The devices that have the discovered application installed
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/detectedApps/{detectedApp-id}/managedDevices']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/detectedApps/{detectedApp-id}/managedDevices']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/detectedApps/{detectedApp-id}/managedDevices',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'detectedApp-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/detectedApps/{detectedApp-id}/managedDevices/{managedDevice-id}`
 *
 * The devices that have the discovered application installed
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/detectedApps/{detectedApp-id}/managedDevices/{managedDevice-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/detectedApps/{detectedApp-id}/managedDevices/{managedDevice-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/detectedApps/{detectedApp-id}/managedDevices/{managedDevice-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'detectedApp-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
  };
}
