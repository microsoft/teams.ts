export * as customQuestions from './customQuestions';
export * as registrants from './registrants';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/onlineMeetings/{onlineMeeting-id}/registration': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/registration',
    'delete'
  >;
  'GET /me/onlineMeetings/{onlineMeeting-id}/registration': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/registration',
    'get'
  >;
  'PATCH /me/onlineMeetings/{onlineMeeting-id}/registration': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/registration',
    'patch'
  >;
}

/**
 * `DELETE /me/onlineMeetings/{onlineMeeting-id}/registration`
 *
 * Disable and delete the meetingRegistration of an onlineMeeting on behalf of the organizer.
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}/registration']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}/registration']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/onlineMeetings/{onlineMeeting-id}/registration',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onlineMeeting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/onlineMeetings/{onlineMeeting-id}/registration`
 *
 * Get the externalMeetingRegistration details associated with an onlineMeeting.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/registration']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/registration']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/onlineMeetings/{onlineMeeting-id}/registration',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'onlineMeeting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/onlineMeetings/{onlineMeeting-id}/registration`
 *
 * Update the details of a meetingRegistration object assciated with an onlineMeeting on behalf of the organizer.
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /me/onlineMeetings/{onlineMeeting-id}/registration']['body'],
  params?: IEndpoints['PATCH /me/onlineMeetings/{onlineMeeting-id}/registration']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/onlineMeetings/{onlineMeeting-id}/registration']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/onlineMeetings/{onlineMeeting-id}/registration',
    paramDefs: [{ name: 'onlineMeeting-id', in: 'path' }],
    params,
    body,
  };
}
