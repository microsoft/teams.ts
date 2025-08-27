export * as baseline from './baseline';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/configurationManagement/configurationMonitors/{configurationMonitor-id}': Operation<
    '/admin/configurationManagement/configurationMonitors/{configurationMonitor-id}',
    'delete'
  >;
  'GET /admin/configurationManagement/configurationMonitors': Operation<
    '/admin/configurationManagement/configurationMonitors',
    'get'
  >;
  'GET /admin/configurationManagement/configurationMonitors/{configurationMonitor-id}': Operation<
    '/admin/configurationManagement/configurationMonitors/{configurationMonitor-id}',
    'get'
  >;
  'PATCH /admin/configurationManagement/configurationMonitors/{configurationMonitor-id}': Operation<
    '/admin/configurationManagement/configurationMonitors/{configurationMonitor-id}',
    'patch'
  >;
  'POST /admin/configurationManagement/configurationMonitors': Operation<
    '/admin/configurationManagement/configurationMonitors',
    'post'
  >;
}

/**
 * `DELETE /admin/configurationManagement/configurationMonitors/{configurationMonitor-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/configurationManagement/configurationMonitors/{configurationMonitor-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /admin/configurationManagement/configurationMonitors/{configurationMonitor-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/configurationManagement/configurationMonitors/{configurationMonitor-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'configurationMonitor-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /admin/configurationManagement/configurationMonitors`
 *
 */
export function list(
  params?: IEndpoints['GET /admin/configurationManagement/configurationMonitors']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/configurationManagement/configurationMonitors']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/configurationManagement/configurationMonitors',
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
 * `GET /admin/configurationManagement/configurationMonitors/{configurationMonitor-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /admin/configurationManagement/configurationMonitors/{configurationMonitor-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/configurationManagement/configurationMonitors/{configurationMonitor-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/configurationManagement/configurationMonitors/{configurationMonitor-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'configurationMonitor-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/configurationManagement/configurationMonitors/{configurationMonitor-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/configurationManagement/configurationMonitors/{configurationMonitor-id}']['body'],
  params?: IEndpoints['PATCH /admin/configurationManagement/configurationMonitors/{configurationMonitor-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /admin/configurationManagement/configurationMonitors/{configurationMonitor-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/configurationManagement/configurationMonitors/{configurationMonitor-id}',
    paramDefs: [{ name: 'configurationMonitor-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /admin/configurationManagement/configurationMonitors`
 *
 */
export function create(
  body: IEndpoints['POST /admin/configurationManagement/configurationMonitors']['body'],
  params?: IEndpoints['POST /admin/configurationManagement/configurationMonitors']['parameters']
): EndpointRequest<
  IEndpoints['POST /admin/configurationManagement/configurationMonitors']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/configurationManagement/configurationMonitors',
    paramDefs: [],
    params,
    body,
  };
}
