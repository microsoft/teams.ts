import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/definition': Operation<
    '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/definition',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/definition`
 *
 * There&#x27;s exactly one accessReviewScheduleDefinition associated with each instance. It&#x27;s the parent schedule for the instance, where instances are created for each recurrence of a review definition and each group selected to review by the definition.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/definition']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/definition']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/definition',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'accessReviewInstance-id', in: 'path' },
      { name: 'accessReviewInstanceDecisionItem-id', in: 'path' },
    ],
    params,
  };
}
