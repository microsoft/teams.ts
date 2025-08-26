import type { EndpointRequest, Operation } from './../../../types/common.ts';

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
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'multiActivitySubscription-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'multiActivitySubscription-id', in: 'path' },
    ],
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
    paramDefs: [{ name: 'multiActivitySubscription-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /copilot/communications/realtimeActivityFeed/multiActivitySubscriptions`
 *
 */
export function create(
  body: IEndpoints['POST /copilot/communications/realtimeActivityFeed/multiActivitySubscriptions']['body'],
  params?: IEndpoints['POST /copilot/communications/realtimeActivityFeed/multiActivitySubscriptions']['parameters']
): EndpointRequest<
  IEndpoints['POST /copilot/communications/realtimeActivityFeed/multiActivitySubscriptions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/copilot/communications/realtimeActivityFeed/multiActivitySubscriptions',
    paramDefs: [],
    params,
    body,
  };
}
