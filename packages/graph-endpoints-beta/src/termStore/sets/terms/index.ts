export * as children from './children';
export * as relations from './relations';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /termStore/sets/{set-id}/terms/{term-id}': Operation<
    '/termStore/sets/{set-id}/terms/{term-id}',
    'delete'
  >;
  'GET /termStore/sets/{set-id}/terms': Operation<'/termStore/sets/{set-id}/terms', 'get'>;
  'GET /termStore/sets/{set-id}/terms/{term-id}': Operation<
    '/termStore/sets/{set-id}/terms/{term-id}',
    'get'
  >;
  'PATCH /termStore/sets/{set-id}/terms/{term-id}': Operation<
    '/termStore/sets/{set-id}/terms/{term-id}',
    'patch'
  >;
  'POST /termStore/sets/{set-id}/terms': Operation<'/termStore/sets/{set-id}/terms', 'post'>;
  'GET /termStore/sets/{set-id}/terms/{term-id}/set': Operation<
    '/termStore/sets/{set-id}/terms/{term-id}/set',
    'get'
  >;
}

/**
 * `DELETE /termStore/sets/{set-id}/terms/{term-id}`
 *
 * Delete a term object.
 */
export function del(
  params?: IEndpoints['DELETE /termStore/sets/{set-id}/terms/{term-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /termStore/sets/{set-id}/terms/{term-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/termStore/sets/{set-id}/terms/{term-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['set-id', 'term-id'],
    },
    params,
  };
}

/**
 * `GET /termStore/sets/{set-id}/terms`
 *
 * All the terms under the set.
 */
export function list(
  params?: IEndpoints['GET /termStore/sets/{set-id}/terms']['parameters']
): EndpointRequest<IEndpoints['GET /termStore/sets/{set-id}/terms']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/termStore/sets/{set-id}/terms',
    paramDefs: {
      path: ['set-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /termStore/sets/{set-id}/terms/{term-id}`
 *
 * All the terms under the set.
 */
export function get(
  params?: IEndpoints['GET /termStore/sets/{set-id}/terms/{term-id}']['parameters']
): EndpointRequest<IEndpoints['GET /termStore/sets/{set-id}/terms/{term-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/termStore/sets/{set-id}/terms/{term-id}',
    paramDefs: {
      path: ['set-id', 'term-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /termStore/sets/{set-id}/terms/{term-id}`
 *
 * Update the properties of a term object.
 */
export function update(
  body: IEndpoints['PATCH /termStore/sets/{set-id}/terms/{term-id}']['body'],
  params?: IEndpoints['PATCH /termStore/sets/{set-id}/terms/{term-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /termStore/sets/{set-id}/terms/{term-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/termStore/sets/{set-id}/terms/{term-id}',
    paramDefs: {
      path: ['set-id', 'term-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /termStore/sets/{set-id}/terms`
 *
 */
export function create(
  body: IEndpoints['POST /termStore/sets/{set-id}/terms']['body'],
  params?: IEndpoints['POST /termStore/sets/{set-id}/terms']['parameters']
): EndpointRequest<IEndpoints['POST /termStore/sets/{set-id}/terms']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/termStore/sets/{set-id}/terms',
    paramDefs: {
      path: ['set-id'],
    },
    params,
    body,
  };
}

export const set = {
  /**
   * `GET /termStore/sets/{set-id}/terms/{term-id}/set`
   *
   * The [set] in which the term is created.
   */
  get: function get(
    params?: IEndpoints['GET /termStore/sets/{set-id}/terms/{term-id}/set']['parameters']
  ): EndpointRequest<IEndpoints['GET /termStore/sets/{set-id}/terms/{term-id}/set']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/termStore/sets/{set-id}/terms/{term-id}/set',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['set-id', 'term-id'],
      },
      params,
    };
  },
};
