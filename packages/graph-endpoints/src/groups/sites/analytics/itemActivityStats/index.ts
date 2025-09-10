export * as activities from './activities';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats': Operation<
    '/groups/{group-id}/sites/{site-id}/analytics/itemActivityStats',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}',
    'patch'
  >;
  'POST /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats': Operation<
    '/groups/{group-id}/sites/{site-id}/analytics/itemActivityStats',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'site-id', 'itemActivityStat-id'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats`
 *
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/analytics/itemActivityStats',
    paramDefs: {
      path: ['group-id', 'site-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}',
    paramDefs: {
      path: ['group-id', 'site-id', 'itemActivityStat-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}']['response']
> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}',
    paramDefs: {
      path: ['group-id', 'site-id', 'itemActivityStat-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats']['response']
> {
  return {
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/analytics/itemActivityStats',
    paramDefs: {
      path: ['group-id', 'site-id'],
    },
    params,
    body,
  };
}
