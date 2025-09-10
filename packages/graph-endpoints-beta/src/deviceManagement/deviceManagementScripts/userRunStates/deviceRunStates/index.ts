import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}': Operation<
    '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates': Operation<
    '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates',
    'get'
  >;
  'GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}': Operation<
    '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}': Operation<
    '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}',
    'patch'
  >;
  'POST /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates': Operation<
    '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates',
    'post'
  >;
  'GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}/managedDevice': Operation<
    '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}/managedDevice',
    'get'
  >;
}

/**
 * `DELETE /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}',
    paramDefs: {
      header: ['If-Match'],
      path: [
        'deviceManagementScript-id',
        'deviceManagementScriptUserState-id',
        'deviceManagementScriptDeviceState-id',
      ],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates`
 *
 * List of run states for this script across all devices of specific user.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates',
    paramDefs: {
      path: ['deviceManagementScript-id', 'deviceManagementScriptUserState-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}`
 *
 * List of run states for this script across all devices of specific user.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}',
    paramDefs: {
      path: [
        'deviceManagementScript-id',
        'deviceManagementScriptUserState-id',
        'deviceManagementScriptDeviceState-id',
      ],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}',
    paramDefs: {
      path: [
        'deviceManagementScript-id',
        'deviceManagementScriptUserState-id',
        'deviceManagementScriptDeviceState-id',
      ],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates',
    paramDefs: {
      path: ['deviceManagementScript-id', 'deviceManagementScriptUserState-id'],
    },
    params,
    body,
  };
}

export const managedDevice = {
  /**
   * `GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}/managedDevice`
   *
   * The managed devices that executes the device management script.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}/managedDevice']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}/managedDevice']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}/managedDevice',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'deviceManagementScript-id',
          'deviceManagementScriptUserState-id',
          'deviceManagementScriptDeviceState-id',
        ],
      },
      params,
    };
  },
};
