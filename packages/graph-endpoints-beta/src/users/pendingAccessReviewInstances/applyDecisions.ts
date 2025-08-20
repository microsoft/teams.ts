import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/applyDecisions': Operation<
    '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/applyDecisions',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/applyDecisions`
 *
 * Apply review decisions on an accessReviewInstance if the decisions were not applied automatically because the autoApplyDecisionsEnabled property is false in the review&#x27;s accessReviewScheduleSettings. The status of the accessReviewInstance must be Completed to call this method.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/applyDecisions']['body'],
  params?: IEndpoints['POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/applyDecisions']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/applyDecisions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/applyDecisions',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'accessReviewInstance-id', in: 'path' },
    ],
    params,
    body,
  };
}
