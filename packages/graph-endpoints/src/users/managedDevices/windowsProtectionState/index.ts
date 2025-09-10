import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState',
    'delete'
  >;
  'GET /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState',
    'get'
  >;
  'PATCH /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState',
    'patch'
  >;
  'GET /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState',
    'get'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState',
    'post'
  >;
  'GET /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}',
    'get'
  >;
  'PATCH /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}',
    'delete'
  >;
}

/**
 * `DELETE /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'managedDevice-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState`
 *
 * The device protection status. This property is read-only.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState',
    paramDefs: {
      path: ['user-id', 'managedDevice-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState',
    paramDefs: {
      path: ['user-id', 'managedDevice-id'],
    },
    params,
    body,
  };
}

export const detectedMalwareState = {
  /**
   * `GET /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState`
   *
   * Device malware list
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'managedDevice-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState']['body'],
    params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState',
      paramDefs: {
        path: ['user-id', 'managedDevice-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}`
   *
   * Device malware list
   */
  get$1: function get$1(
    params?: IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'managedDevice-id', 'windowsDeviceMalwareState-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}',
      paramDefs: {
        path: ['user-id', 'managedDevice-id', 'windowsDeviceMalwareState-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'managedDevice-id', 'windowsDeviceMalwareState-id'],
      },
      params,
    };
  },
};
