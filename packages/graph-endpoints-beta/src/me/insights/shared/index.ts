export * as lastSharedMethod from './lastSharedMethod';
export * as resource from './resource';

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
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'sharedInsight-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sharedInsight-id', in: 'path' },
    ],
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
    paramDefs: [{ name: 'sharedInsight-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/insights/shared`
 *
 */
export function create(
  body: IEndpoints['POST /me/insights/shared']['body'],
  params?: IEndpoints['POST /me/insights/shared']['parameters']
): EndpointRequest<IEndpoints['POST /me/insights/shared']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/insights/shared',
    paramDefs: [],
    params,
    body,
  };
}
