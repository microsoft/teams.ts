import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /tenantRelationships/managedTenants/managementTemplateStepTenantSummaries/{managementTemplateStepTenantSummary-id}': Operation<
    '/tenantRelationships/managedTenants/managementTemplateStepTenantSummaries/{managementTemplateStepTenantSummary-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/managementTemplateStepTenantSummaries': Operation<
    '/tenantRelationships/managedTenants/managementTemplateStepTenantSummaries',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/managementTemplateStepTenantSummaries/{managementTemplateStepTenantSummary-id}': Operation<
    '/tenantRelationships/managedTenants/managementTemplateStepTenantSummaries/{managementTemplateStepTenantSummary-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/managementTemplateStepTenantSummaries/{managementTemplateStepTenantSummary-id}': Operation<
    '/tenantRelationships/managedTenants/managementTemplateStepTenantSummaries/{managementTemplateStepTenantSummary-id}',
    'patch'
  >;
  'POST /tenantRelationships/managedTenants/managementTemplateStepTenantSummaries': Operation<
    '/tenantRelationships/managedTenants/managementTemplateStepTenantSummaries',
    'post'
  >;
}

/**
 * `DELETE /tenantRelationships/managedTenants/managementTemplateStepTenantSummaries/{managementTemplateStepTenantSummary-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /tenantRelationships/managedTenants/managementTemplateStepTenantSummaries/{managementTemplateStepTenantSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /tenantRelationships/managedTenants/managementTemplateStepTenantSummaries/{managementTemplateStepTenantSummary-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/tenantRelationships/managedTenants/managementTemplateStepTenantSummaries/{managementTemplateStepTenantSummary-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'managementTemplateStepTenantSummary-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/managementTemplateStepTenantSummaries`
 *
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateStepTenantSummaries']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateStepTenantSummaries']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managementTemplateStepTenantSummaries',
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
 * `GET /tenantRelationships/managedTenants/managementTemplateStepTenantSummaries/{managementTemplateStepTenantSummary-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateStepTenantSummaries/{managementTemplateStepTenantSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateStepTenantSummaries/{managementTemplateStepTenantSummary-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managementTemplateStepTenantSummaries/{managementTemplateStepTenantSummary-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managementTemplateStepTenantSummary-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /tenantRelationships/managedTenants/managementTemplateStepTenantSummaries/{managementTemplateStepTenantSummary-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/managedTenants/managementTemplateStepTenantSummaries/{managementTemplateStepTenantSummary-id}']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/managedTenants/managementTemplateStepTenantSummaries/{managementTemplateStepTenantSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /tenantRelationships/managedTenants/managementTemplateStepTenantSummaries/{managementTemplateStepTenantSummary-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/tenantRelationships/managedTenants/managementTemplateStepTenantSummaries/{managementTemplateStepTenantSummary-id}',
    paramDefs: [{ name: 'managementTemplateStepTenantSummary-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /tenantRelationships/managedTenants/managementTemplateStepTenantSummaries`
 *
 */
export function create(
  body: IEndpoints['POST /tenantRelationships/managedTenants/managementTemplateStepTenantSummaries']['body'],
  params?: IEndpoints['POST /tenantRelationships/managedTenants/managementTemplateStepTenantSummaries']['parameters']
): EndpointRequest<
  IEndpoints['POST /tenantRelationships/managedTenants/managementTemplateStepTenantSummaries']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/tenantRelationships/managedTenants/managementTemplateStepTenantSummaries',
    paramDefs: [],
    params,
    body,
  };
}
