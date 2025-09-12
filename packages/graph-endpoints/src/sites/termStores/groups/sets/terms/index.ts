export * as children from './children';
export * as relations from './relations';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/terms/{term-id}': Operation<
    '/sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/terms/{term-id}',
    'delete'
  >;
  'GET /sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/terms': Operation<
    '/sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/terms',
    'get'
  >;
  'GET /sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/terms/{term-id}': Operation<
    '/sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/terms/{term-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/terms/{term-id}': Operation<
    '/sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/terms/{term-id}',
    'patch'
  >;
  'POST /sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/terms': Operation<
    '/sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/terms',
    'post'
  >;
  'GET /sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/terms/{term-id}/set': Operation<
    '/sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/terms/{term-id}/set',
    'get'
  >;
}

/**
 * `DELETE /sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/terms/{term-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/terms/{term-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/terms/{term-id}']['response']
> {
  return {
    method: 'delete',
    path: '/sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/terms/{term-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['site-id', 'store-id', 'group-id', 'set-id', 'term-id'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/terms`
 *
 * All the terms under the set.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/terms']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/terms']['response']
> {
  return {
    method: 'get',
    path: '/sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/terms',
    paramDefs: {
      path: ['site-id', 'store-id', 'group-id', 'set-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/terms/{term-id}`
 *
 * All the terms under the set.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/terms/{term-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/terms/{term-id}']['response']
> {
  return {
    method: 'get',
    path: '/sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/terms/{term-id}',
    paramDefs: {
      path: ['site-id', 'store-id', 'group-id', 'set-id', 'term-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/terms/{term-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/terms/{term-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/terms/{term-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/terms/{term-id}']['response']
> {
  return {
    method: 'patch',
    path: '/sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/terms/{term-id}',
    paramDefs: {
      path: ['site-id', 'store-id', 'group-id', 'set-id', 'term-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/terms`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/terms']['body'],
  params?: IEndpoints['POST /sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/terms']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/terms']['response']
> {
  return {
    method: 'post',
    path: '/sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/terms',
    paramDefs: {
      path: ['site-id', 'store-id', 'group-id', 'set-id'],
    },
    params,
    body,
  };
}

export const set = {
  /**
   * `GET /sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/terms/{term-id}/set`
   *
   * The [set] in which the term is created.
   */
  get: function get(
    params?: IEndpoints['GET /sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/terms/{term-id}/set']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/terms/{term-id}/set']['response']
  > {
    return {
      method: 'get',
      path: '/sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/terms/{term-id}/set',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['site-id', 'store-id', 'group-id', 'set-id', 'term-id'],
      },
      params,
    };
  },
};
