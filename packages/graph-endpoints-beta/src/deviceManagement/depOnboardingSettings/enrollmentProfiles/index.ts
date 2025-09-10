import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles/{enrollmentProfile-id}': Operation<
    '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles/{enrollmentProfile-id}',
    'delete'
  >;
  'GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles': Operation<
    '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles',
    'get'
  >;
  'GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles/{enrollmentProfile-id}': Operation<
    '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles/{enrollmentProfile-id}',
    'get'
  >;
  'PATCH /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles/{enrollmentProfile-id}': Operation<
    '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles/{enrollmentProfile-id}',
    'patch'
  >;
  'POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles': Operation<
    '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles',
    'post'
  >;
  'POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles/{enrollmentProfile-id}/setDefaultProfile': Operation<
    '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles/{enrollmentProfile-id}/setDefaultProfile',
    'post'
  >;
  'POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles/{enrollmentProfile-id}/updateDeviceProfileAssignment': Operation<
    '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles/{enrollmentProfile-id}/updateDeviceProfileAssignment',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles/{enrollmentProfile-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles/{enrollmentProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles/{enrollmentProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles/{enrollmentProfile-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['depOnboardingSetting-id', 'enrollmentProfile-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles`
 *
 * The enrollment profiles.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles',
    paramDefs: {
      path: ['depOnboardingSetting-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles/{enrollmentProfile-id}`
 *
 * The enrollment profiles.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles/{enrollmentProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles/{enrollmentProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles/{enrollmentProfile-id}',
    paramDefs: {
      path: ['depOnboardingSetting-id', 'enrollmentProfile-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles/{enrollmentProfile-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles/{enrollmentProfile-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles/{enrollmentProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles/{enrollmentProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles/{enrollmentProfile-id}',
    paramDefs: {
      path: ['depOnboardingSetting-id', 'enrollmentProfile-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles']['body'],
  params?: IEndpoints['POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles',
    paramDefs: {
      path: ['depOnboardingSetting-id'],
    },
    params,
    body,
  };
}

export const setDefaultProfile = {
  /**
   * `POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles/{enrollmentProfile-id}/setDefaultProfile`
   *
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles/{enrollmentProfile-id}/setDefaultProfile']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles/{enrollmentProfile-id}/setDefaultProfile']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles/{enrollmentProfile-id}/setDefaultProfile',
      paramDefs: {
        path: ['depOnboardingSetting-id', 'enrollmentProfile-id'],
      },
      params,
    };
  },
};

export const updateDeviceProfileAssignment = {
  /**
   * `POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles/{enrollmentProfile-id}/updateDeviceProfileAssignment`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles/{enrollmentProfile-id}/updateDeviceProfileAssignment']['body'],
    params?: IEndpoints['POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles/{enrollmentProfile-id}/updateDeviceProfileAssignment']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles/{enrollmentProfile-id}/updateDeviceProfileAssignment']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles/{enrollmentProfile-id}/updateDeviceProfileAssignment',
      paramDefs: {
        path: ['depOnboardingSetting-id', 'enrollmentProfile-id'],
      },
      params,
      body,
    };
  },
};
