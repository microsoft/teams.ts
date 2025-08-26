export * as content from './content';
export * as metadataContent from './metadataContent';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}',
    'delete'
  >;
  'GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts',
    'get'
  >;
  'GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}',
    'get'
  >;
  'PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}',
    'patch'
  >;
  'POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}',
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
 * `GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts`
 *
 * Retrieve the list of callTranscript objects associated with a scheduled onlineMeeting. This API supports the retrieval of call transcripts from private chat meetings and channel meetings. However, private channel meetings are not supported at this time.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'onlineMeeting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}`
 *
 * Retrieve a callTranscript object associated with a scheduled onlineMeeting. This API supports the retrieval of call transcripts from private chat meetings and channel meetings. However, private channel meetings are not supported at this time. Retrieving the transcript returns the metadata of the single transcript associated with the online meeting. Retrieving the content of the transcript returns the stream of text associated with the transcript.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'callTranscript-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'callTranscript-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts']['body'],
  params?: IEndpoints['POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'onlineMeeting-id', in: 'path' },
    ],
    params,
    body,
  };
}
