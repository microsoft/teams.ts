export * as attendanceRecords from './attendanceRecords';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}',
    'delete'
  >;
  'GET /me/onlineMeetings/{onlineMeeting-id}/attendanceReports': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/attendanceReports',
    'get'
  >;
  'GET /me/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}',
    'get'
  >;
  'PATCH /me/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}',
    'patch'
  >;
  'POST /me/onlineMeetings/{onlineMeeting-id}/attendanceReports': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/attendanceReports',
    'post'
  >;
}

/**
 * `DELETE /me/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'meetingAttendanceReport-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/onlineMeetings/{onlineMeeting-id}/attendanceReports`
 *
 * Get a list of meetingAttendanceReport objects for an onlineMeeting or a virtualEvent. Each time an online meeting or a virtual event ends, an attendance report is generated for that session.
 */
export function list(
  params?: IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/attendanceReports']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/attendanceReports']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/onlineMeetings/{onlineMeeting-id}/attendanceReports',
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
 * `GET /me/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}`
 *
 * Get the meetingAttendanceReport for an onlineMeeting or a virtualEvent. When an online meeting ends, an attendance report is generated for that session.
 */
export function get(
  params?: IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}',
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
 * `PATCH /me/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}']['body'],
  params?: IEndpoints['PATCH /me/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}',
    paramDefs: [
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'meetingAttendanceReport-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/onlineMeetings/{onlineMeeting-id}/attendanceReports`
 *
 */
export function create(
  body: IEndpoints['POST /me/onlineMeetings/{onlineMeeting-id}/attendanceReports']['body'],
  params?: IEndpoints['POST /me/onlineMeetings/{onlineMeeting-id}/attendanceReports']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/onlineMeetings/{onlineMeeting-id}/attendanceReports']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/onlineMeetings/{onlineMeeting-id}/attendanceReports',
    paramDefs: [{ name: 'onlineMeeting-id', in: 'path' }],
    params,
    body,
  };
}
