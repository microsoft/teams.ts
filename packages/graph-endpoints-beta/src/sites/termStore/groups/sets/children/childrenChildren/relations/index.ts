import type { EndpointRequest, Operation } from './../../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}': Operation<
    '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}',
    'delete'
  >;
  'GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations': Operation<
    '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations',
    'get'
  >;
  'GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}': Operation<
    '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}': Operation<
    '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}',
    'patch'
  >;
  'POST /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations': Operation<
    '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations',
    'post'
  >;
  'GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/fromTerm': Operation<
    '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/fromTerm',
    'get'
  >;
  'GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/set': Operation<
    '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/set',
    'get'
  >;
  'GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/toTerm': Operation<
    '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/toTerm',
    'get'
  >;
}

/**
 * `DELETE /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['site-id', 'group-id', 'set-id', 'term-id', 'term-id1', 'relation-id'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations`
 *
 * To indicate which terms are related to the current term as either pinned or reused.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations',
    paramDefs: {
      path: ['site-id', 'group-id', 'set-id', 'term-id', 'term-id1'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}`
 *
 * To indicate which terms are related to the current term as either pinned or reused.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}',
    paramDefs: {
      path: ['site-id', 'group-id', 'set-id', 'term-id', 'term-id1', 'relation-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}',
    paramDefs: {
      path: ['site-id', 'group-id', 'set-id', 'term-id', 'term-id1', 'relation-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations']['body'],
  params?: IEndpoints['POST /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations',
    paramDefs: {
      path: ['site-id', 'group-id', 'set-id', 'term-id', 'term-id1'],
    },
    params,
    body,
  };
}

export const fromTerm = {
  /**
   * `GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/fromTerm`
   *
   * The from [term] of the relation. The term from which the relationship is defined. A null value would indicate the relation is directly with the [set].
   */
  get: function get(
    params?: IEndpoints['GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/fromTerm']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/fromTerm']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/fromTerm',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['site-id', 'group-id', 'set-id', 'term-id', 'term-id1', 'relation-id'],
      },
      params,
    };
  },
};

export const set = {
  /**
   * `GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/set`
   *
   * The [set] in which the relation is relevant.
   */
  get: function get(
    params?: IEndpoints['GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/set']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/set']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/set',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['site-id', 'group-id', 'set-id', 'term-id', 'term-id1', 'relation-id'],
      },
      params,
    };
  },
};

export const toTerm = {
  /**
   * `GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/toTerm`
   *
   * The to [term] of the relation. The term to which the relationship is defined.
   */
  get: function get(
    params?: IEndpoints['GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/toTerm']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/toTerm']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/toTerm',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['site-id', 'group-id', 'set-id', 'term-id', 'term-id1', 'relation-id'],
      },
      params,
    };
  },
};
