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
  'GET /admin/configurationManagement/configurationMonitors/{configurationMonitor-id}/baseline': Operation<
    '/admin/configurationManagement/configurationMonitors/{configurationMonitor-id}/baseline',
    'get'
  >;
  'PATCH /admin/configurationManagement/configurationMonitors/{configurationMonitor-id}/baseline': Operation<
    '/admin/configurationManagement/configurationMonitors/{configurationMonitor-id}/baseline',
    'patch'
  >;
  'DELETE /admin/configurationManagement/configurationMonitors/{configurationMonitor-id}/baseline': Operation<
    '/admin/configurationManagement/configurationMonitors/{configurationMonitor-id}/baseline',
    'delete'
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
    paramDefs: {
      header: ['If-Match'],
      path: ['configurationMonitor-id'],
    },
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
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    paramDefs: {
      path: ['configurationMonitor-id'],
      query: ['$select', '$expand'],
    },
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
    paramDefs: {
      path: ['configurationMonitor-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /admin/configurationManagement/configurationMonitors`
 *
 */
export function create(
  body: IEndpoints['POST /admin/configurationManagement/configurationMonitors']['body']
): EndpointRequest<
  IEndpoints['POST /admin/configurationManagement/configurationMonitors']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/configurationManagement/configurationMonitors',
    body,
  };
}

export const baseline = {
  /**
   * `GET /admin/configurationManagement/configurationMonitors/{configurationMonitor-id}/baseline`
   *
   */
  get: function get(
    params?: IEndpoints['GET /admin/configurationManagement/configurationMonitors/{configurationMonitor-id}/baseline']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/configurationManagement/configurationMonitors/{configurationMonitor-id}/baseline']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/configurationManagement/configurationMonitors/{configurationMonitor-id}/baseline',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['configurationMonitor-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /admin/configurationManagement/configurationMonitors/{configurationMonitor-id}/baseline`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /admin/configurationManagement/configurationMonitors/{configurationMonitor-id}/baseline']['body'],
    params?: IEndpoints['PATCH /admin/configurationManagement/configurationMonitors/{configurationMonitor-id}/baseline']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /admin/configurationManagement/configurationMonitors/{configurationMonitor-id}/baseline']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/admin/configurationManagement/configurationMonitors/{configurationMonitor-id}/baseline',
      paramDefs: {
        path: ['configurationMonitor-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /admin/configurationManagement/configurationMonitors/{configurationMonitor-id}/baseline`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /admin/configurationManagement/configurationMonitors/{configurationMonitor-id}/baseline']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /admin/configurationManagement/configurationMonitors/{configurationMonitor-id}/baseline']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/admin/configurationManagement/configurationMonitors/{configurationMonitor-id}/baseline',
      paramDefs: {
        header: ['If-Match'],
        path: ['configurationMonitor-id'],
      },
      params,
    };
  },
};
