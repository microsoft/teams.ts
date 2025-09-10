import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}': Operation<
    '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates': Operation<
    '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates',
    'get'
  >;
  'GET /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}': Operation<
    '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}': Operation<
    '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}',
    'patch'
  >;
  'POST /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates': Operation<
    '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates',
    'post'
  >;
  'GET /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}/managedDevice': Operation<
    '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}/managedDevice',
    'get'
  >;
}

/**
 * `DELETE /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}',
    paramDefs: {
      header: ['If-Match'],
      path: [
        'deviceCustomAttributeShellScript-id',
        'deviceManagementScriptUserState-id',
        'deviceManagementScriptDeviceState-id',
      ],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates`
 *
 * List of run states for this script across all devices of specific user.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates',
    paramDefs: {
      path: ['deviceCustomAttributeShellScript-id', 'deviceManagementScriptUserState-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}`
 *
 * List of run states for this script across all devices of specific user.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}',
    paramDefs: {
      path: [
        'deviceCustomAttributeShellScript-id',
        'deviceManagementScriptUserState-id',
        'deviceManagementScriptDeviceState-id',
      ],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}',
    paramDefs: {
      path: [
        'deviceCustomAttributeShellScript-id',
        'deviceManagementScriptUserState-id',
        'deviceManagementScriptDeviceState-id',
      ],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates',
    paramDefs: {
      path: ['deviceCustomAttributeShellScript-id', 'deviceManagementScriptUserState-id'],
    },
    params,
    body,
  };
}

export const managedDevice = {
  /**
   * `GET /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}/managedDevice`
   *
   * The managed devices that executes the device management script.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}/managedDevice']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}/managedDevice']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}/managedDevice',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'deviceCustomAttributeShellScript-id',
          'deviceManagementScriptUserState-id',
          'deviceManagementScriptDeviceState-id',
        ],
      },
      params,
    };
  },
};
