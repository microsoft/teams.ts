import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails/{delegatedAdminServiceManagementDetail-id}': Operation<
    '/tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails/{delegatedAdminServiceManagementDetail-id}',
    'delete'
  >;
  'GET /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails': Operation<
    '/tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails',
    'get'
  >;
  'GET /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails/{delegatedAdminServiceManagementDetail-id}': Operation<
    '/tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails/{delegatedAdminServiceManagementDetail-id}',
    'get'
  >;
  'PATCH /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails/{delegatedAdminServiceManagementDetail-id}': Operation<
    '/tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails/{delegatedAdminServiceManagementDetail-id}',
    'patch'
  >;
  'POST /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails': Operation<
    '/tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails',
    'post'
  >;
}

/**
 * `DELETE /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails/{delegatedAdminServiceManagementDetail-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails/{delegatedAdminServiceManagementDetail-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails/{delegatedAdminServiceManagementDetail-id}']['response']
> {
  return {
    method: 'delete',
    path: '/tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails/{delegatedAdminServiceManagementDetail-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'delegatedAdminCustomer-id', in: 'path' },
      { name: 'delegatedAdminServiceManagementDetail-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails`
 *
 * Get a list of the delegatedAdminServiceManagementDetail objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails']['response']
> {
  return {
    method: 'get',
    path: '/tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'delegatedAdminCustomer-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails/{delegatedAdminServiceManagementDetail-id}`
 *
 * Contains the management details of a service in the customer tenant that&#x27;s managed by delegated administration.
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails/{delegatedAdminServiceManagementDetail-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails/{delegatedAdminServiceManagementDetail-id}']['response']
> {
  return {
    method: 'get',
    path: '/tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails/{delegatedAdminServiceManagementDetail-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'delegatedAdminCustomer-id', in: 'path' },
      { name: 'delegatedAdminServiceManagementDetail-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails/{delegatedAdminServiceManagementDetail-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails/{delegatedAdminServiceManagementDetail-id}']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails/{delegatedAdminServiceManagementDetail-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails/{delegatedAdminServiceManagementDetail-id}']['response']
> {
  return {
    method: 'patch',
    path: '/tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails/{delegatedAdminServiceManagementDetail-id}',
    paramDefs: [
      { name: 'delegatedAdminCustomer-id', in: 'path' },
      { name: 'delegatedAdminServiceManagementDetail-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails`
 *
 */
export function create(
  body: IEndpoints['POST /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails']['body'],
  params?: IEndpoints['POST /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails']['parameters']
): EndpointRequest<
  IEndpoints['POST /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails']['response']
> {
  return {
    method: 'post',
    path: '/tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails',
    paramDefs: [{ name: 'delegatedAdminCustomer-id', in: 'path' }],
    params,
    body,
  };
}
