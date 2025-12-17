export * as namedLocations from './namedLocations';
export * as policies from './policies';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identity/conditionalAccess/deletedItems': Operation<
    '/identity/conditionalAccess/deletedItems',
    'delete'
  >;
  'GET /identity/conditionalAccess/deletedItems': Operation<
    '/identity/conditionalAccess/deletedItems',
    'get'
  >;
  'PATCH /identity/conditionalAccess/deletedItems': Operation<
    '/identity/conditionalAccess/deletedItems',
    'patch'
  >;
}

/**
 * `DELETE /identity/conditionalAccess/deletedItems`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identity/conditionalAccess/deletedItems']['parameters']
): EndpointRequest<IEndpoints['DELETE /identity/conditionalAccess/deletedItems']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identity/conditionalAccess/deletedItems',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /identity/conditionalAccess/deletedItems`
 *
 * Read-only. Nullable. Returns a collection of the deleted Conditional Access objects.
 */
export function list(
  params?: IEndpoints['GET /identity/conditionalAccess/deletedItems']['parameters']
): EndpointRequest<IEndpoints['GET /identity/conditionalAccess/deletedItems']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identity/conditionalAccess/deletedItems',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identity/conditionalAccess/deletedItems`
 *
 */
export function update(
  body: IEndpoints['PATCH /identity/conditionalAccess/deletedItems']['body']
): EndpointRequest<IEndpoints['PATCH /identity/conditionalAccess/deletedItems']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identity/conditionalAccess/deletedItems',
    body,
  };
}
