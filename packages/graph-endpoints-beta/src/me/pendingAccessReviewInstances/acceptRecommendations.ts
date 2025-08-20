import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/acceptRecommendations': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/acceptRecommendations',
    'post'
  >;
}

/**
 * `POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/acceptRecommendations`
 *
 * Allows the acceptance of recommendations on all accessReviewInstanceDecisionItem objects that haven&#x27;t been reviewed for an accessReviewInstance object for which the calling user is a reviewer. Recommendations are generated if recommendationsEnabled is true on the accessReviewScheduleDefinition object. If there isn&#x27;t a recommendation on an accessReviewInstanceDecisionItem object no decision will be recorded.
 */
export function create(
  body: IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/acceptRecommendations']['body'],
  params?: IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/acceptRecommendations']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/acceptRecommendations']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/acceptRecommendations',
    paramDefs: [{ name: 'accessReviewInstance-id', in: 'path' }],
    params,
    body,
  };
}
