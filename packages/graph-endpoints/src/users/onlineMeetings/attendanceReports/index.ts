export * as attendanceRecords from './attendanceRecords';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}',
    'delete'
  >;
  'GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendanceReports': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendanceReports',
    'get'
  >;
  'GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}',
    'get'
  >;
  'PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}',
    'patch'
  >;
  'POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendanceReports': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendanceReports',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'meetingAttendanceReport-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendanceReports`
 *
 * The attendance reports of an online meeting. Read-only.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendanceReports']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendanceReports']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendanceReports',
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
      { name: 'onlineMeeting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}`
 *
 * The attendance reports of an online meeting. Read-only.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'meetingAttendanceReport-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'meetingAttendanceReport-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendanceReports`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendanceReports']['body'],
  params?: IEndpoints['POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendanceReports']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendanceReports']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendanceReports',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'onlineMeeting-id', in: 'path' },
    ],
    params,
    body,
  };
}
