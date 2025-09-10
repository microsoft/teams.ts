export * as driveItem from './driveItem';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities': Operation<
    '/groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}',
    'patch'
  >;
  'POST /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities': Operation<
    '/groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'site-id', 'itemActivityStat-id', 'itemActivity-id'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities`
 *
 * Exposes the itemActivities represented in this itemActivityStat resource.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities',
    paramDefs: {
      path: ['group-id', 'site-id', 'itemActivityStat-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}`
 *
 * Exposes the itemActivities represented in this itemActivityStat resource.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}',
    paramDefs: {
      path: ['group-id', 'site-id', 'itemActivityStat-id', 'itemActivity-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}']['response']
> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}',
    paramDefs: {
      path: ['group-id', 'site-id', 'itemActivityStat-id', 'itemActivity-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities']['response']
> {
  return {
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities',
    paramDefs: {
      path: ['group-id', 'site-id', 'itemActivityStat-id'],
    },
    params,
    body,
  };
}
