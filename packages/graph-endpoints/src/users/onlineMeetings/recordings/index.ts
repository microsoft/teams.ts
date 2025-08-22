export * as content from './content';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}',
    'delete'
  >;
  'GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings',
    'get'
  >;
  'GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}',
    'get'
  >;
  'PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}',
    'patch'
  >;
  'POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'callRecording-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings`
 *
 * Get a callRecording object associated with a scheduled onlineMeeting. This API supports the retrieval of call transcripts from private chat meetings and channel meetings. However, private channel meetings are not supported at this time. For a recording, this API returns the metadata of the single recording associated with the online meeting. For the content of a recording, this API returns the stream of bytes associated with the recording.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings',
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
 * `GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}`
 *
 * Get a callRecording object associated with a scheduled onlineMeeting. This API supports the retrieval of call transcripts from private chat meetings and channel meetings. However, private channel meetings are not supported at this time. For a recording, this API returns the metadata of the single recording associated with the online meeting. For the content of a recording, this API returns the stream of bytes associated with the recording.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'callRecording-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'callRecording-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings']['body'],
  params?: IEndpoints['POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'onlineMeeting-id', in: 'path' },
    ],
    params,
    body,
  };
}
