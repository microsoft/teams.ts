import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}/cancel': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}/cancel',
    'post'
  >;
}

/**
 * `POST /bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}/cancel`
 *
 * Cancel the specified bookingAppointment in the specified bookingBusiness, and send a message to the involved customer and staff members.
 */
export function create(
  body: IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}/cancel']['body'],
  params?: IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}/cancel']['parameters']
): EndpointRequest<
  IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}/cancel']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}/cancel',
    paramDefs: [
      { name: 'bookingBusiness-id', in: 'path' },
      { name: 'bookingAppointment-id', in: 'path' },
    ],
    params,
    body,
  };
}
