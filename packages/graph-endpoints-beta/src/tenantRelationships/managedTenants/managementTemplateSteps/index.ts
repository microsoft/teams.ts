export * as acceptedVersion from './acceptedVersion';
export * as managementTemplate from './managementTemplate';
export * as versions from './versions';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}': Operation<
    '/tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/managementTemplateSteps': Operation<
    '/tenantRelationships/managedTenants/managementTemplateSteps',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}': Operation<
    '/tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}': Operation<
    '/tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}',
    'patch'
  >;
  'POST /tenantRelationships/managedTenants/managementTemplateSteps': Operation<
    '/tenantRelationships/managedTenants/managementTemplateSteps',
    'post'
  >;
}

/**
 * `DELETE /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'managementTemplateStep-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/managementTemplateSteps`
 *
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateSteps']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateSteps']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managementTemplateSteps',
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
 * `GET /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managementTemplateStep-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}',
    paramDefs: [{ name: 'managementTemplateStep-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /tenantRelationships/managedTenants/managementTemplateSteps`
 *
 */
export function create(
  body: IEndpoints['POST /tenantRelationships/managedTenants/managementTemplateSteps']['body'],
  params?: IEndpoints['POST /tenantRelationships/managedTenants/managementTemplateSteps']['parameters']
): EndpointRequest<
  IEndpoints['POST /tenantRelationships/managedTenants/managementTemplateSteps']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/tenantRelationships/managedTenants/managementTemplateSteps',
    paramDefs: [],
    params,
    body,
  };
}
