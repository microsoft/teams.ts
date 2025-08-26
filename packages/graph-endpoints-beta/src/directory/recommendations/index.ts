export * as complete from './complete';
export * as dismiss from './dismiss';
export * as impactedResources from './impactedResources';
export * as postpone from './postpone';
export * as reactivate from './reactivate';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /directory/recommendations/{recommendation-id}': Operation<
    '/directory/recommendations/{recommendation-id}',
    'delete'
  >;
  'GET /directory/recommendations': Operation<'/directory/recommendations', 'get'>;
  'GET /directory/recommendations/{recommendation-id}': Operation<
    '/directory/recommendations/{recommendation-id}',
    'get'
  >;
  'PATCH /directory/recommendations/{recommendation-id}': Operation<
    '/directory/recommendations/{recommendation-id}',
    'patch'
  >;
  'POST /directory/recommendations': Operation<'/directory/recommendations', 'post'>;
}

/**
 * `DELETE /directory/recommendations/{recommendation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /directory/recommendations/{recommendation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /directory/recommendations/{recommendation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/directory/recommendations/{recommendation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'recommendation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /directory/recommendations`
 *
 * Get a list of the recommendation objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /directory/recommendations']['parameters']
): EndpointRequest<IEndpoints['GET /directory/recommendations']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/recommendations',
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
 * `GET /directory/recommendations/{recommendation-id}`
 *
 * Read the properties and relationships of a recommendation object.
 */
export function get(
  params?: IEndpoints['GET /directory/recommendations/{recommendation-id}']['parameters']
): EndpointRequest<IEndpoints['GET /directory/recommendations/{recommendation-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/recommendations/{recommendation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'recommendation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /directory/recommendations/{recommendation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /directory/recommendations/{recommendation-id}']['body'],
  params?: IEndpoints['PATCH /directory/recommendations/{recommendation-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /directory/recommendations/{recommendation-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/directory/recommendations/{recommendation-id}',
    paramDefs: [{ name: 'recommendation-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /directory/recommendations`
 *
 */
export function create(
  body: IEndpoints['POST /directory/recommendations']['body'],
  params?: IEndpoints['POST /directory/recommendations']['parameters']
): EndpointRequest<IEndpoints['POST /directory/recommendations']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directory/recommendations',
    paramDefs: [],
    params,
    body,
  };
}
