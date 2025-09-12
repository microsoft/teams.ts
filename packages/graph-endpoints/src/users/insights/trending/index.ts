import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/insights/trending/{trending-id}': Operation<
    '/users/{user-id}/insights/trending/{trending-id}',
    'delete'
  >;
  'GET /users/{user-id}/insights/trending': Operation<'/users/{user-id}/insights/trending', 'get'>;
  'GET /users/{user-id}/insights/trending/{trending-id}': Operation<
    '/users/{user-id}/insights/trending/{trending-id}',
    'get'
  >;
  'PATCH /users/{user-id}/insights/trending/{trending-id}': Operation<
    '/users/{user-id}/insights/trending/{trending-id}',
    'patch'
  >;
  'POST /users/{user-id}/insights/trending': Operation<
    '/users/{user-id}/insights/trending',
    'post'
  >;
  'GET /users/{user-id}/insights/trending/{trending-id}/resource': Operation<
    '/users/{user-id}/insights/trending/{trending-id}/resource',
    'get'
  >;
}

/**
 * `DELETE /users/{user-id}/insights/trending/{trending-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/insights/trending/{trending-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/insights/trending/{trending-id}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/insights/trending/{trending-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'trending-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/insights/trending`
 *
 * Calculated relationship that identifies documents trending around a user. Trending documents are calculated based on activity of the user&#x27;s closest network of people and include files stored in OneDrive for work or school and SharePoint. Trending insights help the user to discover potentially useful content that the user has access to, but has never viewed before.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/insights/trending']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/insights/trending']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/insights/trending',
    paramDefs: {
      path: ['user-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/insights/trending/{trending-id}`
 *
 * Calculated relationship that identifies documents trending around a user. Trending documents are calculated based on activity of the user&#x27;s closest network of people and include files stored in OneDrive for work or school and SharePoint. Trending insights help the user to discover potentially useful content that the user has access to, but has never viewed before.
 */
export function get$1(
  params?: IEndpoints['GET /users/{user-id}/insights/trending/{trending-id}']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/insights/trending/{trending-id}']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/insights/trending/{trending-id}',
    paramDefs: {
      path: ['user-id', 'trending-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/insights/trending/{trending-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/insights/trending/{trending-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/insights/trending/{trending-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/insights/trending/{trending-id}']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/insights/trending/{trending-id}',
    paramDefs: {
      path: ['user-id', 'trending-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/insights/trending`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/insights/trending']['body'],
  params?: IEndpoints['POST /users/{user-id}/insights/trending']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/insights/trending']['response']> {
  return {
    method: 'post',
    path: '/users/{user-id}/insights/trending',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const resource = {
  /**
   * `GET /users/{user-id}/insights/trending/{trending-id}/resource`
   *
   * Used for navigating to the trending document.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/insights/trending/{trending-id}/resource']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/insights/trending/{trending-id}/resource']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/insights/trending/{trending-id}/resource',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'trending-id'],
      },
      params,
    };
  },
};
