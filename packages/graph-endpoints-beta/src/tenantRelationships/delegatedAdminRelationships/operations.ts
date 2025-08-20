import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations/{delegatedAdminRelationshipOperation-id}': Operation<
    '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations/{delegatedAdminRelationshipOperation-id}',
    'delete'
  >;
  'GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations': Operation<
    '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations',
    'get'
  >;
  'GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations/{delegatedAdminRelationshipOperation-id}': Operation<
    '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations/{delegatedAdminRelationshipOperation-id}',
    'get'
  >;
  'PATCH /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations/{delegatedAdminRelationshipOperation-id}': Operation<
    '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations/{delegatedAdminRelationshipOperation-id}',
    'patch'
  >;
  'POST /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations': Operation<
    '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations',
    'post'
  >;
}

/**
 * `DELETE /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations/{delegatedAdminRelationshipOperation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations/{delegatedAdminRelationshipOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations/{delegatedAdminRelationshipOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations/{delegatedAdminRelationshipOperation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'delegatedAdminRelationship-id', in: 'path' },
      { name: 'delegatedAdminRelationshipOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations`
 *
 * Get a list of the delegatedAdminRelationshipOperation objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations',
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
 * `GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations/{delegatedAdminRelationshipOperation-id}`
 *
 * Read the properties of a delegatedAdminRelationshipOperation object.
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations/{delegatedAdminRelationshipOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations/{delegatedAdminRelationshipOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations/{delegatedAdminRelationshipOperation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'delegatedAdminRelationship-id', in: 'path' },
      { name: 'delegatedAdminRelationshipOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations/{delegatedAdminRelationshipOperation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations/{delegatedAdminRelationshipOperation-id}']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations/{delegatedAdminRelationshipOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations/{delegatedAdminRelationshipOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations/{delegatedAdminRelationshipOperation-id}',
    paramDefs: [
      { name: 'delegatedAdminRelationship-id', in: 'path' },
      { name: 'delegatedAdminRelationshipOperation-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations`
 *
 */
export function create(
  body: IEndpoints['POST /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations']['body'],
  params?: IEndpoints['POST /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations']['parameters']
): EndpointRequest<
  IEndpoints['POST /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations',
    paramDefs: [{ name: 'delegatedAdminRelationship-id', in: 'path' }],
    params,
    body,
  };
}
