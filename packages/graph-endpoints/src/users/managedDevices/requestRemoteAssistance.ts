import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/requestRemoteAssistance': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/requestRemoteAssistance',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/managedDevices/{managedDevice-id}/requestRemoteAssistance`
 *
 * Request remote assistance
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/requestRemoteAssistance']['body'],
  params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/requestRemoteAssistance']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/requestRemoteAssistance']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/requestRemoteAssistance',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
    body,
  };
}
