import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms',
    'post'
  >;
}

/**
 * `POST /me/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms`
 *
 * Send an SMS reminder to external attendees for a Teams virtual appointment. This feature requires Teams premium and attendees must have a valid United States phone number to receive SMS notifications.
 */
export function create(
  body: IEndpoints['POST /me/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms']['body'],
  params?: IEndpoints['POST /me/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms']['response']
> {
  return {
    method: 'post',
    path: '/me/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms',
    paramDefs: [{ name: 'onlineMeeting-id', in: 'path' }],
    params,
    body,
  };
}
