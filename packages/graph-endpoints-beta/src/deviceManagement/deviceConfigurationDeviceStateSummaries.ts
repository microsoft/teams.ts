import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceConfigurationDeviceStateSummaries': Operation<
    '/deviceManagement/deviceConfigurationDeviceStateSummaries',
    'delete'
  >;
  'GET /deviceManagement/deviceConfigurationDeviceStateSummaries': Operation<
    '/deviceManagement/deviceConfigurationDeviceStateSummaries',
    'get'
  >;
  'PATCH /deviceManagement/deviceConfigurationDeviceStateSummaries': Operation<
    '/deviceManagement/deviceConfigurationDeviceStateSummaries',
    'patch'
  >;
}

/**
 * `DELETE /deviceManagement/deviceConfigurationDeviceStateSummaries`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceConfigurationDeviceStateSummaries']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceConfigurationDeviceStateSummaries']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/deviceConfigurationDeviceStateSummaries',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceConfigurationDeviceStateSummaries`
 *
 * The device configuration device state summary for this account.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/deviceConfigurationDeviceStateSummaries']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceConfigurationDeviceStateSummaries']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceConfigurationDeviceStateSummaries',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceConfigurationDeviceStateSummaries`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceConfigurationDeviceStateSummaries']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceConfigurationDeviceStateSummaries']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceConfigurationDeviceStateSummaries']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/deviceConfigurationDeviceStateSummaries',
    paramDefs: [],
    params,
    body,
  };
}
