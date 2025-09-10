import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceShellScripts/{deviceShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}': Operation<
    '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/deviceRunStates': Operation<
    '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/deviceRunStates',
    'get'
  >;
  'GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}': Operation<
    '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceShellScripts/{deviceShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}': Operation<
    '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}',
    'patch'
  >;
  'POST /deviceManagement/deviceShellScripts/{deviceShellScript-id}/deviceRunStates': Operation<
    '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/deviceRunStates',
    'post'
  >;
  'GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}/managedDevice': Operation<
    '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}/managedDevice',
    'get'
  >;
}

/**
 * `DELETE /deviceManagement/deviceShellScripts/{deviceShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceShellScripts/{deviceShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceShellScripts/{deviceShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['deviceShellScript-id', 'deviceManagementScriptDeviceState-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/deviceRunStates`
 *
 * List of run states for this script across all devices.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/deviceRunStates']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/deviceRunStates']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/deviceRunStates',
    paramDefs: {
      path: ['deviceShellScript-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}`
 *
 * List of run states for this script across all devices.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}',
    paramDefs: {
      path: ['deviceShellScript-id', 'deviceManagementScriptDeviceState-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceShellScripts/{deviceShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceShellScripts/{deviceShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceShellScripts/{deviceShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceShellScripts/{deviceShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}',
    paramDefs: {
      path: ['deviceShellScript-id', 'deviceManagementScriptDeviceState-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/deviceShellScripts/{deviceShellScript-id}/deviceRunStates`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceShellScripts/{deviceShellScript-id}/deviceRunStates']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceShellScripts/{deviceShellScript-id}/deviceRunStates']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceShellScripts/{deviceShellScript-id}/deviceRunStates']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/deviceRunStates',
    paramDefs: {
      path: ['deviceShellScript-id'],
    },
    params,
    body,
  };
}

export const managedDevice = {
  /**
   * `GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}/managedDevice`
   *
   * The managed devices that executes the device management script.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}/managedDevice']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}/managedDevice']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}/managedDevice',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceShellScript-id', 'deviceManagementScriptDeviceState-id'],
      },
      params,
    };
  },
};
