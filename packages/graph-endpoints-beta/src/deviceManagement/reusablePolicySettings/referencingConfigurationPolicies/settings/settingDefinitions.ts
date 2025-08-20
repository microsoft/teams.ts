import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}/settingDefinitions': Operation<
    '/deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}/settingDefinitions',
    'get'
  >;
  'GET /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}': Operation<
    '/deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}',
    'get'
  >;
}

/**
 * `GET /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}/settingDefinitions`
 *
 * List of related Setting Definitions. This property is read-only.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}/settingDefinitions']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}/settingDefinitions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}/settingDefinitions',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementReusablePolicySetting-id', in: 'path' },
      { name: 'deviceManagementConfigurationPolicy-id', in: 'path' },
      { name: 'deviceManagementConfigurationSetting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}`
 *
 * List of related Setting Definitions. This property is read-only.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementReusablePolicySetting-id', in: 'path' },
      { name: 'deviceManagementConfigurationPolicy-id', in: 'path' },
      { name: 'deviceManagementConfigurationSetting-id', in: 'path' },
      { name: 'deviceManagementConfigurationSettingDefinition-id', in: 'path' },
    ],
    params,
  };
}
