import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState',
    'delete'
  >;
  'GET /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState',
    'get'
  >;
  'PATCH /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState',
    'patch'
  >;
  'GET /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState',
    'get'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState',
    'post'
  >;
  'GET /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}',
    'get'
  >;
  'PATCH /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}',
    'patch'
  >;
  'DELETE /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}',
    'delete'
  >;
}

/**
 * `DELETE /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState',
    paramDefs: {
      header: ['If-Match'],
      path: ['managedDevice-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState`
 *
 * The device protection status. This property is read-only.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState',
    paramDefs: {
      path: ['managedDevice-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState']['body'],
  params?: IEndpoints['PATCH /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState',
    paramDefs: {
      path: ['managedDevice-id'],
    },
    params,
    body,
  };
}

export const detectedMalwareState = {
  /**
   * `GET /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState`
   *
   * Device malware list
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['managedDevice-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState']['body'],
    params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState']['response']
  > {
    return {
      method: 'post',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}`
   *
   * Device malware list
   */
  get$1: function get$1(
    params?: IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managedDevice-id', 'windowsDeviceMalwareState-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}',
      paramDefs: {
        path: ['managedDevice-id', 'windowsDeviceMalwareState-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['managedDevice-id', 'windowsDeviceMalwareState-id'],
      },
      params,
    };
  },
};
