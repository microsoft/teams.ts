import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/runSummary': Operation<
    '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/runSummary',
    'delete'
  >;
  'GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/runSummary': Operation<
    '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/runSummary',
    'get'
  >;
  'PATCH /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/runSummary': Operation<
    '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/runSummary',
    'patch'
  >;
}

/**
 * `DELETE /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/runSummary`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/runSummary']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/runSummary']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/runSummary',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'hardwareConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/runSummary`
 *
 * A summary of the results from an attempt to configure hardware settings. Read-Only.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/runSummary']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/runSummary']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/runSummary',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'hardwareConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/runSummary`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/runSummary']['body'],
  params?: IEndpoints['PATCH /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/runSummary']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/runSummary']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/runSummary',
    paramDefs: [{ name: 'hardwareConfiguration-id', in: 'path' }],
    params,
    body,
  };
}
