export * as children from './children';
export * as relations from './relations';

import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}',
    'patch'
  >;
  'POST /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms',
    'post'
  >;
  'GET /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}/set': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}/set',
    'get'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'site-id', 'group-id1', 'set-id', 'term-id'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms`
 *
 * All the terms under the set.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms',
    paramDefs: {
      path: ['group-id', 'site-id', 'group-id1', 'set-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}`
 *
 * All the terms under the set.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}',
    paramDefs: {
      path: ['group-id', 'site-id', 'group-id1', 'set-id', 'term-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}',
    paramDefs: {
      path: ['group-id', 'site-id', 'group-id1', 'set-id', 'term-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms',
    paramDefs: {
      path: ['group-id', 'site-id', 'group-id1', 'set-id'],
    },
    params,
    body,
  };
}

export const set = {
  /**
   * `GET /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}/set`
   *
   * The [set] in which the term is created.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}/set']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}/set']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}/set',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'site-id', 'group-id1', 'set-id', 'term-id'],
      },
      params,
    };
  },
};
