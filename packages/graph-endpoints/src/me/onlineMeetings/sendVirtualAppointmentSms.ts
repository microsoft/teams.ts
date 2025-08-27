import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms',
    'post'
  >;
}

/**
 * `POST /me/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms`
 *
 * Send an SMS notification to external attendees when a Teams virtual appointment is confirmed, rescheduled, or canceled. This feature requires Teams premium. Attendees must have a valid United States phone number to receive these SMS notifications.
 */
export function create(
  body: IEndpoints['POST /me/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms']['body'],
  params?: IEndpoints['POST /me/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms']['response']
> {
  return {
    method: 'post',
    path: '/me/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms',
    paramDefs: [{ name: 'onlineMeeting-id', in: 'path' }],
    params,
    body,
  };
}
