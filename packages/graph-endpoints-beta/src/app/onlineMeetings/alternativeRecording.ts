import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /app/onlineMeetings/{onlineMeeting-id}/alternativeRecording': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/alternativeRecording',
    'delete'
  >;
  'GET /app/onlineMeetings/{onlineMeeting-id}/alternativeRecording': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/alternativeRecording',
    'get'
  >;
  'PUT /app/onlineMeetings/{onlineMeeting-id}/alternativeRecording': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/alternativeRecording',
    'put'
  >;
}

/**
 * `DELETE /app/onlineMeetings/{onlineMeeting-id}/alternativeRecording`
 *
 * The content stream of the alternative recording of a Microsoft Teams live event. Read-only.
 */
export function del(
  params?: IEndpoints['DELETE /app/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /app/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/app/onlineMeetings/{onlineMeeting-id}/alternativeRecording',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onlineMeeting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /app/onlineMeetings/{onlineMeeting-id}/alternativeRecording`
 *
 * The content stream of the alternative recording of a Microsoft Teams live event. Read-only.
 */
export function get(
  params?: IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['parameters']
): EndpointRequest<
  IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/app/onlineMeetings/{onlineMeeting-id}/alternativeRecording',
    paramDefs: [{ name: 'onlineMeeting-id', in: 'path' }],
    params,
  };
}

/**
 * `PUT /app/onlineMeetings/{onlineMeeting-id}/alternativeRecording`
 *
 * The content stream of the alternative recording of a Microsoft Teams live event. Read-only.
 */
export function set(
  body: IEndpoints['PUT /app/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['body'],
  params?: IEndpoints['PUT /app/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['parameters']
): EndpointRequest<
  IEndpoints['PUT /app/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/app/onlineMeetings/{onlineMeeting-id}/alternativeRecording',
    paramDefs: [{ name: 'onlineMeeting-id', in: 'path' }],
    params,
    body,
  };
}
