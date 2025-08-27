import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/sendReminder': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/sendReminder',
    'post'
  >;
}

/**
 * `POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/sendReminder`
 *
 * Send a reminder to the reviewers of a currently active accessReviewInstance.
 */
export function create(
  body: IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/sendReminder']['body'],
  params?: IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/sendReminder']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/sendReminder']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/sendReminder',
    paramDefs: [
      { name: 'accessReviewInstance-id', in: 'path' },
      { name: 'accessReviewInstanceDecisionItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
