import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/alternativeRecording': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/alternativeRecording',
    'delete'
  >;
  'GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/alternativeRecording': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/alternativeRecording',
    'get'
  >;
  'PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/alternativeRecording': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/alternativeRecording',
    'put'
  >;
}

/**
 * `DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/alternativeRecording`
 *
 * The content stream of the alternative recording of a Microsoft Teams live event. Read-only.
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/alternativeRecording',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'onlineMeeting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/alternativeRecording`
 *
 * The content stream of the alternative recording of a Microsoft Teams live event. Read-only.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/alternativeRecording',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'onlineMeeting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/alternativeRecording`
 *
 * The content stream of the alternative recording of a Microsoft Teams live event. Read-only.
 */
export function set(
  body: IEndpoints['PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['body'],
  params?: IEndpoints['PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['parameters']
): EndpointRequest<
  IEndpoints['PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/alternativeRecording',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'onlineMeeting-id', in: 'path' },
    ],
    params,
    body,
  };
}
