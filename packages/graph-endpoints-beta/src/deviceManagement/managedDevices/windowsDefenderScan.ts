import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/managedDevices/{managedDevice-id}/windowsDefenderScan': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/windowsDefenderScan',
    'post'
  >;
}

/**
 * `POST /deviceManagement/managedDevices/{managedDevice-id}/windowsDefenderScan`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/windowsDefenderScan']['body'],
  params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/windowsDefenderScan']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/windowsDefenderScan']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/windowsDefenderScan',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
