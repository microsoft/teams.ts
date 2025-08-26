export * as content from './content';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}',
    'delete'
  >;
  'GET /communications/onlineMeetings/{onlineMeeting-id}/recordings': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/recordings',
    'get'
  >;
  'GET /communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}',
    'get'
  >;
  'PATCH /communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}',
    'patch'
  >;
  'POST /communications/onlineMeetings/{onlineMeeting-id}/recordings': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/recordings',
    'post'
  >;
}

/**
 * `DELETE /communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'callRecording-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /communications/onlineMeetings/{onlineMeeting-id}/recordings`
 *
 * The recordings of an online meeting. Read-only.
 */
export function list(
  params?: IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/recordings']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/recordings']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/recordings',
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
 * `GET /communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}`
 *
 * The recordings of an online meeting. Read-only.
 */
export function get(
  params?: IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'callRecording-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}']['body'],
  params?: IEndpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}',
    paramDefs: [
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'callRecording-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /communications/onlineMeetings/{onlineMeeting-id}/recordings`
 *
 */
export function create(
  body: IEndpoints['POST /communications/onlineMeetings/{onlineMeeting-id}/recordings']['body'],
  params?: IEndpoints['POST /communications/onlineMeetings/{onlineMeeting-id}/recordings']['parameters']
): EndpointRequest<
  IEndpoints['POST /communications/onlineMeetings/{onlineMeeting-id}/recordings']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/recordings',
    paramDefs: [{ name: 'onlineMeeting-id', in: 'path' }],
    params,
    body,
  };
}
