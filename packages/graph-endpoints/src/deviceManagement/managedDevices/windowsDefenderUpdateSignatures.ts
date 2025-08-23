import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/managedDevices/{managedDevice-id}/windowsDefenderUpdateSignatures': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/windowsDefenderUpdateSignatures',
    'post'
  >;
}

/**
 * `POST /deviceManagement/managedDevices/{managedDevice-id}/windowsDefenderUpdateSignatures`
 *
 * Not yet documented
 */
export function create(
  body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/windowsDefenderUpdateSignatures']['body'],
  params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/windowsDefenderUpdateSignatures']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/windowsDefenderUpdateSignatures']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/windowsDefenderUpdateSignatures',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
