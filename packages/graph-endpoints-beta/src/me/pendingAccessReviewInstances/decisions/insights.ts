import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}',
    'delete'
  >;
  'GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights',
    'get'
  >;
  'GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}',
    'get'
  >;
  'PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}',
    'patch'
  >;
  'POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights',
    'post'
  >;
}

/**
 * `DELETE /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'accessReviewInstance-id', in: 'path' },
      { name: 'accessReviewInstanceDecisionItem-id', in: 'path' },
      { name: 'governanceInsight-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights`
 *
 * Insights are recommendations to reviewers on whether to approve or deny a decision. There can be multiple insights associated with an accessReviewInstanceDecisionItem.
 */
export function list(
  params?: IEndpoints['GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'accessReviewInstance-id', in: 'path' },
      { name: 'accessReviewInstanceDecisionItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}`
 *
 * Insights are recommendations to reviewers on whether to approve or deny a decision. There can be multiple insights associated with an accessReviewInstanceDecisionItem.
 */
export function get(
  params?: IEndpoints['GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'accessReviewInstance-id', in: 'path' },
      { name: 'accessReviewInstanceDecisionItem-id', in: 'path' },
      { name: 'governanceInsight-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}']['body'],
  params?: IEndpoints['PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}',
    paramDefs: [
      { name: 'accessReviewInstance-id', in: 'path' },
      { name: 'accessReviewInstanceDecisionItem-id', in: 'path' },
      { name: 'governanceInsight-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights`
 *
 */
export function create(
  body: IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights']['body'],
  params?: IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights',
    paramDefs: [
      { name: 'accessReviewInstance-id', in: 'path' },
      { name: 'accessReviewInstanceDecisionItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
