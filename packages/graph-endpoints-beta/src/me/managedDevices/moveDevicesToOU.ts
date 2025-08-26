import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/managedDevices/moveDevicesToOU': Operation<
    '/me/managedDevices/moveDevicesToOU',
    'post'
  >;
}

/**
 * `POST /me/managedDevices/moveDevicesToOU`
 *
 */
export function create(
  body: IEndpoints['POST /me/managedDevices/moveDevicesToOU']['body'],
  params?: IEndpoints['POST /me/managedDevices/moveDevicesToOU']['parameters']
): EndpointRequest<IEndpoints['POST /me/managedDevices/moveDevicesToOU']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/managedDevices/moveDevicesToOU',
    paramDefs: [],
    params,
    body,
  };
}
