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
  'DELETE /me/onlineMeetings/{onlineMeeting-id}': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}',
    'delete'
  >;
  'GET /me/onlineMeetings': Operation<'/me/onlineMeetings', 'get'>;
  'GET /me/onlineMeetings/{onlineMeeting-id}': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}',
    'get'
  >;
  'PATCH /me/onlineMeetings/{onlineMeeting-id}': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}',
    'patch'
  >;
  'POST /me/onlineMeetings': Operation<'/me/onlineMeetings', 'post'>;
}

/**
 * `DELETE /me/onlineMeetings/{onlineMeeting-id}`
 *
 * Delete an onlineMeeting object.
 */
export function del(
  params?: IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/onlineMeetings/{onlineMeeting-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onlineMeeting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/onlineMeetings`
 *
 * Retrieve the properties and relationships of an onlineMeeting object. For example, you can: Teams live event attendee report (deprecated) and Teams live event recordings (deprecated) are online meeting artifacts. For details, see Online meeting artifacts and permissions.
 */
export function list(
  params?: IEndpoints['GET /me/onlineMeetings']['parameters']
): EndpointRequest<IEndpoints['GET /me/onlineMeetings']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/onlineMeetings',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /me/onlineMeetings/{onlineMeeting-id}`
 *
 * Information about a meeting, including the URL used to join a meeting, the attendees list, and the description.
 */
export function get(
  params?: IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/onlineMeetings/{onlineMeeting-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'onlineMeeting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/onlineMeetings/{onlineMeeting-id}`
 *
 * Update the properties of the specified onlineMeeting object. For the list of properties that support updating, see the Request body section.
 */
export function update(
  body: IEndpoints['PATCH /me/onlineMeetings/{onlineMeeting-id}']['body'],
  params?: IEndpoints['PATCH /me/onlineMeetings/{onlineMeeting-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/onlineMeetings/{onlineMeeting-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/onlineMeetings/{onlineMeeting-id}',
    paramDefs: [{ name: 'onlineMeeting-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/onlineMeetings`
 *
 * Create an online meeting on behalf of a user.
 */
export function create(
  body: IEndpoints['POST /me/onlineMeetings']['body'],
  params?: IEndpoints['POST /me/onlineMeetings']['parameters']
): EndpointRequest<IEndpoints['POST /me/onlineMeetings']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/onlineMeetings',
    paramDefs: [],
    params,
    body,
  };
}
