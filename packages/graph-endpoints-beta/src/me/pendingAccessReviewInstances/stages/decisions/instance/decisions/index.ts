export * as insights from './insights';
export * as recordAllDecisions from './recordAllDecisions';

import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}',
    'delete'
  >;
  'GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions',
    'get'
  >;
  'GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}',
    'get'
  >;
  'PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}',
    'patch'
  >;
  'POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions',
    'post'
  >;
}

/**
 * `DELETE /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'accessReviewInstance-id', in: 'path' },
      { name: 'accessReviewStage-id', in: 'path' },
      { name: 'accessReviewInstanceDecisionItem-id', in: 'path' },
      { name: 'accessReviewInstanceDecisionItem-id1', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions`
 *
 * Each user reviewed in an accessReviewInstance has a decision item representing if they were approved, denied, or not yet reviewed.
 */
export function list(
  params?: IEndpoints['GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions',
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
      { name: 'accessReviewStage-id', in: 'path' },
      { name: 'accessReviewInstanceDecisionItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}`
 *
 * Each user reviewed in an accessReviewInstance has a decision item representing if they were approved, denied, or not yet reviewed.
 */
export function get(
  params?: IEndpoints['GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'accessReviewInstance-id', in: 'path' },
      { name: 'accessReviewStage-id', in: 'path' },
      { name: 'accessReviewInstanceDecisionItem-id', in: 'path' },
      { name: 'accessReviewInstanceDecisionItem-id1', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}']['body'],
  params?: IEndpoints['PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}',
    paramDefs: [
      { name: 'accessReviewInstance-id', in: 'path' },
      { name: 'accessReviewStage-id', in: 'path' },
      { name: 'accessReviewInstanceDecisionItem-id', in: 'path' },
      { name: 'accessReviewInstanceDecisionItem-id1', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions`
 *
 */
export function create(
  body: IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions']['body'],
  params?: IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions',
    paramDefs: [
      { name: 'accessReviewInstance-id', in: 'path' },
      { name: 'accessReviewStage-id', in: 'path' },
      { name: 'accessReviewInstanceDecisionItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
