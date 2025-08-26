import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /communications/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms',
    'post'
  >;
}

/**
 * `POST /communications/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms`
 *
 * Send an SMS reminder to external attendees for a Teams virtual appointment. This feature requires Teams premium and attendees must have a valid United States phone number to receive SMS notifications.
 */
export function create(
  body: IEndpoints['POST /communications/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms']['body'],
  params?: IEndpoints['POST /communications/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms']['parameters']
): EndpointRequest<
  IEndpoints['POST /communications/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms']['response']
> {
  return {
    method: 'post',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms',
    paramDefs: [{ name: 'onlineMeeting-id', in: 'path' }],
    params,
    body,
  };
}
