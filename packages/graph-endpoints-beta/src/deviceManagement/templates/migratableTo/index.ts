export * as categories from './categories';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}',
    'delete'
  >;
  'GET /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo',
    'get'
  >;
  'GET /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}',
    'get'
  >;
  'PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}',
    'patch'
  >;
  'POST /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo',
    'post'
  >;
  'POST /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/createInstance': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/createInstance',
    'post'
  >;
  'POST /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/importOffice365DeviceConfigurationPolicies': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/importOffice365DeviceConfigurationPolicies',
    'post'
  >;
  'GET /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/settings': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/settings',
    'get'
  >;
  'POST /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/settings': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/settings',
    'post'
  >;
  'GET /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/settings/{deviceManagementSettingInstance-id}': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/settings/{deviceManagementSettingInstance-id}',
    'get'
  >;
  'PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/settings/{deviceManagementSettingInstance-id}': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/settings/{deviceManagementSettingInstance-id}',
    'patch'
  >;
  'DELETE /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/settings/{deviceManagementSettingInstance-id}': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/settings/{deviceManagementSettingInstance-id}',
    'delete'
  >;
}

/**
 * `DELETE /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}',
    paramDefs: {
      header: ['If-Match'],
      path: ['deviceManagementTemplate-id', 'deviceManagementTemplate-id1'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo`
 *
 * Collection of templates this template can migrate to
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo',
    paramDefs: {
      path: ['deviceManagementTemplate-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}`
 *
 * Collection of templates this template can migrate to
 */
export function get$1(
  params?: IEndpoints['GET /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}',
    paramDefs: {
      path: ['deviceManagementTemplate-id', 'deviceManagementTemplate-id1'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}',
    paramDefs: {
      path: ['deviceManagementTemplate-id', 'deviceManagementTemplate-id1'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo']['body'],
  params?: IEndpoints['POST /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo',
    paramDefs: {
      path: ['deviceManagementTemplate-id'],
    },
    params,
    body,
  };
}

export const createInstance = {
  /**
   * `POST /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/createInstance`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/createInstance']['body'],
    params?: IEndpoints['POST /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/createInstance']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/createInstance']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/createInstance',
      paramDefs: {
        path: ['deviceManagementTemplate-id', 'deviceManagementTemplate-id1'],
      },
      params,
      body,
    };
  },
};

export const importOffice365DeviceConfigurationPolicies = {
  /**
   * `POST /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/importOffice365DeviceConfigurationPolicies`
   *
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/importOffice365DeviceConfigurationPolicies']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/importOffice365DeviceConfigurationPolicies']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/importOffice365DeviceConfigurationPolicies',
      paramDefs: {
        path: ['deviceManagementTemplate-id'],
      },
      params,
    };
  },
};

export const settings = {
  /**
   * `GET /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/settings`
   *
   * Collection of all settings this template has
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/settings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/settings']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/settings',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['deviceManagementTemplate-id', 'deviceManagementTemplate-id1'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/settings`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/settings']['body'],
    params?: IEndpoints['POST /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/settings']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/settings']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/settings',
      paramDefs: {
        path: ['deviceManagementTemplate-id', 'deviceManagementTemplate-id1'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/settings/{deviceManagementSettingInstance-id}`
   *
   * Collection of all settings this template has
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/settings/{deviceManagementSettingInstance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/settings/{deviceManagementSettingInstance-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/settings/{deviceManagementSettingInstance-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'deviceManagementTemplate-id',
          'deviceManagementTemplate-id1',
          'deviceManagementSettingInstance-id',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/settings/{deviceManagementSettingInstance-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/settings/{deviceManagementSettingInstance-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/settings/{deviceManagementSettingInstance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/settings/{deviceManagementSettingInstance-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/settings/{deviceManagementSettingInstance-id}',
      paramDefs: {
        path: [
          'deviceManagementTemplate-id',
          'deviceManagementTemplate-id1',
          'deviceManagementSettingInstance-id',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/settings/{deviceManagementSettingInstance-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/settings/{deviceManagementSettingInstance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/settings/{deviceManagementSettingInstance-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/settings/{deviceManagementSettingInstance-id}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'deviceManagementTemplate-id',
          'deviceManagementTemplate-id1',
          'deviceManagementSettingInstance-id',
        ],
      },
      params,
    };
  },
};
