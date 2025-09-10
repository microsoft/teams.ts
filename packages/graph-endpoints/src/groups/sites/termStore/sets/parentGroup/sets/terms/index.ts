export * as children from './children';
export * as relations from './relations';

import type { EndpointRequest, Operation } from './../../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}',
    'patch'
  >;
  'POST /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms',
    'post'
  >;
  'GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}/set': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}/set',
    'get'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'site-id', 'set-id', 'set-id1', 'term-id'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms`
 *
 * All the terms under the set.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms',
    paramDefs: {
      path: ['group-id', 'site-id', 'set-id', 'set-id1'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}`
 *
 * All the terms under the set.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}',
    paramDefs: {
      path: ['group-id', 'site-id', 'set-id', 'set-id1', 'term-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}']['response']
> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}',
    paramDefs: {
      path: ['group-id', 'site-id', 'set-id', 'set-id1', 'term-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms']['response']
> {
  return {
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms',
    paramDefs: {
      path: ['group-id', 'site-id', 'set-id', 'set-id1'],
    },
    params,
    body,
  };
}

export const set = {
  /**
   * `GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}/set`
   *
   * The [set] in which the term is created.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}/set']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}/set']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}/set',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'site-id', 'set-id', 'set-id1', 'term-id'],
      },
      params,
    };
  },
};
