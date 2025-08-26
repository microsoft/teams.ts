import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/managedDevices/{managedDevice-id}/enrollNowAction': Operation<
    '/me/managedDevices/{managedDevice-id}/enrollNowAction',
    'post'
  >;
}

/**
 * `POST /me/managedDevices/{managedDevice-id}/enrollNowAction`
 *
 * Trigger comanagement enrollment action on ConfigurationManager client
 */
export function create(
  body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/enrollNowAction']['body'],
  params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/enrollNowAction']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/managedDevices/{managedDevice-id}/enrollNowAction']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/managedDevices/{managedDevice-id}/enrollNowAction',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
