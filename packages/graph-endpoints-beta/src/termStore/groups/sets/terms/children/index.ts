export * as relations from './relations';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}': Operation<
    '/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}',
    'delete'
  >;
  'GET /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children': Operation<
    '/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children',
    'get'
  >;
  'GET /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}': Operation<
    '/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}',
    'get'
  >;
  'PATCH /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}': Operation<
    '/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}',
    'patch'
  >;
  'POST /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children': Operation<
    '/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children',
    'post'
  >;
  'GET /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}/set': Operation<
    '/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}/set',
    'get'
  >;
}

/**
 * `DELETE /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'set-id', 'term-id', 'term-id1'],
    },
    params,
  };
}

/**
 * `GET /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children`
 *
 * Children of current term.
 */
export function get(
  params?: IEndpoints['GET /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children']['parameters']
): EndpointRequest<
  IEndpoints['GET /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children',
    paramDefs: {
      path: ['group-id', 'set-id', 'term-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}`
 *
 * Children of current term.
 */
export function get$1(
  params?: IEndpoints['GET /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}']['parameters']
): EndpointRequest<
  IEndpoints['GET /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}',
    paramDefs: {
      path: ['group-id', 'set-id', 'term-id', 'term-id1'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}`
 *
 */
export function update(
  body: IEndpoints['PATCH /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}']['body'],
  params?: IEndpoints['PATCH /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}',
    paramDefs: {
      path: ['group-id', 'set-id', 'term-id', 'term-id1'],
    },
    params,
    body,
  };
}

/**
 * `POST /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children`
 *
 */
export function create(
  body: IEndpoints['POST /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children']['body'],
  params?: IEndpoints['POST /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children']['parameters']
): EndpointRequest<
  IEndpoints['POST /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children',
    paramDefs: {
      path: ['group-id', 'set-id', 'term-id'],
    },
    params,
    body,
  };
}

export const set = {
  /**
   * `GET /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}/set`
   *
   * The [set] in which the term is created.
   */
  get: function get(
    params?: IEndpoints['GET /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}/set']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}/set']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}/set',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'set-id', 'term-id', 'term-id1'],
      },
      params,
    };
  },
};
