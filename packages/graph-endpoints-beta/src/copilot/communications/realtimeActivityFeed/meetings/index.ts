export * as transcripts from './transcripts';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}': Operation<
    '/copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}',
    'delete'
  >;
  'GET /copilot/communications/realtimeActivityFeed/meetings': Operation<
    '/copilot/communications/realtimeActivityFeed/meetings',
    'get'
  >;
  'GET /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}': Operation<
    '/copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}',
    'get'
  >;
  'PATCH /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}': Operation<
    '/copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}',
    'patch'
  >;
  'POST /copilot/communications/realtimeActivityFeed/meetings': Operation<
    '/copilot/communications/realtimeActivityFeed/meetings',
    'post'
  >;
}

/**
 * `DELETE /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'realtimeActivityMeeting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /copilot/communications/realtimeActivityFeed/meetings`
 *
 */
export function list(
  params?: IEndpoints['GET /copilot/communications/realtimeActivityFeed/meetings']['parameters']
): EndpointRequest<
  IEndpoints['GET /copilot/communications/realtimeActivityFeed/meetings']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/copilot/communications/realtimeActivityFeed/meetings',
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
 * `GET /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'realtimeActivityMeeting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}']['body'],
  params?: IEndpoints['PATCH /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}',
    paramDefs: [{ name: 'realtimeActivityMeeting-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /copilot/communications/realtimeActivityFeed/meetings`
 *
 */
export function create(
  body: IEndpoints['POST /copilot/communications/realtimeActivityFeed/meetings']['body'],
  params?: IEndpoints['POST /copilot/communications/realtimeActivityFeed/meetings']['parameters']
): EndpointRequest<
  IEndpoints['POST /copilot/communications/realtimeActivityFeed/meetings']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/copilot/communications/realtimeActivityFeed/meetings',
    paramDefs: [],
    params,
    body,
  };
}
