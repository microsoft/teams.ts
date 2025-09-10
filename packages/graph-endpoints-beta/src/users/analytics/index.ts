import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/analytics': Operation<'/users/{user-id}/analytics', 'delete'>;
  'GET /users/{user-id}/analytics': Operation<'/users/{user-id}/analytics', 'get'>;
  'PATCH /users/{user-id}/analytics': Operation<'/users/{user-id}/analytics', 'patch'>;
  'GET /users/{user-id}/analytics/activityStatistics': Operation<
    '/users/{user-id}/analytics/activityStatistics',
    'get'
  >;
  'POST /users/{user-id}/analytics/activityStatistics': Operation<
    '/users/{user-id}/analytics/activityStatistics',
    'post'
  >;
  'GET /users/{user-id}/analytics/activityStatistics/{activityStatistics-id}': Operation<
    '/users/{user-id}/analytics/activityStatistics/{activityStatistics-id}',
    'get'
  >;
  'PATCH /users/{user-id}/analytics/activityStatistics/{activityStatistics-id}': Operation<
    '/users/{user-id}/analytics/activityStatistics/{activityStatistics-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/analytics/activityStatistics/{activityStatistics-id}': Operation<
    '/users/{user-id}/analytics/activityStatistics/{activityStatistics-id}',
    'delete'
  >;
}

/**
 * `DELETE /users/{user-id}/analytics`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/analytics']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/analytics']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/analytics',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/analytics`
 *
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/analytics']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/analytics']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/analytics',
    paramDefs: {
      path: ['user-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/analytics`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/analytics']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/analytics']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/analytics']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/analytics',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const activityStatistics = {
  /**
   * `GET /users/{user-id}/analytics/activityStatistics`
   *
   * The collection of work activities that a user spent time on during and outside of working hours. Read-only. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/analytics/activityStatistics']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/analytics/activityStatistics']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/analytics/activityStatistics',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/analytics/activityStatistics`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/analytics/activityStatistics']['body'],
    params?: IEndpoints['POST /users/{user-id}/analytics/activityStatistics']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/analytics/activityStatistics']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/analytics/activityStatistics',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/analytics/activityStatistics/{activityStatistics-id}`
   *
   * The collection of work activities that a user spent time on during and outside of working hours. Read-only. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/analytics/activityStatistics/{activityStatistics-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/analytics/activityStatistics/{activityStatistics-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/analytics/activityStatistics/{activityStatistics-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'activityStatistics-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/analytics/activityStatistics/{activityStatistics-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/analytics/activityStatistics/{activityStatistics-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/analytics/activityStatistics/{activityStatistics-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/analytics/activityStatistics/{activityStatistics-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/analytics/activityStatistics/{activityStatistics-id}',
      paramDefs: {
        path: ['user-id', 'activityStatistics-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/analytics/activityStatistics/{activityStatistics-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/analytics/activityStatistics/{activityStatistics-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/analytics/activityStatistics/{activityStatistics-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/analytics/activityStatistics/{activityStatistics-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'activityStatistics-id'],
      },
      params,
    };
  },
};
