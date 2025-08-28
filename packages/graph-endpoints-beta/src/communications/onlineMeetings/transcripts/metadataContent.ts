import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent',
    'delete'
  >;
  'GET /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent',
    'get'
  >;
  'PUT /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent',
    'put'
  >;
}

/**
 * `DELETE /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent`
 *
 * The time-aligned metadata of the utterances in the transcript. Read-only.
 */
export function del(
  params?: IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'callTranscript-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent`
 *
 * The time-aligned metadata of the utterances in the transcript. Read-only.
 */
export function get(
  params?: IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent',
    paramDefs: [
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'callTranscript-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent`
 *
 * The time-aligned metadata of the utterances in the transcript. Read-only.
 */
export function set(
  body: IEndpoints['PUT /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent']['body'],
  params?: IEndpoints['PUT /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent']['parameters']
): EndpointRequest<
  IEndpoints['PUT /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent',
    paramDefs: [
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'callTranscript-id', in: 'path' },
    ],
    params,
    body,
  };
}
