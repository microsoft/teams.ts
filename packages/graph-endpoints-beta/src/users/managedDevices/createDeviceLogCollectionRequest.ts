import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/createDeviceLogCollectionRequest': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/createDeviceLogCollectionRequest',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/managedDevices/{managedDevice-id}/createDeviceLogCollectionRequest`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/createDeviceLogCollectionRequest']['body'],
  params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/createDeviceLogCollectionRequest']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/createDeviceLogCollectionRequest']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/createDeviceLogCollectionRequest',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
    body,
  };
}
