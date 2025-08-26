import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/runSummary': Operation<
    '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/runSummary',
    'delete'
  >;
  'GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/runSummary': Operation<
    '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/runSummary',
    'get'
  >;
  'PATCH /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/runSummary': Operation<
    '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/runSummary',
    'patch'
  >;
}

/**
 * `DELETE /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/runSummary`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/runSummary']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/runSummary']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/runSummary',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceHealthScript-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/runSummary`
 *
 * High level run summary for device health script.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/runSummary']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/runSummary']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/runSummary',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceHealthScript-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/runSummary`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/runSummary']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/runSummary']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/runSummary']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/runSummary',
    paramDefs: [{ name: 'deviceHealthScript-id', in: 'path' }],
    params,
    body,
  };
}
