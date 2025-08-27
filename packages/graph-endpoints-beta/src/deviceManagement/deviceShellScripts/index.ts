export * as assign from './assign';
export * as assignments from './assignments';
export * as deviceRunStates from './deviceRunStates';
export * as groupAssignments from './groupAssignments';
export * as runSummary from './runSummary';
export * as userRunStates from './userRunStates';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceShellScripts/{deviceShellScript-id}': Operation<
    '/deviceManagement/deviceShellScripts/{deviceShellScript-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceShellScripts': Operation<
    '/deviceManagement/deviceShellScripts',
    'get'
  >;
  'GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}': Operation<
    '/deviceManagement/deviceShellScripts/{deviceShellScript-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceShellScripts/{deviceShellScript-id}': Operation<
    '/deviceManagement/deviceShellScripts/{deviceShellScript-id}',
    'patch'
  >;
  'POST /deviceManagement/deviceShellScripts': Operation<
    '/deviceManagement/deviceShellScripts',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/deviceShellScripts/{deviceShellScript-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceShellScripts/{deviceShellScript-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceShellScripts/{deviceShellScript-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/deviceShellScripts/{deviceShellScript-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceShellScript-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceShellScripts`
 *
 * The list of device shell scripts associated with the tenant.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/deviceShellScripts']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/deviceShellScripts']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceShellScripts',
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
 * `GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}`
 *
 * The list of device shell scripts associated with the tenant.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceShellScripts/{deviceShellScript-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceShellScript-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceShellScripts/{deviceShellScript-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceShellScripts/{deviceShellScript-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceShellScripts/{deviceShellScript-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceShellScripts/{deviceShellScript-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/deviceShellScripts/{deviceShellScript-id}',
    paramDefs: [{ name: 'deviceShellScript-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/deviceShellScripts`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceShellScripts']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceShellScripts']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/deviceShellScripts']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceShellScripts',
    paramDefs: [],
    params,
    body,
  };
}
