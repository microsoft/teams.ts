export * as attendanceReports from './attendanceReports';
export * as recordings from './recordings';
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
  'POST /me/onlineMeetings/createOrGet': Operation<'/me/onlineMeetings/createOrGet', 'post'>;
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
 * Retrieve the properties and relationships of an onlineMeeting object. For example, you can: Teams live event attendee report (deprecated) and Teams live event recordings (deprecated) are online meeting artifacts. For more information, see Online meeting artifacts and permissions.
 */
export function list(
  params?: IEndpoints['GET /me/onlineMeetings']['parameters']
): EndpointRequest<IEndpoints['GET /me/onlineMeetings']['response']> {
  return {
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
 * Retrieve the properties and relationships of an onlineMeeting object. For example, you can: Teams live event attendee report (deprecated) and Teams live event recordings (deprecated) are online meeting artifacts. For more information, see Online meeting artifacts and permissions.
 */
export function get(
  params?: IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}']['response']> {
  return {
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
    method: 'post',
    path: '/me/onlineMeetings',
    body,
  };
}

export const attendeeReport = {
  /**
   * `GET /me/onlineMeetings/{onlineMeeting-id}/attendeeReport`
   *
   * Retrieve the properties and relationships of an onlineMeeting object. For example, you can: Teams live event attendee report (deprecated) and Teams live event recordings (deprecated) are online meeting artifacts. For more information, see Online meeting artifacts and permissions.
   */
  get: function get(
    params?: IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/attendeeReport']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/attendeeReport']['response']
  > {
    return {
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
   * The content stream of the attendee report of a Microsoft Teams live event. Read-only.
   */
  set: function set(
    body: IEndpoints['PUT /me/onlineMeetings/{onlineMeeting-id}/attendeeReport']['body'],
    params?: IEndpoints['PUT /me/onlineMeetings/{onlineMeeting-id}/attendeeReport']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /me/onlineMeetings/{onlineMeeting-id}/attendeeReport']['response']
  > {
    return {
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
   * The content stream of the attendee report of a Microsoft Teams live event. Read-only.
   */
  del: function del(
    params?: IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}/attendeeReport']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}/attendeeReport']['response']
  > {
    return {
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
      method: 'post',
      path: '/me/onlineMeetings/createOrGet',
      body,
    };
  },
};

export const sendVirtualAppointmentReminderSms = {
  /**
   * `POST /me/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms`
   *
   * Send an SMS reminder to external attendees for a Teams virtual appointment. This feature requires Teams premium and attendees must have a valid United States phone number to receive SMS notifications.
   */
  create: function create(
    body: IEndpoints['POST /me/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms']['body'],
    params?: IEndpoints['POST /me/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms']['response']
  > {
    return {
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
   * Send an SMS notification to external attendees when a Teams virtual appointment is confirmed, rescheduled, or canceled. This feature requires Teams premium. Attendees must have a valid United States phone number to receive these SMS notifications.
   */
  create: function create(
    body: IEndpoints['POST /me/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms']['body'],
    params?: IEndpoints['POST /me/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms']['response']
  > {
    return {
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
