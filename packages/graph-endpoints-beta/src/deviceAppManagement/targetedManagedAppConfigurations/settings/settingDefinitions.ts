import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/settings/{deviceManagementConfigurationSetting-id}/settingDefinitions': Operation<
    '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/settings/{deviceManagementConfigurationSetting-id}/settingDefinitions',
    'get'
  >;
  'GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/settings/{deviceManagementConfigurationSetting-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}': Operation<
    '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/settings/{deviceManagementConfigurationSetting-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}',
    'get'
  >;
}

/**
 * `GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/settings/{deviceManagementConfigurationSetting-id}/settingDefinitions`
 *
 * List of related Setting Definitions. This property is read-only.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/settings/{deviceManagementConfigurationSetting-id}/settingDefinitions']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/settings/{deviceManagementConfigurationSetting-id}/settingDefinitions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/settings/{deviceManagementConfigurationSetting-id}/settingDefinitions',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'targetedManagedAppConfiguration-id', in: 'path' },
      { name: 'deviceManagementConfigurationSetting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/settings/{deviceManagementConfigurationSetting-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}`
 *
 * List of related Setting Definitions. This property is read-only.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/settings/{deviceManagementConfigurationSetting-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/settings/{deviceManagementConfigurationSetting-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/settings/{deviceManagementConfigurationSetting-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'targetedManagedAppConfiguration-id', in: 'path' },
      { name: 'deviceManagementConfigurationSetting-id', in: 'path' },
      { name: 'deviceManagementConfigurationSettingDefinition-id', in: 'path' },
    ],
    params,
  };
}
