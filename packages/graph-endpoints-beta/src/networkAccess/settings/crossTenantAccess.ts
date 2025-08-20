import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /networkAccess/settings/crossTenantAccess': Operation<
    '/networkAccess/settings/crossTenantAccess',
    'delete'
  >;
  'GET /networkAccess/settings/crossTenantAccess': Operation<
    '/networkAccess/settings/crossTenantAccess',
    'get'
  >;
  'PATCH /networkAccess/settings/crossTenantAccess': Operation<
    '/networkAccess/settings/crossTenantAccess',
    'patch'
  >;
}

/**
 * `DELETE /networkAccess/settings/crossTenantAccess`
 *
 */
export function del(
  params?: IEndpoints['DELETE /networkAccess/settings/crossTenantAccess']['parameters']
): EndpointRequest<IEndpoints['DELETE /networkAccess/settings/crossTenantAccess']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/networkAccess/settings/crossTenantAccess',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /networkAccess/settings/crossTenantAccess`
 *
 * Retrieve the cross-tenant access settings, which include network packet tagging to enforce Tenant Restrictions Policies (TRv2 Policies) aimed at preventing data exfiltration to external tenants.
 */
export function list(
  params?: IEndpoints['GET /networkAccess/settings/crossTenantAccess']['parameters']
): EndpointRequest<IEndpoints['GET /networkAccess/settings/crossTenantAccess']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/settings/crossTenantAccess',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /networkAccess/settings/crossTenantAccess`
 *
 * Update the cross-tenant access settings to include network packet tagging for enforcing Tenant Restrictions Policies (TRv2 Policies) that prevent data exfiltration to external tenants.
 */
export function update(
  body: IEndpoints['PATCH /networkAccess/settings/crossTenantAccess']['body'],
  params?: IEndpoints['PATCH /networkAccess/settings/crossTenantAccess']['parameters']
): EndpointRequest<IEndpoints['PATCH /networkAccess/settings/crossTenantAccess']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/networkAccess/settings/crossTenantAccess',
    paramDefs: [],
    params,
    body,
  };
}
