import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /solutions/bookingBusinesses/{bookingBusiness-id}/unpublish': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/unpublish',
    'post'
  >;
}

/**
 * `POST /solutions/bookingBusinesses/{bookingBusiness-id}/unpublish`
 *
 * Make the scheduling page of this business not available to external customers. Set the isPublished property to false, and the publicUrl property to null.
 */
export function create(
  body: IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/unpublish']['body'],
  params?: IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/unpublish']['parameters']
): EndpointRequest<
  IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/unpublish']['response']
> {
  return {
    method: 'post',
    path: '/solutions/bookingBusinesses/{bookingBusiness-id}/unpublish',
    paramDefs: [{ name: 'bookingBusiness-id', in: 'path' }],
    params,
    body,
  };
}
