import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/managedDevices/executeAction': Operation<
    '/users/{user-id}/managedDevices/executeAction',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/managedDevices/executeAction`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/managedDevices/executeAction']['body'],
  params?: IEndpoints['POST /users/{user-id}/managedDevices/executeAction']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/managedDevices/executeAction']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/managedDevices/executeAction',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
