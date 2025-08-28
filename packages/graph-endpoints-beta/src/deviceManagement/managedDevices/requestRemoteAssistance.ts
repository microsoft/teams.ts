import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/managedDevices/{managedDevice-id}/requestRemoteAssistance': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/requestRemoteAssistance',
    'post'
  >;
}

/**
 * `POST /deviceManagement/managedDevices/{managedDevice-id}/requestRemoteAssistance`
 *
 * Request remote assistance
 */
export function create(
  body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/requestRemoteAssistance']['body'],
  params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/requestRemoteAssistance']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/requestRemoteAssistance']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/requestRemoteAssistance',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
