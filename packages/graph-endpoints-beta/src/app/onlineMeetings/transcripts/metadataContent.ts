import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent',
    'delete'
  >;
  'GET /app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent',
    'get'
  >;
  'PUT /app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent',
    'put'
  >;
}

/**
 * `DELETE /app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent`
 *
 * The time-aligned metadata of the utterances in the transcript. Read-only.
 */
export function del(
  params?: IEndpoints['DELETE /app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'callTranscript-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent`
 *
 * The time-aligned metadata of the utterances in the transcript. Read-only.
 */
export function get(
  params?: IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent']['parameters']
): EndpointRequest<
  IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent',
    paramDefs: [
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'callTranscript-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent`
 *
 * The time-aligned metadata of the utterances in the transcript. Read-only.
 */
export function set(
  body: IEndpoints['PUT /app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent']['body'],
  params?: IEndpoints['PUT /app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent']['parameters']
): EndpointRequest<
  IEndpoints['PUT /app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent',
    paramDefs: [
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'callTranscript-id', in: 'path' },
    ],
    params,
    body,
  };
}
