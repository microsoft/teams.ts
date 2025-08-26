export * as assign from './assign';
export * as assignments from './assignments';
export * as deviceRunStates from './deviceRunStates';
export * as enableGlobalScripts from './enableGlobalScripts';
export * as getGlobalScriptHighestAvailableVersion from './getGlobalScriptHighestAvailableVersion';
export * as runSummary from './runSummary';
export * as updateGlobalScript from './updateGlobalScript';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}': Operation<
    '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceHealthScripts': Operation<
    '/deviceManagement/deviceHealthScripts',
    'get'
  >;
  'GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}': Operation<
    '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}': Operation<
    '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}',
    'patch'
  >;
  'POST /deviceManagement/deviceHealthScripts': Operation<
    '/deviceManagement/deviceHealthScripts',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceHealthScript-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceHealthScripts`
 *
 * The list of device health scripts associated with the tenant.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/deviceHealthScripts']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/deviceHealthScripts']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceHealthScripts',
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
 * `GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}`
 *
 * The list of device health scripts associated with the tenant.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceHealthScript-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}',
    paramDefs: [{ name: 'deviceHealthScript-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/deviceHealthScripts`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceHealthScripts']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceHealthScripts']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/deviceHealthScripts']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceHealthScripts',
    paramDefs: [],
    params,
    body,
  };
}
