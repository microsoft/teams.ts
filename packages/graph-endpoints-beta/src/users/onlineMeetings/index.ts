export * as aiInsights from './aiInsights';
export * as alternativeRecording from './alternativeRecording';
export * as attendanceReports from './attendanceReports';
export * as attendeeReport from './attendeeReport';
export * as broadcastRecording from './broadcastRecording';
export * as createOrGet from './createOrGet';
export * as meetingAttendanceReport from './meetingAttendanceReport';
export * as recording from './recording';
export * as recordings from './recordings';
export * as registration from './registration';
export * as sendVirtualAppointmentReminderSms from './sendVirtualAppointmentReminderSms';
export * as sendVirtualAppointmentSms from './sendVirtualAppointmentSms';
export * as transcripts from './transcripts';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}',
    'delete'
  >;
  'GET /users/{user-id}/onlineMeetings': Operation<'/users/{user-id}/onlineMeetings', 'get'>;
  'GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}',
    'get'
  >;
  'PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}',
    'patch'
  >;
  'POST /users/{user-id}/onlineMeetings': Operation<'/users/{user-id}/onlineMeetings', 'post'>;
}

/**
 * `DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'onlineMeeting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/onlineMeetings`
 *
 * Information about a meeting, including the URL used to join a meeting, the attendees list, and the description.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/onlineMeetings']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/onlineMeetings']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/onlineMeetings',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}`
 *
 * Information about a meeting, including the URL used to join a meeting, the attendees list, and the description.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'onlineMeeting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'onlineMeeting-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/onlineMeetings`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/onlineMeetings']['body'],
  params?: IEndpoints['POST /users/{user-id}/onlineMeetings']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/onlineMeetings']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/onlineMeetings',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
