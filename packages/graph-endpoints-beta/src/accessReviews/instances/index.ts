export * as applyDecisions from './applyDecisions';
export * as decisions from './decisions';
export * as myDecisions from './myDecisions';
export * as resetDecisions from './resetDecisions';
export * as reviewers from './reviewers';
export * as sendReminder from './sendReminder';
export * as stop from './stop';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /accessReviews/{accessReview-id}/instances/{accessReview-id1}': Operation<
    '/accessReviews/{accessReview-id}/instances/{accessReview-id1}',
    'delete'
  >;
  'GET /accessReviews/{accessReview-id}/instances': Operation<
    '/accessReviews/{accessReview-id}/instances',
    'get'
  >;
  'GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}': Operation<
    '/accessReviews/{accessReview-id}/instances/{accessReview-id1}',
    'get'
  >;
  'PATCH /accessReviews/{accessReview-id}/instances/{accessReview-id1}': Operation<
    '/accessReviews/{accessReview-id}/instances/{accessReview-id1}',
    'patch'
  >;
  'POST /accessReviews/{accessReview-id}/instances': Operation<
    '/accessReviews/{accessReview-id}/instances',
    'post'
  >;
}

/**
 * `DELETE /accessReviews/{accessReview-id}/instances/{accessReview-id1}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /accessReviews/{accessReview-id}/instances/{accessReview-id1}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /accessReviews/{accessReview-id}/instances/{accessReview-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/accessReviews/{accessReview-id}/instances/{accessReview-id1}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'accessReview-id', in: 'path' },
      { name: 'accessReview-id1', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /accessReviews/{accessReview-id}/instances`
 *
 * The collection of access reviews instances past, present, and future, if this object is a recurring access review.
 */
export function list(
  params?: IEndpoints['GET /accessReviews/{accessReview-id}/instances']['parameters']
): EndpointRequest<IEndpoints['GET /accessReviews/{accessReview-id}/instances']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/accessReviews/{accessReview-id}/instances',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'accessReview-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}`
 *
 * The collection of access reviews instances past, present, and future, if this object is a recurring access review.
 */
export function get(
  params?: IEndpoints['GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}']['parameters']
): EndpointRequest<
  IEndpoints['GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/accessReviews/{accessReview-id}/instances/{accessReview-id1}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'accessReview-id', in: 'path' },
      { name: 'accessReview-id1', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /accessReviews/{accessReview-id}/instances/{accessReview-id1}`
 *
 */
export function update(
  body: IEndpoints['PATCH /accessReviews/{accessReview-id}/instances/{accessReview-id1}']['body'],
  params?: IEndpoints['PATCH /accessReviews/{accessReview-id}/instances/{accessReview-id1}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /accessReviews/{accessReview-id}/instances/{accessReview-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/accessReviews/{accessReview-id}/instances/{accessReview-id1}',
    paramDefs: [
      { name: 'accessReview-id', in: 'path' },
      { name: 'accessReview-id1', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /accessReviews/{accessReview-id}/instances`
 *
 */
export function create(
  body: IEndpoints['POST /accessReviews/{accessReview-id}/instances']['body'],
  params?: IEndpoints['POST /accessReviews/{accessReview-id}/instances']['parameters']
): EndpointRequest<IEndpoints['POST /accessReviews/{accessReview-id}/instances']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/accessReviews/{accessReview-id}/instances',
    paramDefs: [{ name: 'accessReview-id', in: 'path' }],
    params,
    body,
  };
}
