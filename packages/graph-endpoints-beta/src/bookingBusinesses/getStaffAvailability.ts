import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /bookingBusinesses/{bookingBusiness-id}/getStaffAvailability': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/getStaffAvailability',
    'post'
  >;
}

/**
 * `POST /bookingBusinesses/{bookingBusiness-id}/getStaffAvailability`
 *
 * Get the availability information of staff members of a Microsoft Bookings calendar.
 */
export function create(
  body: IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/getStaffAvailability']['body'],
  params?: IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/getStaffAvailability']['parameters']
): EndpointRequest<
  IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/getStaffAvailability']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/bookingBusinesses/{bookingBusiness-id}/getStaffAvailability',
    paramDefs: [{ name: 'bookingBusiness-id', in: 'path' }],
    params,
    body,
  };
}
