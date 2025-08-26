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
    ver: 'beta',
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
 * Get a callRecording object associated with a scheduled onlineMeeting. This API supports the retrieval of call recordings from private chat meetings and channel meetings. However, private channel meetings are not supported at this time. For a recording, this API returns the metadata of the single recording associated with the online meeting. For the content of a recording, this API returns the stream of bytes associated with the recording.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content']['response']
> {
  return {
    ver: 'beta',
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
    ver: 'beta',
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
