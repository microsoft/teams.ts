import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms`
 *
 * Send an SMS notification to external attendees when a Teams virtual appointment is confirmed, rescheduled, or canceled. This feature requires Teams premium. Attendees must have a valid United States phone number to receive these SMS notifications.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms']['body'],
  params?: IEndpoints['POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'onlineMeeting-id', in: 'path' },
    ],
    params,
    body,
  };
}
