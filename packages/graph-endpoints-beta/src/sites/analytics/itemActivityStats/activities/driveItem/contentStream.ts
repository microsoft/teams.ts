import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'GET /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/contentStream': Operation<
    '/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/contentStream',
    'get'
  >;
  'PUT /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/contentStream': Operation<
    '/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/contentStream',
    'put'
  >;
}

/**
 * `GET /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/contentStream`
 *
 * The content stream, if the item represents a file.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/contentStream']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/contentStream']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/contentStream',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'itemActivityStat-id', in: 'path' },
      { name: 'itemActivity-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/contentStream`
 *
 * The content stream, if the item represents a file.
 */
export function set(
  body: IEndpoints['PUT /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/contentStream']['body'],
  params?: IEndpoints['PUT /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/contentStream']['parameters']
): EndpointRequest<
  IEndpoints['PUT /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/contentStream']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/contentStream',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'itemActivityStat-id', in: 'path' },
      { name: 'itemActivity-id', in: 'path' },
    ],
    params,
    body,
  };
}
