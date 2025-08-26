export * as serviceManagementDetails from './serviceManagementDetails';

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
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'delegatedAdminCustomer-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'delegatedAdminCustomer-id', in: 'path' },
    ],
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
    paramDefs: [{ name: 'delegatedAdminCustomer-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /tenantRelationships/delegatedAdminCustomers`
 *
 */
export function create(
  body: IEndpoints['POST /tenantRelationships/delegatedAdminCustomers']['body'],
  params?: IEndpoints['POST /tenantRelationships/delegatedAdminCustomers']['parameters']
): EndpointRequest<IEndpoints['POST /tenantRelationships/delegatedAdminCustomers']['response']> {
  return {
    method: 'post',
    path: '/tenantRelationships/delegatedAdminCustomers',
    paramDefs: [],
    params,
    body,
  };
}
