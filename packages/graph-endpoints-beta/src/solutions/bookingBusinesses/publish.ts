import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /solutions/bookingBusinesses/{bookingBusiness-id}/publish': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/publish',
    'post'
  >;
}

/**
 * `POST /solutions/bookingBusinesses/{bookingBusiness-id}/publish`
 *
 * Make the scheduling page of this business available to external customers. Set the isPublished property to true, and publicUrl property to the URL of the scheduling page.
 */
export function create(
  body: IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/publish']['body'],
  params?: IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/publish']['parameters']
): EndpointRequest<
  IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/publish']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/solutions/bookingBusinesses/{bookingBusiness-id}/publish',
    paramDefs: [{ name: 'bookingBusiness-id', in: 'path' }],
    params,
    body,
  };
}
