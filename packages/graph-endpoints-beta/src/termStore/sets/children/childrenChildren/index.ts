export * as relations from './relations';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /termStore/sets/{set-id}/children/{term-id}/children/{term-id1}': Operation<
    '/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}',
    'delete'
  >;
  'GET /termStore/sets/{set-id}/children/{term-id}/children': Operation<
    '/termStore/sets/{set-id}/children/{term-id}/children',
    'get'
  >;
  'GET /termStore/sets/{set-id}/children/{term-id}/children/{term-id1}': Operation<
    '/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}',
    'get'
  >;
  'PATCH /termStore/sets/{set-id}/children/{term-id}/children/{term-id1}': Operation<
    '/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}',
    'patch'
  >;
  'POST /termStore/sets/{set-id}/children/{term-id}/children': Operation<
    '/termStore/sets/{set-id}/children/{term-id}/children',
    'post'
  >;
  'GET /termStore/sets/{set-id}/children/{term-id}/children/{term-id1}/set': Operation<
    '/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}/set',
    'get'
  >;
}

/**
 * `DELETE /termStore/sets/{set-id}/children/{term-id}/children/{term-id1}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /termStore/sets/{set-id}/children/{term-id}/children/{term-id1}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /termStore/sets/{set-id}/children/{term-id}/children/{term-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}',
    paramDefs: {
      header: ['If-Match'],
      path: ['set-id', 'term-id', 'term-id1'],
    },
    params,
  };
}

/**
 * `GET /termStore/sets/{set-id}/children/{term-id}/children`
 *
 * Children of current term.
 */
export function get(
  params?: IEndpoints['GET /termStore/sets/{set-id}/children/{term-id}/children']['parameters']
): EndpointRequest<
  IEndpoints['GET /termStore/sets/{set-id}/children/{term-id}/children']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/termStore/sets/{set-id}/children/{term-id}/children',
    paramDefs: {
      path: ['set-id', 'term-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /termStore/sets/{set-id}/children/{term-id}/children/{term-id1}`
 *
 * Children of current term.
 */
export function get$1(
  params?: IEndpoints['GET /termStore/sets/{set-id}/children/{term-id}/children/{term-id1}']['parameters']
): EndpointRequest<
  IEndpoints['GET /termStore/sets/{set-id}/children/{term-id}/children/{term-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}',
    paramDefs: {
      path: ['set-id', 'term-id', 'term-id1'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /termStore/sets/{set-id}/children/{term-id}/children/{term-id1}`
 *
 */
export function update(
  body: IEndpoints['PATCH /termStore/sets/{set-id}/children/{term-id}/children/{term-id1}']['body'],
  params?: IEndpoints['PATCH /termStore/sets/{set-id}/children/{term-id}/children/{term-id1}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /termStore/sets/{set-id}/children/{term-id}/children/{term-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}',
    paramDefs: {
      path: ['set-id', 'term-id', 'term-id1'],
    },
    params,
    body,
  };
}

/**
 * `POST /termStore/sets/{set-id}/children/{term-id}/children`
 *
 */
export function create(
  body: IEndpoints['POST /termStore/sets/{set-id}/children/{term-id}/children']['body'],
  params?: IEndpoints['POST /termStore/sets/{set-id}/children/{term-id}/children']['parameters']
): EndpointRequest<
  IEndpoints['POST /termStore/sets/{set-id}/children/{term-id}/children']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/termStore/sets/{set-id}/children/{term-id}/children',
    paramDefs: {
      path: ['set-id', 'term-id'],
    },
    params,
    body,
  };
}

export const set = {
  /**
   * `GET /termStore/sets/{set-id}/children/{term-id}/children/{term-id1}/set`
   *
   * The [set] in which the term is created.
   */
  get: function get(
    params?: IEndpoints['GET /termStore/sets/{set-id}/children/{term-id}/children/{term-id1}/set']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /termStore/sets/{set-id}/children/{term-id}/children/{term-id1}/set']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}/set',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['set-id', 'term-id', 'term-id1'],
      },
      params,
    };
  },
};
