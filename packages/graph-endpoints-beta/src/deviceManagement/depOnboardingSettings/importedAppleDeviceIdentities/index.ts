import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/{importedAppleDeviceIdentity-id}': Operation<
    '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/{importedAppleDeviceIdentity-id}',
    'delete'
  >;
  'GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities': Operation<
    '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities',
    'get'
  >;
  'GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/{importedAppleDeviceIdentity-id}': Operation<
    '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/{importedAppleDeviceIdentity-id}',
    'get'
  >;
  'PATCH /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/{importedAppleDeviceIdentity-id}': Operation<
    '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/{importedAppleDeviceIdentity-id}',
    'patch'
  >;
  'POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities': Operation<
    '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities',
    'post'
  >;
  'POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/importAppleDeviceIdentityList': Operation<
    '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/importAppleDeviceIdentityList',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/{importedAppleDeviceIdentity-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/{importedAppleDeviceIdentity-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/{importedAppleDeviceIdentity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/{importedAppleDeviceIdentity-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['depOnboardingSetting-id', 'importedAppleDeviceIdentity-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities`
 *
 * The imported Apple device identities.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities',
    paramDefs: {
      path: ['depOnboardingSetting-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/{importedAppleDeviceIdentity-id}`
 *
 * The imported Apple device identities.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/{importedAppleDeviceIdentity-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/{importedAppleDeviceIdentity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/{importedAppleDeviceIdentity-id}',
    paramDefs: {
      path: ['depOnboardingSetting-id', 'importedAppleDeviceIdentity-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/{importedAppleDeviceIdentity-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/{importedAppleDeviceIdentity-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/{importedAppleDeviceIdentity-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/{importedAppleDeviceIdentity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/{importedAppleDeviceIdentity-id}',
    paramDefs: {
      path: ['depOnboardingSetting-id', 'importedAppleDeviceIdentity-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities']['body'],
  params?: IEndpoints['POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities',
    paramDefs: {
      path: ['depOnboardingSetting-id'],
    },
    params,
    body,
  };
}

export const importAppleDeviceIdentityList = {
  /**
   * `POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/importAppleDeviceIdentityList`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/importAppleDeviceIdentityList']['body'],
    params?: IEndpoints['POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/importAppleDeviceIdentityList']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/importAppleDeviceIdentityList']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/importAppleDeviceIdentityList',
      paramDefs: {
        path: ['depOnboardingSetting-id'],
      },
      params,
      body,
    };
  },
};
