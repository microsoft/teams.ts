import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport',
    'delete'
  >;
  'GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport',
    'get'
  >;
  'PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport',
    'patch'
  >;
  'GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords',
    'get'
  >;
  'POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords',
    'post'
  >;
  'GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}',
    'get'
  >;
  'PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}',
    'delete'
  >;
}

/**
 * `DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'onlineMeeting-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport`
 *
 * The attendance report of the latest online meeting session. Read-only.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport',
    paramDefs: {
      path: ['user-id', 'onlineMeeting-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport',
    paramDefs: {
      path: ['user-id', 'onlineMeeting-id'],
    },
    params,
    body,
  };
}

export const attendanceRecords = {
  /**
   * `GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords`
   *
   * List of attendance records of an attendance report. Read-only.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'onlineMeeting-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords']['body'],
    params?: IEndpoints['POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords',
      paramDefs: {
        path: ['user-id', 'onlineMeeting-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}`
   *
   * List of attendance records of an attendance report. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'onlineMeeting-id', 'attendanceRecord-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}',
      paramDefs: {
        path: ['user-id', 'onlineMeeting-id', 'attendanceRecord-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'onlineMeeting-id', 'attendanceRecord-id'],
      },
      params,
    };
  },
};
