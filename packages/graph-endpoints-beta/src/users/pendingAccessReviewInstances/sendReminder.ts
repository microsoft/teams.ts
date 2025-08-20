import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/sendReminder': Operation<
    '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/sendReminder',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/sendReminder`
 *
 * Send a reminder to the reviewers of a currently active accessReviewInstance.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/sendReminder']['body'],
  params?: IEndpoints['POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/sendReminder']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/sendReminder']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/sendReminder',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'accessReviewInstance-id', in: 'path' },
    ],
    params,
    body,
  };
}
