import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/reports/cachedReportConfigurations/{deviceManagementCachedReportConfiguration-id}': Operation<
    '/deviceManagement/reports/cachedReportConfigurations/{deviceManagementCachedReportConfiguration-id}',
    'delete'
  >;
  'GET /deviceManagement/reports/cachedReportConfigurations': Operation<
    '/deviceManagement/reports/cachedReportConfigurations',
    'get'
  >;
  'GET /deviceManagement/reports/cachedReportConfigurations/{deviceManagementCachedReportConfiguration-id}': Operation<
    '/deviceManagement/reports/cachedReportConfigurations/{deviceManagementCachedReportConfiguration-id}',
    'get'
  >;
  'PATCH /deviceManagement/reports/cachedReportConfigurations/{deviceManagementCachedReportConfiguration-id}': Operation<
    '/deviceManagement/reports/cachedReportConfigurations/{deviceManagementCachedReportConfiguration-id}',
    'patch'
  >;
  'POST /deviceManagement/reports/cachedReportConfigurations': Operation<
    '/deviceManagement/reports/cachedReportConfigurations',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/reports/cachedReportConfigurations/{deviceManagementCachedReportConfiguration-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/reports/cachedReportConfigurations/{deviceManagementCachedReportConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/reports/cachedReportConfigurations/{deviceManagementCachedReportConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/reports/cachedReportConfigurations/{deviceManagementCachedReportConfiguration-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceManagementCachedReportConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/reports/cachedReportConfigurations`
 *
 * Entity representing the configuration of a cached report.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/reports/cachedReportConfigurations']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/reports/cachedReportConfigurations']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/reports/cachedReportConfigurations',
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
 * `GET /deviceManagement/reports/cachedReportConfigurations/{deviceManagementCachedReportConfiguration-id}`
 *
 * Entity representing the configuration of a cached report.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/reports/cachedReportConfigurations/{deviceManagementCachedReportConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/reports/cachedReportConfigurations/{deviceManagementCachedReportConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/reports/cachedReportConfigurations/{deviceManagementCachedReportConfiguration-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementCachedReportConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/reports/cachedReportConfigurations/{deviceManagementCachedReportConfiguration-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/reports/cachedReportConfigurations/{deviceManagementCachedReportConfiguration-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/reports/cachedReportConfigurations/{deviceManagementCachedReportConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/reports/cachedReportConfigurations/{deviceManagementCachedReportConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/reports/cachedReportConfigurations/{deviceManagementCachedReportConfiguration-id}',
    paramDefs: [{ name: 'deviceManagementCachedReportConfiguration-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/reports/cachedReportConfigurations`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/cachedReportConfigurations']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/cachedReportConfigurations']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/cachedReportConfigurations']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/cachedReportConfigurations',
    paramDefs: [],
    params,
    body,
  };
}
