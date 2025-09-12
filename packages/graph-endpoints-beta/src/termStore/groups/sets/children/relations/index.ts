import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}': Operation<
    '/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}',
    'delete'
  >;
  'GET /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations': Operation<
    '/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations',
    'get'
  >;
  'GET /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}': Operation<
    '/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}',
    'get'
  >;
  'PATCH /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}': Operation<
    '/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}',
    'patch'
  >;
  'POST /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations': Operation<
    '/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations',
    'post'
  >;
  'GET /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}/fromTerm': Operation<
    '/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}/fromTerm',
    'get'
  >;
  'GET /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}/set': Operation<
    '/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}/set',
    'get'
  >;
  'GET /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}/toTerm': Operation<
    '/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}/toTerm',
    'get'
  >;
}

/**
 * `DELETE /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'set-id', 'term-id', 'relation-id'],
    },
    params,
  };
}

/**
 * `GET /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations`
 *
 * To indicate which terms are related to the current term as either pinned or reused.
 */
export function list(
  params?: IEndpoints['GET /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations']['parameters']
): EndpointRequest<
  IEndpoints['GET /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations',
    paramDefs: {
      path: ['group-id', 'set-id', 'term-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}`
 *
 * To indicate which terms are related to the current term as either pinned or reused.
 */
export function get(
  params?: IEndpoints['GET /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}',
    paramDefs: {
      path: ['group-id', 'set-id', 'term-id', 'relation-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}']['body'],
  params?: IEndpoints['PATCH /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}',
    paramDefs: {
      path: ['group-id', 'set-id', 'term-id', 'relation-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations`
 *
 */
export function create(
  body: IEndpoints['POST /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations']['body'],
  params?: IEndpoints['POST /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations']['parameters']
): EndpointRequest<
  IEndpoints['POST /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations',
    paramDefs: {
      path: ['group-id', 'set-id', 'term-id'],
    },
    params,
    body,
  };
}

export const fromTerm = {
  /**
   * `GET /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}/fromTerm`
   *
   * The from [term] of the relation. The term from which the relationship is defined. A null value would indicate the relation is directly with the [set].
   */
  get: function get(
    params?: IEndpoints['GET /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}/fromTerm']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}/fromTerm']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}/fromTerm',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'set-id', 'term-id', 'relation-id'],
      },
      params,
    };
  },
};

export const set = {
  /**
   * `GET /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}/set`
   *
   * The [set] in which the relation is relevant.
   */
  get: function get(
    params?: IEndpoints['GET /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}/set']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}/set']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}/set',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'set-id', 'term-id', 'relation-id'],
      },
      params,
    };
  },
};

export const toTerm = {
  /**
   * `GET /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}/toTerm`
   *
   * The to [term] of the relation. The term to which the relationship is defined.
   */
  get: function get(
    params?: IEndpoints['GET /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}/toTerm']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}/toTerm']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}/toTerm',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'set-id', 'term-id', 'relation-id'],
      },
      params,
    };
  },
};
