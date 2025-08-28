export * as wipe from './wipe';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}': Operation<
    '/deviceAppManagement/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}',
    'delete'
  >;
  'GET /deviceAppManagement/windowsInformationProtectionDeviceRegistrations': Operation<
    '/deviceAppManagement/windowsInformationProtectionDeviceRegistrations',
    'get'
  >;
  'GET /deviceAppManagement/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}': Operation<
    '/deviceAppManagement/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}': Operation<
    '/deviceAppManagement/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}',
    'patch'
  >;
  'POST /deviceAppManagement/windowsInformationProtectionDeviceRegistrations': Operation<
    '/deviceAppManagement/windowsInformationProtectionDeviceRegistrations',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceAppManagement/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'windowsInformationProtectionDeviceRegistration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/windowsInformationProtectionDeviceRegistrations`
 *
 * Windows information protection device registrations that are not MDM enrolled.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/windowsInformationProtectionDeviceRegistrations']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/windowsInformationProtectionDeviceRegistrations']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/windowsInformationProtectionDeviceRegistrations',
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
 * `GET /deviceAppManagement/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}`
 *
 * Windows information protection device registrations that are not MDM enrolled.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'windowsInformationProtectionDeviceRegistration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceAppManagement/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}',
    paramDefs: [{ name: 'windowsInformationProtectionDeviceRegistration-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/windowsInformationProtectionDeviceRegistrations`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/windowsInformationProtectionDeviceRegistrations']['body'],
  params?: IEndpoints['POST /deviceAppManagement/windowsInformationProtectionDeviceRegistrations']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/windowsInformationProtectionDeviceRegistrations']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/windowsInformationProtectionDeviceRegistrations',
    paramDefs: [],
    params,
    body,
  };
}
