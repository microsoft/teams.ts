import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/settings/{deviceManagementConfigurationSetting-id}': Operation<
    '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/settings/{deviceManagementConfigurationSetting-id}',
    'delete'
  >;
  'GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/settings': Operation<
    '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/settings',
    'get'
  >;
  'GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/settings/{deviceManagementConfigurationSetting-id}': Operation<
    '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/settings/{deviceManagementConfigurationSetting-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/settings/{deviceManagementConfigurationSetting-id}': Operation<
    '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/settings/{deviceManagementConfigurationSetting-id}',
    'patch'
  >;
  'POST /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/settings': Operation<
    '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/settings',
    'post'
  >;
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
 * `DELETE /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/settings/{deviceManagementConfigurationSetting-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/settings/{deviceManagementConfigurationSetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/settings/{deviceManagementConfigurationSetting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/settings/{deviceManagementConfigurationSetting-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['targetedManagedAppConfiguration-id', 'deviceManagementConfigurationSetting-id'],
    },
    params,
  };
}

/**
 * `GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/settings`
 *
 * List of settings contained in this App Configuration policy
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/settings']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/settings']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/settings',
    paramDefs: {
      path: ['targetedManagedAppConfiguration-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/settings/{deviceManagementConfigurationSetting-id}`
 *
 * List of settings contained in this App Configuration policy
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/settings/{deviceManagementConfigurationSetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/settings/{deviceManagementConfigurationSetting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/settings/{deviceManagementConfigurationSetting-id}',
    paramDefs: {
      path: ['targetedManagedAppConfiguration-id', 'deviceManagementConfigurationSetting-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/settings/{deviceManagementConfigurationSetting-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/settings/{deviceManagementConfigurationSetting-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/settings/{deviceManagementConfigurationSetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/settings/{deviceManagementConfigurationSetting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/settings/{deviceManagementConfigurationSetting-id}',
    paramDefs: {
      path: ['targetedManagedAppConfiguration-id', 'deviceManagementConfigurationSetting-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/settings`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/settings']['body'],
  params?: IEndpoints['POST /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/settings']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/settings']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/settings',
    paramDefs: {
      path: ['targetedManagedAppConfiguration-id'],
    },
    params,
    body,
  };
}

export const settingDefinitions = {
  /**
   * `GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/settings/{deviceManagementConfigurationSetting-id}/settingDefinitions`
   *
   * List of related Setting Definitions. This property is read-only.
   */
  list: function list(
    params?: IEndpoints['GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/settings/{deviceManagementConfigurationSetting-id}/settingDefinitions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/settings/{deviceManagementConfigurationSetting-id}/settingDefinitions']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/settings/{deviceManagementConfigurationSetting-id}/settingDefinitions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['targetedManagedAppConfiguration-id', 'deviceManagementConfigurationSetting-id'],
      },
      params,
    };
  },
  /**
   * `GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/settings/{deviceManagementConfigurationSetting-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}`
   *
   * List of related Setting Definitions. This property is read-only.
   */
  get: function get(
    params?: IEndpoints['GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/settings/{deviceManagementConfigurationSetting-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/settings/{deviceManagementConfigurationSetting-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/settings/{deviceManagementConfigurationSetting-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'targetedManagedAppConfiguration-id',
          'deviceManagementConfigurationSetting-id',
          'deviceManagementConfigurationSettingDefinition-id',
        ],
      },
      params,
    };
  },
};
