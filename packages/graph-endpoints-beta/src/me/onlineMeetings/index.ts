export * as attendanceReports from './attendanceReports';
export * as meetingAttendanceReport from './meetingAttendanceReport';
export * as recordings from './recordings';
export * as registration from './registration';
export * as transcripts from './transcripts';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/onlineMeetings/{onlineMeeting-id}': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}',
    'delete'
  >;
  'GET /me/onlineMeetings': Operation<'/me/onlineMeetings', 'get'>;
  'GET /me/onlineMeetings/{onlineMeeting-id}': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}',
    'get'
  >;
  'PATCH /me/onlineMeetings/{onlineMeeting-id}': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}',
    'patch'
  >;
  'POST /me/onlineMeetings': Operation<'/me/onlineMeetings', 'post'>;
  'GET /me/onlineMeetings/{onlineMeeting-id}/aiInsights': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/aiInsights',
    'get'
  >;
  'POST /me/onlineMeetings/{onlineMeeting-id}/aiInsights': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/aiInsights',
    'post'
  >;
  'GET /me/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}',
    'get'
  >;
  'PATCH /me/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}',
    'patch'
  >;
  'DELETE /me/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}',
    'delete'
  >;
  'GET /me/onlineMeetings/{onlineMeeting-id}/alternativeRecording': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/alternativeRecording',
    'get'
  >;
  'PUT /me/onlineMeetings/{onlineMeeting-id}/alternativeRecording': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/alternativeRecording',
    'put'
  >;
  'DELETE /me/onlineMeetings/{onlineMeeting-id}/alternativeRecording': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/alternativeRecording',
    'delete'
  >;
  'GET /me/onlineMeetings/{onlineMeeting-id}/attendeeReport': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/attendeeReport',
    'get'
  >;
  'PUT /me/onlineMeetings/{onlineMeeting-id}/attendeeReport': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/attendeeReport',
    'put'
  >;
  'DELETE /me/onlineMeetings/{onlineMeeting-id}/attendeeReport': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/attendeeReport',
    'delete'
  >;
  'GET /me/onlineMeetings/{onlineMeeting-id}/broadcastRecording': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/broadcastRecording',
    'get'
  >;
  'PUT /me/onlineMeetings/{onlineMeeting-id}/broadcastRecording': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/broadcastRecording',
    'put'
  >;
  'DELETE /me/onlineMeetings/{onlineMeeting-id}/broadcastRecording': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/broadcastRecording',
    'delete'
  >;
  'POST /me/onlineMeetings/createOrGet': Operation<'/me/onlineMeetings/createOrGet', 'post'>;
  'GET /me/onlineMeetings/{onlineMeeting-id}/recording': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/recording',
    'get'
  >;
  'PUT /me/onlineMeetings/{onlineMeeting-id}/recording': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/recording',
    'put'
  >;
  'DELETE /me/onlineMeetings/{onlineMeeting-id}/recording': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/recording',
    'delete'
  >;
  'POST /me/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms',
    'post'
  >;
  'POST /me/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms',
    'post'
  >;
}

/**
 * `DELETE /me/onlineMeetings/{onlineMeeting-id}`
 *
 * Delete an onlineMeeting object.
 */
export function del(
  params?: IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/onlineMeetings/{onlineMeeting-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['onlineMeeting-id'],
    },
    params,
  };
}

/**
 * `GET /me/onlineMeetings`
 *
 * Retrieve the properties and relationships of an onlineMeeting object. For example, you can: Teams live event attendee report (deprecated) and Teams live event recordings (deprecated) are online meeting artifacts. For details, see Online meeting artifacts and permissions.
 */
export function list(
  params?: IEndpoints['GET /me/onlineMeetings']['parameters']
): EndpointRequest<IEndpoints['GET /me/onlineMeetings']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/onlineMeetings',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/onlineMeetings/{onlineMeeting-id}`
 *
 * Information about a meeting, including the URL used to join a meeting, the attendees list, and the description.
 */
