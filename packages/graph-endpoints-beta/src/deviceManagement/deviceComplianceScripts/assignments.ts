import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments/{deviceHealthScriptAssignment-id}': Operation<
    '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments/{deviceHealthScriptAssignment-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments': Operation<
    '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments',
    'get'
  >;
  'GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments/{deviceHealthScriptAssignment-id}': Operation<
    '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments/{deviceHealthScriptAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments/{deviceHealthScriptAssignment-id}': Operation<
    '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments/{deviceHealthScriptAssignment-id}',
    'patch'
  >;
  'POST /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments': Operation<
    '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments/{deviceHealthScriptAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments/{deviceHealthScriptAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments/{deviceHealthScriptAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments/{deviceHealthScriptAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceComplianceScript-id', in: 'path' },
      { name: 'deviceHealthScriptAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments`
 *
 * The list of group assignments for the device compliance script
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceComplianceScript-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments/{deviceHealthScriptAssignment-id}`
 *
 * The list of group assignments for the device compliance script
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments/{deviceHealthScriptAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments/{deviceHealthScriptAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments/{deviceHealthScriptAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceComplianceScript-id', in: 'path' },
      { name: 'deviceHealthScriptAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments/{deviceHealthScriptAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments/{deviceHealthScriptAssignment-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments/{deviceHealthScriptAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments/{deviceHealthScriptAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments/{deviceHealthScriptAssignment-id}',
    paramDefs: [
      { name: 'deviceComplianceScript-id', in: 'path' },
      { name: 'deviceHealthScriptAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments',
    paramDefs: [{ name: 'deviceComplianceScript-id', in: 'path' }],
    params,
    body,
  };
}
