import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/managedDevices/{managedDevice-id}/shutDown': Operation<
    '/me/managedDevices/{managedDevice-id}/shutDown',
    'post'
  >;
}

/**
 * `POST /me/managedDevices/{managedDevice-id}/shutDown`
 *
 * Shut down device
 */
export function create(
  body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/shutDown']['body'],
  params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/shutDown']['parameters']
): EndpointRequest<IEndpoints['POST /me/managedDevices/{managedDevice-id}/shutDown']['response']> {
  return {
    method: 'post',
    path: '/me/managedDevices/{managedDevice-id}/shutDown',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
