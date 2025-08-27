import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/cloudPCs/{cloudPC-id}/setReviewStatus': Operation<
    '/me/cloudPCs/{cloudPC-id}/setReviewStatus',
    'post'
  >;
}

/**
 * `POST /me/cloudPCs/{cloudPC-id}/setReviewStatus`
 *
 * Set the review status of a specific Cloud PC device using the Cloud PC ID. Use this API to set the review status of a Cloud PC to in review if you consider a Cloud PC suspicious. After the review is completed, use this API again to set the Cloud PC back to a normal state.
 */
export function create(
  body: IEndpoints['POST /me/cloudPCs/{cloudPC-id}/setReviewStatus']['body'],
  params?: IEndpoints['POST /me/cloudPCs/{cloudPC-id}/setReviewStatus']['parameters']
): EndpointRequest<IEndpoints['POST /me/cloudPCs/{cloudPC-id}/setReviewStatus']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/cloudPCs/{cloudPC-id}/setReviewStatus',
    paramDefs: [{ name: 'cloudPC-id', in: 'path' }],
    params,
    body,
  };
}
