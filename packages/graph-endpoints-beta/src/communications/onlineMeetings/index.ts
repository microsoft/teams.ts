export * as attendanceReports from './attendanceReports';
export * as meetingAttendanceReport from './meetingAttendanceReport';
export * as recordings from './recordings';
export * as registration from './registration';
export * as transcripts from './transcripts';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /communications/onlineMeetings/{onlineMeeting-id}': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}',
    'delete'
  >;
  'GET /communications/onlineMeetings': Operation<'/communications/onlineMeetings', 'get'>;
  'GET /communications/onlineMeetings/{onlineMeeting-id}': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}',
    'get'
  >;
  'PATCH /communications/onlineMeetings/{onlineMeeting-id}': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}',
    'patch'
  >;
  'POST /communications/onlineMeetings': Operation<'/communications/onlineMeetings', 'post'>;
  'GET /communications/onlineMeetings/{onlineMeeting-id}/aiInsights': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/aiInsights',
    'get'
  >;
  'POST /communications/onlineMeetings/{onlineMeeting-id}/aiInsights': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/aiInsights',
    'post'
  >;
  'GET /communications/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}',
    'get'
  >;
  'PATCH /communications/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}',
    'patch'
  >;
  'DELETE /communications/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}',
    'delete'
  >;
  'GET /communications/onlineMeetings/{onlineMeeting-id}/alternativeRecording': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/alternativeRecording',
    'get'
  >;
  'PUT /communications/onlineMeetings/{onlineMeeting-id}/alternativeRecording': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/alternativeRecording',
    'put'
  >;
  'DELETE /communications/onlineMeetings/{onlineMeeting-id}/alternativeRecording': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/alternativeRecording',
    'delete'
  >;
  'GET /communications/onlineMeetings/{onlineMeeting-id}/attendeeReport': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/attendeeReport',
    'get'
  >;
  'PUT /communications/onlineMeetings/{onlineMeeting-id}/attendeeReport': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/attendeeReport',
    'put'
  >;
  'DELETE /communications/onlineMeetings/{onlineMeeting-id}/attendeeReport': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/attendeeReport',
    'delete'
  >;
  'GET /communications/onlineMeetings/{onlineMeeting-id}/broadcastRecording': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/broadcastRecording',
    'get'
  >;
  'PUT /communications/onlineMeetings/{onlineMeeting-id}/broadcastRecording': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/broadcastRecording',
    'put'
  >;
  'DELETE /communications/onlineMeetings/{onlineMeeting-id}/broadcastRecording': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/broadcastRecording',
    'delete'
  >;
  'POST /communications/onlineMeetings/createOrGet': Operation<
    '/communications/onlineMeetings/createOrGet',
    'post'
  >;
  'GET /communications/onlineMeetings/{onlineMeeting-id}/recording': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/recording',
    'get'
  >;
  'PUT /communications/onlineMeetings/{onlineMeeting-id}/recording': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/recording',
    'put'
  >;
  'DELETE /communications/onlineMeetings/{onlineMeeting-id}/recording': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/recording',
    'delete'
  >;
  'POST /communications/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms',
    'post'
  >;
  'POST /communications/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms',
    'post'
  >;
}

/**
 * `DELETE /communications/onlineMeetings/{onlineMeeting-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/communications/onlineMeetings/{onlineMeeting-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['onlineMeeting-id'],
    },
    params,
  };
}

/**
 * `GET /communications/onlineMeetings`
 *
 * Retrieve the properties and relationships of an onlineMeeting object. For example, you can: Teams live event attendee report (deprecated) and Teams live event recordings (deprecated) are online meeting artifacts. For details, see Online meeting artifacts and permissions.
 */
