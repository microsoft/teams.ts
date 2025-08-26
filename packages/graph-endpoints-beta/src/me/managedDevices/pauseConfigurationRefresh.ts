import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/managedDevices/{managedDevice-id}/pauseConfigurationRefresh': Operation<
    '/me/managedDevices/{managedDevice-id}/pauseConfigurationRefresh',
    'post'
  >;
}

/**
 * `POST /me/managedDevices/{managedDevice-id}/pauseConfigurationRefresh`
 *
 * Initiates a command to pause config refresh for the device.
 */
export function create(
  body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/pauseConfigurationRefresh']['body'],
  params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/pauseConfigurationRefresh']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/managedDevices/{managedDevice-id}/pauseConfigurationRefresh']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/managedDevices/{managedDevice-id}/pauseConfigurationRefresh',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
