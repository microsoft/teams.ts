import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}': Operation<
    '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}',
    'delete'
  >;
  'GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports': Operation<
    '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports',
    'get'
  >;
  'GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}': Operation<
    '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}',
    'get'
  >;
  'PATCH /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}': Operation<
    '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}',
    'patch'
  >;
  'POST /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports': Operation<
    '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports',
    'post'
  >;
  'GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords': Operation<
    '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords',
    'get'
  >;
  'POST /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords': Operation<
    '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords',
    'post'
  >;
  'GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}': Operation<
    '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}',
    'get'
  >;
  'PATCH /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}': Operation<
    '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}',
    'patch'
  >;
  'DELETE /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}': Operation<
    '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}',
    'delete'
  >;
}

/**
 * `DELETE /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['virtualEventTownhall-id', 'virtualEventSession-id', 'meetingAttendanceReport-id'],
    },
    params,
  };
}

/**
 * `GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports`
 *
 * Get a list of meetingAttendanceReport objects for an onlineMeeting or a virtualEvent. Each time an online meeting or a virtual event ends, an attendance report is generated for that session.
 */
export function list(
  params?: IEndpoints['GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports',
    paramDefs: {
      path: ['virtualEventTownhall-id', 'virtualEventSession-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}`
 *
 * Get the meetingAttendanceReport for an onlineMeeting or a virtualEvent. When an online meeting ends, an attendance report is generated for that session.
 */
export function get(
  params?: IEndpoints['GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}',
    paramDefs: {
      path: ['virtualEventTownhall-id', 'virtualEventSession-id', 'meetingAttendanceReport-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}']['body'],
  params?: IEndpoints['PATCH /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}',
    paramDefs: {
      path: ['virtualEventTownhall-id', 'virtualEventSession-id', 'meetingAttendanceReport-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports`
 *
 */
export function create(
  body: IEndpoints['POST /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports']['body'],
  params?: IEndpoints['POST /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports']['parameters']
): EndpointRequest<
  IEndpoints['POST /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports',
    paramDefs: {
      path: ['virtualEventTownhall-id', 'virtualEventSession-id'],
    },
    params,
    body,
  };
}

export const attendanceRecords = {
  /**
   * `GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords`
   *
   * List of attendance records of an attendance report. Read-only.
   */
  list: function list(
    params?: IEndpoints['GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['virtualEventTownhall-id', 'virtualEventSession-id', 'meetingAttendanceReport-id'],
      },
      params,
    };
  },
  /**
   * `POST /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords`
   *
   */
  create: function create(
    body: IEndpoints['POST /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords']['body'],
    params?: IEndpoints['POST /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords',
      paramDefs: {
        path: ['virtualEventTownhall-id', 'virtualEventSession-id', 'meetingAttendanceReport-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}`
   *
   * List of attendance records of an attendance report. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'virtualEventTownhall-id',
          'virtualEventSession-id',
          'meetingAttendanceReport-id',
          'attendanceRecord-id',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}']['body'],
    params?: IEndpoints['PATCH /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}',
      paramDefs: {
        path: [
          'virtualEventTownhall-id',
          'virtualEventSession-id',
          'meetingAttendanceReport-id',
          'attendanceRecord-id',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'virtualEventTownhall-id',
          'virtualEventSession-id',
          'meetingAttendanceReport-id',
          'attendanceRecord-id',
        ],
      },
      params,
    };
  },
};
