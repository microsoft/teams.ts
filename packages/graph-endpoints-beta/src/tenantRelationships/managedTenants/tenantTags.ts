import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /tenantRelationships/managedTenants/tenantTags/{tenantTag-id}': Operation<
    '/tenantRelationships/managedTenants/tenantTags/{tenantTag-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/tenantTags': Operation<
    '/tenantRelationships/managedTenants/tenantTags',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/tenantTags/{tenantTag-id}': Operation<
    '/tenantRelationships/managedTenants/tenantTags/{tenantTag-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/tenantTags/{tenantTag-id}': Operation<
    '/tenantRelationships/managedTenants/tenantTags/{tenantTag-id}',
    'patch'
  >;
  'POST /tenantRelationships/managedTenants/tenantTags': Operation<
    '/tenantRelationships/managedTenants/tenantTags',
    'post'
  >;
}

/**
 * `DELETE /tenantRelationships/managedTenants/tenantTags/{tenantTag-id}`
 *
 * Delete a tenantTag object.
 */
export function del(
  params?: IEndpoints['DELETE /tenantRelationships/managedTenants/tenantTags/{tenantTag-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /tenantRelationships/managedTenants/tenantTags/{tenantTag-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/tenantRelationships/managedTenants/tenantTags/{tenantTag-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'tenantTag-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/tenantTags`
 *
 * Get a list of the tenantTag objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/tenantTags']['parameters']
): EndpointRequest<IEndpoints['GET /tenantRelationships/managedTenants/tenantTags']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/tenantTags',
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
 * `GET /tenantRelationships/managedTenants/tenantTags/{tenantTag-id}`
 *
 * Read the properties and relationships of a tenantTag object.
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/tenantTags/{tenantTag-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/tenantTags/{tenantTag-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/tenantTags/{tenantTag-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'tenantTag-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /tenantRelationships/managedTenants/tenantTags/{tenantTag-id}`
 *
 * Update the properties of a tenantTag object.
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/managedTenants/tenantTags/{tenantTag-id}']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/managedTenants/tenantTags/{tenantTag-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /tenantRelationships/managedTenants/tenantTags/{tenantTag-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/tenantRelationships/managedTenants/tenantTags/{tenantTag-id}',
    paramDefs: [{ name: 'tenantTag-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /tenantRelationships/managedTenants/tenantTags`
 *
 * Create a new tenantTag object.
 */
export function create(
  body: IEndpoints['POST /tenantRelationships/managedTenants/tenantTags']['body'],
  params?: IEndpoints['POST /tenantRelationships/managedTenants/tenantTags']['parameters']
): EndpointRequest<IEndpoints['POST /tenantRelationships/managedTenants/tenantTags']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/tenantRelationships/managedTenants/tenantTags',
    paramDefs: [],
    params,
    body,
  };
}
