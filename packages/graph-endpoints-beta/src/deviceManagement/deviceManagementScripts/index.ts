export * as assign from './assign';
export * as assignments from './assignments';
export * as deviceRunStates from './deviceRunStates';
export * as groupAssignments from './groupAssignments';
export * as hasPayloadLinks from './hasPayloadLinks';
export * as runSummary from './runSummary';
export * as userRunStates from './userRunStates';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}': Operation<
    '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceManagementScripts': Operation<
    '/deviceManagement/deviceManagementScripts',
    'get'
  >;
  'GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}': Operation<
    '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}': Operation<
    '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}',
    'patch'
  >;
  'POST /deviceManagement/deviceManagementScripts': Operation<
    '/deviceManagement/deviceManagementScripts',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceManagementScript-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceManagementScripts`
 *
 * The list of device management scripts associated with the tenant.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/deviceManagementScripts']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/deviceManagementScripts']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceManagementScripts',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}`
 *
 * The list of device management scripts associated with the tenant.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementScript-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}',
    paramDefs: [{ name: 'deviceManagementScript-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/deviceManagementScripts`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceManagementScripts']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceManagementScripts']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/deviceManagementScripts']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceManagementScripts',
    paramDefs: [],
    params,
    body,
  };
}
