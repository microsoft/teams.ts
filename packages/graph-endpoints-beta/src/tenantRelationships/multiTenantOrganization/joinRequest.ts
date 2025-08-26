import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /tenantRelationships/multiTenantOrganization/joinRequest': Operation<
    '/tenantRelationships/multiTenantOrganization/joinRequest',
    'get'
  >;
  'PATCH /tenantRelationships/multiTenantOrganization/joinRequest': Operation<
    '/tenantRelationships/multiTenantOrganization/joinRequest',
    'patch'
  >;
}

/**
 * `GET /tenantRelationships/multiTenantOrganization/joinRequest`
 *
 * Get the status of a tenant joining a multi-tenant organization.
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/multiTenantOrganization/joinRequest']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/multiTenantOrganization/joinRequest']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/multiTenantOrganization/joinRequest',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /tenantRelationships/multiTenantOrganization/joinRequest`
 *
 * Join a multi-tenant organization, after the owner of the multi-tenant organization adds your tenant to the multi-tenant organization as pending. Before a tenant added to a multi-tenant organization can participate in the multi-tenant organization, the administrator of the joining tenant must submit a join request. To allow for asynchronous processing, you must wait a minimum of 2 hours between creation and joining a multi-tenant organization. Furthermore, to allow for asynchronous processing, you must wait up to 4 hours before joining a multi-tenant organization is completed.
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/multiTenantOrganization/joinRequest']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/multiTenantOrganization/joinRequest']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /tenantRelationships/multiTenantOrganization/joinRequest']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/tenantRelationships/multiTenantOrganization/joinRequest',
    paramDefs: [],
    params,
    body,
  };
}
