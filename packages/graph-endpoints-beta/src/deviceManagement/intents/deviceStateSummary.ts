import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/intents/{deviceManagementIntent-id}/deviceStateSummary': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/deviceStateSummary',
    'delete'
  >;
  'GET /deviceManagement/intents/{deviceManagementIntent-id}/deviceStateSummary': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/deviceStateSummary',
    'get'
  >;
  'PATCH /deviceManagement/intents/{deviceManagementIntent-id}/deviceStateSummary': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/deviceStateSummary',
    'patch'
  >;
}

/**
 * `DELETE /deviceManagement/intents/{deviceManagementIntent-id}/deviceStateSummary`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/intents/{deviceManagementIntent-id}/deviceStateSummary']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/intents/{deviceManagementIntent-id}/deviceStateSummary']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/intents/{deviceManagementIntent-id}/deviceStateSummary',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceManagementIntent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/intents/{deviceManagementIntent-id}/deviceStateSummary`
 *
 * A summary of device states and counts of devices that belong to corresponding state for all devices that the intent is applied to
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/deviceStateSummary']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/deviceStateSummary']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/intents/{deviceManagementIntent-id}/deviceStateSummary',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementIntent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/intents/{deviceManagementIntent-id}/deviceStateSummary`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}/deviceStateSummary']['body'],
  params?: IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}/deviceStateSummary']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}/deviceStateSummary']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/intents/{deviceManagementIntent-id}/deviceStateSummary',
    paramDefs: [{ name: 'deviceManagementIntent-id', in: 'path' }],
    params,
    body,
  };
}
