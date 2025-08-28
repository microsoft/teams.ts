export * as attendanceRecords from './attendanceRecords';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport',
    'delete'
  >;
  'GET /me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport',
    'get'
  >;
  'PATCH /me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport',
    'patch'
  >;
}

/**
 * `DELETE /me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onlineMeeting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport`
 *
 * Get the meetingAttendanceReport for an onlineMeeting or a virtualEvent. When an online meeting ends, an attendance report is generated for that session.
 */
export function get(
  params?: IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'onlineMeeting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport']['body'],
  params?: IEndpoints['PATCH /me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport',
    paramDefs: [{ name: 'onlineMeeting-id', in: 'path' }],
    params,
    body,
  };
}
