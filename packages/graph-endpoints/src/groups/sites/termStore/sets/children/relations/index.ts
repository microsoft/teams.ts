import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations/{relation-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations/{relation-id}',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations/{relation-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations/{relation-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations/{relation-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations/{relation-id}',
    'patch'
  >;
  'POST /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations',
    'post'
  >;
  'GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations/{relation-id}/fromTerm': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations/{relation-id}/fromTerm',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations/{relation-id}/set': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations/{relation-id}/set',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations/{relation-id}/toTerm': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations/{relation-id}/toTerm',
    'get'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations/{relation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations/{relation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations/{relation-id}']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations/{relation-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'site-id', 'set-id', 'term-id', 'relation-id'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations`
 *
 * To indicate which terms are related to the current term as either pinned or reused.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations',
    paramDefs: {
      path: ['group-id', 'site-id', 'set-id', 'term-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations/{relation-id}`
 *
 * To indicate which terms are related to the current term as either pinned or reused.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations/{relation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations/{relation-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations/{relation-id}',
    paramDefs: {
      path: ['group-id', 'site-id', 'set-id', 'term-id', 'relation-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations/{relation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations/{relation-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations/{relation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations/{relation-id}']['response']
> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations/{relation-id}',
    paramDefs: {
      path: ['group-id', 'site-id', 'set-id', 'term-id', 'relation-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations']['response']
> {
  return {
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations',
    paramDefs: {
      path: ['group-id', 'site-id', 'set-id', 'term-id'],
    },
    params,
    body,
  };
}

export const fromTerm = {
  /**
   * `GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations/{relation-id}/fromTerm`
   *
   * The from [term] of the relation. The term from which the relationship is defined. A null value would indicate the relation is directly with the [set].
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations/{relation-id}/fromTerm']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations/{relation-id}/fromTerm']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations/{relation-id}/fromTerm',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'site-id', 'set-id', 'term-id', 'relation-id'],
      },
      params,
    };
  },
};

export const set = {
  /**
   * `GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations/{relation-id}/set`
   *
   * The [set] in which the relation is relevant.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations/{relation-id}/set']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations/{relation-id}/set']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations/{relation-id}/set',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'site-id', 'set-id', 'term-id', 'relation-id'],
      },
      params,
    };
  },
};

export const toTerm = {
  /**
   * `GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations/{relation-id}/toTerm`
   *
   * The to [term] of the relation. The term to which the relationship is defined.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations/{relation-id}/toTerm']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations/{relation-id}/toTerm']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations/{relation-id}/toTerm',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'site-id', 'set-id', 'term-id', 'relation-id'],
      },
      params,
    };
  },
};