export function get(
  params?: IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/onlineMeetings/{onlineMeeting-id}',
    paramDefs: {
      path: ['onlineMeeting-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/onlineMeetings/{onlineMeeting-id}`
 *
 * Update the properties of the specified onlineMeeting object. For the list of properties that support updating, see the Request body section.
 */
export function update(
  body: IEndpoints['PATCH /me/onlineMeetings/{onlineMeeting-id}']['body'],
  params?: IEndpoints['PATCH /me/onlineMeetings/{onlineMeeting-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/onlineMeetings/{onlineMeeting-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/onlineMeetings/{onlineMeeting-id}',
    paramDefs: {
      path: ['onlineMeeting-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/onlineMeetings`
 *
 * Create an online meeting on behalf of a user.
 */
export function create(
  body: IEndpoints['POST /me/onlineMeetings']['body']
): EndpointRequest<IEndpoints['POST /me/onlineMeetings']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/onlineMeetings',
    body,
  };
}

export const aiInsights = {
  /**
   * `GET /me/onlineMeetings/{onlineMeeting-id}/aiInsights`
   *
   * The AI insights generated for an online meeting. Read-only.
   */
  list: function list(
    params?: IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/aiInsights']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/aiInsights']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/onlineMeetings/{onlineMeeting-id}/aiInsights',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['onlineMeeting-id'],
      },
      params,
    };
  },
  /**
   * `POST /me/onlineMeetings/{onlineMeeting-id}/aiInsights`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/onlineMeetings/{onlineMeeting-id}/aiInsights']['body'],
    params?: IEndpoints['POST /me/onlineMeetings/{onlineMeeting-id}/aiInsights']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/onlineMeetings/{onlineMeeting-id}/aiInsights']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/onlineMeetings/{onlineMeeting-id}/aiInsights',
      paramDefs: {
        path: ['onlineMeeting-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /me/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}`
   *
   * The AI insights generated for an online meeting. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['onlineMeeting-id', 'callAiInsight-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}']['body'],
    params?: IEndpoints['PATCH /me/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}',
      paramDefs: {
        path: ['onlineMeeting-id', 'callAiInsight-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}',
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
   * `GET /me/onlineMeetings/{onlineMeeting-id}/alternativeRecording`
   *
   * The content stream of the alternative recording of a Microsoft Teams live event. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/onlineMeetings/{onlineMeeting-id}/alternativeRecording',
      paramDefs: {
        path: ['onlineMeeting-id'],
      },
      params,
    };
  },
  /**
   * `PUT /me/onlineMeetings/{onlineMeeting-id}/alternativeRecording`
   *
   * The content stream of the alternative recording of a Microsoft Teams live event. Read-only.
   */
  set: function set(
    body: IEndpoints['PUT /me/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['body'],
    params?: IEndpoints['PUT /me/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /me/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/me/onlineMeetings/{onlineMeeting-id}/alternativeRecording',
      paramDefs: {
        path: ['onlineMeeting-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/onlineMeetings/{onlineMeeting-id}/alternativeRecording`
   *
   * The content stream of the alternative recording of a Microsoft Teams live event. Read-only.
   */
  del: function del(
    params?: IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/onlineMeetings/{onlineMeeting-id}/alternativeRecording',
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
   * `GET /me/onlineMeetings/{onlineMeeting-id}/attendeeReport`
   *
   * Retrieve the properties and relationships of an onlineMeeting object. For example, you can: Teams live event attendee report (deprecated) and Teams live event recordings (deprecated) are online meeting artifacts. For details, see Online meeting artifacts and permissions.
   */
  get: function get(
    params?: IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/attendeeReport']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/attendeeReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/onlineMeetings/{onlineMeeting-id}/attendeeReport',
      paramDefs: {
        path: ['onlineMeeting-id'],
      },
      params,
    };
  },
  /**
   * `PUT /me/onlineMeetings/{onlineMeeting-id}/attendeeReport`
   *
   * The content stream of the attendee report of a Teams live event. Read-only.
   */
  set: function set(
    body: IEndpoints['PUT /me/onlineMeetings/{onlineMeeting-id}/attendeeReport']['body'],
    params?: IEndpoints['PUT /me/onlineMeetings/{onlineMeeting-id}/attendeeReport']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /me/onlineMeetings/{onlineMeeting-id}/attendeeReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/me/onlineMeetings/{onlineMeeting-id}/attendeeReport',
      paramDefs: {
        path: ['onlineMeeting-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/onlineMeetings/{onlineMeeting-id}/attendeeReport`
   *
   * The content stream of the attendee report of a Teams live event. Read-only.
   */
  del: function del(
    params?: IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}/attendeeReport']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}/attendeeReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/onlineMeetings/{onlineMeeting-id}/attendeeReport',
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
   * `GET /me/onlineMeetings/{onlineMeeting-id}/broadcastRecording`
   *
   */
  get: function get(
    params?: IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/broadcastRecording']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/broadcastRecording']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/onlineMeetings/{onlineMeeting-id}/broadcastRecording',
      paramDefs: {
        path: ['onlineMeeting-id'],
      },
      params,
    };
  },
  /**
   * `PUT /me/onlineMeetings/{onlineMeeting-id}/broadcastRecording`
   *
   */
  set: function set(
    body: IEndpoints['PUT /me/onlineMeetings/{onlineMeeting-id}/broadcastRecording']['body'],
    params?: IEndpoints['PUT /me/onlineMeetings/{onlineMeeting-id}/broadcastRecording']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /me/onlineMeetings/{onlineMeeting-id}/broadcastRecording']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/me/onlineMeetings/{onlineMeeting-id}/broadcastRecording',
      paramDefs: {
        path: ['onlineMeeting-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/onlineMeetings/{onlineMeeting-id}/broadcastRecording`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}/broadcastRecording']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}/broadcastRecording']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/onlineMeetings/{onlineMeeting-id}/broadcastRecording',
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
   * `POST /me/onlineMeetings/createOrGet`
   *
   * Create an onlineMeeting object with a custom specified external ID. If the external ID already exists, this API will return the onlineMeeting object with that external ID.
   */
  create: function create(
    body: IEndpoints['POST /me/onlineMeetings/createOrGet']['body']
  ): EndpointRequest<IEndpoints['POST /me/onlineMeetings/createOrGet']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/onlineMeetings/createOrGet',
      body,
    };
  },
};

export const recording = {
  /**
   * `GET /me/onlineMeetings/{onlineMeeting-id}/recording`
   *
   * Retrieve the properties and relationships of an onlineMeeting object. For example, you can: Teams live event attendee report (deprecated) and Teams live event recordings (deprecated) are online meeting artifacts. For details, see Online meeting artifacts and permissions.
   */
  get: function get(
    params?: IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/recording']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/recording']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/onlineMeetings/{onlineMeeting-id}/recording',
      paramDefs: {
        path: ['onlineMeeting-id'],
      },
      params,
    };
  },
  /**
   * `PUT /me/onlineMeetings/{onlineMeeting-id}/recording`
   *
   * The content stream of the recording of a Teams live event. Read-only.
   */
  set: function set(
    body: IEndpoints['PUT /me/onlineMeetings/{onlineMeeting-id}/recording']['body'],
    params?: IEndpoints['PUT /me/onlineMeetings/{onlineMeeting-id}/recording']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /me/onlineMeetings/{onlineMeeting-id}/recording']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/me/onlineMeetings/{onlineMeeting-id}/recording',
      paramDefs: {
        path: ['onlineMeeting-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/onlineMeetings/{onlineMeeting-id}/recording`
   *
   * The content stream of the recording of a Teams live event. Read-only.
   */
  del: function del(
    params?: IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}/recording']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}/recording']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/onlineMeetings/{onlineMeeting-id}/recording',
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
   * `POST /me/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms`
   *
   * Send an SMS reminder to external attendees for a Teams Virtual Appointment. This feature requires Teams Premium and attendees must have a valid United States phone number to receive SMS notifications.
   */
  create: function create(
    body: IEndpoints['POST /me/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms']['body'],
    params?: IEndpoints['POST /me/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms',
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
   * `POST /me/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms`
   *
   * Send an SMS notification to external attendees when a Teams Virtual Appointment is confirmed, rescheduled, or canceled. This feature requires Teams Premium. Attendees must have a valid United States phone number to receive these SMS notifications.
   */
  create: function create(
    body: IEndpoints['POST /me/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms']['body'],
    params?: IEndpoints['POST /me/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms',
      paramDefs: {
        path: ['onlineMeeting-id'],
      },
      params,
      body,
    };
  },
};
