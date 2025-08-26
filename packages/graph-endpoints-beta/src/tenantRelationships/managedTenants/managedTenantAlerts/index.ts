export * as alertLogs from './alertLogs';
export * as alertRule from './alertRule';
export * as apiNotifications from './apiNotifications';
export * as emailNotifications from './emailNotifications';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}': Operation<
    '/tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/managedTenantAlerts': Operation<
    '/tenantRelationships/managedTenants/managedTenantAlerts',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}': Operation<
    '/tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}': Operation<
    '/tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}',
    'patch'
  >;
  'POST /tenantRelationships/managedTenants/managedTenantAlerts': Operation<
    '/tenantRelationships/managedTenants/managedTenantAlerts',
    'post'
  >;
}

/**
 * `DELETE /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'managedTenantAlert-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/managedTenantAlerts`
 *
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlerts']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlerts']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managedTenantAlerts',
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
 * `GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedTenantAlert-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}',
    paramDefs: [{ name: 'managedTenantAlert-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /tenantRelationships/managedTenants/managedTenantAlerts`
 *
 */
export function create(
  body: IEndpoints['POST /tenantRelationships/managedTenants/managedTenantAlerts']['body'],
  params?: IEndpoints['POST /tenantRelationships/managedTenants/managedTenantAlerts']['parameters']
): EndpointRequest<
  IEndpoints['POST /tenantRelationships/managedTenants/managedTenantAlerts']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/tenantRelationships/managedTenants/managedTenantAlerts',
    paramDefs: [],
    params,
    body,
  };
}
