export * as joinRequest from './joinRequest';
export * as tenants from './tenants';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /tenantRelationships/multiTenantOrganization': Operation<
    '/tenantRelationships/multiTenantOrganization',
    'get'
  >;
  'PATCH /tenantRelationships/multiTenantOrganization': Operation<
    '/tenantRelationships/multiTenantOrganization',
    'patch'
  >;
}

/**
 * `GET /tenantRelationships/multiTenantOrganization`
 *
 * Get properties of the multitenant organization.
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/multiTenantOrganization']['parameters']
): EndpointRequest<IEndpoints['GET /tenantRelationships/multiTenantOrganization']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/multiTenantOrganization',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /tenantRelationships/multiTenantOrganization`
 *
 * Update the properties of a multi-tenant organization.
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/multiTenantOrganization']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/multiTenantOrganization']['parameters']
): EndpointRequest<IEndpoints['PATCH /tenantRelationships/multiTenantOrganization']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/tenantRelationships/multiTenantOrganization',
    paramDefs: [],
    params,
    body,
  };
}
