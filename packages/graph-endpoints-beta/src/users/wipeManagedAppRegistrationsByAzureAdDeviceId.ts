import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/wipeManagedAppRegistrationsByAzureAdDeviceId': Operation<
    '/users/{user-id}/wipeManagedAppRegistrationsByAzureAdDeviceId',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/wipeManagedAppRegistrationsByAzureAdDeviceId`
 *
 * Issues a wipe operation on an app registration with specified aad device Id.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/wipeManagedAppRegistrationsByAzureAdDeviceId']['body'],
  params?: IEndpoints['POST /users/{user-id}/wipeManagedAppRegistrationsByAzureAdDeviceId']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/wipeManagedAppRegistrationsByAzureAdDeviceId']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/wipeManagedAppRegistrationsByAzureAdDeviceId',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
