export * as itemActivityStats from './itemActivityStats';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/analytics': Operation<'/sites/{site-id}/analytics', 'delete'>;
  'GET /sites/{site-id}/analytics': Operation<'/sites/{site-id}/analytics', 'get'>;
  'PATCH /sites/{site-id}/analytics': Operation<'/sites/{site-id}/analytics', 'patch'>;
  'GET /sites/{site-id}/analytics/allTime': Operation<'/sites/{site-id}/analytics/allTime', 'get'>;
  'GET /sites/{site-id}/analytics/lastSevenDays': Operation<
    '/sites/{site-id}/analytics/lastSevenDays',
    'get'
  >;
}

/**
 * `DELETE /sites/{site-id}/analytics`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/analytics']['parameters']
): EndpointRequest<IEndpoints['DELETE /sites/{site-id}/analytics']['response']> {
  return {
    method: 'delete',
    path: '/sites/{site-id}/analytics',
    paramDefs: {
      header: ['If-Match'],
      path: ['site-id'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/analytics`
 *
 * Analytics about the view activities that took place on this site.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/analytics']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/analytics']['response']> {
  return {
    method: 'get',
    path: '/sites/{site-id}/analytics',
    paramDefs: {
      path: ['site-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/analytics`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/analytics']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/analytics']['parameters']
): EndpointRequest<IEndpoints['PATCH /sites/{site-id}/analytics']['response']> {
  return {
    method: 'patch',
    path: '/sites/{site-id}/analytics',
    paramDefs: {
      path: ['site-id'],
    },
    params,
    body,
  };
}

export const allTime = {
  /**
   * `GET /sites/{site-id}/analytics/allTime`
   *
   */
  get: function get(
    params?: IEndpoints['GET /sites/{site-id}/analytics/allTime']['parameters']
  ): EndpointRequest<IEndpoints['GET /sites/{site-id}/analytics/allTime']['response']> {
    return {
      method: 'get',
      path: '/sites/{site-id}/analytics/allTime',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['site-id'],
      },
      params,
    };
  },
};

export const lastSevenDays = {
  /**
   * `GET /sites/{site-id}/analytics/lastSevenDays`
   *
   */
  list: function list(
    params?: IEndpoints['GET /sites/{site-id}/analytics/lastSevenDays']['parameters']
  ): EndpointRequest<IEndpoints['GET /sites/{site-id}/analytics/lastSevenDays']['response']> {
    return {
      method: 'get',
      path: '/sites/{site-id}/analytics/lastSevenDays',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['site-id'],
      },
      params,
    };
  },
};
