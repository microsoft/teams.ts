import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState',
    'delete'
  >;
  'GET /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState',
    'get'
  >;
  'PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState',
    'patch'
  >;
  'GET /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState',
    'get'
  >;
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState',
    'post'
  >;
  'GET /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}',
    'get'
  >;
  'PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}',
    'patch'
  >;
  'DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}',
    'delete'
  >;
}

/**
 * `DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState',
    paramDefs: {
      header: ['If-Match'],
      path: ['managedDevice-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState`
 *
 * The device protection status. This property is read-only.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState',
    paramDefs: {
      path: ['managedDevice-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState']['body'],
  params?: IEndpoints['PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState',
    paramDefs: {
      path: ['managedDevice-id'],
    },
    params,
    body,
  };
}

export const detectedMalwareState = {
  /**
   * `GET /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState`
   *
   * Device malware list
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['managedDevice-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState']['body'],
    params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}`
   *
   * Device malware list
   */
  get$1: function get$1(
    params?: IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managedDevice-id', 'windowsDeviceMalwareState-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}',
      paramDefs: {
        path: ['managedDevice-id', 'windowsDeviceMalwareState-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['managedDevice-id', 'windowsDeviceMalwareState-id'],
      },
      params,
    };
  },
};
