import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /tenantRelationships/managedTenants/managedTenantAlertLogs/{managedTenantAlertLog-id}': Operation<
    '/tenantRelationships/managedTenants/managedTenantAlertLogs/{managedTenantAlertLog-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/managedTenantAlertLogs': Operation<
    '/tenantRelationships/managedTenants/managedTenantAlertLogs',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/managedTenantAlertLogs/{managedTenantAlertLog-id}': Operation<
    '/tenantRelationships/managedTenants/managedTenantAlertLogs/{managedTenantAlertLog-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/managedTenantAlertLogs/{managedTenantAlertLog-id}': Operation<
    '/tenantRelationships/managedTenants/managedTenantAlertLogs/{managedTenantAlertLog-id}',
    'patch'
  >;
  'POST /tenantRelationships/managedTenants/managedTenantAlertLogs': Operation<
    '/tenantRelationships/managedTenants/managedTenantAlertLogs',
    'post'
  >;
  'GET /tenantRelationships/managedTenants/managedTenantAlertLogs/{managedTenantAlertLog-id}/alert': Operation<
    '/tenantRelationships/managedTenants/managedTenantAlertLogs/{managedTenantAlertLog-id}/alert',
    'get'
  >;
}

/**
 * `DELETE /tenantRelationships/managedTenants/managedTenantAlertLogs/{managedTenantAlertLog-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /tenantRelationships/managedTenants/managedTenantAlertLogs/{managedTenantAlertLog-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /tenantRelationships/managedTenants/managedTenantAlertLogs/{managedTenantAlertLog-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/tenantRelationships/managedTenants/managedTenantAlertLogs/{managedTenantAlertLog-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['managedTenantAlertLog-id'],
    },
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/managedTenantAlertLogs`
 *
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlertLogs']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlertLogs']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managedTenantAlertLogs',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/managedTenantAlertLogs/{managedTenantAlertLog-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlertLogs/{managedTenantAlertLog-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlertLogs/{managedTenantAlertLog-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managedTenantAlertLogs/{managedTenantAlertLog-id}',
    paramDefs: {
      path: ['managedTenantAlertLog-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /tenantRelationships/managedTenants/managedTenantAlertLogs/{managedTenantAlertLog-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/managedTenants/managedTenantAlertLogs/{managedTenantAlertLog-id}']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/managedTenants/managedTenantAlertLogs/{managedTenantAlertLog-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /tenantRelationships/managedTenants/managedTenantAlertLogs/{managedTenantAlertLog-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/tenantRelationships/managedTenants/managedTenantAlertLogs/{managedTenantAlertLog-id}',
    paramDefs: {
      path: ['managedTenantAlertLog-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /tenantRelationships/managedTenants/managedTenantAlertLogs`
 *
 */
export function create(
  body: IEndpoints['POST /tenantRelationships/managedTenants/managedTenantAlertLogs']['body']
): EndpointRequest<
  IEndpoints['POST /tenantRelationships/managedTenants/managedTenantAlertLogs']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/tenantRelationships/managedTenants/managedTenantAlertLogs',
    body,
  };
}

export const alert = {
  /**
   * `GET /tenantRelationships/managedTenants/managedTenantAlertLogs/{managedTenantAlertLog-id}/alert`
   *
   */
  get: function get(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlertLogs/{managedTenantAlertLog-id}/alert']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlertLogs/{managedTenantAlertLog-id}/alert']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/managedTenantAlertLogs/{managedTenantAlertLog-id}/alert',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managedTenantAlertLog-id'],
      },
      params,
    };
  },
};
