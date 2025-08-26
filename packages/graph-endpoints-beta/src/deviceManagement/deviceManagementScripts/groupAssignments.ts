import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}': Operation<
    '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments': Operation<
    '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments',
    'get'
  >;
  'GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}': Operation<
    '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}': Operation<
    '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}',
    'patch'
  >;
  'POST /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments': Operation<
    '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceManagementScript-id', in: 'path' },
      { name: 'deviceManagementScriptGroupAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments`
 *
 * The list of group assignments for the device management script.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementScript-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}`
 *
 * The list of group assignments for the device management script.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementScript-id', in: 'path' },
      { name: 'deviceManagementScriptGroupAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}',
    paramDefs: [
      { name: 'deviceManagementScript-id', in: 'path' },
      { name: 'deviceManagementScriptGroupAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments',
    paramDefs: [{ name: 'deviceManagementScript-id', in: 'path' }],
    params,
    body,
  };
}
