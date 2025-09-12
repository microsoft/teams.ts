export * as crossTenantPartners from './crossTenantPartners';
export * as crossTenantSyncPolicyPartners from './crossTenantSyncPolicyPartners';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/deletedItems': Operation<'/policies/deletedItems', 'delete'>;
  'GET /policies/deletedItems': Operation<'/policies/deletedItems', 'get'>;
  'PATCH /policies/deletedItems': Operation<'/policies/deletedItems', 'patch'>;
}

/**
 * `DELETE /policies/deletedItems`
 *
 */
export function del(
  params?: IEndpoints['DELETE /policies/deletedItems']['parameters']
): EndpointRequest<IEndpoints['DELETE /policies/deletedItems']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/policies/deletedItems',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /policies/deletedItems`
 *
 * Policies that support soft-delete functionality and can be restored within 30 days.
 */
export function list(
  params?: IEndpoints['GET /policies/deletedItems']['parameters']
): EndpointRequest<IEndpoints['GET /policies/deletedItems']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/deletedItems',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /policies/deletedItems`
 *
 */
export function update(
  body: IEndpoints['PATCH /policies/deletedItems']['body']
): EndpointRequest<IEndpoints['PATCH /policies/deletedItems']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/policies/deletedItems',
    body,
  };
}
