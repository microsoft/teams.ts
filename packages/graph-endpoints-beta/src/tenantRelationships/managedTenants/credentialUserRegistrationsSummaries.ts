import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /tenantRelationships/managedTenants/credentialUserRegistrationsSummaries/{credentialUserRegistrationsSummary-id}': Operation<
    '/tenantRelationships/managedTenants/credentialUserRegistrationsSummaries/{credentialUserRegistrationsSummary-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/credentialUserRegistrationsSummaries': Operation<
    '/tenantRelationships/managedTenants/credentialUserRegistrationsSummaries',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/credentialUserRegistrationsSummaries/{credentialUserRegistrationsSummary-id}': Operation<
    '/tenantRelationships/managedTenants/credentialUserRegistrationsSummaries/{credentialUserRegistrationsSummary-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/credentialUserRegistrationsSummaries/{credentialUserRegistrationsSummary-id}': Operation<
    '/tenantRelationships/managedTenants/credentialUserRegistrationsSummaries/{credentialUserRegistrationsSummary-id}',
    'patch'
  >;
  'POST /tenantRelationships/managedTenants/credentialUserRegistrationsSummaries': Operation<
    '/tenantRelationships/managedTenants/credentialUserRegistrationsSummaries',
    'post'
  >;
}

/**
 * `DELETE /tenantRelationships/managedTenants/credentialUserRegistrationsSummaries/{credentialUserRegistrationsSummary-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /tenantRelationships/managedTenants/credentialUserRegistrationsSummaries/{credentialUserRegistrationsSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /tenantRelationships/managedTenants/credentialUserRegistrationsSummaries/{credentialUserRegistrationsSummary-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/tenantRelationships/managedTenants/credentialUserRegistrationsSummaries/{credentialUserRegistrationsSummary-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'credentialUserRegistrationsSummary-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/credentialUserRegistrationsSummaries`
 *
 * Get a list of the credentialUserRegistrationsSummary objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/credentialUserRegistrationsSummaries']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/credentialUserRegistrationsSummaries']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/credentialUserRegistrationsSummaries',
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
 * `GET /tenantRelationships/managedTenants/credentialUserRegistrationsSummaries/{credentialUserRegistrationsSummary-id}`
 *
 * Read the properties and relationships of a credentialUserRegistrationsSummary object.
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/credentialUserRegistrationsSummaries/{credentialUserRegistrationsSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/credentialUserRegistrationsSummaries/{credentialUserRegistrationsSummary-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/credentialUserRegistrationsSummaries/{credentialUserRegistrationsSummary-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'credentialUserRegistrationsSummary-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /tenantRelationships/managedTenants/credentialUserRegistrationsSummaries/{credentialUserRegistrationsSummary-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/managedTenants/credentialUserRegistrationsSummaries/{credentialUserRegistrationsSummary-id}']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/managedTenants/credentialUserRegistrationsSummaries/{credentialUserRegistrationsSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /tenantRelationships/managedTenants/credentialUserRegistrationsSummaries/{credentialUserRegistrationsSummary-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/tenantRelationships/managedTenants/credentialUserRegistrationsSummaries/{credentialUserRegistrationsSummary-id}',
    paramDefs: [{ name: 'credentialUserRegistrationsSummary-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /tenantRelationships/managedTenants/credentialUserRegistrationsSummaries`
 *
 */
export function create(
  body: IEndpoints['POST /tenantRelationships/managedTenants/credentialUserRegistrationsSummaries']['body'],
  params?: IEndpoints['POST /tenantRelationships/managedTenants/credentialUserRegistrationsSummaries']['parameters']
): EndpointRequest<
  IEndpoints['POST /tenantRelationships/managedTenants/credentialUserRegistrationsSummaries']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/tenantRelationships/managedTenants/credentialUserRegistrationsSummaries',
    paramDefs: [],
    params,
    body,
  };
}
