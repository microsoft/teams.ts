import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/intents/{deviceManagementIntent-id}/userStateSummary': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/userStateSummary',
    'delete'
  >;
  'GET /deviceManagement/intents/{deviceManagementIntent-id}/userStateSummary': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/userStateSummary',
    'get'
  >;
  'PATCH /deviceManagement/intents/{deviceManagementIntent-id}/userStateSummary': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/userStateSummary',
    'patch'
  >;
}

/**
 * `DELETE /deviceManagement/intents/{deviceManagementIntent-id}/userStateSummary`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/intents/{deviceManagementIntent-id}/userStateSummary']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/intents/{deviceManagementIntent-id}/userStateSummary']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/intents/{deviceManagementIntent-id}/userStateSummary',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceManagementIntent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/intents/{deviceManagementIntent-id}/userStateSummary`
 *
 * A summary of user states and counts of users that belong to corresponding state for all users that the intent is applied to
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/userStateSummary']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/userStateSummary']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/intents/{deviceManagementIntent-id}/userStateSummary',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementIntent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/intents/{deviceManagementIntent-id}/userStateSummary`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}/userStateSummary']['body'],
  params?: IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}/userStateSummary']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}/userStateSummary']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/intents/{deviceManagementIntent-id}/userStateSummary',
    paramDefs: [{ name: 'deviceManagementIntent-id', in: 'path' }],
    params,
    body,
  };
}
