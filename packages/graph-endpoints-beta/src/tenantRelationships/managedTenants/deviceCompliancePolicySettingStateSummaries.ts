import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}': Operation<
    '/tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries': Operation<
    '/tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}': Operation<
    '/tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}': Operation<
    '/tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}',
    'patch'
  >;
  'POST /tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries': Operation<
    '/tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries',
    'post'
  >;
}

/**
 * `DELETE /tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceCompliancePolicySettingStateSummary-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries`
 *
 * Get a list of the deviceCompliancePolicySettingStateSummary objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries',
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
 * `GET /tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}`
 *
 * Read the properties and relationships of a deviceCompliancePolicySettingStateSummary object.
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceCompliancePolicySettingStateSummary-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}',
    paramDefs: [{ name: 'deviceCompliancePolicySettingStateSummary-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries`
 *
 */
export function create(
  body: IEndpoints['POST /tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries']['body'],
  params?: IEndpoints['POST /tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries']['parameters']
): EndpointRequest<
  IEndpoints['POST /tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries',
    paramDefs: [],
    params,
    body,
  };
}
