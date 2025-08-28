import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /me/wipeManagedAppRegistrationsByDeviceTag': Operation<
    '/me/wipeManagedAppRegistrationsByDeviceTag',
    'post'
  >;
}

/**
 * `POST /me/wipeManagedAppRegistrationsByDeviceTag`
 *
 * Issues a wipe operation on an app registration with specified device tag.
 */
export function create(
  body: IEndpoints['POST /me/wipeManagedAppRegistrationsByDeviceTag']['body'],
  params?: IEndpoints['POST /me/wipeManagedAppRegistrationsByDeviceTag']['parameters']
): EndpointRequest<IEndpoints['POST /me/wipeManagedAppRegistrationsByDeviceTag']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/wipeManagedAppRegistrationsByDeviceTag',
    paramDefs: [],
    params,
    body,
  };
}
