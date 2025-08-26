import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /bookingBusinesses/{bookingBusiness-id}/publish': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/publish',
    'post'
  >;
}

/**
 * `POST /bookingBusinesses/{bookingBusiness-id}/publish`
 *
 * Make the scheduling page of this business available to external customers. Set the isPublished property to true, and publicUrl property to the URL of the scheduling page.
 */
export function create(
  body: IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/publish']['body'],
  params?: IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/publish']['parameters']
): EndpointRequest<IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/publish']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/bookingBusinesses/{bookingBusiness-id}/publish',
    paramDefs: [{ name: 'bookingBusiness-id', in: 'path' }],
    params,
    body,
  };
}
