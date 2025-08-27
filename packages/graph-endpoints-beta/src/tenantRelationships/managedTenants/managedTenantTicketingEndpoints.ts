import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /tenantRelationships/managedTenants/managedTenantTicketingEndpoints/{managedTenantTicketingEndpoint-id}': Operation<
    '/tenantRelationships/managedTenants/managedTenantTicketingEndpoints/{managedTenantTicketingEndpoint-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/managedTenantTicketingEndpoints': Operation<
    '/tenantRelationships/managedTenants/managedTenantTicketingEndpoints',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/managedTenantTicketingEndpoints/{managedTenantTicketingEndpoint-id}': Operation<
    '/tenantRelationships/managedTenants/managedTenantTicketingEndpoints/{managedTenantTicketingEndpoint-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/managedTenantTicketingEndpoints/{managedTenantTicketingEndpoint-id}': Operation<
    '/tenantRelationships/managedTenants/managedTenantTicketingEndpoints/{managedTenantTicketingEndpoint-id}',
    'patch'
  >;
  'POST /tenantRelationships/managedTenants/managedTenantTicketingEndpoints': Operation<
    '/tenantRelationships/managedTenants/managedTenantTicketingEndpoints',
    'post'
  >;
}

/**
 * `DELETE /tenantRelationships/managedTenants/managedTenantTicketingEndpoints/{managedTenantTicketingEndpoint-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /tenantRelationships/managedTenants/managedTenantTicketingEndpoints/{managedTenantTicketingEndpoint-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /tenantRelationships/managedTenants/managedTenantTicketingEndpoints/{managedTenantTicketingEndpoint-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/tenantRelationships/managedTenants/managedTenantTicketingEndpoints/{managedTenantTicketingEndpoint-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'managedTenantTicketingEndpoint-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/managedTenantTicketingEndpoints`
 *
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managedTenantTicketingEndpoints']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managedTenantTicketingEndpoints']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managedTenantTicketingEndpoints',
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
 * `GET /tenantRelationships/managedTenants/managedTenantTicketingEndpoints/{managedTenantTicketingEndpoint-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managedTenantTicketingEndpoints/{managedTenantTicketingEndpoint-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managedTenantTicketingEndpoints/{managedTenantTicketingEndpoint-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managedTenantTicketingEndpoints/{managedTenantTicketingEndpoint-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedTenantTicketingEndpoint-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /tenantRelationships/managedTenants/managedTenantTicketingEndpoints/{managedTenantTicketingEndpoint-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/managedTenants/managedTenantTicketingEndpoints/{managedTenantTicketingEndpoint-id}']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/managedTenants/managedTenantTicketingEndpoints/{managedTenantTicketingEndpoint-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /tenantRelationships/managedTenants/managedTenantTicketingEndpoints/{managedTenantTicketingEndpoint-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/tenantRelationships/managedTenants/managedTenantTicketingEndpoints/{managedTenantTicketingEndpoint-id}',
    paramDefs: [{ name: 'managedTenantTicketingEndpoint-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /tenantRelationships/managedTenants/managedTenantTicketingEndpoints`
 *
 */
export function create(
  body: IEndpoints['POST /tenantRelationships/managedTenants/managedTenantTicketingEndpoints']['body'],
  params?: IEndpoints['POST /tenantRelationships/managedTenants/managedTenantTicketingEndpoints']['parameters']
): EndpointRequest<
  IEndpoints['POST /tenantRelationships/managedTenants/managedTenantTicketingEndpoints']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/tenantRelationships/managedTenants/managedTenantTicketingEndpoints',
    paramDefs: [],
    params,
    body,
  };
}
