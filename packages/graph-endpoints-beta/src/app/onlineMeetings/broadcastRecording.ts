import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /app/onlineMeetings/{onlineMeeting-id}/broadcastRecording': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/broadcastRecording',
    'delete'
  >;
  'GET /app/onlineMeetings/{onlineMeeting-id}/broadcastRecording': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/broadcastRecording',
    'get'
  >;
  'PUT /app/onlineMeetings/{onlineMeeting-id}/broadcastRecording': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/broadcastRecording',
    'put'
  >;
}

/**
 * `DELETE /app/onlineMeetings/{onlineMeeting-id}/broadcastRecording`
 *
 */
export function del(
  params?: IEndpoints['DELETE /app/onlineMeetings/{onlineMeeting-id}/broadcastRecording']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /app/onlineMeetings/{onlineMeeting-id}/broadcastRecording']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/app/onlineMeetings/{onlineMeeting-id}/broadcastRecording',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onlineMeeting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /app/onlineMeetings/{onlineMeeting-id}/broadcastRecording`
 *
 */
export function get(
  params?: IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/broadcastRecording']['parameters']
): EndpointRequest<
  IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/broadcastRecording']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/app/onlineMeetings/{onlineMeeting-id}/broadcastRecording',
    paramDefs: [{ name: 'onlineMeeting-id', in: 'path' }],
    params,
  };
}

/**
 * `PUT /app/onlineMeetings/{onlineMeeting-id}/broadcastRecording`
 *
 */
export function set(
  body: IEndpoints['PUT /app/onlineMeetings/{onlineMeeting-id}/broadcastRecording']['body'],
  params?: IEndpoints['PUT /app/onlineMeetings/{onlineMeeting-id}/broadcastRecording']['parameters']
): EndpointRequest<
  IEndpoints['PUT /app/onlineMeetings/{onlineMeeting-id}/broadcastRecording']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/app/onlineMeetings/{onlineMeeting-id}/broadcastRecording',
    paramDefs: [{ name: 'onlineMeeting-id', in: 'path' }],
    params,
    body,
  };
}
