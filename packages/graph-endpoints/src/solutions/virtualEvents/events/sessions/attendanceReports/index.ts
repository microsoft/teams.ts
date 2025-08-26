export * as attendanceRecords from './attendanceRecords';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}': Operation<
    '/solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}',
    'delete'
  >;
  'GET /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/attendanceReports': Operation<
    '/solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/attendanceReports',
    'get'
  >;
  'GET /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}': Operation<
    '/solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}',
    'get'
  >;
  'PATCH /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}': Operation<
    '/solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}',
    'patch'
  >;
  'POST /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/attendanceReports': Operation<
    '/solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/attendanceReports',
    'post'
  >;
}

/**
 * `DELETE /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}']['response']
> {
  return {
    method: 'delete',
    path: '/solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'virtualEvent-id', in: 'path' },
      { name: 'virtualEventSession-id', in: 'path' },
      { name: 'meetingAttendanceReport-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/attendanceReports`
 *
 * The attendance reports of an online meeting. Read-only.
 */
export function list(
  params?: IEndpoints['GET /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/attendanceReports']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/attendanceReports']['response']
> {
  return {
    method: 'get',
    path: '/solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/attendanceReports',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'virtualEvent-id', in: 'path' },
      { name: 'virtualEventSession-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}`
 *
 * The attendance reports of an online meeting. Read-only.
 */
export function get(
  params?: IEndpoints['GET /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}']['response']
> {
  return {
    method: 'get',
    path: '/solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'virtualEvent-id', in: 'path' },
      { name: 'virtualEventSession-id', in: 'path' },
      { name: 'meetingAttendanceReport-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}']['body'],
  params?: IEndpoints['PATCH /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}']['response']
> {
  return {
    method: 'patch',
    path: '/solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}',
    paramDefs: [
      { name: 'virtualEvent-id', in: 'path' },
      { name: 'virtualEventSession-id', in: 'path' },
      { name: 'meetingAttendanceReport-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/attendanceReports`
 *
 */
export function create(
  body: IEndpoints['POST /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/attendanceReports']['body'],
  params?: IEndpoints['POST /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/attendanceReports']['parameters']
): EndpointRequest<
  IEndpoints['POST /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/attendanceReports']['response']
> {
  return {
    method: 'post',
    path: '/solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/attendanceReports',
    paramDefs: [
      { name: 'virtualEvent-id', in: 'path' },
      { name: 'virtualEventSession-id', in: 'path' },
    ],
    params,
    body,
  };
}
