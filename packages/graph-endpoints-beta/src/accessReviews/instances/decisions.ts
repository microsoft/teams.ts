import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions/{accessReviewDecision-id}': Operation<
    '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions/{accessReviewDecision-id}',
    'delete'
  >;
  'GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions': Operation<
    '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions',
    'get'
  >;
  'GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions/{accessReviewDecision-id}': Operation<
    '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions/{accessReviewDecision-id}',
    'get'
  >;
  'PATCH /accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions/{accessReviewDecision-id}': Operation<
    '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions/{accessReviewDecision-id}',
    'patch'
  >;
  'POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions': Operation<
    '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions',
    'post'
  >;
}

/**
 * `DELETE /accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions/{accessReviewDecision-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions/{accessReviewDecision-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions/{accessReviewDecision-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions/{accessReviewDecision-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'accessReview-id', in: 'path' },
      { name: 'accessReview-id1', in: 'path' },
      { name: 'accessReviewDecision-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions`
 *
 * The collection of decisions for this access review.
 */
export function list(
  params?: IEndpoints['GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions']['parameters']
): EndpointRequest<
  IEndpoints['GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions',
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
      { name: 'accessReview-id1', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions/{accessReviewDecision-id}`
 *
 * The collection of decisions for this access review.
 */
export function get(
  params?: IEndpoints['GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions/{accessReviewDecision-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions/{accessReviewDecision-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions/{accessReviewDecision-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'accessReview-id', in: 'path' },
      { name: 'accessReview-id1', in: 'path' },
      { name: 'accessReviewDecision-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions/{accessReviewDecision-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions/{accessReviewDecision-id}']['body'],
  params?: IEndpoints['PATCH /accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions/{accessReviewDecision-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions/{accessReviewDecision-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions/{accessReviewDecision-id}',
    paramDefs: [
      { name: 'accessReview-id', in: 'path' },
      { name: 'accessReview-id1', in: 'path' },
      { name: 'accessReviewDecision-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions`
 *
 */
export function create(
  body: IEndpoints['POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions']['body'],
  params?: IEndpoints['POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions']['parameters']
): EndpointRequest<
  IEndpoints['POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions',
    paramDefs: [
      { name: 'accessReview-id', in: 'path' },
      { name: 'accessReview-id1', in: 'path' },
    ],
    params,
    body,
  };
}
