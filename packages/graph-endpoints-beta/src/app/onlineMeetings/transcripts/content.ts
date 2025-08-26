import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content',
    'delete'
  >;
  'GET /app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content',
    'get'
  >;
  'PUT /app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content',
    'put'
  >;
}

/**
 * `DELETE /app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content`
 *
 * The content of the transcript. Read-only.
 */
export function del(
  params?: IEndpoints['DELETE /app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'callTranscript-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content`
 *
 * The content of the transcript. Read-only.
 */
export function get(
  params?: IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content']['parameters']
): EndpointRequest<
  IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content',
    paramDefs: [
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'callTranscript-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content`
 *
 * The content of the transcript. Read-only.
 */
export function set(
  body: IEndpoints['PUT /app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content']['body'],
  params?: IEndpoints['PUT /app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content']['parameters']
): EndpointRequest<
  IEndpoints['PUT /app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content',
    paramDefs: [
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'callTranscript-id', in: 'path' },
    ],
    params,
    body,
  };
}
