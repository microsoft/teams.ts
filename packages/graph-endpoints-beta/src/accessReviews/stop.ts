import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /accessReviews/{accessReview-id}/stop': Operation<
    '/accessReviews/{accessReview-id}/stop',
    'post'
  >;
}

/**
 * `POST /accessReviews/{accessReview-id}/stop`
 *
 * In the Microsoft Entra access reviews feature, stop a currently active accessReview.  The target object can be either a one-time access review, or an instance of a recurring access review.  (To prevent a recurring access review from starting future instances, update it to change its scheduled end date).  After the access review stops, reviewers can no longer give input, and the access review decisions can be applied.
 */
export function create(
  body: IEndpoints['POST /accessReviews/{accessReview-id}/stop']['body'],
  params?: IEndpoints['POST /accessReviews/{accessReview-id}/stop']['parameters']
): EndpointRequest<IEndpoints['POST /accessReviews/{accessReview-id}/stop']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/accessReviews/{accessReview-id}/stop',
    paramDefs: [{ name: 'accessReview-id', in: 'path' }],
    params,
    body,
  };
}
