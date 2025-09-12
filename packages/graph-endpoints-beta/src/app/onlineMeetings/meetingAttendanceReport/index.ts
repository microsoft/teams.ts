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
  'GET /app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords',
    'get'
  >;
  'POST /app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords',
    'post'
  >;
  'GET /app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}',
    'get'
  >;
  'PATCH /app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}',
    'patch'
  >;
  'DELETE /app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}',
    'delete'
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
    paramDefs: {
      header: ['If-Match'],
      path: ['onlineMeeting-id'],
    },
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
    paramDefs: {
      path: ['onlineMeeting-id'],
      query: ['$select', '$expand'],
    },
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
    paramDefs: {
      path: ['onlineMeeting-id'],
    },
    params,
    body,
  };
}

export const attendanceRecords = {
  /**
   * `GET /app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords`
   *
   * List of attendance records of an attendance report. Read-only.
   */
  list: function list(
    params?: IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['onlineMeeting-id'],
      },
      params,
    };
  },
  /**
   * `POST /app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords`
   *
   */
  create: function create(
    body: IEndpoints['POST /app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords']['body'],
    params?: IEndpoints['POST /app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords',
      paramDefs: {
        path: ['onlineMeeting-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}`
   *
   * List of attendance records of an attendance report. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['onlineMeeting-id', 'attendanceRecord-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}']['body'],
    params?: IEndpoints['PATCH /app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}',
      paramDefs: {
        path: ['onlineMeeting-id', 'attendanceRecord-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['onlineMeeting-id', 'attendanceRecord-id'],
      },
      params,
    };
  },
};
