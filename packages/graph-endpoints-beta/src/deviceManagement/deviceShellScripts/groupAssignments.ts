import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}': Operation<
    '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments': Operation<
    '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments',
    'get'
  >;
  'GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}': Operation<
    '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}': Operation<
    '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}',
    'patch'
  >;
  'POST /deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments': Operation<
    '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceShellScript-id', in: 'path' },
      { name: 'deviceManagementScriptGroupAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments`
 *
 * The list of group assignments for the device management script.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceShellScript-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}`
 *
 * The list of group assignments for the device management script.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceShellScript-id', in: 'path' },
      { name: 'deviceManagementScriptGroupAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}',
    paramDefs: [
      { name: 'deviceShellScript-id', in: 'path' },
      { name: 'deviceManagementScriptGroupAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments',
    paramDefs: [{ name: 'deviceShellScript-id', in: 'path' }],
    params,
    body,
  };
}
