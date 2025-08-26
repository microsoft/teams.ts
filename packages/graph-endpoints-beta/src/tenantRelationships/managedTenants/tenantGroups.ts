import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /tenantRelationships/managedTenants/tenantGroups/{tenantGroup-id}': Operation<
    '/tenantRelationships/managedTenants/tenantGroups/{tenantGroup-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/tenantGroups': Operation<
    '/tenantRelationships/managedTenants/tenantGroups',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/tenantGroups/{tenantGroup-id}': Operation<
    '/tenantRelationships/managedTenants/tenantGroups/{tenantGroup-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/tenantGroups/{tenantGroup-id}': Operation<
    '/tenantRelationships/managedTenants/tenantGroups/{tenantGroup-id}',
    'patch'
  >;
  'POST /tenantRelationships/managedTenants/tenantGroups': Operation<
    '/tenantRelationships/managedTenants/tenantGroups',
    'post'
  >;
}

/**
 * `DELETE /tenantRelationships/managedTenants/tenantGroups/{tenantGroup-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /tenantRelationships/managedTenants/tenantGroups/{tenantGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /tenantRelationships/managedTenants/tenantGroups/{tenantGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/tenantRelationships/managedTenants/tenantGroups/{tenantGroup-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'tenantGroup-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/tenantGroups`
 *
 * Get a list of the tenantGroup objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/tenantGroups']['parameters']
): EndpointRequest<IEndpoints['GET /tenantRelationships/managedTenants/tenantGroups']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/tenantGroups',
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
 * `GET /tenantRelationships/managedTenants/tenantGroups/{tenantGroup-id}`
 *
 * Read the properties and relationships of a tenantGroup object.
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/tenantGroups/{tenantGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/tenantGroups/{tenantGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/tenantGroups/{tenantGroup-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'tenantGroup-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /tenantRelationships/managedTenants/tenantGroups/{tenantGroup-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/managedTenants/tenantGroups/{tenantGroup-id}']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/managedTenants/tenantGroups/{tenantGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /tenantRelationships/managedTenants/tenantGroups/{tenantGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/tenantRelationships/managedTenants/tenantGroups/{tenantGroup-id}',
    paramDefs: [{ name: 'tenantGroup-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /tenantRelationships/managedTenants/tenantGroups`
 *
 */
export function create(
  body: IEndpoints['POST /tenantRelationships/managedTenants/tenantGroups']['body'],
  params?: IEndpoints['POST /tenantRelationships/managedTenants/tenantGroups']['parameters']
): EndpointRequest<
  IEndpoints['POST /tenantRelationships/managedTenants/tenantGroups']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/tenantRelationships/managedTenants/tenantGroups',
    paramDefs: [],
    params,
    body,
  };
}
