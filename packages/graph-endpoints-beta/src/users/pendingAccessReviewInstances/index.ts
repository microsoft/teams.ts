export * as acceptRecommendations from './acceptRecommendations';
export * as applyDecisions from './applyDecisions';
export * as batchRecordDecisions from './batchRecordDecisions';
export * as contactedReviewers from './contactedReviewers';
export * as decisions from './decisions';
export * as definition from './definition';
export * as resetDecisions from './resetDecisions';
export * as sendReminder from './sendReminder';
export * as stages from './stages';
export * as stop from './stop';
export * as stopApplyDecisions from './stopApplyDecisions';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}': Operation<
    '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}',
    'delete'
  >;
  'GET /users/{user-id}/pendingAccessReviewInstances': Operation<
    '/users/{user-id}/pendingAccessReviewInstances',
    'get'
  >;
  'GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}': Operation<
    '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}',
    'get'
  >;
  'PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}': Operation<
    '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}',
    'patch'
  >;
  'POST /users/{user-id}/pendingAccessReviewInstances': Operation<
    '/users/{user-id}/pendingAccessReviewInstances',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'accessReviewInstance-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/pendingAccessReviewInstances`
 *
 * Navigation property to get a list of access reviews pending approval by the reviewer.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/pendingAccessReviewInstances']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/pendingAccessReviewInstances']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/pendingAccessReviewInstances',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}`
 *
 * Navigation property to get a list of access reviews pending approval by the reviewer.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'accessReviewInstance-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'accessReviewInstance-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/pendingAccessReviewInstances`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/pendingAccessReviewInstances']['body'],
  params?: IEndpoints['POST /users/{user-id}/pendingAccessReviewInstances']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/pendingAccessReviewInstances']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/pendingAccessReviewInstances',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
