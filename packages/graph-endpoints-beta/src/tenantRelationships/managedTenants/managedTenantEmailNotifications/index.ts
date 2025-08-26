export * as alert from './alert';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}': Operation<
    '/tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/managedTenantEmailNotifications': Operation<
    '/tenantRelationships/managedTenants/managedTenantEmailNotifications',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}': Operation<
    '/tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}': Operation<
    '/tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}',
    'patch'
  >;
  'POST /tenantRelationships/managedTenants/managedTenantEmailNotifications': Operation<
    '/tenantRelationships/managedTenants/managedTenantEmailNotifications',
    'post'
  >;
}

/**
 * `DELETE /tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'managedTenantEmailNotification-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/managedTenantEmailNotifications`
 *
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managedTenantEmailNotifications']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managedTenantEmailNotifications']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managedTenantEmailNotifications',
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
 * `GET /tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedTenantEmailNotification-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}',
    paramDefs: [{ name: 'managedTenantEmailNotification-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /tenantRelationships/managedTenants/managedTenantEmailNotifications`
 *
 */
export function create(
  body: IEndpoints['POST /tenantRelationships/managedTenants/managedTenantEmailNotifications']['body'],
  params?: IEndpoints['POST /tenantRelationships/managedTenants/managedTenantEmailNotifications']['parameters']
): EndpointRequest<
  IEndpoints['POST /tenantRelationships/managedTenants/managedTenantEmailNotifications']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/tenantRelationships/managedTenants/managedTenantEmailNotifications',
    paramDefs: [],
    params,
    body,
  };
}
