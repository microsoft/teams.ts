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
  'DELETE /app/onlineMeetings/{onlineMeeting-id}': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}',
    'delete'
  >;
  'GET /app/onlineMeetings': Operation<'/app/onlineMeetings', 'get'>;
  'GET /app/onlineMeetings/{onlineMeeting-id}': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}',
    'get'
  >;
  'PATCH /app/onlineMeetings/{onlineMeeting-id}': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}',
    'patch'
  >;
  'POST /app/onlineMeetings': Operation<'/app/onlineMeetings', 'post'>;
}

/**
 * `DELETE /app/onlineMeetings/{onlineMeeting-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /app/onlineMeetings/{onlineMeeting-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /app/onlineMeetings/{onlineMeeting-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/app/onlineMeetings/{onlineMeeting-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onlineMeeting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /app/onlineMeetings`
 *
 */
export function list(
  params?: IEndpoints['GET /app/onlineMeetings']['parameters']
): EndpointRequest<IEndpoints['GET /app/onlineMeetings']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/app/onlineMeetings',
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
 * `GET /app/onlineMeetings/{onlineMeeting-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}']['parameters']
): EndpointRequest<IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/app/onlineMeetings/{onlineMeeting-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'onlineMeeting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /app/onlineMeetings/{onlineMeeting-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /app/onlineMeetings/{onlineMeeting-id}']['body'],
  params?: IEndpoints['PATCH /app/onlineMeetings/{onlineMeeting-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /app/onlineMeetings/{onlineMeeting-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/app/onlineMeetings/{onlineMeeting-id}',
    paramDefs: [{ name: 'onlineMeeting-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /app/onlineMeetings`
 *
 */
export function create(
  body: IEndpoints['POST /app/onlineMeetings']['body'],
  params?: IEndpoints['POST /app/onlineMeetings']['parameters']
): EndpointRequest<IEndpoints['POST /app/onlineMeetings']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/app/onlineMeetings',
    paramDefs: [],
    params,
    body,
  };
}
