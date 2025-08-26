import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments/{deviceHealthScriptAssignment-id}': Operation<
    '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments/{deviceHealthScriptAssignment-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments': Operation<
    '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments',
    'get'
  >;
  'GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments/{deviceHealthScriptAssignment-id}': Operation<
    '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments/{deviceHealthScriptAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments/{deviceHealthScriptAssignment-id}': Operation<
    '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments/{deviceHealthScriptAssignment-id}',
    'patch'
  >;
  'POST /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments': Operation<
    '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments/{deviceHealthScriptAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments/{deviceHealthScriptAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments/{deviceHealthScriptAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments/{deviceHealthScriptAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceHealthScript-id', in: 'path' },
      { name: 'deviceHealthScriptAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments`
 *
 * The list of group assignments for the device health script
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceHealthScript-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments/{deviceHealthScriptAssignment-id}`
 *
 * The list of group assignments for the device health script
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments/{deviceHealthScriptAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments/{deviceHealthScriptAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments/{deviceHealthScriptAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceHealthScript-id', in: 'path' },
      { name: 'deviceHealthScriptAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments/{deviceHealthScriptAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments/{deviceHealthScriptAssignment-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments/{deviceHealthScriptAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments/{deviceHealthScriptAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments/{deviceHealthScriptAssignment-id}',
    paramDefs: [
      { name: 'deviceHealthScript-id', in: 'path' },
      { name: 'deviceHealthScriptAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments',
    paramDefs: [{ name: 'deviceHealthScript-id', in: 'path' }],
    params,
    body,
  };
}
