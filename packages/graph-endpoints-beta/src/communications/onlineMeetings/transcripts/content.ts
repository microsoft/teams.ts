import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content',
    'delete'
  >;
  'GET /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content',
    'get'
  >;
  'PUT /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content',
    'put'
  >;
}

/**
 * `DELETE /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content`
 *
 * The content of the transcript. Read-only.
 */
export function del(
  params?: IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'callTranscript-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content`
 *
 * The content of the transcript. Read-only.
 */
export function get(
  params?: IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content',
    paramDefs: [
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'callTranscript-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content`
 *
 * The content of the transcript. Read-only.
 */
export function set(
  body: IEndpoints['PUT /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content']['body'],
  params?: IEndpoints['PUT /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content']['parameters']
): EndpointRequest<
  IEndpoints['PUT /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content',
    paramDefs: [
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'callTranscript-id', in: 'path' },
    ],
    params,
    body,
  };
}
