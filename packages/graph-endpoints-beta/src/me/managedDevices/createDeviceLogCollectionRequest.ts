import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/managedDevices/{managedDevice-id}/createDeviceLogCollectionRequest': Operation<
    '/me/managedDevices/{managedDevice-id}/createDeviceLogCollectionRequest',
    'post'
  >;
}

/**
 * `POST /me/managedDevices/{managedDevice-id}/createDeviceLogCollectionRequest`
 *
 */
export function create(
  body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/createDeviceLogCollectionRequest']['body'],
  params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/createDeviceLogCollectionRequest']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/managedDevices/{managedDevice-id}/createDeviceLogCollectionRequest']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/managedDevices/{managedDevice-id}/createDeviceLogCollectionRequest',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
