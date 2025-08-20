import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/configurationManagement/configurationMonitoringResults/{configurationMonitoringResult-id}': Operation<
    '/admin/configurationManagement/configurationMonitoringResults/{configurationMonitoringResult-id}',
    'delete'
  >;
  'GET /admin/configurationManagement/configurationMonitoringResults': Operation<
    '/admin/configurationManagement/configurationMonitoringResults',
    'get'
  >;
  'GET /admin/configurationManagement/configurationMonitoringResults/{configurationMonitoringResult-id}': Operation<
    '/admin/configurationManagement/configurationMonitoringResults/{configurationMonitoringResult-id}',
    'get'
  >;
  'PATCH /admin/configurationManagement/configurationMonitoringResults/{configurationMonitoringResult-id}': Operation<
    '/admin/configurationManagement/configurationMonitoringResults/{configurationMonitoringResult-id}',
    'patch'
  >;
  'POST /admin/configurationManagement/configurationMonitoringResults': Operation<
    '/admin/configurationManagement/configurationMonitoringResults',
    'post'
  >;
}

/**
 * `DELETE /admin/configurationManagement/configurationMonitoringResults/{configurationMonitoringResult-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/configurationManagement/configurationMonitoringResults/{configurationMonitoringResult-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /admin/configurationManagement/configurationMonitoringResults/{configurationMonitoringResult-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/configurationManagement/configurationMonitoringResults/{configurationMonitoringResult-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'configurationMonitoringResult-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /admin/configurationManagement/configurationMonitoringResults`
 *
 */
export function list(
  params?: IEndpoints['GET /admin/configurationManagement/configurationMonitoringResults']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/configurationManagement/configurationMonitoringResults']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/configurationManagement/configurationMonitoringResults',
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
 * `GET /admin/configurationManagement/configurationMonitoringResults/{configurationMonitoringResult-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /admin/configurationManagement/configurationMonitoringResults/{configurationMonitoringResult-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/configurationManagement/configurationMonitoringResults/{configurationMonitoringResult-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/configurationManagement/configurationMonitoringResults/{configurationMonitoringResult-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'configurationMonitoringResult-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/configurationManagement/configurationMonitoringResults/{configurationMonitoringResult-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/configurationManagement/configurationMonitoringResults/{configurationMonitoringResult-id}']['body'],
  params?: IEndpoints['PATCH /admin/configurationManagement/configurationMonitoringResults/{configurationMonitoringResult-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /admin/configurationManagement/configurationMonitoringResults/{configurationMonitoringResult-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/configurationManagement/configurationMonitoringResults/{configurationMonitoringResult-id}',
    paramDefs: [{ name: 'configurationMonitoringResult-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /admin/configurationManagement/configurationMonitoringResults`
 *
 */
export function create(
  body: IEndpoints['POST /admin/configurationManagement/configurationMonitoringResults']['body'],
  params?: IEndpoints['POST /admin/configurationManagement/configurationMonitoringResults']['parameters']
): EndpointRequest<
  IEndpoints['POST /admin/configurationManagement/configurationMonitoringResults']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/configurationManagement/configurationMonitoringResults',
    paramDefs: [],
    params,
    body,
  };
}
