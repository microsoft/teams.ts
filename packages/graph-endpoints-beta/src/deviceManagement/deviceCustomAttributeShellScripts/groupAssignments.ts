import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}': Operation<
    '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/groupAssignments': Operation<
    '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/groupAssignments',
    'get'
  >;
  'GET /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}': Operation<
    '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}': Operation<
    '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}',
    'patch'
  >;
  'POST /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/groupAssignments': Operation<
    '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/groupAssignments',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceCustomAttributeShellScript-id', in: 'path' },
      { name: 'deviceManagementScriptGroupAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/groupAssignments`
 *
 * The list of group assignments for the device management script.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/groupAssignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/groupAssignments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/groupAssignments',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceCustomAttributeShellScript-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}`
 *
 * The list of group assignments for the device management script.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceCustomAttributeShellScript-id', in: 'path' },
      { name: 'deviceManagementScriptGroupAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}',
    paramDefs: [
      { name: 'deviceCustomAttributeShellScript-id', in: 'path' },
      { name: 'deviceManagementScriptGroupAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/groupAssignments`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/groupAssignments']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/groupAssignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/groupAssignments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/groupAssignments',
    paramDefs: [{ name: 'deviceCustomAttributeShellScript-id', in: 'path' }],
    params,
    body,
  };
}
