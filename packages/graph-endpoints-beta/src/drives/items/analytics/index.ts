export * as allTime from './allTime';
export * as itemActivityStats from './itemActivityStats';
export * as lastSevenDays from './lastSevenDays';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/items/{driveItem-id}/analytics': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/analytics',
    'delete'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/analytics': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/analytics',
    'get'
  >;
  'PATCH /drives/{drive-id}/items/{driveItem-id}/analytics': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/analytics',
    'patch'
  >;
}

/**
 * `DELETE /drives/{drive-id}/items/{driveItem-id}/analytics`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/analytics']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/analytics']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/drives/{drive-id}/items/{driveItem-id}/analytics',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
  };
}

/**
  * `GET /drives/{drive-id}/items/{driveItem-id}/analytics`
  *
  * Get itemAnalytics about the views that took place under this resource.
The itemAnalytics resource is a convenient way to get activity stats for allTime and the lastSevenDays.
For a custom time range or interval, use the getActivitiesByInterval API.
  */
export function list(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/analytics']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/analytics']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/analytics',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /drives/{drive-id}/items/{driveItem-id}/analytics`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/analytics']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/analytics']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/analytics']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/drives/{drive-id}/items/{driveItem-id}/analytics',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
