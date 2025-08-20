import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /accessReviews/{accessReview-id}/resetDecisions': Operation<
    '/accessReviews/{accessReview-id}/resetDecisions',
    'post'
  >;
}

/**
 * `POST /accessReviews/{accessReview-id}/resetDecisions`
 *
 * In the Microsoft Entra access reviews feature, reset the decisions of a currently active accessReview.  The target object can be either a one-time access review, or an instance of a recurring access review.  Previous decisions are no longer recorded, but reviewers can continue to update decisions.
 */
export function create(
  body: IEndpoints['POST /accessReviews/{accessReview-id}/resetDecisions']['body'],
  params?: IEndpoints['POST /accessReviews/{accessReview-id}/resetDecisions']['parameters']
): EndpointRequest<IEndpoints['POST /accessReviews/{accessReview-id}/resetDecisions']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/accessReviews/{accessReview-id}/resetDecisions',
    paramDefs: [{ name: 'accessReview-id', in: 'path' }],
    params,
    body,
  };
}
