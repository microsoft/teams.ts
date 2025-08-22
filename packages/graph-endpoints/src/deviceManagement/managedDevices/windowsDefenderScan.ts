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
 * Not yet documented
 */
export function create(
  body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/windowsDefenderScan']['body'],
  params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/windowsDefenderScan']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/windowsDefenderScan']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/windowsDefenderScan',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
