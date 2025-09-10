export * as childrenChildren from './childrenChildren';
export * as relations from './relations';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}': Operation<
    '/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}',
    'delete'
  >;
  'GET /termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children': Operation<
    '/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children',
    'get'
  >;
  'GET /termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}': Operation<
    '/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}',
    'get'
  >;
  'PATCH /termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}': Operation<
    '/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}',
    'patch'
  >;
  'POST /termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children': Operation<
    '/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children',
    'post'
  >;
  'GET /termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/set': Operation<
    '/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/set',
    'get'
  >;
}

/**
 * `DELETE /termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['set-id', 'set-id1', 'term-id'],
    },
    params,
  };
}

/**
 * `GET /termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children`
 *
 * Children terms of set in term [store].
 */
export function get(
  params?: IEndpoints['GET /termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children']['parameters']
): EndpointRequest<
  IEndpoints['GET /termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children',
    paramDefs: {
      path: ['set-id', 'set-id1'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}`
 *
 * Children terms of set in term [store].
 */
export function get$1(
  params?: IEndpoints['GET /termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}',
    paramDefs: {
      path: ['set-id', 'set-id1', 'term-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}']['body'],
  params?: IEndpoints['PATCH /termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}',
    paramDefs: {
      path: ['set-id', 'set-id1', 'term-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children`
 *
 */
export function create(
  body: IEndpoints['POST /termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children']['body'],
  params?: IEndpoints['POST /termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children']['parameters']
): EndpointRequest<
  IEndpoints['POST /termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children',
    paramDefs: {
      path: ['set-id', 'set-id1'],
    },
    params,
    body,
  };
}

export const set = {
  /**
   * `GET /termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/set`
   *
   * The [set] in which the term is created.
   */
  get: function get(
    params?: IEndpoints['GET /termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/set']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/set']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/set',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['set-id', 'set-id1', 'term-id'],
      },
      params,
    };
  },
};
