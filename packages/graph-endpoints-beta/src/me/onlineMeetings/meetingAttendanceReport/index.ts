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
  'GET /me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords',
    'get'
  >;
  'POST /me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords',
    'post'
  >;
  'GET /me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}',
    'get'
  >;
  'PATCH /me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}',
    'patch'
  >;
  'DELETE /me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}',
    'delete'
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
    paramDefs: {
      header: ['If-Match'],
      path: ['onlineMeeting-id'],
    },
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
    paramDefs: {
      path: ['onlineMeeting-id'],
      query: ['$select', '$expand'],
    },
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
    paramDefs: {
      path: ['onlineMeeting-id'],
    },
    params,
    body,
  };
}

export const attendanceRecords = {
  /**
   * `GET /me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords`
   *
   * List of attendance records of an attendance report. Read-only.
   */
  list: function list(
    params?: IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['onlineMeeting-id'],
      },
      params,
    };
  },
  /**
   * `POST /me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords']['body'],
    params?: IEndpoints['POST /me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords',
      paramDefs: {
        path: ['onlineMeeting-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}`
   *
   * List of attendance records of an attendance report. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['onlineMeeting-id', 'attendanceRecord-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}']['body'],
    params?: IEndpoints['PATCH /me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}',
      paramDefs: {
        path: ['onlineMeeting-id', 'attendanceRecord-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['onlineMeeting-id', 'attendanceRecord-id'],
      },
      params,
    };
  },
};
