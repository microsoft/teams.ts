export * as content from './content';
export * as metadataContent from './metadataContent';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}',
    'delete'
  >;
  'GET /me/onlineMeetings/{onlineMeeting-id}/transcripts': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/transcripts',
    'get'
  >;
  'GET /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}',
    'get'
  >;
  'PATCH /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}',
    'patch'
  >;
  'POST /me/onlineMeetings/{onlineMeeting-id}/transcripts': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/transcripts',
    'post'
  >;
}

/**
 * `DELETE /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'callTranscript-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/onlineMeetings/{onlineMeeting-id}/transcripts`
 *
 * Retrieve a callTranscript object associated with a scheduled onlineMeeting. This API supports the retrieval of call transcripts from private chat meetings and channel meetings. However, private channel meetings are not supported at this time. Retrieving the transcript returns the metadata of the single transcript associated with the online meeting. Retrieving the content of the transcript returns the stream of text associated with the transcript.
 */
export function list(
  params?: IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/transcripts']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/transcripts']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/onlineMeetings/{onlineMeeting-id}/transcripts',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'onlineMeeting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}`
 *
 * The transcripts of an online meeting. Read-only.
 */
export function get(
  params?: IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'callTranscript-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}']['body'],
  params?: IEndpoints['PATCH /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}',
    paramDefs: [
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'callTranscript-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/onlineMeetings/{onlineMeeting-id}/transcripts`
 *
 */
export function create(
  body: IEndpoints['POST /me/onlineMeetings/{onlineMeeting-id}/transcripts']['body'],
  params?: IEndpoints['POST /me/onlineMeetings/{onlineMeeting-id}/transcripts']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/onlineMeetings/{onlineMeeting-id}/transcripts']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/onlineMeetings/{onlineMeeting-id}/transcripts',
    paramDefs: [{ name: 'onlineMeeting-id', in: 'path' }],
    params,
    body,
  };
}
