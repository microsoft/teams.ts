import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/insights/shared/{sharedInsight-id}': Operation<
    '/me/insights/shared/{sharedInsight-id}',
    'delete'
  >;
  'GET /me/insights/shared': Operation<'/me/insights/shared', 'get'>;
  'GET /me/insights/shared/{sharedInsight-id}': Operation<
    '/me/insights/shared/{sharedInsight-id}',
    'get'
  >;
  'PATCH /me/insights/shared/{sharedInsight-id}': Operation<
    '/me/insights/shared/{sharedInsight-id}',
    'patch'
  >;
  'POST /me/insights/shared': Operation<'/me/insights/shared', 'post'>;
  'GET /me/insights/shared/{sharedInsight-id}/lastSharedMethod': Operation<
    '/me/insights/shared/{sharedInsight-id}/lastSharedMethod',
    'get'
  >;
  'GET /me/insights/shared/{sharedInsight-id}/resource': Operation<
    '/me/insights/shared/{sharedInsight-id}/resource',
    'get'
  >;
}

/**
 * `DELETE /me/insights/shared/{sharedInsight-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/insights/shared/{sharedInsight-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/insights/shared/{sharedInsight-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/insights/shared/{sharedInsight-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['sharedInsight-id'],
    },
    params,
  };
}

/**
 * `GET /me/insights/shared`
 *
 * Access this property from the derived type itemInsights.
 */
export function get(
  params?: IEndpoints['GET /me/insights/shared']['parameters']
): EndpointRequest<IEndpoints['GET /me/insights/shared']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/insights/shared',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/insights/shared/{sharedInsight-id}`
 *
 * Access this property from the derived type itemInsights.
 */
export function get$1(
  params?: IEndpoints['GET /me/insights/shared/{sharedInsight-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/insights/shared/{sharedInsight-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/insights/shared/{sharedInsight-id}',
    paramDefs: {
      path: ['sharedInsight-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/insights/shared/{sharedInsight-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/insights/shared/{sharedInsight-id}']['body'],
  params?: IEndpoints['PATCH /me/insights/shared/{sharedInsight-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/insights/shared/{sharedInsight-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/insights/shared/{sharedInsight-id}',
    paramDefs: {
      path: ['sharedInsight-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/insights/shared`
 *
 */
export function create(
  body: IEndpoints['POST /me/insights/shared']['body']
): EndpointRequest<IEndpoints['POST /me/insights/shared']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/insights/shared',
    body,
  };
}

export const lastSharedMethod = {
  /**
   * `GET /me/insights/shared/{sharedInsight-id}/lastSharedMethod`
   *
   */
  get: function get(
    params?: IEndpoints['GET /me/insights/shared/{sharedInsight-id}/lastSharedMethod']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/insights/shared/{sharedInsight-id}/lastSharedMethod']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/insights/shared/{sharedInsight-id}/lastSharedMethod',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['sharedInsight-id'],
      },
      params,
    };
  },
};

export const resource = {
  /**
   * `GET /me/insights/shared/{sharedInsight-id}/resource`
   *
   * Used for navigating to the item that was shared. For file attachments, the type is fileAttachment. For linked attachments, the type is driveItem.
   */
  get: function get(
    params?: IEndpoints['GET /me/insights/shared/{sharedInsight-id}/resource']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/insights/shared/{sharedInsight-id}/resource']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/insights/shared/{sharedInsight-id}/resource',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['sharedInsight-id'],
      },
      params,
    };
  },
};
