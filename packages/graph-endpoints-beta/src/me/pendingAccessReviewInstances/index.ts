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
  'DELETE /me/pendingAccessReviewInstances/{accessReviewInstance-id}': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}',
    'delete'
  >;
  'GET /me/pendingAccessReviewInstances': Operation<'/me/pendingAccessReviewInstances', 'get'>;
  'GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}',
    'get'
  >;
  'PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}',
    'patch'
  >;
  'POST /me/pendingAccessReviewInstances': Operation<'/me/pendingAccessReviewInstances', 'post'>;
}

/**
 * `DELETE /me/pendingAccessReviewInstances/{accessReviewInstance-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/pendingAccessReviewInstances/{accessReviewInstance-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/pendingAccessReviewInstances/{accessReviewInstance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'accessReviewInstance-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/pendingAccessReviewInstances`
 *
 * Retrieve the accessReviewInstance objects pending approval by the calling user. A list of zero or more accessReviewInstance objects are returned, of which the calling user is an assigned reviewer.
 */
export function list(
  params?: IEndpoints['GET /me/pendingAccessReviewInstances']['parameters']
): EndpointRequest<IEndpoints['GET /me/pendingAccessReviewInstances']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/pendingAccessReviewInstances',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}`
 *
 * Navigation property to get a list of access reviews pending approval by the reviewer.
 */
export function get(
  params?: IEndpoints['GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'accessReviewInstance-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}']['body'],
  params?: IEndpoints['PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}',
    paramDefs: [{ name: 'accessReviewInstance-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/pendingAccessReviewInstances`
 *
 */
export function create(
  body: IEndpoints['POST /me/pendingAccessReviewInstances']['body'],
  params?: IEndpoints['POST /me/pendingAccessReviewInstances']['parameters']
): EndpointRequest<IEndpoints['POST /me/pendingAccessReviewInstances']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/pendingAccessReviewInstances',
    paramDefs: [],
    params,
    body,
  };
}
