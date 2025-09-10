import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/advancedThreatProtectionOnboardingStateSummary': Operation<
    '/deviceManagement/advancedThreatProtectionOnboardingStateSummary',
    'delete'
  >;
  'GET /deviceManagement/advancedThreatProtectionOnboardingStateSummary': Operation<
    '/deviceManagement/advancedThreatProtectionOnboardingStateSummary',
    'get'
  >;
  'PATCH /deviceManagement/advancedThreatProtectionOnboardingStateSummary': Operation<
    '/deviceManagement/advancedThreatProtectionOnboardingStateSummary',
    'patch'
  >;
  'GET /deviceManagement/advancedThreatProtectionOnboardingStateSummary/advancedThreatProtectionOnboardingDeviceSettingStates': Operation<
    '/deviceManagement/advancedThreatProtectionOnboardingStateSummary/advancedThreatProtectionOnboardingDeviceSettingStates',
    'get'
  >;
  'POST /deviceManagement/advancedThreatProtectionOnboardingStateSummary/advancedThreatProtectionOnboardingDeviceSettingStates': Operation<
    '/deviceManagement/advancedThreatProtectionOnboardingStateSummary/advancedThreatProtectionOnboardingDeviceSettingStates',
    'post'
  >;
  'GET /deviceManagement/advancedThreatProtectionOnboardingStateSummary/advancedThreatProtectionOnboardingDeviceSettingStates/{advancedThreatProtectionOnboardingDeviceSettingState-id}': Operation<
    '/deviceManagement/advancedThreatProtectionOnboardingStateSummary/advancedThreatProtectionOnboardingDeviceSettingStates/{advancedThreatProtectionOnboardingDeviceSettingState-id}',
    'get'
  >;
  'PATCH /deviceManagement/advancedThreatProtectionOnboardingStateSummary/advancedThreatProtectionOnboardingDeviceSettingStates/{advancedThreatProtectionOnboardingDeviceSettingState-id}': Operation<
    '/deviceManagement/advancedThreatProtectionOnboardingStateSummary/advancedThreatProtectionOnboardingDeviceSettingStates/{advancedThreatProtectionOnboardingDeviceSettingState-id}',
    'patch'
  >;
  'DELETE /deviceManagement/advancedThreatProtectionOnboardingStateSummary/advancedThreatProtectionOnboardingDeviceSettingStates/{advancedThreatProtectionOnboardingDeviceSettingState-id}': Operation<
    '/deviceManagement/advancedThreatProtectionOnboardingStateSummary/advancedThreatProtectionOnboardingDeviceSettingStates/{advancedThreatProtectionOnboardingDeviceSettingState-id}',
    'delete'
  >;
}

/**
 * `DELETE /deviceManagement/advancedThreatProtectionOnboardingStateSummary`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/advancedThreatProtectionOnboardingStateSummary']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/advancedThreatProtectionOnboardingStateSummary']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/advancedThreatProtectionOnboardingStateSummary',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/advancedThreatProtectionOnboardingStateSummary`
 *
 * The summary state of ATP onboarding state for this account.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/advancedThreatProtectionOnboardingStateSummary']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/advancedThreatProtectionOnboardingStateSummary']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/advancedThreatProtectionOnboardingStateSummary',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/advancedThreatProtectionOnboardingStateSummary`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/advancedThreatProtectionOnboardingStateSummary']['body']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/advancedThreatProtectionOnboardingStateSummary']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/advancedThreatProtectionOnboardingStateSummary',
    body,
  };
}

export const advancedThreatProtectionOnboardingDeviceSettingStates = {
  /**
   * `GET /deviceManagement/advancedThreatProtectionOnboardingStateSummary/advancedThreatProtectionOnboardingDeviceSettingStates`
   *
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/advancedThreatProtectionOnboardingStateSummary/advancedThreatProtectionOnboardingDeviceSettingStates']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/advancedThreatProtectionOnboardingStateSummary/advancedThreatProtectionOnboardingDeviceSettingStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/advancedThreatProtectionOnboardingStateSummary/advancedThreatProtectionOnboardingDeviceSettingStates',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/advancedThreatProtectionOnboardingStateSummary/advancedThreatProtectionOnboardingDeviceSettingStates`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/advancedThreatProtectionOnboardingStateSummary/advancedThreatProtectionOnboardingDeviceSettingStates']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/advancedThreatProtectionOnboardingStateSummary/advancedThreatProtectionOnboardingDeviceSettingStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/advancedThreatProtectionOnboardingStateSummary/advancedThreatProtectionOnboardingDeviceSettingStates',
      body,
    };
  },
  /**
   * `GET /deviceManagement/advancedThreatProtectionOnboardingStateSummary/advancedThreatProtectionOnboardingDeviceSettingStates/{advancedThreatProtectionOnboardingDeviceSettingState-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/advancedThreatProtectionOnboardingStateSummary/advancedThreatProtectionOnboardingDeviceSettingStates/{advancedThreatProtectionOnboardingDeviceSettingState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/advancedThreatProtectionOnboardingStateSummary/advancedThreatProtectionOnboardingDeviceSettingStates/{advancedThreatProtectionOnboardingDeviceSettingState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/advancedThreatProtectionOnboardingStateSummary/advancedThreatProtectionOnboardingDeviceSettingStates/{advancedThreatProtectionOnboardingDeviceSettingState-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['advancedThreatProtectionOnboardingDeviceSettingState-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/advancedThreatProtectionOnboardingStateSummary/advancedThreatProtectionOnboardingDeviceSettingStates/{advancedThreatProtectionOnboardingDeviceSettingState-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/advancedThreatProtectionOnboardingStateSummary/advancedThreatProtectionOnboardingDeviceSettingStates/{advancedThreatProtectionOnboardingDeviceSettingState-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/advancedThreatProtectionOnboardingStateSummary/advancedThreatProtectionOnboardingDeviceSettingStates/{advancedThreatProtectionOnboardingDeviceSettingState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/advancedThreatProtectionOnboardingStateSummary/advancedThreatProtectionOnboardingDeviceSettingStates/{advancedThreatProtectionOnboardingDeviceSettingState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/advancedThreatProtectionOnboardingStateSummary/advancedThreatProtectionOnboardingDeviceSettingStates/{advancedThreatProtectionOnboardingDeviceSettingState-id}',
      paramDefs: {
        path: ['advancedThreatProtectionOnboardingDeviceSettingState-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/advancedThreatProtectionOnboardingStateSummary/advancedThreatProtectionOnboardingDeviceSettingStates/{advancedThreatProtectionOnboardingDeviceSettingState-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/advancedThreatProtectionOnboardingStateSummary/advancedThreatProtectionOnboardingDeviceSettingStates/{advancedThreatProtectionOnboardingDeviceSettingState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/advancedThreatProtectionOnboardingStateSummary/advancedThreatProtectionOnboardingDeviceSettingStates/{advancedThreatProtectionOnboardingDeviceSettingState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/advancedThreatProtectionOnboardingStateSummary/advancedThreatProtectionOnboardingDeviceSettingStates/{advancedThreatProtectionOnboardingDeviceSettingState-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['advancedThreatProtectionOnboardingDeviceSettingState-id'],
      },
      params,
    };
  },
};
