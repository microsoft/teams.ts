export * as childrenChildren from './childrenChildren';
export * as relations from './relations';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}': Operation<
    '/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}',
    'delete'
  >;
  'GET /termStore/groups/{group-id}/sets/{set-id}/children': Operation<
    '/termStore/groups/{group-id}/sets/{set-id}/children',
    'get'
  >;
  'GET /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}': Operation<
    '/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}',
    'get'
  >;
  'PATCH /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}': Operation<
    '/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}',
    'patch'
  >;
  'POST /termStore/groups/{group-id}/sets/{set-id}/children': Operation<
    '/termStore/groups/{group-id}/sets/{set-id}/children',
    'post'
  >;
  'GET /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/set': Operation<
    '/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/set',
    'get'
  >;
}

/**
 * `DELETE /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'set-id', 'term-id'],
    },
    params,
  };
}

/**
 * `GET /termStore/groups/{group-id}/sets/{set-id}/children`
 *
 * Children terms of set in term [store].
 */
export function get(
  params?: IEndpoints['GET /termStore/groups/{group-id}/sets/{set-id}/children']['parameters']
): EndpointRequest<
  IEndpoints['GET /termStore/groups/{group-id}/sets/{set-id}/children']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/termStore/groups/{group-id}/sets/{set-id}/children',
    paramDefs: {
      path: ['group-id', 'set-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}`
 *
 * Children terms of set in term [store].
 */
export function get$1(
  params?: IEndpoints['GET /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}',
    paramDefs: {
      path: ['group-id', 'set-id', 'term-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}']['body'],
  params?: IEndpoints['PATCH /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}',
    paramDefs: {
      path: ['group-id', 'set-id', 'term-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /termStore/groups/{group-id}/sets/{set-id}/children`
 *
 */
export function create(
  body: IEndpoints['POST /termStore/groups/{group-id}/sets/{set-id}/children']['body'],
  params?: IEndpoints['POST /termStore/groups/{group-id}/sets/{set-id}/children']['parameters']
): EndpointRequest<
  IEndpoints['POST /termStore/groups/{group-id}/sets/{set-id}/children']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/termStore/groups/{group-id}/sets/{set-id}/children',
    paramDefs: {
      path: ['group-id', 'set-id'],
    },
    params,
    body,
  };
}

export const set = {
  /**
   * `GET /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/set`
   *
   * The [set] in which the term is created.
   */
  get: function get(
    params?: IEndpoints['GET /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/set']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/set']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/set',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'set-id', 'term-id'],
      },
      params,
    };
  },
};
