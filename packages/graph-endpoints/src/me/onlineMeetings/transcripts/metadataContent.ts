import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent',
    'delete'
  >;
  'GET /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent',
    'get'
  >;
  'PUT /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent',
    'put'
  >;
}

/**
 * `DELETE /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent`
 *
 * The time-aligned metadata of the utterances in the transcript. Read-only.
 */
export function del(
  params?: IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent']['response']
> {
  return {
    method: 'delete',
    path: '/me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'callTranscript-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent`
 *
 * The time-aligned metadata of the utterances in the transcript. Read-only.
 */
export function get(
  params?: IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent']['response']
> {
  return {
    method: 'get',
    path: '/me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent',
    paramDefs: [
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'callTranscript-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent`
 *
 * The time-aligned metadata of the utterances in the transcript. Read-only.
 */
export function set(
  body: IEndpoints['PUT /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent']['body'],
  params?: IEndpoints['PUT /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent']['parameters']
): EndpointRequest<
  IEndpoints['PUT /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent']['response']
> {
  return {
    method: 'put',
    path: '/me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent',
    paramDefs: [
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'callTranscript-id', in: 'path' },
    ],
    params,
    body,
  };
}
