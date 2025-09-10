export * as attendanceReports from './attendanceReports';
export * as recordings from './recordings';
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
  'POST /users/{user-id}/onlineMeetings/createOrGet': Operation<
    '/users/{user-id}/onlineMeetings/createOrGet',
    'post'
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
    method: 'post',
    path: '/users/{user-id}/onlineMeetings',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const attendeeReport = {
  /**
   * `GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendeeReport`
   *
   * The content stream of the attendee report of a Microsoft Teams live event. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendeeReport']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendeeReport']['response']
  > {
    return {
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
   * The content stream of the attendee report of a Microsoft Teams live event. Read-only.
   */
  set: function set(
    body: IEndpoints['PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendeeReport']['body'],
    params?: IEndpoints['PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendeeReport']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendeeReport']['response']
  > {
    return {
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
   * The content stream of the attendee report of a Microsoft Teams live event. Read-only.
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendeeReport']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendeeReport']['response']
  > {
    return {
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

export const sendVirtualAppointmentReminderSms = {
  /**
   * `POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms`
   *
   * Send an SMS reminder to external attendees for a Teams virtual appointment. This feature requires Teams premium and attendees must have a valid United States phone number to receive SMS notifications.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms']['body'],
    params?: IEndpoints['POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms']['response']
  > {
    return {
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
   * Send an SMS notification to external attendees when a Teams virtual appointment is confirmed, rescheduled, or canceled. This feature requires Teams premium. Attendees must have a valid United States phone number to receive these SMS notifications.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms']['body'],
    params?: IEndpoints['POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms']['response']
  > {
    return {
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