export function list(
  params?: IEndpoints['GET /communications/onlineMeetings']['parameters']
): EndpointRequest<IEndpoints['GET /communications/onlineMeetings']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/communications/onlineMeetings',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /communications/onlineMeetings/{onlineMeeting-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/communications/onlineMeetings/{onlineMeeting-id}',
    paramDefs: {
      path: ['onlineMeeting-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /communications/onlineMeetings/{onlineMeeting-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}']['body'],
  params?: IEndpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/communications/onlineMeetings/{onlineMeeting-id}',
    paramDefs: {
      path: ['onlineMeeting-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /communications/onlineMeetings`
 *
 */
export function create(
  body: IEndpoints['POST /communications/onlineMeetings']['body']
): EndpointRequest<IEndpoints['POST /communications/onlineMeetings']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/communications/onlineMeetings',
    body,
  };
}

export const aiInsights = {
  /**
   * `GET /communications/onlineMeetings/{onlineMeeting-id}/aiInsights`
   *
   * The AI insights generated for an online meeting. Read-only.
   */
  list: function list(
    params?: IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/aiInsights']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/aiInsights']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/communications/onlineMeetings/{onlineMeeting-id}/aiInsights',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['onlineMeeting-id'],
      },
      params,
    };
  },
  /**
   * `POST /communications/onlineMeetings/{onlineMeeting-id}/aiInsights`
   *
   */
  create: function create(
    body: IEndpoints['POST /communications/onlineMeetings/{onlineMeeting-id}/aiInsights']['body'],
    params?: IEndpoints['POST /communications/onlineMeetings/{onlineMeeting-id}/aiInsights']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /communications/onlineMeetings/{onlineMeeting-id}/aiInsights']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/communications/onlineMeetings/{onlineMeeting-id}/aiInsights',
      paramDefs: {
        path: ['onlineMeeting-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /communications/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}`
   *
   * The AI insights generated for an online meeting. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/communications/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['onlineMeeting-id', 'callAiInsight-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /communications/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}']['body'],
    params?: IEndpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/communications/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}',
      paramDefs: {
        path: ['onlineMeeting-id', 'callAiInsight-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /communications/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/communications/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['onlineMeeting-id', 'callAiInsight-id'],
      },
      params,
    };
  },
};

