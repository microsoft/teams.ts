import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'GET /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content': Operation<
    '/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content',
    'get'
  >;
  'PUT /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content': Operation<
    '/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content',
    'put'
  >;
}

/**
 * `GET /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content`
 *
 * The content stream, if the item represents a file.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content']['response']
> {
  return {
    method: 'get',
    path: '/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content',
    paramDefs: [
      { name: '$format', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'itemActivityStat-id', in: 'path' },
      { name: 'itemActivity-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content`
 *
 * The content stream, if the item represents a file.
 */
export function set(
  body: IEndpoints['PUT /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content']['body'],
  params?: IEndpoints['PUT /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content']['parameters']
): EndpointRequest<
  IEndpoints['PUT /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content']['response']
> {
  return {
    method: 'put',
    path: '/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'itemActivityStat-id', in: 'path' },
      { name: 'itemActivity-id', in: 'path' },
    ],
    params,
    body,
  };
}
