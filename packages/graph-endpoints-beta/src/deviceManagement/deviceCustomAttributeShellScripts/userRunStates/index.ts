export * as deviceRunStates from './deviceRunStates';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}': Operation<
    '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates': Operation<
    '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates',
    'get'
  >;
  'GET /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}': Operation<
    '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}': Operation<
    '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}',
    'patch'
  >;
  'POST /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates': Operation<
    '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['deviceCustomAttributeShellScript-id', 'deviceManagementScriptUserState-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates`
 *
 * List of run states for this script across all users.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates',
    paramDefs: {
      path: ['deviceCustomAttributeShellScript-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}`
 *
 * List of run states for this script across all users.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}',
    paramDefs: {
      path: ['deviceCustomAttributeShellScript-id', 'deviceManagementScriptUserState-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates/{deviceManagementScriptUserState-id}',
    paramDefs: {
      path: ['deviceCustomAttributeShellScript-id', 'deviceManagementScriptUserState-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/userRunStates',
    paramDefs: {
      path: ['deviceCustomAttributeShellScript-id'],
    },
    params,
    body,
  };
}
