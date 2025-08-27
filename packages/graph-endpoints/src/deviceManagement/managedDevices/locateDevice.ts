import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/managedDevices/{managedDevice-id}/locateDevice': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/locateDevice',
    'post'
  >;
}

/**
 * `POST /deviceManagement/managedDevices/{managedDevice-id}/locateDevice`
 *
 * Locate a device
 */
export function create(
  body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/locateDevice']['body'],
  params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/locateDevice']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/locateDevice']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/locateDevice',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
