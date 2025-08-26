import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/windowsInformationProtectionDeviceRegistrations': Operation<
    '/users/{user-id}/windowsInformationProtectionDeviceRegistrations',
    'get'
  >;
  'GET /users/{user-id}/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}': Operation<
    '/users/{user-id}/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/windowsInformationProtectionDeviceRegistrations`
 *
 * Zero or more WIP device registrations that belong to the user.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/windowsInformationProtectionDeviceRegistrations']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/windowsInformationProtectionDeviceRegistrations']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/windowsInformationProtectionDeviceRegistrations',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}`
 *
 * Zero or more WIP device registrations that belong to the user.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'windowsInformationProtectionDeviceRegistration-id', in: 'path' },
    ],
    params,
  };
}
