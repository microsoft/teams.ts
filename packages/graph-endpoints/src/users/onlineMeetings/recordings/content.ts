import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content',
    'delete'
  >;
  'GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content',
    'get'
  >;
  'PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content',
    'put'
  >;
}

/**
 * `DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content`
 *
 * The content of the recording. Read-only.
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content',
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
 * `GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content`
 *
 * The content of the recording. Read-only.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'callRecording-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content`
 *
 * The content of the recording. Read-only.
 */
export function set(
  body: IEndpoints['PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content']['body'],
  params?: IEndpoints['PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content']['parameters']
): EndpointRequest<
  IEndpoints['PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content']['response']
> {
  return {
    method: 'put',
    path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'callRecording-id', in: 'path' },
    ],
    params,
    body,
  };
}
