export * as alert from './alert';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}': Operation<
    '/tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/managedTenantApiNotifications': Operation<
    '/tenantRelationships/managedTenants/managedTenantApiNotifications',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}': Operation<
    '/tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}': Operation<
    '/tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}',
    'patch'
  >;
  'POST /tenantRelationships/managedTenants/managedTenantApiNotifications': Operation<
    '/tenantRelationships/managedTenants/managedTenantApiNotifications',
    'post'
  >;
}

/**
 * `DELETE /tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'managedTenantApiNotification-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/managedTenantApiNotifications`
 *
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managedTenantApiNotifications']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managedTenantApiNotifications']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managedTenantApiNotifications',
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
 * `GET /tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedTenantApiNotification-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}',
    paramDefs: [{ name: 'managedTenantApiNotification-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /tenantRelationships/managedTenants/managedTenantApiNotifications`
 *
 */
export function create(
  body: IEndpoints['POST /tenantRelationships/managedTenants/managedTenantApiNotifications']['body'],
  params?: IEndpoints['POST /tenantRelationships/managedTenants/managedTenantApiNotifications']['parameters']
): EndpointRequest<
  IEndpoints['POST /tenantRelationships/managedTenants/managedTenantApiNotifications']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/tenantRelationships/managedTenants/managedTenantApiNotifications',
    paramDefs: [],
    params,
    body,
  };
}
