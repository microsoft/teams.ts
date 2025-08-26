import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/managedDevices/{managedDevice-id}/pauseConfigurationRefresh': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/pauseConfigurationRefresh',
    'post'
  >;
}

/**
 * `POST /deviceManagement/managedDevices/{managedDevice-id}/pauseConfigurationRefresh`
 *
 * Initiates a command to pause config refresh for the device.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/pauseConfigurationRefresh']['body'],
  params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/pauseConfigurationRefresh']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/pauseConfigurationRefresh']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/pauseConfigurationRefresh',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
