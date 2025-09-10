export * as attendanceReports from './attendanceReports';
export * as meetingAttendanceReport from './meetingAttendanceReport';
export * as recordings from './recordings';
export * as registration from './registration';
export * as transcripts from './transcripts';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}',
    'delete'
  >;
  'GET /users/{user-id}/onlineMeetings': Operation<'/users/{user-id}/onlineMeetings', 'get'>;
  'GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}',
    'get'
  >;
  'PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}',
    'patch'
  >;
  'POST /users/{user-id}/onlineMeetings': Operation<'/users/{user-id}/onlineMeetings', 'post'>;
  'GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/aiInsights': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/aiInsights',
    'get'
  >;
  'POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/aiInsights': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/aiInsights',
    'post'
  >;
  'GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}',
    'get'
  >;
  'PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}',
    'delete'
  >;
  'GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/alternativeRecording': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/alternativeRecording',
    'get'
  >;
  'PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/alternativeRecording': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/alternativeRecording',
    'put'
  >;
  'DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/alternativeRecording': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/alternativeRecording',
    'delete'
  >;
  'GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendeeReport': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendeeReport',
    'get'
  >;
  'PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendeeReport': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendeeReport',
    'put'
  >;
  'DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendeeReport': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendeeReport',
    'delete'
  >;
  'GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/broadcastRecording': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/broadcastRecording',
    'get'
  >;
  'PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/broadcastRecording': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/broadcastRecording',
    'put'
  >;
  'DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/broadcastRecording': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/broadcastRecording',
    'delete'
  >;
  'POST /users/{user-id}/onlineMeetings/createOrGet': Operation<
    '/users/{user-id}/onlineMeetings/createOrGet',
    'post'
  >;
  'GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recording': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/recording',
    'get'
  >;
  'PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recording': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/recording',
    'put'
  >;
  'DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recording': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/recording',
    'delete'
  >;
  'POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms',
    'post'
  >;
  'POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'onlineMeeting-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/onlineMeetings`
 *
 * Information about a meeting, including the URL used to join a meeting, the attendees list, and the description.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/onlineMeetings']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/onlineMeetings']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/onlineMeetings',
    paramDefs: {
      path: ['user-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}`
 *
 * Information about a meeting, including the URL used to join a meeting, the attendees list, and the description.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}',
    paramDefs: {
      path: ['user-id', 'onlineMeeting-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}',
    paramDefs: {
      path: ['user-id', 'onlineMeeting-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/onlineMeetings`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/onlineMeetings']['body'],
  params?: IEndpoints['POST /users/{user-id}/onlineMeetings']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/onlineMeetings']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/onlineMeetings',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const aiInsights = {
  /**
   * `GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/aiInsights`
   *
   * The AI insights generated for an online meeting. Read-only.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/aiInsights']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/aiInsights']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/aiInsights',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'onlineMeeting-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/aiInsights`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/aiInsights']['body'],
    params?: IEndpoints['POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/aiInsights']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/aiInsights']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/aiInsights',
      paramDefs: {
        path: ['user-id', 'onlineMeeting-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}`
   *
   * The AI insights generated for an online meeting. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'onlineMeeting-id', 'callAiInsight-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}',
      paramDefs: {
        path: ['user-id', 'onlineMeeting-id', 'callAiInsight-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'onlineMeeting-id', 'callAiInsight-id'],
      },
      params,
    };
  },
};

export const alternativeRecording = {
  /**
   * `GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/alternativeRecording`
   *
   * The content stream of the alternative recording of a Microsoft Teams live event. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/alternativeRecording',
      paramDefs: {
        path: ['user-id', 'onlineMeeting-id'],
      },
      params,
    };
  },
  /**
   * `PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/alternativeRecording`
   *
   * The content stream of the alternative recording of a Microsoft Teams live event. Read-only.
   */
  set: function set(
    body: IEndpoints['PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['body'],
    params?: IEndpoints['PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/alternativeRecording',
      paramDefs: {
        path: ['user-id', 'onlineMeeting-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/alternativeRecording`
   *
   * The content stream of the alternative recording of a Microsoft Teams live event. Read-only.
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/alternativeRecording']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/alternativeRecording',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'onlineMeeting-id'],
      },
      params,
    };
  },
};

export const attendeeReport = {
  /**
   * `GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendeeReport`
   *
   * The content stream of the attendee report of a Teams live event. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendeeReport']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendeeReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendeeReport',
      paramDefs: {
        path: ['user-id', 'onlineMeeting-id'],
      },
      params,
    };
  },
  /**
   * `PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendeeReport`
   *
   * The content stream of the attendee report of a Teams live event. Read-only.
   */
  set: function set(
    body: IEndpoints['PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendeeReport']['body'],
    params?: IEndpoints['PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendeeReport']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendeeReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendeeReport',
      paramDefs: {
        path: ['user-id', 'onlineMeeting-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendeeReport`
   *
   * The content stream of the attendee report of a Teams live event. Read-only.
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendeeReport']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendeeReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendeeReport',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'onlineMeeting-id'],
      },
      params,
    };
  },
};

export const broadcastRecording = {
  /**
   * `GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/broadcastRecording`
   *
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/broadcastRecording']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/broadcastRecording']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/broadcastRecording',
      paramDefs: {
        path: ['user-id', 'onlineMeeting-id'],
      },
      params,
    };
  },
  /**
   * `PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/broadcastRecording`
   *
   */
  set: function set(
    body: IEndpoints['PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/broadcastRecording']['body'],
    params?: IEndpoints['PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/broadcastRecording']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/broadcastRecording']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/broadcastRecording',
      paramDefs: {
        path: ['user-id', 'onlineMeeting-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/broadcastRecording`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/broadcastRecording']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/broadcastRecording']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/broadcastRecording',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'onlineMeeting-id'],
      },
      params,
    };
  },
};

export const createOrGet = {
  /**
   * `POST /users/{user-id}/onlineMeetings/createOrGet`
   *
   * Create an onlineMeeting object with a custom specified external ID. If the external ID already exists, this API will return the onlineMeeting object with that external ID.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/onlineMeetings/createOrGet']['body'],
    params?: IEndpoints['POST /users/{user-id}/onlineMeetings/createOrGet']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/onlineMeetings/createOrGet']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/onlineMeetings/createOrGet',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
};

export const recording = {
  /**
   * `GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recording`
   *
   * The content stream of the recording of a Teams live event. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recording']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recording']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/recording',
      paramDefs: {
        path: ['user-id', 'onlineMeeting-id'],
      },
      params,
    };
  },
  /**
   * `PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recording`
   *
   * The content stream of the recording of a Teams live event. Read-only.
   */
  set: function set(
    body: IEndpoints['PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recording']['body'],
    params?: IEndpoints['PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recording']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recording']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/recording',
      paramDefs: {
        path: ['user-id', 'onlineMeeting-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recording`
   *
   * The content stream of the recording of a Teams live event. Read-only.
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recording']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recording']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/recording',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'onlineMeeting-id'],
      },
      params,
    };
  },
};

export const sendVirtualAppointmentReminderSms = {
  /**
   * `POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms`
   *
   * Send an SMS reminder to external attendees for a Teams Virtual Appointment. This feature requires Teams Premium and attendees must have a valid United States phone number to receive SMS notifications.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms']['body'],
    params?: IEndpoints['POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms',
      paramDefs: {
        path: ['user-id', 'onlineMeeting-id'],
      },
      params,
      body,
    };
  },
};

export const sendVirtualAppointmentSms = {
  /**
   * `POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms`
   *
   * Send an SMS notification to external attendees when a Teams Virtual Appointment is confirmed, rescheduled, or canceled. This feature requires Teams Premium. Attendees must have a valid United States phone number to receive these SMS notifications.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms']['body'],
    params?: IEndpoints['POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms',
      paramDefs: {
        path: ['user-id', 'onlineMeeting-id'],
      },
      params,
      body,
    };
  },
};
