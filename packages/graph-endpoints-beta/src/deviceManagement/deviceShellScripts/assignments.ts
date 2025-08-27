import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments/{deviceManagementScriptAssignment-id}': Operation<
    '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments/{deviceManagementScriptAssignment-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments': Operation<
    '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments',
    'get'
  >;
  'GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments/{deviceManagementScriptAssignment-id}': Operation<
    '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments/{deviceManagementScriptAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments/{deviceManagementScriptAssignment-id}': Operation<
    '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments/{deviceManagementScriptAssignment-id}',
    'patch'
  >;
  'POST /deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments': Operation<
    '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments/{deviceManagementScriptAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments/{deviceManagementScriptAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments/{deviceManagementScriptAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments/{deviceManagementScriptAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceShellScript-id', in: 'path' },
      { name: 'deviceManagementScriptAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments`
 *
 * The list of group assignments for the device management script.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments',
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
 * `GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments/{deviceManagementScriptAssignment-id}`
 *
 * The list of group assignments for the device management script.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments/{deviceManagementScriptAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments/{deviceManagementScriptAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments/{deviceManagementScriptAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceShellScript-id', in: 'path' },
      { name: 'deviceManagementScriptAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments/{deviceManagementScriptAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments/{deviceManagementScriptAssignment-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments/{deviceManagementScriptAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments/{deviceManagementScriptAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments/{deviceManagementScriptAssignment-id}',
    paramDefs: [
      { name: 'deviceShellScript-id', in: 'path' },
      { name: 'deviceManagementScriptAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments',
    paramDefs: [{ name: 'deviceShellScript-id', in: 'path' }],
    params,
    body,
  };
}
