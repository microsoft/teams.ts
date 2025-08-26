import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/onlineMeetings/{onlineMeeting-id}/broadcastRecording': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/broadcastRecording',
    'delete'
  >;
  'GET /me/onlineMeetings/{onlineMeeting-id}/broadcastRecording': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/broadcastRecording',
    'get'
  >;
  'PUT /me/onlineMeetings/{onlineMeeting-id}/broadcastRecording': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/broadcastRecording',
    'put'
  >;
}

/**
 * `DELETE /me/onlineMeetings/{onlineMeeting-id}/broadcastRecording`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}/broadcastRecording']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}/broadcastRecording']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/onlineMeetings/{onlineMeeting-id}/broadcastRecording',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onlineMeeting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/onlineMeetings/{onlineMeeting-id}/broadcastRecording`
 *
 */
export function get(
  params?: IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/broadcastRecording']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/broadcastRecording']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/onlineMeetings/{onlineMeeting-id}/broadcastRecording',
    paramDefs: [{ name: 'onlineMeeting-id', in: 'path' }],
    params,
  };
}

/**
 * `PUT /me/onlineMeetings/{onlineMeeting-id}/broadcastRecording`
 *
 */
export function set(
  body: IEndpoints['PUT /me/onlineMeetings/{onlineMeeting-id}/broadcastRecording']['body'],
  params?: IEndpoints['PUT /me/onlineMeetings/{onlineMeeting-id}/broadcastRecording']['parameters']
): EndpointRequest<
  IEndpoints['PUT /me/onlineMeetings/{onlineMeeting-id}/broadcastRecording']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/me/onlineMeetings/{onlineMeeting-id}/broadcastRecording',
    paramDefs: [{ name: 'onlineMeeting-id', in: 'path' }],
    params,
    body,
  };
}
