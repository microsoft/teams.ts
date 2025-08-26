import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /me/wipeManagedAppRegistrationByDeviceTag': Operation<
    '/me/wipeManagedAppRegistrationByDeviceTag',
    'post'
  >;
}

/**
 * `POST /me/wipeManagedAppRegistrationByDeviceTag`
 *
 * Issues a wipe operation on an app registration with specified device tag.
 */
export function create(
  body: IEndpoints['POST /me/wipeManagedAppRegistrationByDeviceTag']['body'],
  params?: IEndpoints['POST /me/wipeManagedAppRegistrationByDeviceTag']['parameters']
): EndpointRequest<IEndpoints['POST /me/wipeManagedAppRegistrationByDeviceTag']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/wipeManagedAppRegistrationByDeviceTag',
    paramDefs: [],
    params,
    body,
  };
}
