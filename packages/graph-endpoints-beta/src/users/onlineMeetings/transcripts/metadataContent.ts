import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent',
    'delete'
  >;
  'GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent',
    'get'
  >;
  'PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent',
    'put'
  >;
}

/**
 * `DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent`
 *
 * The time-aligned metadata of the utterances in the transcript. Read-only.
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'callTranscript-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent`
 *
 * Retrieve a callTranscript object associated with a scheduled onlineMeeting. This API supports the retrieval of call transcripts from private chat meetings and channel meetings. However, private channel meetings are not supported at this time. Retrieving the transcript returns the metadata of the single transcript associated with the online meeting. Retrieving the content of the transcript returns the stream of text associated with the transcript.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'callTranscript-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent`
 *
 * The time-aligned metadata of the utterances in the transcript. Read-only.
 */
export function set(
  body: IEndpoints['PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent']['body'],
  params?: IEndpoints['PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent']['parameters']
): EndpointRequest<
  IEndpoints['PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'callTranscript-id', in: 'path' },
    ],
    params,
    body,
  };
}
