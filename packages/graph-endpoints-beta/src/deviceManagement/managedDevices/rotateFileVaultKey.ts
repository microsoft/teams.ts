import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/managedDevices/{managedDevice-id}/rotateFileVaultKey': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/rotateFileVaultKey',
    'post'
  >;
}

/**
 * `POST /deviceManagement/managedDevices/{managedDevice-id}/rotateFileVaultKey`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/rotateFileVaultKey']['body'],
  params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/rotateFileVaultKey']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/rotateFileVaultKey']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/rotateFileVaultKey',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
