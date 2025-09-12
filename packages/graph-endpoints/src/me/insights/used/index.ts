import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/insights/used/{usedInsight-id}': Operation<
    '/me/insights/used/{usedInsight-id}',
    'delete'
  >;
  'GET /me/insights/used': Operation<'/me/insights/used', 'get'>;
  'GET /me/insights/used/{usedInsight-id}': Operation<'/me/insights/used/{usedInsight-id}', 'get'>;
  'PATCH /me/insights/used/{usedInsight-id}': Operation<
    '/me/insights/used/{usedInsight-id}',
    'patch'
  >;
  'POST /me/insights/used': Operation<'/me/insights/used', 'post'>;
  'GET /me/insights/used/{usedInsight-id}/resource': Operation<
    '/me/insights/used/{usedInsight-id}/resource',
    'get'
  >;
}

/**
 * `DELETE /me/insights/used/{usedInsight-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/insights/used/{usedInsight-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/insights/used/{usedInsight-id}']['response']> {
  return {
    method: 'delete',
    path: '/me/insights/used/{usedInsight-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['usedInsight-id'],
    },
    params,
  };
}

/**
  * `GET /me/insights/used`
  *
  * Calculate and list the documents that a user has viewed or modified.  For the signed-in user:
- This method includes documents that the user has modified; see example 1. 
- Using an $orderby query parameter on the lastAccessedDateTime property returns the most recently viewed documents that the user might or might not not have modified; see example 2. For other users, this method includes only documents that the user has modified.
  */
export function get(
  params?: IEndpoints['GET /me/insights/used']['parameters']
): EndpointRequest<IEndpoints['GET /me/insights/used']['response']> {
  return {
    method: 'get',
    path: '/me/insights/used',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/insights/used/{usedInsight-id}`
 *
 * Calculated relationship that identifies the latest documents viewed or modified by a user, including OneDrive for work or school and SharePoint documents, ranked by recency of use.
 */
export function get$1(
  params?: IEndpoints['GET /me/insights/used/{usedInsight-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/insights/used/{usedInsight-id}']['response']> {
  return {
    method: 'get',
    path: '/me/insights/used/{usedInsight-id}',
    paramDefs: {
      path: ['usedInsight-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/insights/used/{usedInsight-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/insights/used/{usedInsight-id}']['body'],
  params?: IEndpoints['PATCH /me/insights/used/{usedInsight-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/insights/used/{usedInsight-id}']['response']> {
  return {
    method: 'patch',
    path: '/me/insights/used/{usedInsight-id}',
    paramDefs: {
      path: ['usedInsight-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/insights/used`
 *
 */
export function create(
  body: IEndpoints['POST /me/insights/used']['body']
): EndpointRequest<IEndpoints['POST /me/insights/used']['response']> {
  return {
    method: 'post',
    path: '/me/insights/used',
    body,
  };
}

export const resource = {
  /**
   * `GET /me/insights/used/{usedInsight-id}/resource`
   *
   * Used for navigating to the item that was used. For file attachments, the type is fileAttachment. For linked attachments, the type is driveItem.
   */
  get: function get(
    params?: IEndpoints['GET /me/insights/used/{usedInsight-id}/resource']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/insights/used/{usedInsight-id}/resource']['response']> {
    return {
      method: 'get',
      path: '/me/insights/used/{usedInsight-id}/resource',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['usedInsight-id'],
      },
      params,
    };
  },
};
