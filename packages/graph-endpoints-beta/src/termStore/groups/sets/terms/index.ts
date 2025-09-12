export * as children from './children';
export * as relations from './relations';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}': Operation<
    '/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}',
    'delete'
  >;
  'GET /termStore/groups/{group-id}/sets/{set-id}/terms': Operation<
    '/termStore/groups/{group-id}/sets/{set-id}/terms',
    'get'
  >;
  'GET /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}': Operation<
    '/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}',
    'get'
  >;
  'PATCH /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}': Operation<
    '/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}',
    'patch'
  >;
  'POST /termStore/groups/{group-id}/sets/{set-id}/terms': Operation<
    '/termStore/groups/{group-id}/sets/{set-id}/terms',
    'post'
  >;
  'GET /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/set': Operation<
    '/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/set',
    'get'
  >;
}

/**
 * `DELETE /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'set-id', 'term-id'],
    },
    params,
  };
}

/**
 * `GET /termStore/groups/{group-id}/sets/{set-id}/terms`
 *
 * Read the properties and relationships of a term object.
 */
export function list(
  params?: IEndpoints['GET /termStore/groups/{group-id}/sets/{set-id}/terms']['parameters']
): EndpointRequest<IEndpoints['GET /termStore/groups/{group-id}/sets/{set-id}/terms']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/termStore/groups/{group-id}/sets/{set-id}/terms',
    paramDefs: {
      path: ['group-id', 'set-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}`
 *
 * Read the properties and relationships of a term object.
 */
export function get(
  params?: IEndpoints['GET /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}',
    paramDefs: {
      path: ['group-id', 'set-id', 'term-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}']['body'],
  params?: IEndpoints['PATCH /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}',
    paramDefs: {
      path: ['group-id', 'set-id', 'term-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /termStore/groups/{group-id}/sets/{set-id}/terms`
 *
 */
export function create(
  body: IEndpoints['POST /termStore/groups/{group-id}/sets/{set-id}/terms']['body'],
  params?: IEndpoints['POST /termStore/groups/{group-id}/sets/{set-id}/terms']['parameters']
): EndpointRequest<
  IEndpoints['POST /termStore/groups/{group-id}/sets/{set-id}/terms']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/termStore/groups/{group-id}/sets/{set-id}/terms',
    paramDefs: {
      path: ['group-id', 'set-id'],
    },
    params,
    body,
  };
}

export const set = {
  /**
   * `GET /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/set`
   *
   * The [set] in which the term is created.
   */
  get: function get(
    params?: IEndpoints['GET /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/set']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/set']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/set',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'set-id', 'term-id'],
      },
      params,
    };
  },
};
