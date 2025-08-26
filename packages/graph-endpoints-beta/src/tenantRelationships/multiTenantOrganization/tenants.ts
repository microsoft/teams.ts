import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /tenantRelationships/multiTenantOrganization/tenants/{multiTenantOrganizationMember-id}': Operation<
    '/tenantRelationships/multiTenantOrganization/tenants/{multiTenantOrganizationMember-id}',
    'delete'
  >;
  'GET /tenantRelationships/multiTenantOrganization/tenants': Operation<
    '/tenantRelationships/multiTenantOrganization/tenants',
    'get'
  >;
  'GET /tenantRelationships/multiTenantOrganization/tenants/{multiTenantOrganizationMember-id}': Operation<
    '/tenantRelationships/multiTenantOrganization/tenants/{multiTenantOrganizationMember-id}',
    'get'
  >;
  'PATCH /tenantRelationships/multiTenantOrganization/tenants/{multiTenantOrganizationMember-id}': Operation<
    '/tenantRelationships/multiTenantOrganization/tenants/{multiTenantOrganizationMember-id}',
    'patch'
  >;
  'POST /tenantRelationships/multiTenantOrganization/tenants': Operation<
    '/tenantRelationships/multiTenantOrganization/tenants',
    'post'
  >;
}

/**
 * `DELETE /tenantRelationships/multiTenantOrganization/tenants/{multiTenantOrganizationMember-id}`
 *
 * Remove a tenant from a multitenant organization. A tenant can be removed in the following scenarios: To allow for asynchronous processing, you must wait for up to 2 hours before removal of a tenant is completed.
 */
export function del(
  params?: IEndpoints['DELETE /tenantRelationships/multiTenantOrganization/tenants/{multiTenantOrganizationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /tenantRelationships/multiTenantOrganization/tenants/{multiTenantOrganizationMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/tenantRelationships/multiTenantOrganization/tenants/{multiTenantOrganizationMember-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'multiTenantOrganizationMember-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /tenantRelationships/multiTenantOrganization/tenants`
 *
 * List the tenants and their properties in the multi-tenant organization.
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/multiTenantOrganization/tenants']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/multiTenantOrganization/tenants']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/multiTenantOrganization/tenants',
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
 * `GET /tenantRelationships/multiTenantOrganization/tenants/{multiTenantOrganizationMember-id}`
 *
 * Get a tenant and its properties in the multi-tenant organization.
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/multiTenantOrganization/tenants/{multiTenantOrganizationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/multiTenantOrganization/tenants/{multiTenantOrganizationMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/multiTenantOrganization/tenants/{multiTenantOrganizationMember-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'multiTenantOrganizationMember-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /tenantRelationships/multiTenantOrganization/tenants/{multiTenantOrganizationMember-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/multiTenantOrganization/tenants/{multiTenantOrganizationMember-id}']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/multiTenantOrganization/tenants/{multiTenantOrganizationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /tenantRelationships/multiTenantOrganization/tenants/{multiTenantOrganizationMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/tenantRelationships/multiTenantOrganization/tenants/{multiTenantOrganizationMember-id}',
    paramDefs: [{ name: 'multiTenantOrganizationMember-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /tenantRelationships/multiTenantOrganization/tenants`
 *
 * Add a tenant to a multitenant organization. The administrator of an owner tenant has the permissions to add tenants to the multitenant organization. The added tenant is in the pending state until the administrator of the added tenant joins the multitenant organization by submitting a join request. A tenant can be part of only one multitenant organization.
 */
export function create(
  body: IEndpoints['POST /tenantRelationships/multiTenantOrganization/tenants']['body'],
  params?: IEndpoints['POST /tenantRelationships/multiTenantOrganization/tenants']['parameters']
): EndpointRequest<
  IEndpoints['POST /tenantRelationships/multiTenantOrganization/tenants']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/tenantRelationships/multiTenantOrganization/tenants',
    paramDefs: [],
    params,
    body,
  };
}
