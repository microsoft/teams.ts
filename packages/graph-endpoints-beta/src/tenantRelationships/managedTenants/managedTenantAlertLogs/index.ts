export * as alert from './alert';

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
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'managedTenantAlertLog-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedTenantAlertLog-id', in: 'path' },
    ],
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
    paramDefs: [{ name: 'managedTenantAlertLog-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /tenantRelationships/managedTenants/managedTenantAlertLogs`
 *
 */
export function create(
  body: IEndpoints['POST /tenantRelationships/managedTenants/managedTenantAlertLogs']['body'],
  params?: IEndpoints['POST /tenantRelationships/managedTenants/managedTenantAlertLogs']['parameters']
): EndpointRequest<
  IEndpoints['POST /tenantRelationships/managedTenants/managedTenantAlertLogs']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/tenantRelationships/managedTenants/managedTenantAlertLogs',
    paramDefs: [],
    params,
    body,
  };
}
