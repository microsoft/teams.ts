export * as attendanceReports from './attendanceReports';
export * as meetingAttendanceReport from './meetingAttendanceReport';
export * as recordings from './recordings';
export * as registration from './registration';
export * as transcripts from './transcripts';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /app/onlineMeetings/{onlineMeeting-id}': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}',
    'delete'
  >;
  'GET /app/onlineMeetings': Operation<'/app/onlineMeetings', 'get'>;
  'GET /app/onlineMeetings/{onlineMeeting-id}': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}',
    'get'
  >;
  'PATCH /app/onlineMeetings/{onlineMeeting-id}': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}',
    'patch'
  >;
  'POST /app/onlineMeetings': Operation<'/app/onlineMeetings', 'post'>;
  'GET /app/onlineMeetings/{onlineMeeting-id}/aiInsights': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/aiInsights',
    'get'
  >;
  'POST /app/onlineMeetings/{onlineMeeting-id}/aiInsights': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/aiInsights',
    'post'
  >;
  'GET /app/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}',
    'get'
  >;
  'PATCH /app/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}',
    'patch'
  >;
  'DELETE /app/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}',
    'delete'
  >;
  'GET /app/onlineMeetings/{onlineMeeting-id}/alternativeRecording': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/alternativeRecording',
    'get'
  >;
  'PUT /app/onlineMeetings/{onlineMeeting-id}/alternativeRecording': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/alternativeRecording',
    'put'
  >;
  'DELETE /app/onlineMeetings/{onlineMeeting-id}/alternativeRecording': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/alternativeRecording',
    'delete'
  >;
  'GET /app/onlineMeetings/{onlineMeeting-id}/attendeeReport': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/attendeeReport',
    'get'
  >;
  'PUT /app/onlineMeetings/{onlineMeeting-id}/attendeeReport': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/attendeeReport',
    'put'
  >;
  'DELETE /app/onlineMeetings/{onlineMeeting-id}/attendeeReport': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/attendeeReport',
    'delete'
  >;
  'GET /app/onlineMeetings/{onlineMeeting-id}/broadcastRecording': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/broadcastRecording',
    'get'
  >;
  'PUT /app/onlineMeetings/{onlineMeeting-id}/broadcastRecording': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/broadcastRecording',
    'put'
  >;
  'DELETE /app/onlineMeetings/{onlineMeeting-id}/broadcastRecording': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/broadcastRecording',
    'delete'
  >;
  'POST /app/onlineMeetings/createOrGet': Operation<'/app/onlineMeetings/createOrGet', 'post'>;
  'GET /app/onlineMeetings/{onlineMeeting-id}/recording': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/recording',
    'get'
  >;
  'PUT /app/onlineMeetings/{onlineMeeting-id}/recording': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/recording',
    'put'
  >;
  'DELETE /app/onlineMeetings/{onlineMeeting-id}/recording': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/recording',
    'delete'
  >;
  'POST /app/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms',
    'post'
  >;
  'POST /app/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms',
    'post'
  >;
}

/**
 * `DELETE /app/onlineMeetings/{onlineMeeting-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /app/onlineMeetings/{onlineMeeting-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /app/onlineMeetings/{onlineMeeting-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/app/onlineMeetings/{onlineMeeting-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['onlineMeeting-id'],
    },
    params,
  };
}

/**
 * `GET /app/onlineMeetings`
 *
 */
