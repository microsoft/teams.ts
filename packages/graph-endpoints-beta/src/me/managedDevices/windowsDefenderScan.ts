import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/managedDevices/{managedDevice-id}/windowsDefenderScan': Operation<
    '/me/managedDevices/{managedDevice-id}/windowsDefenderScan',
    'post'
  >;
}

/**
 * `POST /me/managedDevices/{managedDevice-id}/windowsDefenderScan`
 *
 */
export function create(
  body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/windowsDefenderScan']['body'],
  params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/windowsDefenderScan']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/managedDevices/{managedDevice-id}/windowsDefenderScan']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/managedDevices/{managedDevice-id}/windowsDefenderScan',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
