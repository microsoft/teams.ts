import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization': Operation<
    '/policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization',
    'delete'
  >;
  'GET /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization': Operation<
    '/policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization',
    'get'
  >;
  'PATCH /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization': Operation<
    '/policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization',
    'patch'
  >;
}

/**
 * `DELETE /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization`
 *
 */
export function del(
  params?: IEndpoints['DELETE /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization']['response']
> {
  return {
    method: 'delete',
    path: '/policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization`
 *
 * Get the cross-tenant access policy template with user synchronization settings for a multitenant organization.
 */
export function get(
  params?: IEndpoints['GET /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization']['response']
> {
  return {
    method: 'get',
    path: '/policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization`
 *
 * Update the cross-tenant access policy template with user synchronization settings for a multitenant organization.
 */
export function update(
  body: IEndpoints['PATCH /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization']['body'],
  params?: IEndpoints['PATCH /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization']['response']
> {
  return {
    method: 'patch',
    path: '/policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization',
    paramDefs: [],
    params,
    body,
  };
}
