export * as childrenChildren from './childrenChildren';
export * as relations from './relations';

import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children': Operation<
    '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}',
    'patch'
  >;
  'POST /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children': Operation<
    '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children',
    'post'
  >;
  'GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/set': Operation<
    '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/set',
    'get'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'site-id', 'store-id', 'group-id1', 'set-id', 'term-id'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children`
 *
 * Children terms of set in term [store].
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children',
    paramDefs: {
      path: ['group-id', 'site-id', 'store-id', 'group-id1', 'set-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}`
 *
 * Children terms of set in term [store].
 */
export function get$1(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}',
    paramDefs: {
      path: ['group-id', 'site-id', 'store-id', 'group-id1', 'set-id', 'term-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}']['response']
> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}',
    paramDefs: {
      path: ['group-id', 'site-id', 'store-id', 'group-id1', 'set-id', 'term-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children']['response']
> {
  return {
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children',
    paramDefs: {
      path: ['group-id', 'site-id', 'store-id', 'group-id1', 'set-id'],
    },
    params,
    body,
  };
}

export const set = {
  /**
   * `GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/set`
   *
   * The [set] in which the term is created.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/set']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/set']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/set',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'site-id', 'store-id', 'group-id1', 'set-id', 'term-id'],
      },
      params,
    };
  },
};
