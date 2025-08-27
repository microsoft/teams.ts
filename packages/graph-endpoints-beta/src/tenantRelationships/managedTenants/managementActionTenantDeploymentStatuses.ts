import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses/{managementActionTenantDeploymentStatus-id}': Operation<
    '/tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses/{managementActionTenantDeploymentStatus-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses': Operation<
    '/tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses/{managementActionTenantDeploymentStatus-id}': Operation<
    '/tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses/{managementActionTenantDeploymentStatus-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses/{managementActionTenantDeploymentStatus-id}': Operation<
    '/tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses/{managementActionTenantDeploymentStatus-id}',
    'patch'
  >;
  'POST /tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses': Operation<
    '/tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses',
    'post'
  >;
}

/**
 * `DELETE /tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses/{managementActionTenantDeploymentStatus-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses/{managementActionTenantDeploymentStatus-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses/{managementActionTenantDeploymentStatus-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses/{managementActionTenantDeploymentStatus-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'managementActionTenantDeploymentStatus-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses`
 *
 * Get a list of the managementActionTenantDeploymentStatus objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses',
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
 * `GET /tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses/{managementActionTenantDeploymentStatus-id}`
 *
 * Read the properties and relationships of a managementActionTenantDeploymentStatus object.
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses/{managementActionTenantDeploymentStatus-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses/{managementActionTenantDeploymentStatus-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses/{managementActionTenantDeploymentStatus-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managementActionTenantDeploymentStatus-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses/{managementActionTenantDeploymentStatus-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses/{managementActionTenantDeploymentStatus-id}']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses/{managementActionTenantDeploymentStatus-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses/{managementActionTenantDeploymentStatus-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses/{managementActionTenantDeploymentStatus-id}',
    paramDefs: [{ name: 'managementActionTenantDeploymentStatus-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses`
 *
 */
export function create(
  body: IEndpoints['POST /tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses']['body'],
  params?: IEndpoints['POST /tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses']['parameters']
): EndpointRequest<
  IEndpoints['POST /tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses',
    paramDefs: [],
    params,
    body,
  };
}
