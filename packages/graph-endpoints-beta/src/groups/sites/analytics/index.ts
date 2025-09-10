export * as itemActivityStats from './itemActivityStats';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/analytics': Operation<
    '/groups/{group-id}/sites/{site-id}/analytics',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/analytics': Operation<
    '/groups/{group-id}/sites/{site-id}/analytics',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/analytics': Operation<
    '/groups/{group-id}/sites/{site-id}/analytics',
    'patch'
  >;
  'GET /groups/{group-id}/sites/{site-id}/analytics/allTime': Operation<
    '/groups/{group-id}/sites/{site-id}/analytics/allTime',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/analytics/lastSevenDays': Operation<
    '/groups/{group-id}/sites/{site-id}/analytics/lastSevenDays',
    'get'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/analytics`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/analytics']['parameters']
): EndpointRequest<IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/analytics']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/analytics',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'site-id'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/analytics`
 *
 * Analytics about the view activities that took place on this site.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/analytics']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/sites/{site-id}/analytics']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/analytics',
    paramDefs: {
      path: ['group-id', 'site-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/analytics`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/analytics']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/analytics']['parameters']
): EndpointRequest<IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/analytics']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/analytics',
    paramDefs: {
      path: ['group-id', 'site-id'],
    },
    params,
    body,
  };
}

export const allTime = {
  /**
   * `GET /groups/{group-id}/sites/{site-id}/analytics/allTime`
   *
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/analytics/allTime']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/analytics/allTime']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/analytics/allTime',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'site-id'],
      },
      params,
    };
  },
};

export const lastSevenDays = {
  /**
   * `GET /groups/{group-id}/sites/{site-id}/analytics/lastSevenDays`
   *
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/analytics/lastSevenDays']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/analytics/lastSevenDays']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/analytics/lastSevenDays',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'site-id'],
      },
      params,
    };
  },
};
