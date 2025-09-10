export * as children from './children';
export * as relations from './relations';

import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}': Operation<
    '/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}',
    'delete'
  >;
  'GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms': Operation<
    '/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms',
    'get'
  >;
  'GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}': Operation<
    '/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}': Operation<
    '/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}',
    'patch'
  >;
  'POST /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms': Operation<
    '/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms',
    'post'
  >;
  'GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}/set': Operation<
    '/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}/set',
    'get'
  >;
}

/**
 * `DELETE /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['site-id', 'set-id', 'set-id1', 'term-id'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms`
 *
 * All the terms under the set.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms',
    paramDefs: {
      path: ['site-id', 'set-id', 'set-id1'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}`
 *
 * All the terms under the set.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}',
    paramDefs: {
      path: ['site-id', 'set-id', 'set-id1', 'term-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}',
    paramDefs: {
      path: ['site-id', 'set-id', 'set-id1', 'term-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms']['body'],
  params?: IEndpoints['POST /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms',
    paramDefs: {
      path: ['site-id', 'set-id', 'set-id1'],
    },
    params,
    body,
  };
}

export const set = {
  /**
   * `GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}/set`
   *
   * The [set] in which the term is created.
   */
  get: function get(
    params?: IEndpoints['GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}/set']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}/set']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}/set',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['site-id', 'set-id', 'set-id1', 'term-id'],
      },
      params,
    };
  },
};
