import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/removeAllDevicesFromManagement': Operation<
    '/users/{user-id}/removeAllDevicesFromManagement',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/removeAllDevicesFromManagement`
 *
 * Retire all devices from management for this user
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/removeAllDevicesFromManagement']['body'],
  params?: IEndpoints['POST /users/{user-id}/removeAllDevicesFromManagement']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/removeAllDevicesFromManagement']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/removeAllDevicesFromManagement',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
