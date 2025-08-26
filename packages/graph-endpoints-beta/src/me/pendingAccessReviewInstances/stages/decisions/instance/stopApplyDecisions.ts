import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stopApplyDecisions': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stopApplyDecisions',
    'post'
  >;
}

/**
 * `POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stopApplyDecisions`
 *
 */
export function create(
  body: IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stopApplyDecisions']['body'],
  params?: IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stopApplyDecisions']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stopApplyDecisions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stopApplyDecisions',
    paramDefs: [
      { name: 'accessReviewInstance-id', in: 'path' },
      { name: 'accessReviewStage-id', in: 'path' },
      { name: 'accessReviewInstanceDecisionItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
