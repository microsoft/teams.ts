import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'GET /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem': Operation<
    '/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem',
    'get'
  >;
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
 * `GET /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem`
 *
 * Exposes the driveItem that was the target of this activity.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem']['response']
> {
  return {
    method: 'get',
    path: '/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem',
    paramDefs: {
      path: ['site-id', 'itemActivityStat-id', 'itemActivity-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const content = {
  /**
   * `GET /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content`
   *
   * The content stream, if the item represents a file.
   */
  get: function get(
    params?: IEndpoints['GET /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content']['response']
  > {
    return {
      method: 'get',
      path: '/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content',
      paramDefs: {
        query: ['$format'],
        path: ['site-id', 'itemActivityStat-id', 'itemActivity-id'],
      },
      params,
    };
  },
  /**
   * `PUT /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content`
   *
   * The content stream, if the item represents a file.
   */
  set: function set(
    body: IEndpoints['PUT /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content']['body'],
    params?: IEndpoints['PUT /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content']['response']
  > {
    return {
      method: 'put',
      path: '/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content',
      paramDefs: {
        path: ['site-id', 'itemActivityStat-id', 'itemActivity-id'],
      },
      params,
      body,
    };
  },
};
