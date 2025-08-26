import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /communications/onlineMeetings/{onlineMeeting-id}/alternativeRecording': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/alternativeRecording',
    'delete'
  >;
  'GET /communications/onlineMeetings/{onlineMeeting-id}/alternativeRecording': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/alternativeRecording',
    'get'
  >;
  'PUT /communications/onlineMeetings/{onlineMeeting-id}/alternativeRecording': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/alternativeRecording',
    'put'
  >;
}

/**
 * `DELETE /communications/onlineMeetings/{onlineMeeting-id}/alternativeRecording`
 *
 * The content stream of the alternative recording of a Microsoft Teams live event. Read-only.
 */
export function del(
  params?: IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/alternativeRecording',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onlineMeeting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /communications/onlineMeetings/{onlineMeeting-id}/alternativeRecording`
 *
 * The content stream of the alternative recording of a Microsoft Teams live event. Read-only.
 */
export function get(
  params?: IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/alternativeRecording',
    paramDefs: [{ name: 'onlineMeeting-id', in: 'path' }],
    params,
  };
}

/**
 * `PUT /communications/onlineMeetings/{onlineMeeting-id}/alternativeRecording`
 *
 * The content stream of the alternative recording of a Microsoft Teams live event. Read-only.
 */
export function set(
  body: IEndpoints['PUT /communications/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['body'],
  params?: IEndpoints['PUT /communications/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['parameters']
): EndpointRequest<
  IEndpoints['PUT /communications/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/alternativeRecording',
    paramDefs: [{ name: 'onlineMeeting-id', in: 'path' }],
    params,
    body,
  };
}
