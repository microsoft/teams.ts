import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/managedDevices/moveDevicesToOU': Operation<
    '/users/{user-id}/managedDevices/moveDevicesToOU',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/managedDevices/moveDevicesToOU`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/managedDevices/moveDevicesToOU']['body'],
  params?: IEndpoints['POST /users/{user-id}/managedDevices/moveDevicesToOU']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/managedDevices/moveDevicesToOU']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/managedDevices/moveDevicesToOU',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
