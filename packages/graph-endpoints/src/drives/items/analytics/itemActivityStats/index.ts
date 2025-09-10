export * as activities from './activities';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}',
    'delete'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats',
    'get'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}',
    'get'
  >;
  'PATCH /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}',
    'patch'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats',
    'post'
  >;
}

/**
 * `DELETE /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}']['response']
> {
  return {
    method: 'delete',
    path: '/drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['drive-id', 'driveItem-id', 'itemActivityStat-id'],
    },
    params,
  };
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats`
 *
 */
export function list(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats']['response']
> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats',
    paramDefs: {
      path: ['drive-id', 'driveItem-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}']['response']
> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}',
    paramDefs: {
      path: ['drive-id', 'driveItem-id', 'itemActivityStat-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}']['response']
> {
  return {
    method: 'patch',
    path: '/drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}',
    paramDefs: {
      path: ['drive-id', 'driveItem-id', 'itemActivityStat-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats']['response']
> {
  return {
    method: 'post',
    path: '/drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats',
    paramDefs: {
      path: ['drive-id', 'driveItem-id'],
    },
    params,
    body,
  };
}
