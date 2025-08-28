import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceConfigurationUserStateSummaries': Operation<
    '/deviceManagement/deviceConfigurationUserStateSummaries',
    'delete'
  >;
  'GET /deviceManagement/deviceConfigurationUserStateSummaries': Operation<
    '/deviceManagement/deviceConfigurationUserStateSummaries',
    'get'
  >;
  'PATCH /deviceManagement/deviceConfigurationUserStateSummaries': Operation<
    '/deviceManagement/deviceConfigurationUserStateSummaries',
    'patch'
  >;
}

/**
 * `DELETE /deviceManagement/deviceConfigurationUserStateSummaries`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceConfigurationUserStateSummaries']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceConfigurationUserStateSummaries']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/deviceConfigurationUserStateSummaries',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceConfigurationUserStateSummaries`
 *
 * The device configuration user state summary for this account.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/deviceConfigurationUserStateSummaries']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceConfigurationUserStateSummaries']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceConfigurationUserStateSummaries',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceConfigurationUserStateSummaries`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceConfigurationUserStateSummaries']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceConfigurationUserStateSummaries']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceConfigurationUserStateSummaries']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/deviceConfigurationUserStateSummaries',
    paramDefs: [],
    params,
    body,
  };
}
