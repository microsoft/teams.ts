import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/managedDevices/{managedDevice-id}/reenable': Operation<
    '/me/managedDevices/{managedDevice-id}/reenable',
    'post'
  >;
}

/**
 * `POST /me/managedDevices/{managedDevice-id}/reenable`
 *
 */
export function create(
  body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/reenable']['body'],
  params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/reenable']['parameters']
): EndpointRequest<IEndpoints['POST /me/managedDevices/{managedDevice-id}/reenable']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/managedDevices/{managedDevice-id}/reenable',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
