import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments/{delegatedAdminAccessAssignment-id}': Operation<
    '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments/{delegatedAdminAccessAssignment-id}',
    'delete'
  >;
  'GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments': Operation<
    '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments',
    'get'
  >;
  'GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments/{delegatedAdminAccessAssignment-id}': Operation<
    '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments/{delegatedAdminAccessAssignment-id}',
    'get'
  >;
  'PATCH /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments/{delegatedAdminAccessAssignment-id}': Operation<
    '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments/{delegatedAdminAccessAssignment-id}',
    'patch'
  >;
  'POST /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments': Operation<
    '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments',
    'post'
  >;
}

/**
 * `DELETE /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments/{delegatedAdminAccessAssignment-id}`
 *
 * Delete a delegatedAdminAccessAssignment object.
 */
export function del(
  params?: IEndpoints['DELETE /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments/{delegatedAdminAccessAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments/{delegatedAdminAccessAssignment-id}']['response']
> {
  return {
    method: 'delete',
    path: '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments/{delegatedAdminAccessAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'delegatedAdminRelationship-id', in: 'path' },
      { name: 'delegatedAdminAccessAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments`
 *
 * Get a list of the delegatedAdminAccessAssignment objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments']['response']
> {
  return {
    method: 'get',
    path: '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments',
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
 * `GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments/{delegatedAdminAccessAssignment-id}`
 *
 * Read the properties of a delegatedAdminAccessAssignment object.
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments/{delegatedAdminAccessAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments/{delegatedAdminAccessAssignment-id}']['response']
> {
  return {
    method: 'get',
    path: '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments/{delegatedAdminAccessAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'delegatedAdminRelationship-id', in: 'path' },
      { name: 'delegatedAdminAccessAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments/{delegatedAdminAccessAssignment-id}`
 *
 * Update the properties of a delegatedAdminAccessAssignment object.
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments/{delegatedAdminAccessAssignment-id}']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments/{delegatedAdminAccessAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments/{delegatedAdminAccessAssignment-id}']['response']
> {
  return {
    method: 'patch',
    path: '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments/{delegatedAdminAccessAssignment-id}',
    paramDefs: [
      { name: 'delegatedAdminRelationship-id', in: 'path' },
      { name: 'delegatedAdminAccessAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments`
 *
 * Create a new delegatedAdminAccessAssignment object.
 */
export function create(
  body: IEndpoints['POST /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments']['body'],
  params?: IEndpoints['POST /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments']['response']
> {
  return {
    method: 'post',
    path: '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments',
    paramDefs: [{ name: 'delegatedAdminRelationship-id', in: 'path' }],
    params,
    body,
  };
}
