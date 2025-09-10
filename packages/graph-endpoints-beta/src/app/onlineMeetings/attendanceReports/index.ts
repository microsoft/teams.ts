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
  'GET /app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords',
    'get'
  >;
  'POST /app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords',
    'post'
  >;
  'GET /app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}',
    'get'
  >;
  'PATCH /app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}',
    'patch'
  >;
  'DELETE /app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}',
    'delete'
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
    paramDefs: {
      header: ['If-Match'],
      path: ['onlineMeeting-id', 'meetingAttendanceReport-id'],
    },
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
    paramDefs: {
      path: ['onlineMeeting-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    paramDefs: {
      path: ['onlineMeeting-id', 'meetingAttendanceReport-id'],
      query: ['$select', '$expand'],
    },
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
    paramDefs: {
      path: ['onlineMeeting-id', 'meetingAttendanceReport-id'],
    },
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
    paramDefs: {
      path: ['onlineMeeting-id'],
    },
    params,
    body,
  };
}

export const attendanceRecords = {
  /**
   * `GET /app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords`
   *
   * List of attendance records of an attendance report. Read-only.
   */
  list: function list(
    params?: IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['onlineMeeting-id', 'meetingAttendanceReport-id'],
      },
      params,
    };
  },
  /**
   * `POST /app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords`
   *
   */
  create: function create(
    body: IEndpoints['POST /app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords']['body'],
    params?: IEndpoints['POST /app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords',
      paramDefs: {
        path: ['onlineMeeting-id', 'meetingAttendanceReport-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}`
   *
   * List of attendance records of an attendance report. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['onlineMeeting-id', 'meetingAttendanceReport-id', 'attendanceRecord-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}']['body'],
    params?: IEndpoints['PATCH /app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}',
      paramDefs: {
        path: ['onlineMeeting-id', 'meetingAttendanceReport-id', 'attendanceRecord-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['onlineMeeting-id', 'meetingAttendanceReport-id', 'attendanceRecord-id'],
      },
      params,
    };
  },
};
