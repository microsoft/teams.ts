import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}': Operation<
    '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}',
    'delete'
  >;
  'GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings': Operation<
    '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings',
    'get'
  >;
  'GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}': Operation<
    '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}',
    'get'
  >;
  'PATCH /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}': Operation<
    '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}',
    'patch'
  >;
  'POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings': Operation<
    '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings',
    'post'
  >;
  'GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}/settingDefinitions': Operation<
    '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}/settingDefinitions',
    'get'
  >;
  'GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}': Operation<
    '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}',
    'get'
  >;
}

/**
 * `DELETE /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['deviceManagementCompliancePolicy-id', 'deviceManagementConfigurationSetting-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings`
 *
 * Policy settings
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings',
    paramDefs: {
      path: ['deviceManagementCompliancePolicy-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}`
 *
 * Policy settings
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}',
    paramDefs: {
      path: ['deviceManagementCompliancePolicy-id', 'deviceManagementConfigurationSetting-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}',
    paramDefs: {
      path: ['deviceManagementCompliancePolicy-id', 'deviceManagementConfigurationSetting-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings']['body'],
  params?: IEndpoints['POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings',
    paramDefs: {
      path: ['deviceManagementCompliancePolicy-id'],
    },
    params,
    body,
  };
}

export const settingDefinitions = {
  /**
   * `GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}/settingDefinitions`
   *
   * List of related Setting Definitions. This property is read-only.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}/settingDefinitions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}/settingDefinitions']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}/settingDefinitions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['deviceManagementCompliancePolicy-id', 'deviceManagementConfigurationSetting-id'],
      },
      params,
    };
  },
  /**
   * `GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}`
   *
   * List of related Setting Definitions. This property is read-only.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'deviceManagementCompliancePolicy-id',
          'deviceManagementConfigurationSetting-id',
          'deviceManagementConfigurationSettingDefinition-id',
        ],
      },
      params,
    };
  },
};