export const alternativeRecording = {
  /**
   * `GET /communications/onlineMeetings/{onlineMeeting-id}/alternativeRecording`
   *
   * The content stream of the alternative recording of a Microsoft Teams live event. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/communications/onlineMeetings/{onlineMeeting-id}/alternativeRecording',
      paramDefs: {
        path: ['onlineMeeting-id'],
      },
      params,
    };
  },
  /**
   * `PUT /communications/onlineMeetings/{onlineMeeting-id}/alternativeRecording`
   *
   * The content stream of the alternative recording of a Microsoft Teams live event. Read-only.
   */
  set: function set(
    body: IEndpoints['PUT /communications/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['body'],
    params?: IEndpoints['PUT /communications/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /communications/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/communications/onlineMeetings/{onlineMeeting-id}/alternativeRecording',
      paramDefs: {
        path: ['onlineMeeting-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /communications/onlineMeetings/{onlineMeeting-id}/alternativeRecording`
   *
   * The content stream of the alternative recording of a Microsoft Teams live event. Read-only.
   */
  del: function del(
    params?: IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/communications/onlineMeetings/{onlineMeeting-id}/alternativeRecording',
      paramDefs: {
        header: ['If-Match'],
        path: ['onlineMeeting-id'],
      },
      params,
    };
  },
};

export const attendeeReport = {
  /**
   * `GET /communications/onlineMeetings/{onlineMeeting-id}/attendeeReport`
   *
   * The content stream of the attendee report of a Teams live event. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/attendeeReport']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/attendeeReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/communications/onlineMeetings/{onlineMeeting-id}/attendeeReport',
      paramDefs: {
        path: ['onlineMeeting-id'],
      },
      params,
    };
  },
  /**
   * `PUT /communications/onlineMeetings/{onlineMeeting-id}/attendeeReport`
   *
   * The content stream of the attendee report of a Teams live event. Read-only.
   */
  set: function set(
    body: IEndpoints['PUT /communications/onlineMeetings/{onlineMeeting-id}/attendeeReport']['body'],
    params?: IEndpoints['PUT /communications/onlineMeetings/{onlineMeeting-id}/attendeeReport']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /communications/onlineMeetings/{onlineMeeting-id}/attendeeReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/communications/onlineMeetings/{onlineMeeting-id}/attendeeReport',
      paramDefs: {
        path: ['onlineMeeting-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /communications/onlineMeetings/{onlineMeeting-id}/attendeeReport`
   *
   * The content stream of the attendee report of a Teams live event. Read-only.
   */
  del: function del(
    params?: IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/attendeeReport']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/attendeeReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/communications/onlineMeetings/{onlineMeeting-id}/attendeeReport',
      paramDefs: {
        header: ['If-Match'],
        path: ['onlineMeeting-id'],
      },
      params,
    };
  },
};

export const broadcastRecording = {
  /**
   * `GET /communications/onlineMeetings/{onlineMeeting-id}/broadcastRecording`
   *
   */
  get: function get(
    params?: IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/broadcastRecording']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/broadcastRecording']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/communications/onlineMeetings/{onlineMeeting-id}/broadcastRecording',
      paramDefs: {
        path: ['onlineMeeting-id'],
      },
      params,
    };
  },
  /**
   * `PUT /communications/onlineMeetings/{onlineMeeting-id}/broadcastRecording`
   *
   */
  set: function set(
    body: IEndpoints['PUT /communications/onlineMeetings/{onlineMeeting-id}/broadcastRecording']['body'],
    params?: IEndpoints['PUT /communications/onlineMeetings/{onlineMeeting-id}/broadcastRecording']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /communications/onlineMeetings/{onlineMeeting-id}/broadcastRecording']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/communications/onlineMeetings/{onlineMeeting-id}/broadcastRecording',
      paramDefs: {
        path: ['onlineMeeting-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /communications/onlineMeetings/{onlineMeeting-id}/broadcastRecording`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/broadcastRecording']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/broadcastRecording']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/communications/onlineMeetings/{onlineMeeting-id}/broadcastRecording',
      paramDefs: {
        header: ['If-Match'],
        path: ['onlineMeeting-id'],
      },
      params,
    };
  },
};

export const createOrGet = {
  /**
   * `POST /communications/onlineMeetings/createOrGet`
   *
   * Create an onlineMeeting object with a custom specified external ID. If the external ID already exists, this API will return the onlineMeeting object with that external ID.
   */
  create: function create(
    body: IEndpoints['POST /communications/onlineMeetings/createOrGet']['body']
  ): EndpointRequest<IEndpoints['POST /communications/onlineMeetings/createOrGet']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/communications/onlineMeetings/createOrGet',
      body,
    };
  },
};

export const recording = {
  /**
   * `GET /communications/onlineMeetings/{onlineMeeting-id}/recording`
   *
   * The content stream of the recording of a Teams live event. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/recording']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/recording']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/communications/onlineMeetings/{onlineMeeting-id}/recording',
      paramDefs: {
        path: ['onlineMeeting-id'],
      },
      params,
    };
  },
  /**
   * `PUT /communications/onlineMeetings/{onlineMeeting-id}/recording`
   *
   * The content stream of the recording of a Teams live event. Read-only.
   */
  set: function set(
    body: IEndpoints['PUT /communications/onlineMeetings/{onlineMeeting-id}/recording']['body'],
    params?: IEndpoints['PUT /communications/onlineMeetings/{onlineMeeting-id}/recording']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /communications/onlineMeetings/{onlineMeeting-id}/recording']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/communications/onlineMeetings/{onlineMeeting-id}/recording',
      paramDefs: {
        path: ['onlineMeeting-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /communications/onlineMeetings/{onlineMeeting-id}/recording`
   *
   * The content stream of the recording of a Teams live event. Read-only.
   */
  del: function del(
    params?: IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/recording']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/recording']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/communications/onlineMeetings/{onlineMeeting-id}/recording',
      paramDefs: {
        header: ['If-Match'],
        path: ['onlineMeeting-id'],
      },
      params,
    };
  },
};

export const sendVirtualAppointmentReminderSms = {
  /**
   * `POST /communications/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms`
   *
   * Send an SMS reminder to external attendees for a Teams Virtual Appointment. This feature requires Teams Premium and attendees must have a valid United States phone number to receive SMS notifications.
   */
  create: function create(
    body: IEndpoints['POST /communications/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms']['body'],
    params?: IEndpoints['POST /communications/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /communications/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/communications/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms',
      paramDefs: {
        path: ['onlineMeeting-id'],
      },
      params,
      body,
    };
  },
};

export const sendVirtualAppointmentSms = {
  /**
   * `POST /communications/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms`
   *
   * Send an SMS notification to external attendees when a Teams Virtual Appointment is confirmed, rescheduled, or canceled. This feature requires Teams Premium. Attendees must have a valid United States phone number to receive these SMS notifications.
   */
  create: function create(
    body: IEndpoints['POST /communications/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms']['body'],
    params?: IEndpoints['POST /communications/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /communications/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/communications/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms',
      paramDefs: {
        path: ['onlineMeeting-id'],
      },
      params,
      body,
    };
  },
};
