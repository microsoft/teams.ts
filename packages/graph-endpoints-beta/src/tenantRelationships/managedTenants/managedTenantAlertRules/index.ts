export * as alerts from './alerts';
export * as ruleDefinition from './ruleDefinition';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}': Operation<
    '/tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/managedTenantAlertRules': Operation<
    '/tenantRelationships/managedTenants/managedTenantAlertRules',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}': Operation<
    '/tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}': Operation<
    '/tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}',
    'patch'
  >;
  'POST /tenantRelationships/managedTenants/managedTenantAlertRules': Operation<
    '/tenantRelationships/managedTenants/managedTenantAlertRules',
    'post'
  >;
}

/**
 * `DELETE /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'managedTenantAlertRule-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/managedTenantAlertRules`
 *
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlertRules']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlertRules']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managedTenantAlertRules',
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
 * `GET /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedTenantAlertRule-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}',
    paramDefs: [{ name: 'managedTenantAlertRule-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /tenantRelationships/managedTenants/managedTenantAlertRules`
 *
 */
export function create(
  body: IEndpoints['POST /tenantRelationships/managedTenants/managedTenantAlertRules']['body'],
  params?: IEndpoints['POST /tenantRelationships/managedTenants/managedTenantAlertRules']['parameters']
): EndpointRequest<
  IEndpoints['POST /tenantRelationships/managedTenants/managedTenantAlertRules']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/tenantRelationships/managedTenants/managedTenantAlertRules',
    paramDefs: [],
    params,
    body,
  };
}
