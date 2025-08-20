export * as acceptedFor from './acceptedFor';
export * as deployments from './deployments';
export * as templateStep from './templateStep';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}': Operation<
    '/tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/managementTemplateStepVersions': Operation<
    '/tenantRelationships/managedTenants/managementTemplateStepVersions',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}': Operation<
    '/tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}': Operation<
    '/tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}',
    'patch'
  >;
  'POST /tenantRelationships/managedTenants/managementTemplateStepVersions': Operation<
    '/tenantRelationships/managedTenants/managementTemplateStepVersions',
    'post'
  >;
}

/**
 * `DELETE /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'managementTemplateStepVersion-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/managementTemplateStepVersions`
 *
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateStepVersions']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateStepVersions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managementTemplateStepVersions',
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
 * `GET /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managementTemplateStepVersion-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}',
    paramDefs: [{ name: 'managementTemplateStepVersion-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /tenantRelationships/managedTenants/managementTemplateStepVersions`
 *
 */
export function create(
  body: IEndpoints['POST /tenantRelationships/managedTenants/managementTemplateStepVersions']['body'],
  params?: IEndpoints['POST /tenantRelationships/managedTenants/managementTemplateStepVersions']['parameters']
): EndpointRequest<
  IEndpoints['POST /tenantRelationships/managedTenants/managementTemplateStepVersions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/tenantRelationships/managedTenants/managementTemplateStepVersions',
    paramDefs: [],
    params,
    body,
  };
}
