import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/managedDevices/{managedDevice-id}/triggerConfigurationManagerAction': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/triggerConfigurationManagerAction',
    'post'
  >;
}

/**
 * `POST /deviceManagement/managedDevices/{managedDevice-id}/triggerConfigurationManagerAction`
 *
 * Trigger action on ConfigurationManager client
 */
export function create(
  body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/triggerConfigurationManagerAction']['body'],
  params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/triggerConfigurationManagerAction']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/triggerConfigurationManagerAction']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/triggerConfigurationManagerAction',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
