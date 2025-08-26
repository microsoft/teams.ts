import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/configurationManagement/configurationMonitors/{configurationMonitor-id}/baseline': Operation<
    '/admin/configurationManagement/configurationMonitors/{configurationMonitor-id}/baseline',
    'delete'
  >;
  'GET /admin/configurationManagement/configurationMonitors/{configurationMonitor-id}/baseline': Operation<
    '/admin/configurationManagement/configurationMonitors/{configurationMonitor-id}/baseline',
    'get'
  >;
  'PATCH /admin/configurationManagement/configurationMonitors/{configurationMonitor-id}/baseline': Operation<
    '/admin/configurationManagement/configurationMonitors/{configurationMonitor-id}/baseline',
    'patch'
  >;
}

/**
 * `DELETE /admin/configurationManagement/configurationMonitors/{configurationMonitor-id}/baseline`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/configurationManagement/configurationMonitors/{configurationMonitor-id}/baseline']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /admin/configurationManagement/configurationMonitors/{configurationMonitor-id}/baseline']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/configurationManagement/configurationMonitors/{configurationMonitor-id}/baseline',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'configurationMonitor-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /admin/configurationManagement/configurationMonitors/{configurationMonitor-id}/baseline`
 *
 */
export function get(
  params?: IEndpoints['GET /admin/configurationManagement/configurationMonitors/{configurationMonitor-id}/baseline']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/configurationManagement/configurationMonitors/{configurationMonitor-id}/baseline']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/configurationManagement/configurationMonitors/{configurationMonitor-id}/baseline',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'configurationMonitor-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/configurationManagement/configurationMonitors/{configurationMonitor-id}/baseline`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/configurationManagement/configurationMonitors/{configurationMonitor-id}/baseline']['body'],
  params?: IEndpoints['PATCH /admin/configurationManagement/configurationMonitors/{configurationMonitor-id}/baseline']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /admin/configurationManagement/configurationMonitors/{configurationMonitor-id}/baseline']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/configurationManagement/configurationMonitors/{configurationMonitor-id}/baseline',
    paramDefs: [{ name: 'configurationMonitor-id', in: 'path' }],
    params,
    body,
  };
}
