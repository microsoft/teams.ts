import type { EndpointRequest, Operation } from './../../../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations': Operation<
    '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}',
    'patch'
  >;
  'POST /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations': Operation<
    '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations',
    'post'
  >;
  'GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/fromTerm': Operation<
    '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/fromTerm',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/set': Operation<
    '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/set',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/toTerm': Operation<
    '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/toTerm',
    'get'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}',
    paramDefs: {
      header: ['If-Match'],
      path: [
        'group-id',
        'site-id',
        'store-id',
        'group-id1',
        'set-id',
        'term-id',
        'term-id1',
        'relation-id',
      ],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations`
 *
 * To indicate which terms are related to the current term as either pinned or reused.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations',
    paramDefs: {
      path: ['group-id', 'site-id', 'store-id', 'group-id1', 'set-id', 'term-id', 'term-id1'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}`
 *
 * To indicate which terms are related to the current term as either pinned or reused.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}',
    paramDefs: {
      path: [
        'group-id',
        'site-id',
        'store-id',
        'group-id1',
        'set-id',
        'term-id',
        'term-id1',
        'relation-id',
      ],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}']['response']
> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}',
    paramDefs: {
      path: [
        'group-id',
        'site-id',
        'store-id',
        'group-id1',
        'set-id',
        'term-id',
        'term-id1',
        'relation-id',
      ],
    },
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations']['response']
> {
  return {
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations',
    paramDefs: {
      path: ['group-id', 'site-id', 'store-id', 'group-id1', 'set-id', 'term-id', 'term-id1'],
    },
    params,
    body,
  };
}

export const fromTerm = {
  /**
   * `GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/fromTerm`
   *
   * The from [term] of the relation. The term from which the relationship is defined. A null value would indicate the relation is directly with the [set].
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/fromTerm']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/fromTerm']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/fromTerm',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'group-id',
          'site-id',
          'store-id',
          'group-id1',
          'set-id',
          'term-id',
          'term-id1',
          'relation-id',
        ],
      },
      params,
    };
  },
};

export const set = {
  /**
   * `GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/set`
   *
   * The [set] in which the relation is relevant.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/set']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/set']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/set',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'group-id',
          'site-id',
          'store-id',
          'group-id1',
          'set-id',
          'term-id',
          'term-id1',
          'relation-id',
        ],
      },
      params,
    };
  },
};

export const toTerm = {
  /**
   * `GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/toTerm`
   *
   * The to [term] of the relation. The term to which the relationship is defined.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/toTerm']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/toTerm']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/toTerm',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'group-id',
          'site-id',
          'store-id',
          'group-id1',
          'set-id',
          'term-id',
          'term-id1',
          'relation-id',
        ],
      },
      params,
    };
  },
};
