import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}': Operation<
    '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates': Operation<
    '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates',
    'get'
  >;
  'GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}': Operation<
    '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}': Operation<
    '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}',
    'patch'
  >;
  'POST /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates': Operation<
    '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates',
    'post'
  >;
  'GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}/managedDevice': Operation<
    '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}/managedDevice',
    'get'
  >;
}

/**
 * `DELETE /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['deviceComplianceScript-id', 'deviceComplianceScriptDeviceState-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates`
 *
 * List of run states for the device compliance script across all devices
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates',
    paramDefs: {
      path: ['deviceComplianceScript-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}`
 *
 * List of run states for the device compliance script across all devices
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}',
    paramDefs: {
      path: ['deviceComplianceScript-id', 'deviceComplianceScriptDeviceState-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}',
    paramDefs: {
      path: ['deviceComplianceScript-id', 'deviceComplianceScriptDeviceState-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates',
    paramDefs: {
      path: ['deviceComplianceScript-id'],
    },
    params,
    body,
  };
}

export const managedDevice = {
  /**
   * `GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}/managedDevice`
   *
   * The managed device on which the device compliance script executed
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}/managedDevice']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}/managedDevice']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}/managedDevice',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceComplianceScript-id', 'deviceComplianceScriptDeviceState-id'],
      },
      params,
    };
  },
};
