export * as attendanceRecords from './attendanceRecords';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport',
    'delete'
  >;
  'GET /app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport',
    'get'
  >;
  'PATCH /app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport',
    'patch'
  >;
}

/**
 * `DELETE /app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport`
 *
 */
export function del(
  params?: IEndpoints['DELETE /app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onlineMeeting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport`
 *
 * The attendance report of the latest online meeting session. Read-only.
 */
export function get(
  params?: IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport']['parameters']
): EndpointRequest<
  IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'onlineMeeting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport`
 *
 */
export function update(
  body: IEndpoints['PATCH /app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport']['body'],
  params?: IEndpoints['PATCH /app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport',
    paramDefs: [{ name: 'onlineMeeting-id', in: 'path' }],
    params,
    body,
  };
}
