import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/managedDevices/{managedDevice-id}/syncDevice': Operation<
    '/me/managedDevices/{managedDevice-id}/syncDevice',
    'post'
  >;
}

/**
 * `POST /me/managedDevices/{managedDevice-id}/syncDevice`
 *
 * Not yet documented
 */
export function create(
  body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/syncDevice']['body'],
  params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/syncDevice']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/managedDevices/{managedDevice-id}/syncDevice']['response']
> {
  return {
    method: 'post',
    path: '/me/managedDevices/{managedDevice-id}/syncDevice',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
