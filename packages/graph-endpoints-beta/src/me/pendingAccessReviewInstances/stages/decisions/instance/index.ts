export * as acceptRecommendations from './acceptRecommendations';
export * as applyDecisions from './applyDecisions';
export * as batchRecordDecisions from './batchRecordDecisions';
export * as contactedReviewers from './contactedReviewers';
export * as decisions from './decisions';
export * as definition from './definition';
export * as resetDecisions from './resetDecisions';
export * as sendReminder from './sendReminder';
export * as stop from './stop';
export * as stopApplyDecisions from './stopApplyDecisions';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance',
    'delete'
  >;
  'GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance',
    'get'
  >;
  'PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance',
    'patch'
  >;
}

/**
 * `DELETE /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'accessReviewInstance-id', in: 'path' },
      { name: 'accessReviewStage-id', in: 'path' },
      { name: 'accessReviewInstanceDecisionItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance`
 *
 * There&#x27;s exactly one accessReviewInstance associated with each decision. The instance is the parent of the decision item, representing the recurrence of the access review the decision is made on.
 */
export function get(
  params?: IEndpoints['GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'accessReviewInstance-id', in: 'path' },
      { name: 'accessReviewStage-id', in: 'path' },
      { name: 'accessReviewInstanceDecisionItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance']['body'],
  params?: IEndpoints['PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance',
    paramDefs: [
      { name: 'accessReviewInstance-id', in: 'path' },
      { name: 'accessReviewStage-id', in: 'path' },
      { name: 'accessReviewInstanceDecisionItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
