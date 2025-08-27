import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/onlineMeetings/{onlineMeeting-id}/alternativeRecording': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/alternativeRecording',
    'delete'
  >;
  'GET /me/onlineMeetings/{onlineMeeting-id}/alternativeRecording': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/alternativeRecording',
    'get'
  >;
  'PUT /me/onlineMeetings/{onlineMeeting-id}/alternativeRecording': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/alternativeRecording',
    'put'
  >;
}

/**
 * `DELETE /me/onlineMeetings/{onlineMeeting-id}/alternativeRecording`
 *
 * The content stream of the alternative recording of a Microsoft Teams live event. Read-only.
 */
export function del(
  params?: IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/onlineMeetings/{onlineMeeting-id}/alternativeRecording',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onlineMeeting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/onlineMeetings/{onlineMeeting-id}/alternativeRecording`
 *
 * The content stream of the alternative recording of a Microsoft Teams live event. Read-only.
 */
export function get(
  params?: IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/onlineMeetings/{onlineMeeting-id}/alternativeRecording',
    paramDefs: [{ name: 'onlineMeeting-id', in: 'path' }],
    params,
  };
}

/**
 * `PUT /me/onlineMeetings/{onlineMeeting-id}/alternativeRecording`
 *
 * The content stream of the alternative recording of a Microsoft Teams live event. Read-only.
 */
export function set(
  body: IEndpoints['PUT /me/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['body'],
  params?: IEndpoints['PUT /me/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['parameters']
): EndpointRequest<
  IEndpoints['PUT /me/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/me/onlineMeetings/{onlineMeeting-id}/alternativeRecording',
    paramDefs: [{ name: 'onlineMeeting-id', in: 'path' }],
    params,
    body,
  };
}
