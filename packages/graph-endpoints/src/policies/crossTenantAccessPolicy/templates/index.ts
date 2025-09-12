import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/crossTenantAccessPolicy/templates': Operation<
    '/policies/crossTenantAccessPolicy/templates',
    'delete'
  >;
  'GET /policies/crossTenantAccessPolicy/templates': Operation<
    '/policies/crossTenantAccessPolicy/templates',
    'get'
  >;
  'PATCH /policies/crossTenantAccessPolicy/templates': Operation<
    '/policies/crossTenantAccessPolicy/templates',
    'patch'
  >;
  'GET /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization': Operation<
    '/policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization',
    'get'
  >;
  'PATCH /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization': Operation<
    '/policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization',
    'patch'
  >;
  'DELETE /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization': Operation<
    '/policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization',
    'delete'
  >;
  'GET /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationPartnerConfiguration': Operation<
    '/policies/crossTenantAccessPolicy/templates/multiTenantOrganizationPartnerConfiguration',
    'get'
  >;
  'PATCH /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationPartnerConfiguration': Operation<
    '/policies/crossTenantAccessPolicy/templates/multiTenantOrganizationPartnerConfiguration',
    'patch'
  >;
  'DELETE /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationPartnerConfiguration': Operation<
    '/policies/crossTenantAccessPolicy/templates/multiTenantOrganizationPartnerConfiguration',
    'delete'
  >;
}

/**
 * `DELETE /policies/crossTenantAccessPolicy/templates`
 *
 */
export function del(
  params?: IEndpoints['DELETE /policies/crossTenantAccessPolicy/templates']['parameters']
): EndpointRequest<IEndpoints['DELETE /policies/crossTenantAccessPolicy/templates']['response']> {
  return {
    method: 'delete',
    path: '/policies/crossTenantAccessPolicy/templates',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /policies/crossTenantAccessPolicy/templates`
 *
 * Represents the base policy in the directory for multitenant organization settings.
 */
export function list(
  params?: IEndpoints['GET /policies/crossTenantAccessPolicy/templates']['parameters']
): EndpointRequest<IEndpoints['GET /policies/crossTenantAccessPolicy/templates']['response']> {
  return {
    method: 'get',
    path: '/policies/crossTenantAccessPolicy/templates',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /policies/crossTenantAccessPolicy/templates`
 *
 */
export function update(
  body: IEndpoints['PATCH /policies/crossTenantAccessPolicy/templates']['body']
): EndpointRequest<IEndpoints['PATCH /policies/crossTenantAccessPolicy/templates']['response']> {
  return {
    method: 'patch',
    path: '/policies/crossTenantAccessPolicy/templates',
    body,
  };
}

export const multiTenantOrganizationIdentitySynchronization = {
  /**
   * `GET /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization`
   *
   * Get the cross-tenant access policy template with user synchronization settings for a multitenant organization.
   */
  get: function get(
    params?: IEndpoints['GET /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization']['response']
  > {
    return {
      method: 'get',
      path: '/policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization`
   *
   * Update the cross-tenant access policy template with user synchronization settings for a multitenant organization.
   */
  update: function update(
    body: IEndpoints['PATCH /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization']['body']
  ): EndpointRequest<
    IEndpoints['PATCH /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization']['response']
  > {
    return {
      method: 'patch',
      path: '/policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization',
      body,
    };
  },
  /**
   * `DELETE /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization']['response']
  > {
    return {
      method: 'delete',
      path: '/policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const multiTenantOrganizationPartnerConfiguration = {
  /**
   * `GET /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationPartnerConfiguration`
   *
   * Get the cross-tenant access policy template with inbound and outbound partner configuration settings for a multitenant organization.
   */
  get: function get(
    params?: IEndpoints['GET /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationPartnerConfiguration']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationPartnerConfiguration']['response']
  > {
    return {
      method: 'get',
      path: '/policies/crossTenantAccessPolicy/templates/multiTenantOrganizationPartnerConfiguration',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationPartnerConfiguration`
   *
   * Update the cross-tenant access policy template with inbound and outbound partner configuration settings for a multitenant organization.
   */
  update: function update(
    body: IEndpoints['PATCH /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationPartnerConfiguration']['body']
  ): EndpointRequest<
    IEndpoints['PATCH /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationPartnerConfiguration']['response']
  > {
    return {
      method: 'patch',
      path: '/policies/crossTenantAccessPolicy/templates/multiTenantOrganizationPartnerConfiguration',
      body,
    };
  },
  /**
   * `DELETE /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationPartnerConfiguration`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationPartnerConfiguration']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationPartnerConfiguration']['response']
  > {
    return {
      method: 'delete',
      path: '/policies/crossTenantAccessPolicy/templates/multiTenantOrganizationPartnerConfiguration',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};