export function list(
  params?: IEndpoints['GET /app/onlineMeetings']['parameters']
): EndpointRequest<IEndpoints['GET /app/onlineMeetings']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/app/onlineMeetings',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /app/onlineMeetings/{onlineMeeting-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}']['parameters']
): EndpointRequest<IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/app/onlineMeetings/{onlineMeeting-id}',
    paramDefs: {
      path: ['onlineMeeting-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /app/onlineMeetings/{onlineMeeting-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /app/onlineMeetings/{onlineMeeting-id}']['body'],
  params?: IEndpoints['PATCH /app/onlineMeetings/{onlineMeeting-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /app/onlineMeetings/{onlineMeeting-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/app/onlineMeetings/{onlineMeeting-id}',
    paramDefs: {
      path: ['onlineMeeting-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /app/onlineMeetings`
 *
 */
export function create(
  body: IEndpoints['POST /app/onlineMeetings']['body']
): EndpointRequest<IEndpoints['POST /app/onlineMeetings']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/app/onlineMeetings',
    body,
  };
}

export const aiInsights = {
  /**
   * `GET /app/onlineMeetings/{onlineMeeting-id}/aiInsights`
   *
   * The AI insights generated for an online meeting. Read-only.
   */
  list: function list(
    params?: IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/aiInsights']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/aiInsights']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/app/onlineMeetings/{onlineMeeting-id}/aiInsights',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['onlineMeeting-id'],
      },
      params,
    };
  },
  /**
   * `POST /app/onlineMeetings/{onlineMeeting-id}/aiInsights`
   *
   */
  create: function create(
    body: IEndpoints['POST /app/onlineMeetings/{onlineMeeting-id}/aiInsights']['body'],
    params?: IEndpoints['POST /app/onlineMeetings/{onlineMeeting-id}/aiInsights']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /app/onlineMeetings/{onlineMeeting-id}/aiInsights']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/app/onlineMeetings/{onlineMeeting-id}/aiInsights',
      paramDefs: {
        path: ['onlineMeeting-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /app/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}`
   *
   * The AI insights generated for an online meeting. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/app/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['onlineMeeting-id', 'callAiInsight-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /app/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /app/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}']['body'],
    params?: IEndpoints['PATCH /app/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /app/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/app/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}',
      paramDefs: {
        path: ['onlineMeeting-id', 'callAiInsight-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /app/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /app/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /app/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/app/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}',
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
   * `GET /app/onlineMeetings/{onlineMeeting-id}/alternativeRecording`
   *
   * The content stream of the alternative recording of a Microsoft Teams live event. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/app/onlineMeetings/{onlineMeeting-id}/alternativeRecording',
      paramDefs: {
        path: ['onlineMeeting-id'],
      },
      params,
    };
  },
  /**
   * `PUT /app/onlineMeetings/{onlineMeeting-id}/alternativeRecording`
   *
   * The content stream of the alternative recording of a Microsoft Teams live event. Read-only.
   */
  set: function set(
    body: IEndpoints['PUT /app/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['body'],
    params?: IEndpoints['PUT /app/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /app/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/app/onlineMeetings/{onlineMeeting-id}/alternativeRecording',
      paramDefs: {
        path: ['onlineMeeting-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /app/onlineMeetings/{onlineMeeting-id}/alternativeRecording`
   *
   * The content stream of the alternative recording of a Microsoft Teams live event. Read-only.
   */
  del: function del(
    params?: IEndpoints['DELETE /app/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /app/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/app/onlineMeetings/{onlineMeeting-id}/alternativeRecording',
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
   * `GET /app/onlineMeetings/{onlineMeeting-id}/attendeeReport`
   *
   * The content stream of the attendee report of a Teams live event. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/attendeeReport']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/attendeeReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/app/onlineMeetings/{onlineMeeting-id}/attendeeReport',
      paramDefs: {
        path: ['onlineMeeting-id'],
      },
      params,
    };
  },
  /**
   * `PUT /app/onlineMeetings/{onlineMeeting-id}/attendeeReport`
   *
   * The content stream of the attendee report of a Teams live event. Read-only.
   */
  set: function set(
    body: IEndpoints['PUT /app/onlineMeetings/{onlineMeeting-id}/attendeeReport']['body'],
    params?: IEndpoints['PUT /app/onlineMeetings/{onlineMeeting-id}/attendeeReport']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /app/onlineMeetings/{onlineMeeting-id}/attendeeReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/app/onlineMeetings/{onlineMeeting-id}/attendeeReport',
      paramDefs: {
        path: ['onlineMeeting-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /app/onlineMeetings/{onlineMeeting-id}/attendeeReport`
   *
   * The content stream of the attendee report of a Teams live event. Read-only.
   */
  del: function del(
    params?: IEndpoints['DELETE /app/onlineMeetings/{onlineMeeting-id}/attendeeReport']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /app/onlineMeetings/{onlineMeeting-id}/attendeeReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/app/onlineMeetings/{onlineMeeting-id}/attendeeReport',
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
   * `GET /app/onlineMeetings/{onlineMeeting-id}/broadcastRecording`
   *
   */
  get: function get(
    params?: IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/broadcastRecording']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/broadcastRecording']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/app/onlineMeetings/{onlineMeeting-id}/broadcastRecording',
      paramDefs: {
        path: ['onlineMeeting-id'],
      },
      params,
    };
  },
  /**
   * `PUT /app/onlineMeetings/{onlineMeeting-id}/broadcastRecording`
   *
   */
  set: function set(
    body: IEndpoints['PUT /app/onlineMeetings/{onlineMeeting-id}/broadcastRecording']['body'],
    params?: IEndpoints['PUT /app/onlineMeetings/{onlineMeeting-id}/broadcastRecording']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /app/onlineMeetings/{onlineMeeting-id}/broadcastRecording']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/app/onlineMeetings/{onlineMeeting-id}/broadcastRecording',
      paramDefs: {
        path: ['onlineMeeting-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /app/onlineMeetings/{onlineMeeting-id}/broadcastRecording`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /app/onlineMeetings/{onlineMeeting-id}/broadcastRecording']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /app/onlineMeetings/{onlineMeeting-id}/broadcastRecording']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/app/onlineMeetings/{onlineMeeting-id}/broadcastRecording',
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
   * `POST /app/onlineMeetings/createOrGet`
   *
   * Create an onlineMeeting object with a custom specified external ID. If the external ID already exists, this API will return the onlineMeeting object with that external ID.
   */
  create: function create(
    body: IEndpoints['POST /app/onlineMeetings/createOrGet']['body']
  ): EndpointRequest<IEndpoints['POST /app/onlineMeetings/createOrGet']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/app/onlineMeetings/createOrGet',
      body,
    };
  },
};

export const recording = {
  /**
   * `GET /app/onlineMeetings/{onlineMeeting-id}/recording`
   *
   * The content stream of the recording of a Teams live event. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/recording']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/recording']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/app/onlineMeetings/{onlineMeeting-id}/recording',
      paramDefs: {
        path: ['onlineMeeting-id'],
      },
      params,
    };
  },
  /**
   * `PUT /app/onlineMeetings/{onlineMeeting-id}/recording`
   *
   * The content stream of the recording of a Teams live event. Read-only.
   */
  set: function set(
    body: IEndpoints['PUT /app/onlineMeetings/{onlineMeeting-id}/recording']['body'],
    params?: IEndpoints['PUT /app/onlineMeetings/{onlineMeeting-id}/recording']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /app/onlineMeetings/{onlineMeeting-id}/recording']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/app/onlineMeetings/{onlineMeeting-id}/recording',
      paramDefs: {
        path: ['onlineMeeting-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /app/onlineMeetings/{onlineMeeting-id}/recording`
   *
   * The content stream of the recording of a Teams live event. Read-only.
   */
  del: function del(
    params?: IEndpoints['DELETE /app/onlineMeetings/{onlineMeeting-id}/recording']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /app/onlineMeetings/{onlineMeeting-id}/recording']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/app/onlineMeetings/{onlineMeeting-id}/recording',
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
   * `POST /app/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms`
   *
   * Send an SMS reminder to external attendees for a Teams Virtual Appointment. This feature requires Teams Premium and attendees must have a valid United States phone number to receive SMS notifications.
   */
  create: function create(
    body: IEndpoints['POST /app/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms']['body'],
    params?: IEndpoints['POST /app/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /app/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/app/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms',
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
   * `POST /app/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms`
   *
   * Send an SMS notification to external attendees when a Teams Virtual Appointment is confirmed, rescheduled, or canceled. This feature requires Teams Premium. Attendees must have a valid United States phone number to receive these SMS notifications.
   */
  create: function create(
    body: IEndpoints['POST /app/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms']['body'],
    params?: IEndpoints['POST /app/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /app/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/app/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms',
      paramDefs: {
        path: ['onlineMeeting-id'],
      },
      params,
      body,
    };
  },
};
