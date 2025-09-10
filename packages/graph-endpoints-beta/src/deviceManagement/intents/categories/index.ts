import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}',
    'delete'
  >;
  'GET /deviceManagement/intents/{deviceManagementIntent-id}/categories': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/categories',
    'get'
  >;
  'GET /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}',
    'get'
  >;
  'PATCH /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}',
    'patch'
  >;
  'POST /deviceManagement/intents/{deviceManagementIntent-id}/categories': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/categories',
    'post'
  >;
  'GET /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions',
    'get'
  >;
  'POST /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions',
    'post'
  >;
  'GET /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}',
    'get'
  >;
  'PATCH /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}',
    'patch'
  >;
  'DELETE /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}',
    'delete'
  >;
  'GET /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settings': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settings',
    'get'
  >;
  'POST /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settings': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settings',
    'post'
  >;
  'GET /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settings/{deviceManagementSettingInstance-id}': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settings/{deviceManagementSettingInstance-id}',
    'get'
  >;
  'PATCH /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settings/{deviceManagementSettingInstance-id}': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settings/{deviceManagementSettingInstance-id}',
    'patch'
  >;
  'DELETE /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settings/{deviceManagementSettingInstance-id}': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settings/{deviceManagementSettingInstance-id}',
    'delete'
  >;
}

/**
 * `DELETE /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['deviceManagementIntent-id', 'deviceManagementIntentSettingCategory-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/intents/{deviceManagementIntent-id}/categories`
 *
 * Collection of setting categories within the intent
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/categories']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/categories']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/intents/{deviceManagementIntent-id}/categories',
    paramDefs: {
      path: ['deviceManagementIntent-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}`
 *
 * Collection of setting categories within the intent
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}',
    paramDefs: {
      path: ['deviceManagementIntent-id', 'deviceManagementIntentSettingCategory-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}',
    paramDefs: {
      path: ['deviceManagementIntent-id', 'deviceManagementIntentSettingCategory-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/intents/{deviceManagementIntent-id}/categories`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/categories']['body'],
  params?: IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/categories']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/categories']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/intents/{deviceManagementIntent-id}/categories',
    paramDefs: {
      path: ['deviceManagementIntent-id'],
    },
    params,
    body,
  };
}

export const settingDefinitions = {
  /**
   * `GET /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions`
   *
   * The setting definitions this category contains
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['deviceManagementIntent-id', 'deviceManagementIntentSettingCategory-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions']['body'],
    params?: IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions',
      paramDefs: {
        path: ['deviceManagementIntent-id', 'deviceManagementIntentSettingCategory-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}`
   *
   * The setting definitions this category contains
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'deviceManagementIntent-id',
          'deviceManagementIntentSettingCategory-id',
          'deviceManagementSettingDefinition-id',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}',
      paramDefs: {
        path: [
          'deviceManagementIntent-id',
          'deviceManagementIntentSettingCategory-id',
          'deviceManagementSettingDefinition-id',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'deviceManagementIntent-id',
          'deviceManagementIntentSettingCategory-id',
          'deviceManagementSettingDefinition-id',
        ],
      },
      params,
    };
  },
};

export const settings = {
  /**
   * `GET /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settings`
   *
   * The settings this category contains
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settings']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settings',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['deviceManagementIntent-id', 'deviceManagementIntentSettingCategory-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settings`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settings']['body'],
    params?: IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settings']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settings']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settings',
      paramDefs: {
        path: ['deviceManagementIntent-id', 'deviceManagementIntentSettingCategory-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settings/{deviceManagementSettingInstance-id}`
   *
   * The settings this category contains
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settings/{deviceManagementSettingInstance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settings/{deviceManagementSettingInstance-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settings/{deviceManagementSettingInstance-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'deviceManagementIntent-id',
          'deviceManagementIntentSettingCategory-id',
          'deviceManagementSettingInstance-id',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settings/{deviceManagementSettingInstance-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settings/{deviceManagementSettingInstance-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settings/{deviceManagementSettingInstance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settings/{deviceManagementSettingInstance-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settings/{deviceManagementSettingInstance-id}',
      paramDefs: {
        path: [
          'deviceManagementIntent-id',
          'deviceManagementIntentSettingCategory-id',
          'deviceManagementSettingInstance-id',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settings/{deviceManagementSettingInstance-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settings/{deviceManagementSettingInstance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settings/{deviceManagementSettingInstance-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settings/{deviceManagementSettingInstance-id}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'deviceManagementIntent-id',
          'deviceManagementIntentSettingCategory-id',
          'deviceManagementSettingInstance-id',
        ],
      },
      params,
    };
  },
};
