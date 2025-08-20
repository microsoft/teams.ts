import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /communications/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}',
    'delete'
  >;
  'GET /communications/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords',
    'get'
  >;
  'GET /communications/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}',
    'get'
  >;
  'PATCH /communications/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}',
    'patch'
  >;
  'POST /communications/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords',
    'post'
  >;
}

/**
 * `DELETE /communications/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'attendanceRecord-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /communications/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords`
 *
 * List of attendance records of an attendance report. Read-only.
 */
export function list(
  params?: IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords',
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
 * `GET /communications/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}`
 *
 * List of attendance records of an attendance report. Read-only.
 */
export function get(
  params?: IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'attendanceRecord-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /communications/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}']['body'],
  params?: IEndpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}',
    paramDefs: [
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'attendanceRecord-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /communications/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords`
 *
 */
export function create(
  body: IEndpoints['POST /communications/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords']['body'],
  params?: IEndpoints['POST /communications/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords']['parameters']
): EndpointRequest<
  IEndpoints['POST /communications/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords',
    paramDefs: [{ name: 'onlineMeeting-id', in: 'path' }],
    params,
    body,
  };
}
