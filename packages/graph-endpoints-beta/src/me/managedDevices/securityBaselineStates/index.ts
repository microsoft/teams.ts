import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}': Operation<
    '/me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}',
    'delete'
  >;
  'GET /me/managedDevices/{managedDevice-id}/securityBaselineStates': Operation<
    '/me/managedDevices/{managedDevice-id}/securityBaselineStates',
    'get'
  >;
  'GET /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}': Operation<
    '/me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}',
    'get'
  >;
  'PATCH /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}': Operation<
    '/me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}',
    'patch'
  >;
  'POST /me/managedDevices/{managedDevice-id}/securityBaselineStates': Operation<
    '/me/managedDevices/{managedDevice-id}/securityBaselineStates',
    'post'
  >;
  'GET /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates': Operation<
    '/me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates',
    'get'
  >;
  'POST /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates': Operation<
    '/me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates',
    'post'
  >;
  'GET /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}': Operation<
    '/me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}',
    'get'
  >;
  'PATCH /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}': Operation<
    '/me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}',
    'patch'
  >;
  'DELETE /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}': Operation<
    '/me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}',
    'delete'
  >;
}

/**
 * `DELETE /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['managedDevice-id', 'securityBaselineState-id'],
    },
    params,
  };
}

/**
 * `GET /me/managedDevices/{managedDevice-id}/securityBaselineStates`
 *
 * Security baseline states for this device.
 */
export function list(
  params?: IEndpoints['GET /me/managedDevices/{managedDevice-id}/securityBaselineStates']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/managedDevices/{managedDevice-id}/securityBaselineStates']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/managedDevices/{managedDevice-id}/securityBaselineStates',
    paramDefs: {
      path: ['managedDevice-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}`
 *
 * Security baseline states for this device.
 */
export function get(
  params?: IEndpoints['GET /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}',
    paramDefs: {
      path: ['managedDevice-id', 'securityBaselineState-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}']['body'],
  params?: IEndpoints['PATCH /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}',
    paramDefs: {
      path: ['managedDevice-id', 'securityBaselineState-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/managedDevices/{managedDevice-id}/securityBaselineStates`
 *
 */
export function create(
  body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/securityBaselineStates']['body'],
  params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/securityBaselineStates']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/managedDevices/{managedDevice-id}/securityBaselineStates']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/managedDevices/{managedDevice-id}/securityBaselineStates',
    paramDefs: {
      path: ['managedDevice-id'],
    },
    params,
    body,
  };
}

export const settingStates = {
  /**
   * `GET /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates`
   *
   * The security baseline state for different settings for a device
   */
  list: function list(
    params?: IEndpoints['GET /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['managedDevice-id', 'securityBaselineState-id'],
      },
      params,
    };
  },
  /**
   * `POST /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates']['body'],
    params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates',
      paramDefs: {
        path: ['managedDevice-id', 'securityBaselineState-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}`
   *
   * The security baseline state for different settings for a device
   */
  get: function get(
    params?: IEndpoints['GET /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managedDevice-id', 'securityBaselineState-id', 'securityBaselineSettingState-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}']['body'],
    params?: IEndpoints['PATCH /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}',
      paramDefs: {
        path: ['managedDevice-id', 'securityBaselineState-id', 'securityBaselineSettingState-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['managedDevice-id', 'securityBaselineState-id', 'securityBaselineSettingState-id'],
      },
      params,
    };
  },
};
