import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /bookingBusinesses/{bookingBusiness-id}/unpublish': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/unpublish',
    'post'
  >;
}

/**
 * `POST /bookingBusinesses/{bookingBusiness-id}/unpublish`
 *
 * Make the scheduling page of this business not available to external customers. Set the isPublished property to false, and publicUrl property to null.
 */
export function create(
  body: IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/unpublish']['body'],
  params?: IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/unpublish']['parameters']
): EndpointRequest<
  IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/unpublish']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/bookingBusinesses/{bookingBusiness-id}/unpublish',
    paramDefs: [{ name: 'bookingBusiness-id', in: 'path' }],
    params,
    body,
  };
}
