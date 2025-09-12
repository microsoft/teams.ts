import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/categories/{deviceManagementSettingCategory-id}': Operation<
    '/deviceManagement/categories/{deviceManagementSettingCategory-id}',
    'delete'
  >;
  'GET /deviceManagement/categories': Operation<'/deviceManagement/categories', 'get'>;
  'GET /deviceManagement/categories/{deviceManagementSettingCategory-id}': Operation<
    '/deviceManagement/categories/{deviceManagementSettingCategory-id}',
    'get'
  >;
  'PATCH /deviceManagement/categories/{deviceManagementSettingCategory-id}': Operation<
    '/deviceManagement/categories/{deviceManagementSettingCategory-id}',
    'patch'
  >;
  'POST /deviceManagement/categories': Operation<'/deviceManagement/categories', 'post'>;
  'GET /deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions': Operation<
    '/deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions',
    'get'
  >;
  'POST /deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions': Operation<
    '/deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions',
    'post'
  >;
  'GET /deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}': Operation<
    '/deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}',
    'get'
  >;
  'PATCH /deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}': Operation<
    '/deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}',
    'patch'
  >;
  'DELETE /deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}': Operation<
    '/deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}',
    'delete'
  >;
}

/**
 * `DELETE /deviceManagement/categories/{deviceManagementSettingCategory-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/categories/{deviceManagementSettingCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/categories/{deviceManagementSettingCategory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/categories/{deviceManagementSettingCategory-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['deviceManagementSettingCategory-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/categories`
 *
 * The available categories
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/categories']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/categories']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/categories',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/categories/{deviceManagementSettingCategory-id}`
 *
 * The available categories
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/categories/{deviceManagementSettingCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/categories/{deviceManagementSettingCategory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/categories/{deviceManagementSettingCategory-id}',
    paramDefs: {
      path: ['deviceManagementSettingCategory-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/categories/{deviceManagementSettingCategory-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/categories/{deviceManagementSettingCategory-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/categories/{deviceManagementSettingCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/categories/{deviceManagementSettingCategory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/categories/{deviceManagementSettingCategory-id}',
    paramDefs: {
      path: ['deviceManagementSettingCategory-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/categories`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/categories']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/categories']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/categories',
    body,
  };
}

export const settingDefinitions = {
  /**
   * `GET /deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions`
   *
   * The setting definitions this category contains
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['deviceManagementSettingCategory-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions']['body'],
    params?: IEndpoints['POST /deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions',
      paramDefs: {
        path: ['deviceManagementSettingCategory-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}`
   *
   * The setting definitions this category contains
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceManagementSettingCategory-id', 'deviceManagementSettingDefinition-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}',
      paramDefs: {
        path: ['deviceManagementSettingCategory-id', 'deviceManagementSettingDefinition-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['deviceManagementSettingCategory-id', 'deviceManagementSettingDefinition-id'],
      },
      params,
    };
  },
};
