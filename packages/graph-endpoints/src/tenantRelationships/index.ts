export * as delegatedAdminCustomers from './delegatedAdminCustomers';
export * as delegatedAdminRelationships from './delegatedAdminRelationships';
export * as multiTenantOrganization from './multiTenantOrganization';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /tenantRelationships': Operation<'/tenantRelationships', 'get'>;
  'PATCH /tenantRelationships': Operation<'/tenantRelationships', 'patch'>;
}

/**
 * `GET /tenantRelationships`
 *
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships']['parameters']
): EndpointRequest<IEndpoints['GET /tenantRelationships']['response']> {
  return {
    method: 'get',
    path: '/tenantRelationships',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /tenantRelationships`
 *
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships']['body'],
  params?: IEndpoints['PATCH /tenantRelationships']['parameters']
): EndpointRequest<IEndpoints['PATCH /tenantRelationships']['response']> {
  return {
    method: 'patch',
    path: '/tenantRelationships',
    paramDefs: [],
    params,
    body,
  };
}
