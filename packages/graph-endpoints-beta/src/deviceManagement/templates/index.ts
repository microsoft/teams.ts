export * as categories from './categories';
export * as migratableTo from './migratableTo';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/templates/{deviceManagementTemplate-id}': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}',
    'delete'
  >;
  'GET /deviceManagement/templates': Operation<'/deviceManagement/templates', 'get'>;
  'GET /deviceManagement/templates/{deviceManagementTemplate-id}': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}',
    'get'
  >;
  'PATCH /deviceManagement/templates/{deviceManagementTemplate-id}': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}',
    'patch'
  >;
  'POST /deviceManagement/templates': Operation<'/deviceManagement/templates', 'post'>;
  'POST /deviceManagement/templates/{deviceManagementTemplate-id}/createInstance': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/createInstance',
    'post'
  >;
  'POST /deviceManagement/templates/importOffice365DeviceConfigurationPolicies': Operation<
    '/deviceManagement/templates/importOffice365DeviceConfigurationPolicies',
    'post'
  >;
  'GET /deviceManagement/templates/{deviceManagementTemplate-id}/settings': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/settings',
    'get'
  >;
  'POST /deviceManagement/templates/{deviceManagementTemplate-id}/settings': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/settings',
    'post'
  >;
  'GET /deviceManagement/templates/{deviceManagementTemplate-id}/settings/{deviceManagementSettingInstance-id}': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/settings/{deviceManagementSettingInstance-id}',
    'get'
  >;
  'PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/settings/{deviceManagementSettingInstance-id}': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/settings/{deviceManagementSettingInstance-id}',
    'patch'
  >;
  'DELETE /deviceManagement/templates/{deviceManagementTemplate-id}/settings/{deviceManagementSettingInstance-id}': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/settings/{deviceManagementSettingInstance-id}',
    'delete'
  >;
}

/**
 * `DELETE /deviceManagement/templates/{deviceManagementTemplate-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/templates/{deviceManagementTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/templates/{deviceManagementTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/templates/{deviceManagementTemplate-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['deviceManagementTemplate-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/templates`
 *
 * The available templates
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/templates']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/templates']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/templates',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/templates/{deviceManagementTemplate-id}`
 *
 * The available templates
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/templates/{deviceManagementTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/templates/{deviceManagementTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/templates/{deviceManagementTemplate-id}',
    paramDefs: {
      path: ['deviceManagementTemplate-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/templates/{deviceManagementTemplate-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/templates/{deviceManagementTemplate-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/templates/{deviceManagementTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/templates/{deviceManagementTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/templates/{deviceManagementTemplate-id}',
    paramDefs: {
      path: ['deviceManagementTemplate-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/templates`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/templates']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/templates']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/templates',
    body,
  };
}

export const createInstance = {
  /**
   * `POST /deviceManagement/templates/{deviceManagementTemplate-id}/createInstance`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/templates/{deviceManagementTemplate-id}/createInstance']['body'],
    params?: IEndpoints['POST /deviceManagement/templates/{deviceManagementTemplate-id}/createInstance']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/templates/{deviceManagementTemplate-id}/createInstance']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/templates/{deviceManagementTemplate-id}/createInstance',
      paramDefs: {
        path: ['deviceManagementTemplate-id'],
      },
      params,
      body,
    };
  },
};

export const importOffice365DeviceConfigurationPolicies = {
  /**
   * `POST /deviceManagement/templates/importOffice365DeviceConfigurationPolicies`
   *
   */
  create: function create(): EndpointRequest<
    IEndpoints['POST /deviceManagement/templates/importOffice365DeviceConfigurationPolicies']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/templates/importOffice365DeviceConfigurationPolicies',
    };
  },
};

export const settings = {
  /**
   * `GET /deviceManagement/templates/{deviceManagementTemplate-id}/settings`
   *
   * Collection of all settings this template has
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/templates/{deviceManagementTemplate-id}/settings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/templates/{deviceManagementTemplate-id}/settings']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/templates/{deviceManagementTemplate-id}/settings',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['deviceManagementTemplate-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/templates/{deviceManagementTemplate-id}/settings`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/templates/{deviceManagementTemplate-id}/settings']['body'],
    params?: IEndpoints['POST /deviceManagement/templates/{deviceManagementTemplate-id}/settings']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/templates/{deviceManagementTemplate-id}/settings']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/templates/{deviceManagementTemplate-id}/settings',
      paramDefs: {
        path: ['deviceManagementTemplate-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/templates/{deviceManagementTemplate-id}/settings/{deviceManagementSettingInstance-id}`
   *
   * Collection of all settings this template has
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/templates/{deviceManagementTemplate-id}/settings/{deviceManagementSettingInstance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/templates/{deviceManagementTemplate-id}/settings/{deviceManagementSettingInstance-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/templates/{deviceManagementTemplate-id}/settings/{deviceManagementSettingInstance-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceManagementTemplate-id', 'deviceManagementSettingInstance-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/settings/{deviceManagementSettingInstance-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/settings/{deviceManagementSettingInstance-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/settings/{deviceManagementSettingInstance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/settings/{deviceManagementSettingInstance-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/templates/{deviceManagementTemplate-id}/settings/{deviceManagementSettingInstance-id}',
      paramDefs: {
        path: ['deviceManagementTemplate-id', 'deviceManagementSettingInstance-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/templates/{deviceManagementTemplate-id}/settings/{deviceManagementSettingInstance-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/templates/{deviceManagementTemplate-id}/settings/{deviceManagementSettingInstance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/templates/{deviceManagementTemplate-id}/settings/{deviceManagementSettingInstance-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/templates/{deviceManagementTemplate-id}/settings/{deviceManagementSettingInstance-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['deviceManagementTemplate-id', 'deviceManagementSettingInstance-id'],
      },
      params,
    };
  },
};
