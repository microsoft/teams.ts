import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}',
    'delete'
  >;
  'GET /deviceManagement/templates/{deviceManagementTemplate-id}/categories': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/categories',
    'get'
  >;
  'GET /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}',
    'get'
  >;
  'PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}',
    'patch'
  >;
  'POST /deviceManagement/templates/{deviceManagementTemplate-id}/categories': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/categories',
    'post'
  >;
  'GET /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings',
    'get'
  >;
  'POST /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings',
    'post'
  >;
  'GET /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings/{deviceManagementSettingInstance-id}': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings/{deviceManagementSettingInstance-id}',
    'get'
  >;
  'PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings/{deviceManagementSettingInstance-id}': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings/{deviceManagementSettingInstance-id}',
    'patch'
  >;
  'DELETE /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings/{deviceManagementSettingInstance-id}': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings/{deviceManagementSettingInstance-id}',
    'delete'
  >;
  'GET /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/settingDefinitions': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/settingDefinitions',
    'get'
  >;
  'POST /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/settingDefinitions': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/settingDefinitions',
    'post'
  >;
  'GET /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}',
    'get'
  >;
  'PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}',
    'patch'
  >;
  'DELETE /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}',
    'delete'
  >;
}

/**
 * `DELETE /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['deviceManagementTemplate-id', 'deviceManagementTemplateSettingCategory-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/templates/{deviceManagementTemplate-id}/categories`
 *
 * Collection of setting categories within the template
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/templates/{deviceManagementTemplate-id}/categories']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/templates/{deviceManagementTemplate-id}/categories']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/templates/{deviceManagementTemplate-id}/categories',
    paramDefs: {
      path: ['deviceManagementTemplate-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}`
 *
 * Collection of setting categories within the template
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}',
    paramDefs: {
      path: ['deviceManagementTemplate-id', 'deviceManagementTemplateSettingCategory-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}',
    paramDefs: {
      path: ['deviceManagementTemplate-id', 'deviceManagementTemplateSettingCategory-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/templates/{deviceManagementTemplate-id}/categories`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/templates/{deviceManagementTemplate-id}/categories']['body'],
  params?: IEndpoints['POST /deviceManagement/templates/{deviceManagementTemplate-id}/categories']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/templates/{deviceManagementTemplate-id}/categories']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/templates/{deviceManagementTemplate-id}/categories',
    paramDefs: {
      path: ['deviceManagementTemplate-id'],
    },
    params,
    body,
  };
}

export const recommendedSettings = {
  /**
   * `GET /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings`
   *
   * The settings this category contains
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['deviceManagementTemplate-id', 'deviceManagementTemplateSettingCategory-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings']['body'],
    params?: IEndpoints['POST /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings',
      paramDefs: {
        path: ['deviceManagementTemplate-id', 'deviceManagementTemplateSettingCategory-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings/{deviceManagementSettingInstance-id}`
   *
   * The settings this category contains
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings/{deviceManagementSettingInstance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings/{deviceManagementSettingInstance-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings/{deviceManagementSettingInstance-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'deviceManagementTemplate-id',
          'deviceManagementTemplateSettingCategory-id',
          'deviceManagementSettingInstance-id',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings/{deviceManagementSettingInstance-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings/{deviceManagementSettingInstance-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings/{deviceManagementSettingInstance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings/{deviceManagementSettingInstance-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings/{deviceManagementSettingInstance-id}',
      paramDefs: {
        path: [
          'deviceManagementTemplate-id',
          'deviceManagementTemplateSettingCategory-id',
          'deviceManagementSettingInstance-id',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings/{deviceManagementSettingInstance-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings/{deviceManagementSettingInstance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings/{deviceManagementSettingInstance-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings/{deviceManagementSettingInstance-id}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'deviceManagementTemplate-id',
          'deviceManagementTemplateSettingCategory-id',
          'deviceManagementSettingInstance-id',
        ],
      },
      params,
    };
  },
};

export const settingDefinitions = {
  /**
   * `GET /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/settingDefinitions`
   *
   * The setting definitions this category contains
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/settingDefinitions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/settingDefinitions']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/settingDefinitions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['deviceManagementTemplate-id', 'deviceManagementTemplateSettingCategory-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/settingDefinitions`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/settingDefinitions']['body'],
    params?: IEndpoints['POST /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/settingDefinitions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/settingDefinitions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/settingDefinitions',
      paramDefs: {
        path: ['deviceManagementTemplate-id', 'deviceManagementTemplateSettingCategory-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}`
   *
   * The setting definitions this category contains
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'deviceManagementTemplate-id',
          'deviceManagementTemplateSettingCategory-id',
          'deviceManagementSettingDefinition-id',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}',
      paramDefs: {
        path: [
          'deviceManagementTemplate-id',
          'deviceManagementTemplateSettingCategory-id',
          'deviceManagementSettingDefinition-id',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'deviceManagementTemplate-id',
          'deviceManagementTemplateSettingCategory-id',
          'deviceManagementSettingDefinition-id',
        ],
      },
      params,
    };
  },
};
