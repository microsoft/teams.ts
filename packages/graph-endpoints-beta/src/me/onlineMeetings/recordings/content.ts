import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content',
    'delete'
  >;
  'GET /me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content',
    'get'
  >;
  'PUT /me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content',
    'put'
  >;
}

/**
 * `DELETE /me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content`
 *
 * The content of the recording. Read-only.
 */
export function del(
  params?: IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'callRecording-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content`
 *
 * The content of the recording. Read-only.
 */
export function get(
  params?: IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content',
    paramDefs: [
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'callRecording-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content`
 *
 * The content of the recording. Read-only.
 */
export function set(
  body: IEndpoints['PUT /me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content']['body'],
  params?: IEndpoints['PUT /me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content']['parameters']
): EndpointRequest<
  IEndpoints['PUT /me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content',
    paramDefs: [
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'callRecording-id', in: 'path' },
    ],
    params,
    body,
  };
}
