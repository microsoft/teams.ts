import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/pauseConfigurationRefresh': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/pauseConfigurationRefresh',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/managedDevices/{managedDevice-id}/pauseConfigurationRefresh`
 *
 * Initiates a command to pause config refresh for the device.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/pauseConfigurationRefresh']['body'],
  params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/pauseConfigurationRefresh']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/pauseConfigurationRefresh']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/pauseConfigurationRefresh',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
    body,
  };
}
