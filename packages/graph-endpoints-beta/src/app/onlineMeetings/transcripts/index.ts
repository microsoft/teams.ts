export * as content from './content';
export * as metadataContent from './metadataContent';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}',
    'delete'
  >;
  'GET /app/onlineMeetings/{onlineMeeting-id}/transcripts': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/transcripts',
    'get'
  >;
  'GET /app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}',
    'get'
  >;
  'PATCH /app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}',
    'patch'
  >;
  'POST /app/onlineMeetings/{onlineMeeting-id}/transcripts': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/transcripts',
    'post'
  >;
}

/**
 * `DELETE /app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'callTranscript-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /app/onlineMeetings/{onlineMeeting-id}/transcripts`
 *
 * The transcripts of an online meeting. Read-only.
 */
export function list(
  params?: IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/transcripts']['parameters']
): EndpointRequest<
  IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/transcripts']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/app/onlineMeetings/{onlineMeeting-id}/transcripts',
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
 * `GET /app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}`
 *
 * The transcripts of an online meeting. Read-only.
 */
export function get(
  params?: IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}',
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
 * `PATCH /app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}']['body'],
  params?: IEndpoints['PATCH /app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}',
    paramDefs: [
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'callTranscript-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /app/onlineMeetings/{onlineMeeting-id}/transcripts`
 *
 */
export function create(
  body: IEndpoints['POST /app/onlineMeetings/{onlineMeeting-id}/transcripts']['body'],
  params?: IEndpoints['POST /app/onlineMeetings/{onlineMeeting-id}/transcripts']['parameters']
): EndpointRequest<
  IEndpoints['POST /app/onlineMeetings/{onlineMeeting-id}/transcripts']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/app/onlineMeetings/{onlineMeeting-id}/transcripts',
    paramDefs: [{ name: 'onlineMeeting-id', in: 'path' }],
    params,
    body,
  };
}
