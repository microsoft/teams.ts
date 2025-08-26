import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/triggerConfigurationManagerAction': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/triggerConfigurationManagerAction',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/managedDevices/{managedDevice-id}/triggerConfigurationManagerAction`
 *
 * Trigger action on ConfigurationManager client
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/triggerConfigurationManagerAction']['body'],
  params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/triggerConfigurationManagerAction']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/triggerConfigurationManagerAction']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/triggerConfigurationManagerAction',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
    body,
  };
}
