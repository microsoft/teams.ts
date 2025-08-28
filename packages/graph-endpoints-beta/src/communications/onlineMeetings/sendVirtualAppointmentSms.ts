import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /communications/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms',
    'post'
  >;
}

/**
 * `POST /communications/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms`
 *
 * Send an SMS notification to external attendees when a Teams Virtual Appointment is confirmed, rescheduled, or canceled. This feature requires Teams Premium. Attendees must have a valid United States phone number to receive these SMS notifications.
 */
export function create(
  body: IEndpoints['POST /communications/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms']['body'],
  params?: IEndpoints['POST /communications/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms']['parameters']
): EndpointRequest<
  IEndpoints['POST /communications/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms',
    paramDefs: [{ name: 'onlineMeeting-id', in: 'path' }],
    params,
    body,
  };
}
