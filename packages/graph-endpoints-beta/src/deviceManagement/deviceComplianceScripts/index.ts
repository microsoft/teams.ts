export * as assign from './assign';
export * as assignments from './assignments';
export * as deviceRunStates from './deviceRunStates';
export * as runSummary from './runSummary';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}': Operation<
    '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceComplianceScripts': Operation<
    '/deviceManagement/deviceComplianceScripts',
    'get'
  >;
  'GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}': Operation<
    '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}': Operation<
    '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}',
    'patch'
  >;
  'POST /deviceManagement/deviceComplianceScripts': Operation<
    '/deviceManagement/deviceComplianceScripts',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceComplianceScript-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceComplianceScripts`
 *
 * The list of device compliance scripts associated with the tenant.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/deviceComplianceScripts']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/deviceComplianceScripts']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceComplianceScripts',
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
 * `GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}`
 *
 * The list of device compliance scripts associated with the tenant.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceComplianceScript-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}',
    paramDefs: [{ name: 'deviceComplianceScript-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/deviceComplianceScripts`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceComplianceScripts']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceComplianceScripts']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/deviceComplianceScripts']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceComplianceScripts',
    paramDefs: [],
    params,
    body,
  };
}
