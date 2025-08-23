import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests/{delegatedAdminRelationshipRequest-id}': Operation<
    '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests/{delegatedAdminRelationshipRequest-id}',
    'delete'
  >;
  'GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests': Operation<
    '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests',
    'get'
  >;
  'GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests/{delegatedAdminRelationshipRequest-id}': Operation<
    '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests/{delegatedAdminRelationshipRequest-id}',
    'get'
  >;
  'PATCH /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests/{delegatedAdminRelationshipRequest-id}': Operation<
    '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests/{delegatedAdminRelationshipRequest-id}',
    'patch'
  >;
  'POST /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests': Operation<
    '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests',
    'post'
  >;
}

/**
 * `DELETE /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests/{delegatedAdminRelationshipRequest-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests/{delegatedAdminRelationshipRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests/{delegatedAdminRelationshipRequest-id}']['response']
> {
  return {
    method: 'delete',
    path: '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests/{delegatedAdminRelationshipRequest-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'delegatedAdminRelationship-id', in: 'path' },
      { name: 'delegatedAdminRelationshipRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests`
 *
 * Get a list of the delegatedAdminRelationshipRequest objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests']['response']
> {
  return {
    method: 'get',
    path: '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'delegatedAdminRelationship-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests/{delegatedAdminRelationshipRequest-id}`
 *
 * Read the properties and relationships of a delegatedAdminRelationshipRequest object.
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests/{delegatedAdminRelationshipRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests/{delegatedAdminRelationshipRequest-id}']['response']
> {
  return {
    method: 'get',
    path: '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests/{delegatedAdminRelationshipRequest-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'delegatedAdminRelationship-id', in: 'path' },
      { name: 'delegatedAdminRelationshipRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests/{delegatedAdminRelationshipRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests/{delegatedAdminRelationshipRequest-id}']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests/{delegatedAdminRelationshipRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests/{delegatedAdminRelationshipRequest-id}']['response']
> {
  return {
    method: 'patch',
    path: '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests/{delegatedAdminRelationshipRequest-id}',
    paramDefs: [
      { name: 'delegatedAdminRelationship-id', in: 'path' },
      { name: 'delegatedAdminRelationshipRequest-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests`
 *
 * Create a new delegatedAdminRelationshipRequest object.
 */
export function create(
  body: IEndpoints['POST /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests']['body'],
  params?: IEndpoints['POST /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests']['parameters']
): EndpointRequest<
  IEndpoints['POST /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests']['response']
> {
  return {
    method: 'post',
    path: '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests',
    paramDefs: [{ name: 'delegatedAdminRelationship-id', in: 'path' }],
    params,
    body,
  };
}
