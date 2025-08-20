import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/sendReminder': Operation<
    '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/sendReminder',
    'post'
  >;
}

/**
 * `POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/sendReminder`
 *
 * In the Microsoft Entra access reviews feature, send a reminder to the reviewers of a currently active accessReview.  The target object can be either a one-time access review, or an instance of a recurring access review.
 */
export function create(
  body: IEndpoints['POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/sendReminder']['body'],
  params?: IEndpoints['POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/sendReminder']['parameters']
): EndpointRequest<
  IEndpoints['POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/sendReminder']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/sendReminder',
    paramDefs: [
      { name: 'accessReview-id', in: 'path' },
      { name: 'accessReview-id1', in: 'path' },
    ],
    params,
    body,
  };
}
