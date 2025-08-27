import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /me/wipeManagedAppRegistrationsByAzureAdDeviceId': Operation<
    '/me/wipeManagedAppRegistrationsByAzureAdDeviceId',
    'post'
  >;
}

/**
 * `POST /me/wipeManagedAppRegistrationsByAzureAdDeviceId`
 *
 * Issues a wipe operation on an app registration with specified aad device Id.
 */
export function create(
  body: IEndpoints['POST /me/wipeManagedAppRegistrationsByAzureAdDeviceId']['body'],
  params?: IEndpoints['POST /me/wipeManagedAppRegistrationsByAzureAdDeviceId']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/wipeManagedAppRegistrationsByAzureAdDeviceId']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/wipeManagedAppRegistrationsByAzureAdDeviceId',
    paramDefs: [],
    params,
    body,
  };
}
