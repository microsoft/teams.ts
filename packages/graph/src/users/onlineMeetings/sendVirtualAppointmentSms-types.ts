// DO NOT EDIT THIS FILE
import type { Operation } from './../../common.ts';

export interface Endpoints {
  /**
   * Send an SMS notification to external attendees when a Teams virtual appointment is confirmed, rescheduled, or canceled. This feature requires Teams premium. Attendees must have a valid United States phone number to receive these SMS notifications.
   */
  'POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms',
    'post'
  >;
}
