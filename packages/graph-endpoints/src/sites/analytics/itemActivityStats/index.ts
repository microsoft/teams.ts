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
    method: 'delete',
    path: '/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['site-id', 'itemActivityStat-id'],
    },
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
    method: 'get',
    path: '/sites/{site-id}/analytics/itemActivityStats',
    paramDefs: {
      path: ['site-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    method: 'get',
    path: '/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}',
    paramDefs: {
      path: ['site-id', 'itemActivityStat-id'],
      query: ['$select', '$expand'],
    },
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
    method: 'patch',
    path: '/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}',
    paramDefs: {
      path: ['site-id', 'itemActivityStat-id'],
    },
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
    method: 'post',
    path: '/sites/{site-id}/analytics/itemActivityStats',
    paramDefs: {
      path: ['site-id'],
    },
    params,
    body,
  };
}
