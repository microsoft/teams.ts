import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/recordAllDecisions': Operation<
    '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/recordAllDecisions',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/recordAllDecisions`
 *
 * As a reviewer of an access review, record a decision for an accessReviewInstanceDecisionItem that is assigned to you and that matches the principal or resource IDs specified. If no IDs are specified, the decisions will apply to every accessReviewInstanceDecisionItem for which you are the reviewer.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/recordAllDecisions']['body'],
  params?: IEndpoints['POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/recordAllDecisions']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/recordAllDecisions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/recordAllDecisions',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'accessReviewInstance-id', in: 'path' },
      { name: 'accessReviewStage-id', in: 'path' },
      { name: 'accessReviewInstanceDecisionItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
