import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /communications/onlineMeetings/{onlineMeeting-id}/broadcastRecording': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/broadcastRecording',
    'delete'
  >;
  'GET /communications/onlineMeetings/{onlineMeeting-id}/broadcastRecording': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/broadcastRecording',
    'get'
  >;
  'PUT /communications/onlineMeetings/{onlineMeeting-id}/broadcastRecording': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/broadcastRecording',
    'put'
  >;
}

/**
 * `DELETE /communications/onlineMeetings/{onlineMeeting-id}/broadcastRecording`
 *
 */
export function del(
  params?: IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/broadcastRecording']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/broadcastRecording']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/broadcastRecording',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onlineMeeting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /communications/onlineMeetings/{onlineMeeting-id}/broadcastRecording`
 *
 */
export function get(
  params?: IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/broadcastRecording']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/broadcastRecording']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/broadcastRecording',
    paramDefs: [{ name: 'onlineMeeting-id', in: 'path' }],
    params,
  };
}

/**
 * `PUT /communications/onlineMeetings/{onlineMeeting-id}/broadcastRecording`
 *
 */
export function set(
  body: IEndpoints['PUT /communications/onlineMeetings/{onlineMeeting-id}/broadcastRecording']['body'],
  params?: IEndpoints['PUT /communications/onlineMeetings/{onlineMeeting-id}/broadcastRecording']['parameters']
): EndpointRequest<
  IEndpoints['PUT /communications/onlineMeetings/{onlineMeeting-id}/broadcastRecording']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/broadcastRecording',
    paramDefs: [{ name: 'onlineMeeting-id', in: 'path' }],
    params,
    body,
  };
}
