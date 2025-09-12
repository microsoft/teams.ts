import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}': Operation<
    '/deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}',
    'delete'
  >;
  'GET /deviceManagement/templateSettings': Operation<'/deviceManagement/templateSettings', 'get'>;
  'GET /deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}': Operation<
    '/deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}',
    'get'
  >;
  'PATCH /deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}': Operation<
    '/deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}',
    'patch'
  >;
  'POST /deviceManagement/templateSettings': Operation<
    '/deviceManagement/templateSettings',
    'post'
  >;
  'GET /deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions': Operation<
    '/deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions',
    'get'
  >;
  'POST /deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions': Operation<
    '/deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions',
    'post'
  >;
  'GET /deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}': Operation<
    '/deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}',
    'get'
  >;
  'PATCH /deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}': Operation<
    '/deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}',
    'patch'
  >;
  'DELETE /deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}': Operation<
    '/deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}',
    'delete'
  >;
}

/**
 * `DELETE /deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['deviceManagementConfigurationSettingTemplate-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/templateSettings`
 *
 * List of all TemplateSettings
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/templateSettings']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/templateSettings']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/templateSettings',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}`
 *
 * List of all TemplateSettings
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}',
    paramDefs: {
      path: ['deviceManagementConfigurationSettingTemplate-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}',
    paramDefs: {
      path: ['deviceManagementConfigurationSettingTemplate-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/templateSettings`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/templateSettings']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/templateSettings']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/templateSettings',
    body,
  };
}

export const settingDefinitions = {
  /**
   * `GET /deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions`
   *
   * List of related Setting Definitions
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['deviceManagementConfigurationSettingTemplate-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions']['body'],
    params?: IEndpoints['POST /deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions',
      paramDefs: {
        path: ['deviceManagementConfigurationSettingTemplate-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}`
   *
   * List of related Setting Definitions
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'deviceManagementConfigurationSettingTemplate-id',
          'deviceManagementConfigurationSettingDefinition-id',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}',
      paramDefs: {
        path: [
          'deviceManagementConfigurationSettingTemplate-id',
          'deviceManagementConfigurationSettingDefinition-id',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'deviceManagementConfigurationSettingTemplate-id',
          'deviceManagementConfigurationSettingDefinition-id',
        ],
      },
      params,
    };
  },
};
