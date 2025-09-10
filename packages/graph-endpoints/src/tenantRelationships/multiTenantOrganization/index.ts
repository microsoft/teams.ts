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
  'GET /tenantRelationships/multiTenantOrganization/joinRequest': Operation<
    '/tenantRelationships/multiTenantOrganization/joinRequest',
    'get'
  >;
  'PATCH /tenantRelationships/multiTenantOrganization/joinRequest': Operation<
    '/tenantRelationships/multiTenantOrganization/joinRequest',
    'patch'
  >;
  'GET /tenantRelationships/multiTenantOrganization/tenants': Operation<
    '/tenantRelationships/multiTenantOrganization/tenants',
    'get'
  >;
  'POST /tenantRelationships/multiTenantOrganization/tenants': Operation<
    '/tenantRelationships/multiTenantOrganization/tenants',
    'post'
  >;
  'GET /tenantRelationships/multiTenantOrganization/tenants/{multiTenantOrganizationMember-id}': Operation<
    '/tenantRelationships/multiTenantOrganization/tenants/{multiTenantOrganizationMember-id}',
    'get'
  >;
  'PATCH /tenantRelationships/multiTenantOrganization/tenants/{multiTenantOrganizationMember-id}': Operation<
    '/tenantRelationships/multiTenantOrganization/tenants/{multiTenantOrganizationMember-id}',
    'patch'
  >;
  'DELETE /tenantRelationships/multiTenantOrganization/tenants/{multiTenantOrganizationMember-id}': Operation<
    '/tenantRelationships/multiTenantOrganization/tenants/{multiTenantOrganizationMember-id}',
    'delete'
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
    method: 'get',
    path: '/tenantRelationships/multiTenantOrganization',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /tenantRelationships/multiTenantOrganization`
 *
 * Update the properties of a multitenant organization.
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/multiTenantOrganization']['body']
): EndpointRequest<IEndpoints['PATCH /tenantRelationships/multiTenantOrganization']['response']> {
  return {
    method: 'patch',
    path: '/tenantRelationships/multiTenantOrganization',
    body,
  };
}

export const joinRequest = {
  /**
   * `GET /tenantRelationships/multiTenantOrganization/joinRequest`
   *
   * Get the status of a tenant joining a multitenant organization.
   */
  get: function get(
    params?: IEndpoints['GET /tenantRelationships/multiTenantOrganization/joinRequest']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/multiTenantOrganization/joinRequest']['response']
  > {
    return {
      method: 'get',
      path: '/tenantRelationships/multiTenantOrganization/joinRequest',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /tenantRelationships/multiTenantOrganization/joinRequest`
   *
   * Join a multitenant organization, after the owner of the multitenant organization has added your tenant to the multitenant organization as pending. Before a tenant added to a multitenant organization can participate in the multitenant organization, the administrator of the joining tenant must submit a join request. To allow for asynchronous processing, you must wait up to 2 hours before joining a multitenant organization is completed.
   */
  update: function update(
    body: IEndpoints['PATCH /tenantRelationships/multiTenantOrganization/joinRequest']['body']
  ): EndpointRequest<
    IEndpoints['PATCH /tenantRelationships/multiTenantOrganization/joinRequest']['response']
  > {
    return {
      method: 'patch',
      path: '/tenantRelationships/multiTenantOrganization/joinRequest',
      body,
    };
  },
};

export const tenants = {
  /**
   * `GET /tenantRelationships/multiTenantOrganization/tenants`
   *
   * List the tenants and their properties in the multitenant organization.
   */
  list: function list(
    params?: IEndpoints['GET /tenantRelationships/multiTenantOrganization/tenants']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/multiTenantOrganization/tenants']['response']
  > {
    return {
      method: 'get',
      path: '/tenantRelationships/multiTenantOrganization/tenants',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /tenantRelationships/multiTenantOrganization/tenants`
   *
   * Add a tenant to a multitenant organization. The administrator of an owner tenant has the permissions to add tenants to the multitenant organization. The added tenant is in the pending state until the administrator of the added tenant joins the multitenant organization by submitting a join request. A tenant can be part of only one multitenant organization.
   */
  create: function create(
    body: IEndpoints['POST /tenantRelationships/multiTenantOrganization/tenants']['body']
  ): EndpointRequest<
    IEndpoints['POST /tenantRelationships/multiTenantOrganization/tenants']['response']
  > {
    return {
      method: 'post',
      path: '/tenantRelationships/multiTenantOrganization/tenants',
      body,
    };
  },
  /**
   * `GET /tenantRelationships/multiTenantOrganization/tenants/{multiTenantOrganizationMember-id}`
   *
   * Get a tenant and its properties in the multitenant organization.
   */
  get: function get(
    params?: IEndpoints['GET /tenantRelationships/multiTenantOrganization/tenants/{multiTenantOrganizationMember-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/multiTenantOrganization/tenants/{multiTenantOrganizationMember-id}']['response']
  > {
    return {
      method: 'get',
      path: '/tenantRelationships/multiTenantOrganization/tenants/{multiTenantOrganizationMember-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['multiTenantOrganizationMember-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /tenantRelationships/multiTenantOrganization/tenants/{multiTenantOrganizationMember-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /tenantRelationships/multiTenantOrganization/tenants/{multiTenantOrganizationMember-id}']['body'],
    params?: IEndpoints['PATCH /tenantRelationships/multiTenantOrganization/tenants/{multiTenantOrganizationMember-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /tenantRelationships/multiTenantOrganization/tenants/{multiTenantOrganizationMember-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/tenantRelationships/multiTenantOrganization/tenants/{multiTenantOrganizationMember-id}',
      paramDefs: {
        path: ['multiTenantOrganizationMember-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /tenantRelationships/multiTenantOrganization/tenants/{multiTenantOrganizationMember-id}`
   *
   * Remove a tenant from a multitenant organization. A tenant can be removed in the following scenarios:
   */
  del: function del(
    params?: IEndpoints['DELETE /tenantRelationships/multiTenantOrganization/tenants/{multiTenantOrganizationMember-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /tenantRelationships/multiTenantOrganization/tenants/{multiTenantOrganizationMember-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/tenantRelationships/multiTenantOrganization/tenants/{multiTenantOrganizationMember-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['multiTenantOrganizationMember-id'],
      },
      params,
    };
  },
};
