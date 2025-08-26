import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts/{realTimeTranscript-id}': Operation<
    '/copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts/{realTimeTranscript-id}',
    'delete'
  >;
  'GET /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts': Operation<
    '/copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts',
    'get'
  >;
  'GET /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts/{realTimeTranscript-id}': Operation<
    '/copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts/{realTimeTranscript-id}',
    'get'
  >;
  'PATCH /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts/{realTimeTranscript-id}': Operation<
    '/copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts/{realTimeTranscript-id}',
    'patch'
  >;
  'POST /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts': Operation<
    '/copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts',
    'post'
  >;
}

/**
 * `DELETE /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts/{realTimeTranscript-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts/{realTimeTranscript-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts/{realTimeTranscript-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts/{realTimeTranscript-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'realtimeActivityMeeting-id', in: 'path' },
      { name: 'realTimeTranscript-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts`
 *
 */
export function list(
  params?: IEndpoints['GET /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts']['parameters']
): EndpointRequest<
  IEndpoints['GET /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'realtimeActivityMeeting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts/{realTimeTranscript-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts/{realTimeTranscript-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts/{realTimeTranscript-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts/{realTimeTranscript-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'realtimeActivityMeeting-id', in: 'path' },
      { name: 'realTimeTranscript-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts/{realTimeTranscript-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts/{realTimeTranscript-id}']['body'],
  params?: IEndpoints['PATCH /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts/{realTimeTranscript-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts/{realTimeTranscript-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts/{realTimeTranscript-id}',
    paramDefs: [
      { name: 'realtimeActivityMeeting-id', in: 'path' },
      { name: 'realTimeTranscript-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts`
 *
 */
export function create(
  body: IEndpoints['POST /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts']['body'],
  params?: IEndpoints['POST /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts']['parameters']
): EndpointRequest<
  IEndpoints['POST /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts',
    paramDefs: [{ name: 'realtimeActivityMeeting-id', in: 'path' }],
    params,
    body,
  };
}
