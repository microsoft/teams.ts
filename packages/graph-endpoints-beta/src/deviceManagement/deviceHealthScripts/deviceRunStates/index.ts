import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates/{deviceHealthScriptDeviceState-id}': Operation<
    '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates/{deviceHealthScriptDeviceState-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates': Operation<
    '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates',
    'get'
  >;
  'GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates/{deviceHealthScriptDeviceState-id}': Operation<
    '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates/{deviceHealthScriptDeviceState-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates/{deviceHealthScriptDeviceState-id}': Operation<
    '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates/{deviceHealthScriptDeviceState-id}',
    'patch'
  >;
  'POST /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates': Operation<
    '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates',
    'post'
  >;
  'GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates/{deviceHealthScriptDeviceState-id}/managedDevice': Operation<
    '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates/{deviceHealthScriptDeviceState-id}/managedDevice',
    'get'
  >;
}

/**
 * `DELETE /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates/{deviceHealthScriptDeviceState-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates/{deviceHealthScriptDeviceState-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates/{deviceHealthScriptDeviceState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates/{deviceHealthScriptDeviceState-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['deviceHealthScript-id', 'deviceHealthScriptDeviceState-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates`
 *
 * List of run states for the device health script across all devices
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates',
    paramDefs: {
      path: ['deviceHealthScript-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates/{deviceHealthScriptDeviceState-id}`
 *
 * List of run states for the device health script across all devices
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates/{deviceHealthScriptDeviceState-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates/{deviceHealthScriptDeviceState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates/{deviceHealthScriptDeviceState-id}',
    paramDefs: {
      path: ['deviceHealthScript-id', 'deviceHealthScriptDeviceState-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates/{deviceHealthScriptDeviceState-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates/{deviceHealthScriptDeviceState-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates/{deviceHealthScriptDeviceState-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates/{deviceHealthScriptDeviceState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates/{deviceHealthScriptDeviceState-id}',
    paramDefs: {
      path: ['deviceHealthScript-id', 'deviceHealthScriptDeviceState-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates',
    paramDefs: {
      path: ['deviceHealthScript-id'],
    },
    params,
    body,
  };
}

export const managedDevice = {
  /**
   * `GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates/{deviceHealthScriptDeviceState-id}/managedDevice`
   *
   * The managed device on which the device health script executed
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates/{deviceHealthScriptDeviceState-id}/managedDevice']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates/{deviceHealthScriptDeviceState-id}/managedDevice']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates/{deviceHealthScriptDeviceState-id}/managedDevice',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceHealthScript-id', 'deviceHealthScriptDeviceState-id'],
      },
      params,
    };
  },
};
