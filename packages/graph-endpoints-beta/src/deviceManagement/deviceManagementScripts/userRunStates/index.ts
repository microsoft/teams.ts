export * as deviceRunStates from './deviceRunStates';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}': Operation<
    '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates': Operation<
    '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates',
    'get'
  >;
  'GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}': Operation<
    '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}': Operation<
    '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}',
    'patch'
  >;
  'POST /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates': Operation<
    '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['deviceManagementScript-id', 'deviceManagementScriptUserState-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates`
 *
 * List of run states for this script across all users.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates',
    paramDefs: {
      path: ['deviceManagementScript-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}`
 *
 * List of run states for this script across all users.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}',
    paramDefs: {
      path: ['deviceManagementScript-id', 'deviceManagementScriptUserState-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}',
    paramDefs: {
      path: ['deviceManagementScript-id', 'deviceManagementScriptUserState-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates',
    paramDefs: {
      path: ['deviceManagementScript-id'],
    },
    params,
    body,
  };
}
