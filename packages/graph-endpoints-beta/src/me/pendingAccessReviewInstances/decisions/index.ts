export * as insights from './insights';
export * as instance from './instance';
export * as recordAllDecisions from './recordAllDecisions';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}',
    'delete'
  >;
  'GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions',
    'get'
  >;
  'GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}',
    'get'
  >;
  'PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}',
    'patch'
  >;
  'POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions',
    'post'
  >;
}

/**
 * `DELETE /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'accessReviewInstance-id', in: 'path' },
      { name: 'accessReviewInstanceDecisionItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions`
 *
 * Retrieve the accessReviewInstanceDecisionItem objects for a specific accessReviewInstance pending approval by the calling user. A list of zero or more accessReviewInstanceDecisionItem objects are returned, including all of their nested properties.
 */
export function list(
  params?: IEndpoints['GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions',
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
    ],
    params,
  };
}

/**
 * `GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}`
 *
 * Each user reviewed in an accessReviewInstance has a decision item representing if they were approved, denied, or not yet reviewed.
 */
export function get(
  params?: IEndpoints['GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'accessReviewInstance-id', in: 'path' },
      { name: 'accessReviewInstanceDecisionItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}']['body'],
  params?: IEndpoints['PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}',
    paramDefs: [
      { name: 'accessReviewInstance-id', in: 'path' },
      { name: 'accessReviewInstanceDecisionItem-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions`
 *
 */
export function create(
  body: IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions']['body'],
  params?: IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions',
    paramDefs: [{ name: 'accessReviewInstance-id', in: 'path' }],
    params,
    body,
  };
}
