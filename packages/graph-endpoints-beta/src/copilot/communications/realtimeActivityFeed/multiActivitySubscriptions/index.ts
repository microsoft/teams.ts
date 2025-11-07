import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /copilot/communications/realtimeActivityFeed/multiActivitySubscriptions/{multiActivitySubscription-id}': Operation<
    '/copilot/communications/realtimeActivityFeed/multiActivitySubscriptions/{multiActivitySubscription-id}',
    'delete'
  >;
  'GET /copilot/communications/realtimeActivityFeed/multiActivitySubscriptions': Operation<
    '/copilot/communications/realtimeActivityFeed/multiActivitySubscriptions',
    'get'
  >;
  'GET /copilot/communications/realtimeActivityFeed/multiActivitySubscriptions/{multiActivitySubscription-id}': Operation<
    '/copilot/communications/realtimeActivityFeed/multiActivitySubscriptions/{multiActivitySubscription-id}',
    'get'
  >;
  'PATCH /copilot/communications/realtimeActivityFeed/multiActivitySubscriptions/{multiActivitySubscription-id}': Operation<
    '/copilot/communications/realtimeActivityFeed/multiActivitySubscriptions/{multiActivitySubscription-id}',
    'patch'
  >;
  'POST /copilot/communications/realtimeActivityFeed/multiActivitySubscriptions': Operation<
    '/copilot/communications/realtimeActivityFeed/multiActivitySubscriptions',
    'post'
  >;
  'POST /copilot/communications/realtimeActivityFeed/multiActivitySubscriptions/{multiActivitySubscription-id}/getArtifacts': Operation<
    '/copilot/communications/realtimeActivityFeed/multiActivitySubscriptions/{multiActivitySubscription-id}/getArtifacts',
    'post'
  >;
}

/**
 * `DELETE /copilot/communications/realtimeActivityFeed/multiActivitySubscriptions/{multiActivitySubscription-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /copilot/communications/realtimeActivityFeed/multiActivitySubscriptions/{multiActivitySubscription-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /copilot/communications/realtimeActivityFeed/multiActivitySubscriptions/{multiActivitySubscription-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/copilot/communications/realtimeActivityFeed/multiActivitySubscriptions/{multiActivitySubscription-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['multiActivitySubscription-id'],
    },
    params,
  };
}

/**
 * `GET /copilot/communications/realtimeActivityFeed/multiActivitySubscriptions`
 *
 */
export function list(
  params?: IEndpoints['GET /copilot/communications/realtimeActivityFeed/multiActivitySubscriptions']['parameters']
): EndpointRequest<
  IEndpoints['GET /copilot/communications/realtimeActivityFeed/multiActivitySubscriptions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/copilot/communications/realtimeActivityFeed/multiActivitySubscriptions',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /copilot/communications/realtimeActivityFeed/multiActivitySubscriptions/{multiActivitySubscription-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /copilot/communications/realtimeActivityFeed/multiActivitySubscriptions/{multiActivitySubscription-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /copilot/communications/realtimeActivityFeed/multiActivitySubscriptions/{multiActivitySubscription-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/copilot/communications/realtimeActivityFeed/multiActivitySubscriptions/{multiActivitySubscription-id}',
    paramDefs: {
      path: ['multiActivitySubscription-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /copilot/communications/realtimeActivityFeed/multiActivitySubscriptions/{multiActivitySubscription-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /copilot/communications/realtimeActivityFeed/multiActivitySubscriptions/{multiActivitySubscription-id}']['body'],
  params?: IEndpoints['PATCH /copilot/communications/realtimeActivityFeed/multiActivitySubscriptions/{multiActivitySubscription-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /copilot/communications/realtimeActivityFeed/multiActivitySubscriptions/{multiActivitySubscription-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/copilot/communications/realtimeActivityFeed/multiActivitySubscriptions/{multiActivitySubscription-id}',
    paramDefs: {
      path: ['multiActivitySubscription-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /copilot/communications/realtimeActivityFeed/multiActivitySubscriptions`
 *
 */
export function create(
  body: IEndpoints['POST /copilot/communications/realtimeActivityFeed/multiActivitySubscriptions']['body']
): EndpointRequest<
  IEndpoints['POST /copilot/communications/realtimeActivityFeed/multiActivitySubscriptions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/copilot/communications/realtimeActivityFeed/multiActivitySubscriptions',
    body,
  };
}

export const getArtifacts = {
  /**
   * `POST /copilot/communications/realtimeActivityFeed/multiActivitySubscriptions/{multiActivitySubscription-id}/getArtifacts`
   *
   */
  create: function create(
    body: IEndpoints['POST /copilot/communications/realtimeActivityFeed/multiActivitySubscriptions/{multiActivitySubscription-id}/getArtifacts']['body'],
    params?: IEndpoints['POST /copilot/communications/realtimeActivityFeed/multiActivitySubscriptions/{multiActivitySubscription-id}/getArtifacts']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /copilot/communications/realtimeActivityFeed/multiActivitySubscriptions/{multiActivitySubscription-id}/getArtifacts']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/copilot/communications/realtimeActivityFeed/multiActivitySubscriptions/{multiActivitySubscription-id}/getArtifacts',
      paramDefs: {
        path: ['multiActivitySubscription-id'],
      },
      params,
      body,
    };
  },
};
