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
 * Get the status of a tenant joining a multitenant organization.
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/multiTenantOrganization/joinRequest']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/multiTenantOrganization/joinRequest']['response']
> {
  return {
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
 * Join a multitenant organization, after the owner of the multitenant organization has added your tenant to the multitenant organization as pending. Before a tenant added to a multitenant organization can participate in the multitenant organization, the administrator of the joining tenant must submit a join request. To allow for asynchronous processing, you must wait up to 2 hours before joining a multitenant organization is completed.
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/multiTenantOrganization/joinRequest']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/multiTenantOrganization/joinRequest']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /tenantRelationships/multiTenantOrganization/joinRequest']['response']
> {
  return {
    method: 'patch',
    path: '/tenantRelationships/multiTenantOrganization/joinRequest',
    paramDefs: [],
    params,
    body,
  };
}
