import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}': Operation<
    '/termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}',
    'delete'
  >;
  'GET /termStore/sets/{set-id}/terms/{term-id}/relations': Operation<
    '/termStore/sets/{set-id}/terms/{term-id}/relations',
    'get'
  >;
  'GET /termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}': Operation<
    '/termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}',
    'get'
  >;
  'PATCH /termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}': Operation<
    '/termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}',
    'patch'
  >;
  'POST /termStore/sets/{set-id}/terms/{term-id}/relations': Operation<
    '/termStore/sets/{set-id}/terms/{term-id}/relations',
    'post'
  >;
  'GET /termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}/fromTerm': Operation<
    '/termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}/fromTerm',
    'get'
  >;
  'GET /termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}/set': Operation<
    '/termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}/set',
    'get'
  >;
  'GET /termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}/toTerm': Operation<
    '/termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}/toTerm',
    'get'
  >;
}

/**
 * `DELETE /termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['set-id', 'term-id', 'relation-id'],
    },
    params,
  };
}

/**
 * `GET /termStore/sets/{set-id}/terms/{term-id}/relations`
 *
 * To indicate which terms are related to the current term as either pinned or reused.
 */
export function list(
  params?: IEndpoints['GET /termStore/sets/{set-id}/terms/{term-id}/relations']['parameters']
): EndpointRequest<
  IEndpoints['GET /termStore/sets/{set-id}/terms/{term-id}/relations']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/termStore/sets/{set-id}/terms/{term-id}/relations',
    paramDefs: {
      path: ['set-id', 'term-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}`
 *
 * To indicate which terms are related to the current term as either pinned or reused.
 */
export function get(
  params?: IEndpoints['GET /termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}',
    paramDefs: {
      path: ['set-id', 'term-id', 'relation-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}']['body'],
  params?: IEndpoints['PATCH /termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}',
    paramDefs: {
      path: ['set-id', 'term-id', 'relation-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /termStore/sets/{set-id}/terms/{term-id}/relations`
 *
 */
export function create(
  body: IEndpoints['POST /termStore/sets/{set-id}/terms/{term-id}/relations']['body'],
  params?: IEndpoints['POST /termStore/sets/{set-id}/terms/{term-id}/relations']['parameters']
): EndpointRequest<
  IEndpoints['POST /termStore/sets/{set-id}/terms/{term-id}/relations']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/termStore/sets/{set-id}/terms/{term-id}/relations',
    paramDefs: {
      path: ['set-id', 'term-id'],
    },
    params,
    body,
  };
}

export const fromTerm = {
  /**
   * `GET /termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}/fromTerm`
   *
   * The from [term] of the relation. The term from which the relationship is defined. A null value would indicate the relation is directly with the [set].
   */
  get: function get(
    params?: IEndpoints['GET /termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}/fromTerm']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}/fromTerm']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}/fromTerm',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['set-id', 'term-id', 'relation-id'],
      },
      params,
    };
  },
};

export const set = {
  /**
   * `GET /termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}/set`
   *
   * The [set] in which the relation is relevant.
   */
  get: function get(
    params?: IEndpoints['GET /termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}/set']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}/set']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}/set',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['set-id', 'term-id', 'relation-id'],
      },
      params,
    };
  },
};

export const toTerm = {
  /**
   * `GET /termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}/toTerm`
   *
   * The to [term] of the relation. The term to which the relationship is defined.
   */
  get: function get(
    params?: IEndpoints['GET /termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}/toTerm']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}/toTerm']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}/toTerm',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['set-id', 'term-id', 'relation-id'],
      },
      params,
    };
  },
};
