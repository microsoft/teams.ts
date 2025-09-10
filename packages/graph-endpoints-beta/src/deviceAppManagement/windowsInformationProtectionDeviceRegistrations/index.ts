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
  'POST /deviceAppManagement/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}/wipe': Operation<
    '/deviceAppManagement/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}/wipe',
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
    paramDefs: {
      header: ['If-Match'],
      path: ['windowsInformationProtectionDeviceRegistration-id'],
    },
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
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    paramDefs: {
      path: ['windowsInformationProtectionDeviceRegistration-id'],
      query: ['$select', '$expand'],
    },
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
    paramDefs: {
      path: ['windowsInformationProtectionDeviceRegistration-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/windowsInformationProtectionDeviceRegistrations`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/windowsInformationProtectionDeviceRegistrations']['body']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/windowsInformationProtectionDeviceRegistrations']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/windowsInformationProtectionDeviceRegistrations',
    body,
  };
}

export const wipe = {
  /**
   * `POST /deviceAppManagement/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}/wipe`
   *
   */
  create: function create(
    params?: IEndpoints['POST /deviceAppManagement/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}/wipe']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceAppManagement/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}/wipe']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceAppManagement/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}/wipe',
      paramDefs: {
        path: ['windowsInformationProtectionDeviceRegistration-id'],
      },
      params,
    };
  },
};
