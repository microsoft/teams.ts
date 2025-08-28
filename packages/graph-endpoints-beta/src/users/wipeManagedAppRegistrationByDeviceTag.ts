import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/wipeManagedAppRegistrationByDeviceTag': Operation<
    '/users/{user-id}/wipeManagedAppRegistrationByDeviceTag',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/wipeManagedAppRegistrationByDeviceTag`
 *
 * Issues a wipe operation on an app registration with specified device tag.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/wipeManagedAppRegistrationByDeviceTag']['body'],
  params?: IEndpoints['POST /users/{user-id}/wipeManagedAppRegistrationByDeviceTag']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/wipeManagedAppRegistrationByDeviceTag']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/wipeManagedAppRegistrationByDeviceTag',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
