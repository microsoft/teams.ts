import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /me/removeAllDevicesFromManagement': Operation<
    '/me/removeAllDevicesFromManagement',
    'post'
  >;
}

/**
 * `POST /me/removeAllDevicesFromManagement`
 *
 * Retire all devices from management for this user
 */
export function create(
  body: IEndpoints['POST /me/removeAllDevicesFromManagement']['body'],
  params?: IEndpoints['POST /me/removeAllDevicesFromManagement']['parameters']
): EndpointRequest<IEndpoints['POST /me/removeAllDevicesFromManagement']['response']> {
  return {
    method: 'post',
    path: '/me/removeAllDevicesFromManagement',
    paramDefs: [],
    params,
    body,
  };
}
