import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/managedDevices/{managedDevice-id}/createDeviceLogCollectionRequest': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/createDeviceLogCollectionRequest',
    'post'
  >;
}

/**
 * `POST /deviceManagement/managedDevices/{managedDevice-id}/createDeviceLogCollectionRequest`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/createDeviceLogCollectionRequest']['body'],
  params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/createDeviceLogCollectionRequest']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/createDeviceLogCollectionRequest']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/createDeviceLogCollectionRequest',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
