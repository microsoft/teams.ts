export * as driveItem from './driveItem';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}',
    'delete'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities',
    'get'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}',
    'get'
  >;
  'PATCH /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}',
    'patch'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities',
    'post'
  >;
}

/**
 * `DELETE /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
      { name: 'itemActivityStat-id', in: 'path' },
      { name: 'itemActivity-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities`
 *
 * Exposes the itemActivities represented in this itemActivityStat resource.
 */
export function list(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
      { name: 'itemActivityStat-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}`
 *
 * Exposes the itemActivities represented in this itemActivityStat resource.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
      { name: 'itemActivityStat-id', in: 'path' },
      { name: 'itemActivity-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
      { name: 'itemActivityStat-id', in: 'path' },
      { name: 'itemActivity-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
      { name: 'itemActivityStat-id', in: 'path' },
    ],
    params,
    body,
  };
}
