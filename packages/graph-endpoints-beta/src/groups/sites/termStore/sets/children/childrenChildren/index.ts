export * as relations from './relations';

import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}',
    'patch'
  >;
  'POST /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children',
    'post'
  >;
  'GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}/set': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}/set',
    'get'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'site-id', 'set-id', 'term-id', 'term-id1'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children`
 *
 * Children of current term.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children',
    paramDefs: {
      path: ['group-id', 'site-id', 'set-id', 'term-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}`
 *
 * Children of current term.
 */
export function get$1(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}',
    paramDefs: {
      path: ['group-id', 'site-id', 'set-id', 'term-id', 'term-id1'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}',
    paramDefs: {
      path: ['group-id', 'site-id', 'set-id', 'term-id', 'term-id1'],
    },
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children',
    paramDefs: {
      path: ['group-id', 'site-id', 'set-id', 'term-id'],
    },
    params,
    body,
  };
}

export const set = {
  /**
   * `GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}/set`
   *
   * The [set] in which the term is created.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}/set']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}/set']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}/set',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'site-id', 'set-id', 'term-id', 'term-id1'],
      },
      params,
    };
  },
};
