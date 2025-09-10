export * as children from './children';
export * as relations from './relations';
export * as terms from './terms';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /termStore/groups/{group-id}/sets/{set-id}': Operation<
    '/termStore/groups/{group-id}/sets/{set-id}',
    'delete'
  >;
  'GET /termStore/groups/{group-id}/sets': Operation<'/termStore/groups/{group-id}/sets', 'get'>;
  'GET /termStore/groups/{group-id}/sets/{set-id}': Operation<
    '/termStore/groups/{group-id}/sets/{set-id}',
    'get'
  >;
  'PATCH /termStore/groups/{group-id}/sets/{set-id}': Operation<
    '/termStore/groups/{group-id}/sets/{set-id}',
    'patch'
  >;
  'POST /termStore/groups/{group-id}/sets': Operation<'/termStore/groups/{group-id}/sets', 'post'>;
  'GET /termStore/groups/{group-id}/sets/{set-id}/parentGroup': Operation<
    '/termStore/groups/{group-id}/sets/{set-id}/parentGroup',
    'get'
  >;
  'PATCH /termStore/groups/{group-id}/sets/{set-id}/parentGroup': Operation<
    '/termStore/groups/{group-id}/sets/{set-id}/parentGroup',
    'patch'
  >;
  'DELETE /termStore/groups/{group-id}/sets/{set-id}/parentGroup': Operation<
    '/termStore/groups/{group-id}/sets/{set-id}/parentGroup',
    'delete'
  >;
}

/**
 * `DELETE /termStore/groups/{group-id}/sets/{set-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /termStore/groups/{group-id}/sets/{set-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /termStore/groups/{group-id}/sets/{set-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/termStore/groups/{group-id}/sets/{set-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'set-id'],
    },
    params,
  };
}

/**
 * `GET /termStore/groups/{group-id}/sets`
 *
 * Get a list of the set objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /termStore/groups/{group-id}/sets']['parameters']
): EndpointRequest<IEndpoints['GET /termStore/groups/{group-id}/sets']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/termStore/groups/{group-id}/sets',
    paramDefs: {
      path: ['group-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /termStore/groups/{group-id}/sets/{set-id}`
 *
 * All sets under the group in a term [store].
 */
export function get(
  params?: IEndpoints['GET /termStore/groups/{group-id}/sets/{set-id}']['parameters']
): EndpointRequest<IEndpoints['GET /termStore/groups/{group-id}/sets/{set-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/termStore/groups/{group-id}/sets/{set-id}',
    paramDefs: {
      path: ['group-id', 'set-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /termStore/groups/{group-id}/sets/{set-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /termStore/groups/{group-id}/sets/{set-id}']['body'],
  params?: IEndpoints['PATCH /termStore/groups/{group-id}/sets/{set-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /termStore/groups/{group-id}/sets/{set-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/termStore/groups/{group-id}/sets/{set-id}',
    paramDefs: {
      path: ['group-id', 'set-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /termStore/groups/{group-id}/sets`
 *
 */
export function create(
  body: IEndpoints['POST /termStore/groups/{group-id}/sets']['body'],
  params?: IEndpoints['POST /termStore/groups/{group-id}/sets']['parameters']
): EndpointRequest<IEndpoints['POST /termStore/groups/{group-id}/sets']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/termStore/groups/{group-id}/sets',
    paramDefs: {
      path: ['group-id'],
    },
    params,
    body,
  };
}

export const parentGroup = {
  /**
   * `GET /termStore/groups/{group-id}/sets/{set-id}/parentGroup`
   *
   * The parent [group] that contains the set.
   */
  get: function get(
    params?: IEndpoints['GET /termStore/groups/{group-id}/sets/{set-id}/parentGroup']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /termStore/groups/{group-id}/sets/{set-id}/parentGroup']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/termStore/groups/{group-id}/sets/{set-id}/parentGroup',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'set-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /termStore/groups/{group-id}/sets/{set-id}/parentGroup`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /termStore/groups/{group-id}/sets/{set-id}/parentGroup']['body'],
    params?: IEndpoints['PATCH /termStore/groups/{group-id}/sets/{set-id}/parentGroup']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /termStore/groups/{group-id}/sets/{set-id}/parentGroup']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/termStore/groups/{group-id}/sets/{set-id}/parentGroup',
      paramDefs: {
        path: ['group-id', 'set-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /termStore/groups/{group-id}/sets/{set-id}/parentGroup`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /termStore/groups/{group-id}/sets/{set-id}/parentGroup']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /termStore/groups/{group-id}/sets/{set-id}/parentGroup']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/termStore/groups/{group-id}/sets/{set-id}/parentGroup',
      paramDefs: {
        header: ['If-Match'],
        path: ['group-id', 'set-id'],
      },
      params,
    };
  },
};
