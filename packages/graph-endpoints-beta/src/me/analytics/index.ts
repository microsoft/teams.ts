import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/analytics': Operation<'/me/analytics', 'delete'>;
  'GET /me/analytics': Operation<'/me/analytics', 'get'>;
  'PATCH /me/analytics': Operation<'/me/analytics', 'patch'>;
  'GET /me/analytics/activityStatistics': Operation<'/me/analytics/activityStatistics', 'get'>;
  'POST /me/analytics/activityStatistics': Operation<'/me/analytics/activityStatistics', 'post'>;
  'GET /me/analytics/activityStatistics/{activityStatistics-id}': Operation<
    '/me/analytics/activityStatistics/{activityStatistics-id}',
    'get'
  >;
  'PATCH /me/analytics/activityStatistics/{activityStatistics-id}': Operation<
    '/me/analytics/activityStatistics/{activityStatistics-id}',
    'patch'
  >;
  'DELETE /me/analytics/activityStatistics/{activityStatistics-id}': Operation<
    '/me/analytics/activityStatistics/{activityStatistics-id}',
    'delete'
  >;
}

/**
 * `DELETE /me/analytics`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/analytics']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/analytics']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/analytics',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /me/analytics`
 *
 */
export function list(
  params?: IEndpoints['GET /me/analytics']['parameters']
): EndpointRequest<IEndpoints['GET /me/analytics']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/analytics',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/analytics`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/analytics']['body']
): EndpointRequest<IEndpoints['PATCH /me/analytics']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/analytics',
    body,
  };
}

export const activityStatistics = {
  /**
   * `GET /me/analytics/activityStatistics`
   *
   * The collection of work activities that a user spent time on during and outside of working hours. Read-only. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /me/analytics/activityStatistics']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/analytics/activityStatistics']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/analytics/activityStatistics',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /me/analytics/activityStatistics`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/analytics/activityStatistics']['body']
  ): EndpointRequest<IEndpoints['POST /me/analytics/activityStatistics']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/analytics/activityStatistics',
      body,
    };
  },
  /**
   * `GET /me/analytics/activityStatistics/{activityStatistics-id}`
   *
   * The collection of work activities that a user spent time on during and outside of working hours. Read-only. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /me/analytics/activityStatistics/{activityStatistics-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/analytics/activityStatistics/{activityStatistics-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/analytics/activityStatistics/{activityStatistics-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['activityStatistics-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/analytics/activityStatistics/{activityStatistics-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/analytics/activityStatistics/{activityStatistics-id}']['body'],
    params?: IEndpoints['PATCH /me/analytics/activityStatistics/{activityStatistics-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/analytics/activityStatistics/{activityStatistics-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/analytics/activityStatistics/{activityStatistics-id}',
      paramDefs: {
        path: ['activityStatistics-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/analytics/activityStatistics/{activityStatistics-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/analytics/activityStatistics/{activityStatistics-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/analytics/activityStatistics/{activityStatistics-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/analytics/activityStatistics/{activityStatistics-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['activityStatistics-id'],
      },
      params,
    };
  },
};
