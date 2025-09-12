import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/insights/trending/{trending-id}': Operation<
    '/me/insights/trending/{trending-id}',
    'delete'
  >;
  'GET /me/insights/trending': Operation<'/me/insights/trending', 'get'>;
  'GET /me/insights/trending/{trending-id}': Operation<
    '/me/insights/trending/{trending-id}',
    'get'
  >;
  'PATCH /me/insights/trending/{trending-id}': Operation<
    '/me/insights/trending/{trending-id}',
    'patch'
  >;
  'POST /me/insights/trending': Operation<'/me/insights/trending', 'post'>;
  'GET /me/insights/trending/{trending-id}/resource': Operation<
    '/me/insights/trending/{trending-id}/resource',
    'get'
  >;
}

/**
 * `DELETE /me/insights/trending/{trending-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/insights/trending/{trending-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/insights/trending/{trending-id}']['response']> {
  return {
    method: 'delete',
    path: '/me/insights/trending/{trending-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['trending-id'],
    },
    params,
  };
}

/**
 * `GET /me/insights/trending`
 *
 * Calculated insight that includes a list of documents trending around the user.
 */
export function get(
  params?: IEndpoints['GET /me/insights/trending']['parameters']
): EndpointRequest<IEndpoints['GET /me/insights/trending']['response']> {
  return {
    method: 'get',
    path: '/me/insights/trending',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/insights/trending/{trending-id}`
 *
 * Calculated relationship that identifies documents trending around a user. Trending documents are calculated based on activity of the user&#x27;s closest network of people and include files stored in OneDrive for work or school and SharePoint. Trending insights help the user to discover potentially useful content that the user has access to, but has never viewed before.
 */
export function get$1(
  params?: IEndpoints['GET /me/insights/trending/{trending-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/insights/trending/{trending-id}']['response']> {
  return {
    method: 'get',
    path: '/me/insights/trending/{trending-id}',
    paramDefs: {
      path: ['trending-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/insights/trending/{trending-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/insights/trending/{trending-id}']['body'],
  params?: IEndpoints['PATCH /me/insights/trending/{trending-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/insights/trending/{trending-id}']['response']> {
  return {
    method: 'patch',
    path: '/me/insights/trending/{trending-id}',
    paramDefs: {
      path: ['trending-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/insights/trending`
 *
 */
export function create(
  body: IEndpoints['POST /me/insights/trending']['body']
): EndpointRequest<IEndpoints['POST /me/insights/trending']['response']> {
  return {
    method: 'post',
    path: '/me/insights/trending',
    body,
  };
}

export const resource = {
  /**
   * `GET /me/insights/trending/{trending-id}/resource`
   *
   * Used for navigating to the trending document.
   */
  get: function get(
    params?: IEndpoints['GET /me/insights/trending/{trending-id}/resource']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/insights/trending/{trending-id}/resource']['response']> {
    return {
      method: 'get',
      path: '/me/insights/trending/{trending-id}/resource',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['trending-id'],
      },
      params,
    };
  },
};
