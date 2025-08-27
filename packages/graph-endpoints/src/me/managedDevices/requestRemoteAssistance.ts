import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/managedDevices/{managedDevice-id}/requestRemoteAssistance': Operation<
    '/me/managedDevices/{managedDevice-id}/requestRemoteAssistance',
    'post'
  >;
}

/**
 * `POST /me/managedDevices/{managedDevice-id}/requestRemoteAssistance`
 *
 * Request remote assistance
 */
export function create(
  body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/requestRemoteAssistance']['body'],
  params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/requestRemoteAssistance']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/managedDevices/{managedDevice-id}/requestRemoteAssistance']['response']
> {
  return {
    method: 'post',
    path: '/me/managedDevices/{managedDevice-id}/requestRemoteAssistance',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
