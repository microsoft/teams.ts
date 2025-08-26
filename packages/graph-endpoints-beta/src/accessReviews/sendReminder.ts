import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /accessReviews/{accessReview-id}/sendReminder': Operation<
    '/accessReviews/{accessReview-id}/sendReminder',
    'post'
  >;
}

/**
 * `POST /accessReviews/{accessReview-id}/sendReminder`
 *
 * In the Microsoft Entra access reviews feature, send a reminder to the reviewers of a currently active accessReview.  The target object can be either a one-time access review, or an instance of a recurring access review.
 */
export function create(
  body: IEndpoints['POST /accessReviews/{accessReview-id}/sendReminder']['body'],
  params?: IEndpoints['POST /accessReviews/{accessReview-id}/sendReminder']['parameters']
): EndpointRequest<IEndpoints['POST /accessReviews/{accessReview-id}/sendReminder']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/accessReviews/{accessReview-id}/sendReminder',
    paramDefs: [{ name: 'accessReview-id', in: 'path' }],
    params,
    body,
  };
}
