import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}': Operation<
    '/deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}',
    'delete'
  >;
  'GET /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates': Operation<
    '/deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates',
    'get'
  >;
  'GET /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}': Operation<
    '/deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}',
    'get'
  >;
  'PATCH /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}': Operation<
    '/deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}',
    'patch'
  >;
  'POST /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates': Operation<
    '/deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates',
    'post'
  >;
  'GET /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions': Operation<
    '/deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions',
    'get'
  >;
  'POST /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions': Operation<
    '/deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions',
    'post'
  >;
  'GET /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}': Operation<
    '/deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}',
    'get'
  >;
  'PATCH /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}': Operation<
    '/deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}',
    'patch'
  >;
  'DELETE /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}': Operation<
    '/deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}',
    'delete'
  >;
}

/**
 * `DELETE /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}',
    paramDefs: {
      header: ['If-Match'],
      path: [
        'deviceManagementConfigurationPolicyTemplate-id',
        'deviceManagementConfigurationSettingTemplate-id',
      ],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates`
 *
 * Setting templates
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates',
    paramDefs: {
      path: ['deviceManagementConfigurationPolicyTemplate-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}`
 *
 * Setting templates
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}',
    paramDefs: {
      path: [
        'deviceManagementConfigurationPolicyTemplate-id',
        'deviceManagementConfigurationSettingTemplate-id',
      ],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}',
    paramDefs: {
      path: [
        'deviceManagementConfigurationPolicyTemplate-id',
        'deviceManagementConfigurationSettingTemplate-id',
      ],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates']['body'],
  params?: IEndpoints['POST /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates',
    paramDefs: {
      path: ['deviceManagementConfigurationPolicyTemplate-id'],
    },
    params,
    body,
  };
}

export const settingDefinitions = {
  /**
   * `GET /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions`
   *
   * List of related Setting Definitions
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: [
          'deviceManagementConfigurationPolicyTemplate-id',
          'deviceManagementConfigurationSettingTemplate-id',
        ],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions']['body'],
    params?: IEndpoints['POST /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions',
      paramDefs: {
        path: [
          'deviceManagementConfigurationPolicyTemplate-id',
          'deviceManagementConfigurationSettingTemplate-id',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}`
   *
   * List of related Setting Definitions
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'deviceManagementConfigurationPolicyTemplate-id',
          'deviceManagementConfigurationSettingTemplate-id',
          'deviceManagementConfigurationSettingDefinition-id',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}',
      paramDefs: {
        path: [
          'deviceManagementConfigurationPolicyTemplate-id',
          'deviceManagementConfigurationSettingTemplate-id',
          'deviceManagementConfigurationSettingDefinition-id',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'deviceManagementConfigurationPolicyTemplate-id',
          'deviceManagementConfigurationSettingTemplate-id',
          'deviceManagementConfigurationSettingDefinition-id',
        ],
      },
      params,
    };
  },
};
