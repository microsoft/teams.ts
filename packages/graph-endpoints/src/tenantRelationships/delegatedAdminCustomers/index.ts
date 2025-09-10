import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}': Operation<
    '/tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}',
    'delete'
  >;
  'GET /tenantRelationships/delegatedAdminCustomers': Operation<
    '/tenantRelationships/delegatedAdminCustomers',
    'get'
  >;
  'GET /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}': Operation<
    '/tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}',
    'get'
  >;
  'PATCH /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}': Operation<
    '/tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}',
    'patch'
  >;
  'POST /tenantRelationships/delegatedAdminCustomers': Operation<
    '/tenantRelationships/delegatedAdminCustomers',
    'post'
  >;
  'GET /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails': Operation<
    '/tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails',
    'get'
  >;
  'POST /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails': Operation<
    '/tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails',
    'post'
  >;
  'GET /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails/{delegatedAdminServiceManagementDetail-id}': Operation<
    '/tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails/{delegatedAdminServiceManagementDetail-id}',
    'get'
  >;
  'PATCH /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails/{delegatedAdminServiceManagementDetail-id}': Operation<
    '/tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails/{delegatedAdminServiceManagementDetail-id}',
    'patch'
  >;
  'DELETE /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails/{delegatedAdminServiceManagementDetail-id}': Operation<
    '/tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails/{delegatedAdminServiceManagementDetail-id}',
    'delete'
  >;
}

/**
 * `DELETE /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}']['response']
> {
  return {
    method: 'delete',
    path: '/tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['delegatedAdminCustomer-id'],
    },
    params,
  };
}

/**
 * `GET /tenantRelationships/delegatedAdminCustomers`
 *
 * Get a list of the delegatedAdminCustomer objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/delegatedAdminCustomers']['parameters']
): EndpointRequest<IEndpoints['GET /tenantRelationships/delegatedAdminCustomers']['response']> {
  return {
    method: 'get',
    path: '/tenantRelationships/delegatedAdminCustomers',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}`
 *
 * Read the properties of a delegatedAdminCustomer object.
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}']['response']
> {
  return {
    method: 'get',
    path: '/tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}',
    paramDefs: {
      path: ['delegatedAdminCustomer-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}']['response']
> {
  return {
    method: 'patch',
    path: '/tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}',
    paramDefs: {
      path: ['delegatedAdminCustomer-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /tenantRelationships/delegatedAdminCustomers`
 *
 */
export function create(
  body: IEndpoints['POST /tenantRelationships/delegatedAdminCustomers']['body']
): EndpointRequest<IEndpoints['POST /tenantRelationships/delegatedAdminCustomers']['response']> {
  return {
    method: 'post',
    path: '/tenantRelationships/delegatedAdminCustomers',
    body,
  };
}

export const serviceManagementDetails = {
  /**
   * `GET /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails`
   *
   * Get a list of the delegatedAdminServiceManagementDetail objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails']['response']
  > {
    return {
      method: 'get',
      path: '/tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['delegatedAdminCustomer-id'],
      },
      params,
    };
  },
  /**
   * `POST /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails`
   *
   */
  create: function create(
    body: IEndpoints['POST /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails']['body'],
    params?: IEndpoints['POST /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails']['response']
  > {
    return {
      method: 'post',
      path: '/tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails',
      paramDefs: {
        path: ['delegatedAdminCustomer-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails/{delegatedAdminServiceManagementDetail-id}`
   *
   * Contains the management details of a service in the customer tenant that&#x27;s managed by delegated administration.
   */
  get: function get(
    params?: IEndpoints['GET /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails/{delegatedAdminServiceManagementDetail-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails/{delegatedAdminServiceManagementDetail-id}']['response']
  > {
    return {
      method: 'get',
      path: '/tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails/{delegatedAdminServiceManagementDetail-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['delegatedAdminCustomer-id', 'delegatedAdminServiceManagementDetail-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails/{delegatedAdminServiceManagementDetail-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails/{delegatedAdminServiceManagementDetail-id}']['body'],
    params?: IEndpoints['PATCH /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails/{delegatedAdminServiceManagementDetail-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails/{delegatedAdminServiceManagementDetail-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails/{delegatedAdminServiceManagementDetail-id}',
      paramDefs: {
        path: ['delegatedAdminCustomer-id', 'delegatedAdminServiceManagementDetail-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails/{delegatedAdminServiceManagementDetail-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails/{delegatedAdminServiceManagementDetail-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails/{delegatedAdminServiceManagementDetail-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails/{delegatedAdminServiceManagementDetail-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['delegatedAdminCustomer-id', 'delegatedAdminServiceManagementDetail-id'],
      },
      params,
    };
  },
};
