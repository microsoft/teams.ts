import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /solutions/bookingBusinesses/{bookingBusiness-id}/getStaffAvailability': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/getStaffAvailability',
    'post'
  >;
}

/**
 * `POST /solutions/bookingBusinesses/{bookingBusiness-id}/getStaffAvailability`
 *
 * Get the availability information of staff members of a Microsoft Bookings calendar.
 */
export function create(
  body: IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/getStaffAvailability']['body'],
  params?: IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/getStaffAvailability']['parameters']
): EndpointRequest<
  IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/getStaffAvailability']['response']
> {
  return {
    method: 'post',
    path: '/solutions/bookingBusinesses/{bookingBusiness-id}/getStaffAvailability',
    paramDefs: [{ name: 'bookingBusiness-id', in: 'path' }],
    params,
    body,
  };
}
