export * as resource from './resource';

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
    method: 'delete',
    path: '/users/{user-id}/insights/used/{usedInsight-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'usedInsight-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/insights/used`
 *
 * Calculated relationship that identifies the latest documents viewed or modified by a user, including OneDrive for work or school and SharePoint documents, ranked by recency of use.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/insights/used']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/insights/used']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/insights/used',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/insights/used/{usedInsight-id}`
 *
 * Calculated relationship that identifies the latest documents viewed or modified by a user, including OneDrive for work or school and SharePoint documents, ranked by recency of use.
 */
export function get$1(
  params?: IEndpoints['GET /users/{user-id}/insights/used/{usedInsight-id}']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/insights/used/{usedInsight-id}']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/insights/used/{usedInsight-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'usedInsight-id', in: 'path' },
    ],
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
    method: 'patch',
    path: '/users/{user-id}/insights/used/{usedInsight-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'usedInsight-id', in: 'path' },
    ],
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
    method: 'post',
    path: '/users/{user-id}/insights/used',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
