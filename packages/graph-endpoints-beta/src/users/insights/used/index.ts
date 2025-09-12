import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/insights/used/{usedInsight-id}': Operation<
    '/users/{user-id}/insights/used/{usedInsight-id}',
    'delete'
  >;
  'GET /users/{user-id}/insights/used': Operation<'/users/{user-id}/insights/used', 'get'>;
  'GET /users/{user-id}/insights/used/{usedInsight-id}': Operation<
    '/users/{user-id}/insights/used/{usedInsight-id}',
    'get'
  >;
  'PATCH /users/{user-id}/insights/used/{usedInsight-id}': Operation<
    '/users/{user-id}/insights/used/{usedInsight-id}',
    'patch'
  >;
  'POST /users/{user-id}/insights/used': Operation<'/users/{user-id}/insights/used', 'post'>;
  'GET /users/{user-id}/insights/used/{usedInsight-id}/resource': Operation<
    '/users/{user-id}/insights/used/{usedInsight-id}/resource',
    'get'
  >;
}

/**
 * `DELETE /users/{user-id}/insights/used/{usedInsight-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/insights/used/{usedInsight-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/insights/used/{usedInsight-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/insights/used/{usedInsight-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'usedInsight-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/insights/used`
 *
 * Access this property from the derived type itemInsights.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/insights/used']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/insights/used']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/insights/used',
    paramDefs: {
      path: ['user-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/insights/used/{usedInsight-id}`
 *
 * Access this property from the derived type itemInsights.
 */
export function get$1(
  params?: IEndpoints['GET /users/{user-id}/insights/used/{usedInsight-id}']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/insights/used/{usedInsight-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/insights/used/{usedInsight-id}',
    paramDefs: {
      path: ['user-id', 'usedInsight-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/insights/used/{usedInsight-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/insights/used/{usedInsight-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/insights/used/{usedInsight-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/insights/used/{usedInsight-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/insights/used/{usedInsight-id}',
    paramDefs: {
      path: ['user-id', 'usedInsight-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/insights/used`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/insights/used']['body'],
  params?: IEndpoints['POST /users/{user-id}/insights/used']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/insights/used']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/insights/used',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const resource = {
  /**
   * `GET /users/{user-id}/insights/used/{usedInsight-id}/resource`
   *
   * Used for navigating to the item that was used. For file attachments, the type is fileAttachment. For linked attachments, the type is driveItem.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/insights/used/{usedInsight-id}/resource']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/insights/used/{usedInsight-id}/resource']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/insights/used/{usedInsight-id}/resource',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'usedInsight-id'],
      },
      params,
    };
  },
};
