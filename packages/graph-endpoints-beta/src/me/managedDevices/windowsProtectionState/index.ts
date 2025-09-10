import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/managedDevices/{managedDevice-id}/windowsProtectionState': Operation<
    '/me/managedDevices/{managedDevice-id}/windowsProtectionState',
    'delete'
  >;
  'GET /me/managedDevices/{managedDevice-id}/windowsProtectionState': Operation<
    '/me/managedDevices/{managedDevice-id}/windowsProtectionState',
    'get'
  >;
  'PATCH /me/managedDevices/{managedDevice-id}/windowsProtectionState': Operation<
    '/me/managedDevices/{managedDevice-id}/windowsProtectionState',
    'patch'
  >;
  'GET /me/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState': Operation<
    '/me/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState',
    'get'
  >;
  'POST /me/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState': Operation<
    '/me/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState',
    'post'
  >;
  'GET /me/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}': Operation<
    '/me/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}',
    'get'
  >;
  'PATCH /me/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}': Operation<
    '/me/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}',
    'patch'
  >;
  'DELETE /me/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}': Operation<
    '/me/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}',
    'delete'
  >;
}

/**
 * `DELETE /me/managedDevices/{managedDevice-id}/windowsProtectionState`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/managedDevices/{managedDevice-id}/windowsProtectionState']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/managedDevices/{managedDevice-id}/windowsProtectionState']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/managedDevices/{managedDevice-id}/windowsProtectionState',
    paramDefs: {
      header: ['If-Match'],
      path: ['managedDevice-id'],
    },
    params,
  };
}

/**
 * `GET /me/managedDevices/{managedDevice-id}/windowsProtectionState`
 *
 * The device protection status. This property is read-only.
 */
export function get(
  params?: IEndpoints['GET /me/managedDevices/{managedDevice-id}/windowsProtectionState']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/managedDevices/{managedDevice-id}/windowsProtectionState']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/managedDevices/{managedDevice-id}/windowsProtectionState',
    paramDefs: {
      path: ['managedDevice-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/managedDevices/{managedDevice-id}/windowsProtectionState`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/managedDevices/{managedDevice-id}/windowsProtectionState']['body'],
  params?: IEndpoints['PATCH /me/managedDevices/{managedDevice-id}/windowsProtectionState']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/managedDevices/{managedDevice-id}/windowsProtectionState']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/managedDevices/{managedDevice-id}/windowsProtectionState',
    paramDefs: {
      path: ['managedDevice-id'],
    },
    params,
    body,
  };
}

export const detectedMalwareState = {
  /**
   * `GET /me/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState`
   *
   * Device malware list
   */
  get: function get(
    params?: IEndpoints['GET /me/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['managedDevice-id'],
      },
      params,
    };
  },
  /**
   * `POST /me/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState']['body'],
    params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /me/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}`
   *
   * Device malware list
   */
  get$1: function get$1(
    params?: IEndpoints['GET /me/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managedDevice-id', 'windowsDeviceMalwareState-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}']['body'],
    params?: IEndpoints['PATCH /me/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}',
      paramDefs: {
        path: ['managedDevice-id', 'windowsDeviceMalwareState-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['managedDevice-id', 'windowsDeviceMalwareState-id'],
      },
      params,
    };
  },
};
