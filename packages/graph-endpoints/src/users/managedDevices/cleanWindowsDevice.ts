import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/cleanWindowsDevice': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/cleanWindowsDevice',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/managedDevices/{managedDevice-id}/cleanWindowsDevice`
 *
 * Clean Windows device
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/cleanWindowsDevice']['body'],
  params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/cleanWindowsDevice']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/cleanWindowsDevice']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/cleanWindowsDevice',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
    body,
  };
}
