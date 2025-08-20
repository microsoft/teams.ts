import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /me/windowsInformationProtectionDeviceRegistrations': Operation<
    '/me/windowsInformationProtectionDeviceRegistrations',
    'get'
  >;
  'GET /me/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}': Operation<
    '/me/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}',
    'get'
  >;
}

/**
 * `GET /me/windowsInformationProtectionDeviceRegistrations`
 *
 * Zero or more WIP device registrations that belong to the user.
 */
export function list(
  params?: IEndpoints['GET /me/windowsInformationProtectionDeviceRegistrations']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/windowsInformationProtectionDeviceRegistrations']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/windowsInformationProtectionDeviceRegistrations',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /me/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}`
 *
 * Zero or more WIP device registrations that belong to the user.
 */
export function get(
  params?: IEndpoints['GET /me/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'windowsInformationProtectionDeviceRegistration-id', in: 'path' },
    ],
    params,
  };
}
