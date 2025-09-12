export * as children from './children';
export * as relations from './relations';
export * as terms from './terms';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}': Operation<
    '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}',
    'delete'
  >;
  'GET /sites/{site-id}/termStore/groups/{group-id}/sets': Operation<
    '/sites/{site-id}/termStore/groups/{group-id}/sets',
    'get'
  >;
  'GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}': Operation<
    '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}': Operation<
    '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}',
    'patch'
  >;
  'POST /sites/{site-id}/termStore/groups/{group-id}/sets': Operation<
    '/sites/{site-id}/termStore/groups/{group-id}/sets',
    'post'
  >;
  'GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/parentGroup': Operation<
    '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/parentGroup',
    'get'
  >;
  'PATCH /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/parentGroup': Operation<
    '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/parentGroup',
    'patch'
  >;
  'DELETE /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/parentGroup': Operation<
    '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/parentGroup',
    'delete'
  >;
}

/**
 * `DELETE /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}']['response']
> {
  return {
    method: 'delete',
    path: '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['site-id', 'group-id', 'set-id'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/termStore/groups/{group-id}/sets`
 *
 * Get a list of the set objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/termStore/groups/{group-id}/sets']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/termStore/groups/{group-id}/sets']['response']
> {
  return {
    method: 'get',
    path: '/sites/{site-id}/termStore/groups/{group-id}/sets',
    paramDefs: {
      path: ['site-id', 'group-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}`
 *
 * All sets under the group in a term [store].
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}']['response']
> {
  return {
    method: 'get',
    path: '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}',
    paramDefs: {
      path: ['site-id', 'group-id', 'set-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}']['response']
> {
  return {
    method: 'patch',
    path: '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}',
    paramDefs: {
      path: ['site-id', 'group-id', 'set-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/termStore/groups/{group-id}/sets`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/termStore/groups/{group-id}/sets']['body'],
  params?: IEndpoints['POST /sites/{site-id}/termStore/groups/{group-id}/sets']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/termStore/groups/{group-id}/sets']['response']
> {
  return {
    method: 'post',
    path: '/sites/{site-id}/termStore/groups/{group-id}/sets',
    paramDefs: {
      path: ['site-id', 'group-id'],
    },
    params,
    body,
  };
}

export const parentGroup = {
  /**
   * `GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/parentGroup`
   *
   * The parent [group] that contains the set.
   */
  get: function get(
    params?: IEndpoints['GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/parentGroup']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/parentGroup']['response']
  > {
    return {
      method: 'get',
      path: '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/parentGroup',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['site-id', 'group-id', 'set-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/parentGroup`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/parentGroup']['body'],
    params?: IEndpoints['PATCH /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/parentGroup']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/parentGroup']['response']
  > {
    return {
      method: 'patch',
      path: '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/parentGroup',
      paramDefs: {
        path: ['site-id', 'group-id', 'set-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/parentGroup`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/parentGroup']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/parentGroup']['response']
  > {
    return {
      method: 'delete',
      path: '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/parentGroup',
      paramDefs: {
        header: ['If-Match'],
        path: ['site-id', 'group-id', 'set-id'],
      },
      params,
    };
  },
};
