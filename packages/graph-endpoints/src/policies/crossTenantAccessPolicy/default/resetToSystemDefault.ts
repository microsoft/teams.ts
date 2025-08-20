import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /policies/crossTenantAccessPolicy/default/resetToSystemDefault': Operation<
    '/policies/crossTenantAccessPolicy/default/resetToSystemDefault',
    'post'
  >;
}

/**
 * `POST /policies/crossTenantAccessPolicy/default/resetToSystemDefault`
 *
 * Reset any changes made to the default configuration in a cross-tenant access policy back to the system default.
 */
export function create(
  body: IEndpoints['POST /policies/crossTenantAccessPolicy/default/resetToSystemDefault']['body'],
  params?: IEndpoints['POST /policies/crossTenantAccessPolicy/default/resetToSystemDefault']['parameters']
): EndpointRequest<
  IEndpoints['POST /policies/crossTenantAccessPolicy/default/resetToSystemDefault']['response']
> {
  return {
    method: 'post',
    path: '/policies/crossTenantAccessPolicy/default/resetToSystemDefault',
    paramDefs: [],
    params,
    body,
  };
}
