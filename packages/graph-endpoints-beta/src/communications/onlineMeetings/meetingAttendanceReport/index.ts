export * as attendanceRecords from './attendanceRecords';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /communications/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport',
    'delete'
  >;
  'GET /communications/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport',
    'get'
  >;
  'PATCH /communications/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport',
    'patch'
  >;
}

/**
 * `DELETE /communications/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport`
 *
 */
export function del(
  params?: IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onlineMeeting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /communications/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport`
 *
 * The attendance report of the latest online meeting session. Read-only.
 */
export function get(
  params?: IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'onlineMeeting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /communications/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport`
 *
 */
export function update(
  body: IEndpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport']['body'],
  params?: IEndpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport',
    paramDefs: [{ name: 'onlineMeeting-id', in: 'path' }],
    params,
    body,
  };
}
