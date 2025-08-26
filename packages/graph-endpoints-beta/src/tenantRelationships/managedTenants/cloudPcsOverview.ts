import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /tenantRelationships/managedTenants/cloudPcsOverview/{cloudPcOverview-tenantId}': Operation<
    '/tenantRelationships/managedTenants/cloudPcsOverview/{cloudPcOverview-tenantId}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/cloudPcsOverview': Operation<
    '/tenantRelationships/managedTenants/cloudPcsOverview',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/cloudPcsOverview/{cloudPcOverview-tenantId}': Operation<
    '/tenantRelationships/managedTenants/cloudPcsOverview/{cloudPcOverview-tenantId}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/cloudPcsOverview/{cloudPcOverview-tenantId}': Operation<
    '/tenantRelationships/managedTenants/cloudPcsOverview/{cloudPcOverview-tenantId}',
    'patch'
  >;
  'POST /tenantRelationships/managedTenants/cloudPcsOverview': Operation<
    '/tenantRelationships/managedTenants/cloudPcsOverview',
    'post'
  >;
}

/**
 * `DELETE /tenantRelationships/managedTenants/cloudPcsOverview/{cloudPcOverview-tenantId}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /tenantRelationships/managedTenants/cloudPcsOverview/{cloudPcOverview-tenantId}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /tenantRelationships/managedTenants/cloudPcsOverview/{cloudPcOverview-tenantId}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/tenantRelationships/managedTenants/cloudPcsOverview/{cloudPcOverview-tenantId}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'cloudPcOverview-tenantId', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/cloudPcsOverview`
 *
 * Get a list of the cloudPcOverview objects and their properties.
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/cloudPcsOverview']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/cloudPcsOverview']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/cloudPcsOverview',
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
 * `GET /tenantRelationships/managedTenants/cloudPcsOverview/{cloudPcOverview-tenantId}`
 *
 * Read the properties and relationships of a cloudPcOverview object.
 */
export function get$1(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/cloudPcsOverview/{cloudPcOverview-tenantId}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/cloudPcsOverview/{cloudPcOverview-tenantId}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/cloudPcsOverview/{cloudPcOverview-tenantId}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'cloudPcOverview-tenantId', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /tenantRelationships/managedTenants/cloudPcsOverview/{cloudPcOverview-tenantId}`
 *
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/managedTenants/cloudPcsOverview/{cloudPcOverview-tenantId}']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/managedTenants/cloudPcsOverview/{cloudPcOverview-tenantId}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /tenantRelationships/managedTenants/cloudPcsOverview/{cloudPcOverview-tenantId}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/tenantRelationships/managedTenants/cloudPcsOverview/{cloudPcOverview-tenantId}',
    paramDefs: [{ name: 'cloudPcOverview-tenantId', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /tenantRelationships/managedTenants/cloudPcsOverview`
 *
 */
export function create(
  body: IEndpoints['POST /tenantRelationships/managedTenants/cloudPcsOverview']['body'],
  params?: IEndpoints['POST /tenantRelationships/managedTenants/cloudPcsOverview']['parameters']
): EndpointRequest<
  IEndpoints['POST /tenantRelationships/managedTenants/cloudPcsOverview']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/tenantRelationships/managedTenants/cloudPcsOverview',
    paramDefs: [],
    params,
    body,
  };
}
