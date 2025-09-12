import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/crossTenantAccessPolicy/default': Operation<
    '/policies/crossTenantAccessPolicy/default',
    'delete'
  >;
  'GET /policies/crossTenantAccessPolicy/default': Operation<
    '/policies/crossTenantAccessPolicy/default',
    'get'
  >;
  'PATCH /policies/crossTenantAccessPolicy/default': Operation<
    '/policies/crossTenantAccessPolicy/default',
    'patch'
  >;
  'POST /policies/crossTenantAccessPolicy/default/resetToSystemDefault': Operation<
    '/policies/crossTenantAccessPolicy/default/resetToSystemDefault',
    'post'
  >;
}

/**
 * `DELETE /policies/crossTenantAccessPolicy/default`
 *
 */
export function del(
  params?: IEndpoints['DELETE /policies/crossTenantAccessPolicy/default']['parameters']
): EndpointRequest<IEndpoints['DELETE /policies/crossTenantAccessPolicy/default']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/policies/crossTenantAccessPolicy/default',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /policies/crossTenantAccessPolicy/default`
 *
 * Read the default configuration of a cross-tenant access policy. This default configuration may be the service default assigned by Microsoft Entra ID (isServiceDefault is true) or may be customized in your tenant (isServiceDefault is false).
 */
export function get(
  params?: IEndpoints['GET /policies/crossTenantAccessPolicy/default']['parameters']
): EndpointRequest<IEndpoints['GET /policies/crossTenantAccessPolicy/default']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/crossTenantAccessPolicy/default',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /policies/crossTenantAccessPolicy/default`
 *
 * Update the default configuration of a cross-tenant access policy.
 */
export function update(
  body: IEndpoints['PATCH /policies/crossTenantAccessPolicy/default']['body']
): EndpointRequest<IEndpoints['PATCH /policies/crossTenantAccessPolicy/default']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/policies/crossTenantAccessPolicy/default',
    body,
  };
}

export const resetToSystemDefault = {
  /**
   * `POST /policies/crossTenantAccessPolicy/default/resetToSystemDefault`
   *
   * Reset any changes made to the default configuration in a cross-tenant access policy back to the system default.
   */
  create: function create(): EndpointRequest<
    IEndpoints['POST /policies/crossTenantAccessPolicy/default/resetToSystemDefault']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/policies/crossTenantAccessPolicy/default/resetToSystemDefault',
    };
  },
};
