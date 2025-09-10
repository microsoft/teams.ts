export * as relations from './relations';

import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}': Operation<
    '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}',
    'delete'
  >;
  'GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children': Operation<
    '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children',
    'get'
  >;
  'GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}': Operation<
    '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}',
    'get'
  >;
  'PATCH /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}': Operation<
    '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}',
    'patch'
  >;
  'POST /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children': Operation<
    '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children',
    'post'
  >;
  'GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/set': Operation<
    '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/set',
    'get'
  >;
}

/**
 * `DELETE /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}',
    paramDefs: {
      header: ['If-Match'],
      path: ['site-id', 'group-id', 'set-id', 'term-id', 'term-id1'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children`
 *
 * Children of current term.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children',
    paramDefs: {
      path: ['site-id', 'group-id', 'set-id', 'term-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}`
 *
 * Children of current term.
 */
export function get$1(
  params?: IEndpoints['GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}',
    paramDefs: {
      path: ['site-id', 'group-id', 'set-id', 'term-id', 'term-id1'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}',
    paramDefs: {
      path: ['site-id', 'group-id', 'set-id', 'term-id', 'term-id1'],
    },
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children']['body'],
  params?: IEndpoints['POST /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children',
    paramDefs: {
      path: ['site-id', 'group-id', 'set-id', 'term-id'],
    },
    params,
    body,
  };
}

export const set = {
  /**
   * `GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/set`
   *
   * The [set] in which the term is created.
   */
  get: function get(
    params?: IEndpoints['GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/set']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/set']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/set',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['site-id', 'group-id', 'set-id', 'term-id', 'term-id1'],
      },
      params,
    };
  },
};
