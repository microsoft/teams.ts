import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/managedDevices/{managedDevice-id}/windowsDefenderUpdateSignatures': Operation<
    '/me/managedDevices/{managedDevice-id}/windowsDefenderUpdateSignatures',
    'post'
  >;
}

/**
 * `POST /me/managedDevices/{managedDevice-id}/windowsDefenderUpdateSignatures`
 *
 * Not yet documented
 */
export function create(
  body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/windowsDefenderUpdateSignatures']['body'],
  params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/windowsDefenderUpdateSignatures']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/managedDevices/{managedDevice-id}/windowsDefenderUpdateSignatures']['response']
> {
  return {
    method: 'post',
    path: '/me/managedDevices/{managedDevice-id}/windowsDefenderUpdateSignatures',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
