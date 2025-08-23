import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content',
    'delete'
  >;
  'GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content',
    'get'
  >;
  'PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content',
    'put'
  >;
}

/**
 * `DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content`
 *
 * The content of the transcript. Read-only.
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content',
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
 * `GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content`
 *
 * Retrieve a callTranscript object associated with a scheduled onlineMeeting. This API supports the retrieval of call transcripts from private chat meetings and channel meetings. However, private channel meetings are not supported at this time. Retrieving the transcript returns the metadata of the single transcript associated with the online meeting. Retrieving the content of the transcript returns the stream of text associated with the transcript.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'callTranscript-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content`
 *
 * The content of the transcript. Read-only.
 */
export function set(
  body: IEndpoints['PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content']['body'],
  params?: IEndpoints['PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content']['parameters']
): EndpointRequest<
  IEndpoints['PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content']['response']
> {
  return {
    method: 'put',
    path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'callTranscript-id', in: 'path' },
    ],
    params,
    body,
  };
}
