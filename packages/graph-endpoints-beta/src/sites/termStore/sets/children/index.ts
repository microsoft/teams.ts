export * as childrenChildren from './childrenChildren';
export * as relations from './relations';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}': Operation<
    '/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}',
    'delete'
  >;
  'GET /sites/{site-id}/termStore/sets/{set-id}/children': Operation<
    '/sites/{site-id}/termStore/sets/{set-id}/children',
    'get'
  >;
  'GET /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}': Operation<
    '/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}': Operation<
    '/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}',
    'patch'
  >;
  'POST /sites/{site-id}/termStore/sets/{set-id}/children': Operation<
    '/sites/{site-id}/termStore/sets/{set-id}/children',
    'post'
  >;
  'GET /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/set': Operation<
    '/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/set',
    'get'
  >;
}

/**
 * `DELETE /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['site-id', 'set-id', 'term-id'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/termStore/sets/{set-id}/children`
 *
 * Children terms of set in term [store].
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/termStore/sets/{set-id}/children']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/termStore/sets/{set-id}/children']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/termStore/sets/{set-id}/children',
    paramDefs: {
      path: ['site-id', 'set-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}`
 *
 * Children terms of set in term [store].
 */
export function get$1(
  params?: IEndpoints['GET /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}',
    paramDefs: {
      path: ['site-id', 'set-id', 'term-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}',
    paramDefs: {
      path: ['site-id', 'set-id', 'term-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/termStore/sets/{set-id}/children`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/termStore/sets/{set-id}/children']['body'],
  params?: IEndpoints['POST /sites/{site-id}/termStore/sets/{set-id}/children']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/termStore/sets/{set-id}/children']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/termStore/sets/{set-id}/children',
    paramDefs: {
      path: ['site-id', 'set-id'],
    },
    params,
    body,
  };
}

export const set = {
  /**
   * `GET /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/set`
   *
   * The [set] in which the term is created.
   */
  get: function get(
    params?: IEndpoints['GET /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/set']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/set']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/set',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['site-id', 'set-id', 'term-id'],
      },
      params,
    };
  },
};
