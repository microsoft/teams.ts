import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/wipeManagedAppRegistrationsByDeviceTag': Operation<
    '/users/{user-id}/wipeManagedAppRegistrationsByDeviceTag',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/wipeManagedAppRegistrationsByDeviceTag`
 *
 * Issues a wipe operation on an app registration with specified device tag.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/wipeManagedAppRegistrationsByDeviceTag']['body'],
  params?: IEndpoints['POST /users/{user-id}/wipeManagedAppRegistrationsByDeviceTag']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/wipeManagedAppRegistrationsByDeviceTag']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/wipeManagedAppRegistrationsByDeviceTag',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
