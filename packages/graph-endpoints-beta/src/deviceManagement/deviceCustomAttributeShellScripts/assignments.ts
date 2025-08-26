import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/assignments/{deviceManagementScriptAssignment-id}': Operation<
    '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/assignments/{deviceManagementScriptAssignment-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/assignments': Operation<
    '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/assignments',
    'get'
  >;
  'GET /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/assignments/{deviceManagementScriptAssignment-id}': Operation<
    '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/assignments/{deviceManagementScriptAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/assignments/{deviceManagementScriptAssignment-id}': Operation<
    '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/assignments/{deviceManagementScriptAssignment-id}',
    'patch'
  >;
  'POST /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/assignments': Operation<
    '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/assignments',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/assignments/{deviceManagementScriptAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/assignments/{deviceManagementScriptAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/assignments/{deviceManagementScriptAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/assignments/{deviceManagementScriptAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceCustomAttributeShellScript-id', in: 'path' },
      { name: 'deviceManagementScriptAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/assignments`
 *
 * The list of group assignments for the device management script.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/assignments',
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
 * `GET /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/assignments/{deviceManagementScriptAssignment-id}`
 *
 * The list of group assignments for the device management script.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/assignments/{deviceManagementScriptAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/assignments/{deviceManagementScriptAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/assignments/{deviceManagementScriptAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceCustomAttributeShellScript-id', in: 'path' },
      { name: 'deviceManagementScriptAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/assignments/{deviceManagementScriptAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/assignments/{deviceManagementScriptAssignment-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/assignments/{deviceManagementScriptAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/assignments/{deviceManagementScriptAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/assignments/{deviceManagementScriptAssignment-id}',
    paramDefs: [
      { name: 'deviceCustomAttributeShellScript-id', in: 'path' },
      { name: 'deviceManagementScriptAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/assignments`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/assignments']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/assignments',
    paramDefs: [{ name: 'deviceCustomAttributeShellScript-id', in: 'path' }],
    params,
    body,
  };
}
