export * as activities from './activities';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}': Operation<
    '/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}',
    'delete'
  >;
  'GET /sites/{site-id}/analytics/itemActivityStats': Operation<
    '/sites/{site-id}/analytics/itemActivityStats',
    'get'
  >;
  'GET /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}': Operation<
    '/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}': Operation<
    '/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}',
    'patch'
  >;
  'POST /sites/{site-id}/analytics/itemActivityStats': Operation<
    '/sites/{site-id}/analytics/itemActivityStats',
    'post'
  >;
}

/**
 * `DELETE /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'site-id', in: 'path' },
      { name: 'itemActivityStat-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/analytics/itemActivityStats`
 *
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/analytics/itemActivityStats']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/analytics/itemActivityStats']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/analytics/itemActivityStats',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'itemActivityStat-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'itemActivityStat-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/analytics/itemActivityStats`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/analytics/itemActivityStats']['body'],
  params?: IEndpoints['POST /sites/{site-id}/analytics/itemActivityStats']['parameters']
): EndpointRequest<IEndpoints['POST /sites/{site-id}/analytics/itemActivityStats']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/analytics/itemActivityStats',
    paramDefs: [{ name: 'site-id', in: 'path' }],
    params,
    body,
  };
}
