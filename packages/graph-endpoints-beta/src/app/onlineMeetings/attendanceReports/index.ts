export * as attendanceRecords from './attendanceRecords';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}',
    'delete'
  >;
  'GET /app/onlineMeetings/{onlineMeeting-id}/attendanceReports': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/attendanceReports',
    'get'
  >;
  'GET /app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}',
    'get'
  >;
  'PATCH /app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}',
    'patch'
  >;
  'POST /app/onlineMeetings/{onlineMeeting-id}/attendanceReports': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/attendanceReports',
    'post'
  >;
}

/**
 * `DELETE /app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'meetingAttendanceReport-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /app/onlineMeetings/{onlineMeeting-id}/attendanceReports`
 *
 * The attendance reports of an online meeting. Read-only.
 */
export function list(
  params?: IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/attendanceReports']['parameters']
): EndpointRequest<
  IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/attendanceReports']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/app/onlineMeetings/{onlineMeeting-id}/attendanceReports',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'onlineMeeting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}`
 *
 * The attendance reports of an online meeting. Read-only.
 */
export function get(
  params?: IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'meetingAttendanceReport-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}']['body'],
  params?: IEndpoints['PATCH /app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}',
    paramDefs: [
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'meetingAttendanceReport-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /app/onlineMeetings/{onlineMeeting-id}/attendanceReports`
 *
 */
export function create(
  body: IEndpoints['POST /app/onlineMeetings/{onlineMeeting-id}/attendanceReports']['body'],
  params?: IEndpoints['POST /app/onlineMeetings/{onlineMeeting-id}/attendanceReports']['parameters']
): EndpointRequest<
  IEndpoints['POST /app/onlineMeetings/{onlineMeeting-id}/attendanceReports']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/app/onlineMeetings/{onlineMeeting-id}/attendanceReports',
    paramDefs: [{ name: 'onlineMeeting-id', in: 'path' }],
    params,
    body,
  };
}
