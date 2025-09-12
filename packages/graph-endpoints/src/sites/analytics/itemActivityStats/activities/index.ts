export * as driveItem from './driveItem';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}': Operation<
    '/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}',
    'delete'
  >;
  'GET /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities': Operation<
    '/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities',
    'get'
  >;
  'GET /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}': Operation<
    '/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}': Operation<
    '/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}',
    'patch'
  >;
  'POST /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities': Operation<
    '/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities',
    'post'
  >;
}

/**
 * `DELETE /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}']['response']
> {
  return {
    method: 'delete',
    path: '/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['site-id', 'itemActivityStat-id', 'itemActivity-id'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities`
 *
 * Exposes the itemActivities represented in this itemActivityStat resource.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities']['response']
> {
  return {
    method: 'get',
    path: '/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities',
    paramDefs: {
      path: ['site-id', 'itemActivityStat-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}`
 *
 * Exposes the itemActivities represented in this itemActivityStat resource.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}']['response']
> {
  return {
    method: 'get',
    path: '/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}',
    paramDefs: {
      path: ['site-id', 'itemActivityStat-id', 'itemActivity-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}']['response']
> {
  return {
    method: 'patch',
    path: '/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}',
    paramDefs: {
      path: ['site-id', 'itemActivityStat-id', 'itemActivity-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities']['body'],
  params?: IEndpoints['POST /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities']['response']
> {
  return {
    method: 'post',
    path: '/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities',
    paramDefs: {
      path: ['site-id', 'itemActivityStat-id'],
    },
    params,
    body,
  };
}
