import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}',
    'delete'
  >;
  'GET /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/attendanceReports',
    'get'
  >;
  'GET /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}',
    'get'
  >;
  'PATCH /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}',
    'patch'
  >;
  'POST /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/attendanceReports',
    'post'
  >;
  'GET /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords',
    'get'
  >;
  'POST /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords',
    'post'
  >;
  'GET /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}',
    'get'
  >;
  'PATCH /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}',
    'patch'
  >;
  'DELETE /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}',
    'delete'
  >;
}

/**
 * `DELETE /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}']['response']
> {
  return {
    method: 'delete',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['onlineMeeting-id', 'meetingAttendanceReport-id'],
    },
    params,
  };
}

/**
 * `GET /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports`
 *
 * The attendance reports of an online meeting. Read-only.
 */
export function list(
  params?: IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports']['response']
> {
  return {
    method: 'get',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/attendanceReports',
    paramDefs: {
      path: ['onlineMeeting-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}`
 *
 * The attendance reports of an online meeting. Read-only.
 */
export function get(
  params?: IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}']['response']
> {
  return {
    method: 'get',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}',
    paramDefs: {
      path: ['onlineMeeting-id', 'meetingAttendanceReport-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}']['body'],
  params?: IEndpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}']['response']
> {
  return {
    method: 'patch',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}',
    paramDefs: {
      path: ['onlineMeeting-id', 'meetingAttendanceReport-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports`
 *
 */
export function create(
  body: IEndpoints['POST /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports']['body'],
  params?: IEndpoints['POST /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports']['parameters']
): EndpointRequest<
  IEndpoints['POST /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports']['response']
> {
  return {
    method: 'post',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/attendanceReports',
    paramDefs: {
      path: ['onlineMeeting-id'],
    },
    params,
    body,
  };
}

export const attendanceRecords = {
  /**
   * `GET /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords`
   *
   * List of attendance records of an attendance report. Read-only.
   */
  list: function list(
    params?: IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords']['response']
  > {
    return {
      method: 'get',
      path: '/communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['onlineMeeting-id', 'meetingAttendanceReport-id'],
      },
      params,
    };
  },
  /**
   * `POST /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords`
   *
   */
  create: function create(
    body: IEndpoints['POST /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords']['body'],
    params?: IEndpoints['POST /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords']['response']
  > {
    return {
      method: 'post',
      path: '/communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords',
      paramDefs: {
        path: ['onlineMeeting-id', 'meetingAttendanceReport-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}`
   *
   * List of attendance records of an attendance report. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}']['response']
  > {
    return {
      method: 'get',
      path: '/communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['onlineMeeting-id', 'meetingAttendanceReport-id', 'attendanceRecord-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}']['body'],
    params?: IEndpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}',
      paramDefs: {
        path: ['onlineMeeting-id', 'meetingAttendanceReport-id', 'attendanceRecord-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['onlineMeeting-id', 'meetingAttendanceReport-id', 'attendanceRecord-id'],
      },
      params,
    };
  },
};
