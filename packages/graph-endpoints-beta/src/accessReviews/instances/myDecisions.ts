import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions/{accessReviewDecision-id}': Operation<
    '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions/{accessReviewDecision-id}',
    'delete'
  >;
  'GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions': Operation<
    '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions',
    'get'
  >;
  'GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions/{accessReviewDecision-id}': Operation<
    '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions/{accessReviewDecision-id}',
    'get'
  >;
  'PATCH /accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions/{accessReviewDecision-id}': Operation<
    '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions/{accessReviewDecision-id}',
    'patch'
  >;
  'POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions': Operation<
    '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions',
    'post'
  >;
}

/**
 * `DELETE /accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions/{accessReviewDecision-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions/{accessReviewDecision-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions/{accessReviewDecision-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions/{accessReviewDecision-id}',
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
 * `GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions`
 *
 * The collection of decisions for the caller, if the caller is a reviewer.
 */
export function list(
  params?: IEndpoints['GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions']['parameters']
): EndpointRequest<
  IEndpoints['GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions',
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
 * `GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions/{accessReviewDecision-id}`
 *
 * The collection of decisions for the caller, if the caller is a reviewer.
 */
export function get(
  params?: IEndpoints['GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions/{accessReviewDecision-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions/{accessReviewDecision-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions/{accessReviewDecision-id}',
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
 * `PATCH /accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions/{accessReviewDecision-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions/{accessReviewDecision-id}']['body'],
  params?: IEndpoints['PATCH /accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions/{accessReviewDecision-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions/{accessReviewDecision-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions/{accessReviewDecision-id}',
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
 * `POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions`
 *
 */
export function create(
  body: IEndpoints['POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions']['body'],
  params?: IEndpoints['POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions']['parameters']
): EndpointRequest<
  IEndpoints['POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions',
    paramDefs: [
      { name: 'accessReview-id', in: 'path' },
      { name: 'accessReview-id1', in: 'path' },
    ],
    params,
    body,
  };
}
