import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /tenantRelationships/managedTenants/auditEvents/{auditEvent-id}': Operation<
    '/tenantRelationships/managedTenants/auditEvents/{auditEvent-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/auditEvents': Operation<
    '/tenantRelationships/managedTenants/auditEvents',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/auditEvents/{auditEvent-id}': Operation<
    '/tenantRelationships/managedTenants/auditEvents/{auditEvent-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/auditEvents/{auditEvent-id}': Operation<
    '/tenantRelationships/managedTenants/auditEvents/{auditEvent-id}',
    'patch'
  >;
  'POST /tenantRelationships/managedTenants/auditEvents': Operation<
    '/tenantRelationships/managedTenants/auditEvents',
    'post'
  >;
}

/**
 * `DELETE /tenantRelationships/managedTenants/auditEvents/{auditEvent-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /tenantRelationships/managedTenants/auditEvents/{auditEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /tenantRelationships/managedTenants/auditEvents/{auditEvent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/tenantRelationships/managedTenants/auditEvents/{auditEvent-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'auditEvent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/auditEvents`
 *
 * Get a list of the auditEvent objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/auditEvents']['parameters']
): EndpointRequest<IEndpoints['GET /tenantRelationships/managedTenants/auditEvents']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/auditEvents',
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
 * `GET /tenantRelationships/managedTenants/auditEvents/{auditEvent-id}`
 *
 * Read the properties and relationships of an auditEvent object.
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/auditEvents/{auditEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/auditEvents/{auditEvent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/auditEvents/{auditEvent-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'auditEvent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /tenantRelationships/managedTenants/auditEvents/{auditEvent-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/managedTenants/auditEvents/{auditEvent-id}']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/managedTenants/auditEvents/{auditEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /tenantRelationships/managedTenants/auditEvents/{auditEvent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/tenantRelationships/managedTenants/auditEvents/{auditEvent-id}',
    paramDefs: [{ name: 'auditEvent-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /tenantRelationships/managedTenants/auditEvents`
 *
 */
export function create(
  body: IEndpoints['POST /tenantRelationships/managedTenants/auditEvents']['body'],
  params?: IEndpoints['POST /tenantRelationships/managedTenants/auditEvents']['parameters']
): EndpointRequest<IEndpoints['POST /tenantRelationships/managedTenants/auditEvents']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/tenantRelationships/managedTenants/auditEvents',
    paramDefs: [],
    params,
    body,
  };
}
