import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/windowsDefenderUpdateSignatures': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/windowsDefenderUpdateSignatures',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/managedDevices/{managedDevice-id}/windowsDefenderUpdateSignatures`
 *
 * Not yet documented
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/windowsDefenderUpdateSignatures']['body'],
  params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/windowsDefenderUpdateSignatures']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/windowsDefenderUpdateSignatures']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/windowsDefenderUpdateSignatures',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
    body,
  };
}
