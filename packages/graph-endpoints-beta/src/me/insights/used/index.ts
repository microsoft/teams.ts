export * as resource from './resource';

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
}

/**
 * `DELETE /me/insights/used/{usedInsight-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/insights/used/{usedInsight-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/insights/used/{usedInsight-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/insights/used/{usedInsight-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'usedInsight-id', in: 'path' },
    ],
    params,
  };
}

/**
  * `GET /me/insights/used`
  *
  * Calculate and list the documents that a user has viewed or modified.  For the signed-in user:
- This method includes documents that the user has modified; see example 1. 
- Using an $orderby query parameter on the lastAccessedDateTime property returns the most recently viewed documents that the user might or might not have modified; see example 2. For other users, this method includes only documents that the user has modified.
  */
export function get(
  params?: IEndpoints['GET /me/insights/used']['parameters']
): EndpointRequest<IEndpoints['GET /me/insights/used']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/insights/used',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /me/insights/used/{usedInsight-id}`
 *
 * Access this property from the derived type itemInsights.
 */
export function get$1(
  params?: IEndpoints['GET /me/insights/used/{usedInsight-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/insights/used/{usedInsight-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/insights/used/{usedInsight-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'usedInsight-id', in: 'path' },
    ],
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
    ver: 'beta',
    method: 'patch',
    path: '/me/insights/used/{usedInsight-id}',
    paramDefs: [{ name: 'usedInsight-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/insights/used`
 *
 */
export function create(
  body: IEndpoints['POST /me/insights/used']['body'],
  params?: IEndpoints['POST /me/insights/used']['parameters']
): EndpointRequest<IEndpoints['POST /me/insights/used']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/insights/used',
    paramDefs: [],
    params,
    body,
  };
}
