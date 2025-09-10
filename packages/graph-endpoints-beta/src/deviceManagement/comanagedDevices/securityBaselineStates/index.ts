import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}',
    'delete'
  >;
  'GET /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates',
    'get'
  >;
  'GET /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}',
    'get'
  >;
  'PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}',
    'patch'
  >;
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates',
    'post'
  >;
  'GET /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates',
    'get'
  >;
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates',
    'post'
  >;
  'GET /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}',
    'get'
  >;
  'PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}',
    'patch'
  >;
  'DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}',
    'delete'
  >;
}

/**
 * `DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['managedDevice-id', 'securityBaselineState-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates`
 *
 * Security baseline states for this device.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates',
    paramDefs: {
      path: ['managedDevice-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}`
 *
 * Security baseline states for this device.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}',
    paramDefs: {
      path: ['managedDevice-id', 'securityBaselineState-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}',
    paramDefs: {
      path: ['managedDevice-id', 'securityBaselineState-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates']['body'],
  params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates',
    paramDefs: {
      path: ['managedDevice-id'],
    },
    params,
    body,
  };
}

export const settingStates = {
  /**
   * `GET /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates`
   *
   * The security baseline state for different settings for a device
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['managedDevice-id', 'securityBaselineState-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates']['body'],
    params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates',
      paramDefs: {
        path: ['managedDevice-id', 'securityBaselineState-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}`
   *
   * The security baseline state for different settings for a device
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managedDevice-id', 'securityBaselineState-id', 'securityBaselineSettingState-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}',
      paramDefs: {
        path: ['managedDevice-id', 'securityBaselineState-id', 'securityBaselineSettingState-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['managedDevice-id', 'securityBaselineState-id', 'securityBaselineSettingState-id'],
      },
      params,
    };
  },
};
