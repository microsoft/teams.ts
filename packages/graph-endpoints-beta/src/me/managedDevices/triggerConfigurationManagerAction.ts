import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/managedDevices/{managedDevice-id}/triggerConfigurationManagerAction': Operation<
    '/me/managedDevices/{managedDevice-id}/triggerConfigurationManagerAction',
    'post'
  >;
}

/**
 * `POST /me/managedDevices/{managedDevice-id}/triggerConfigurationManagerAction`
 *
 * Trigger action on ConfigurationManager client
 */
export function create(
  body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/triggerConfigurationManagerAction']['body'],
  params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/triggerConfigurationManagerAction']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/managedDevices/{managedDevice-id}/triggerConfigurationManagerAction']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/managedDevices/{managedDevice-id}/triggerConfigurationManagerAction',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
