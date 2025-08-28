import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/managedDevices/{managedDevice-id}/deprovision': Operation<
    '/me/managedDevices/{managedDevice-id}/deprovision',
    'post'
  >;
}

/**
 * `POST /me/managedDevices/{managedDevice-id}/deprovision`
 *
 */
export function create(
  body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/deprovision']['body'],
  params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/deprovision']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/managedDevices/{managedDevice-id}/deprovision']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/managedDevices/{managedDevice-id}/deprovision',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
