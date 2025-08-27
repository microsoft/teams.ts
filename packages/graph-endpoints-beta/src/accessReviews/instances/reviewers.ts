import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers/{accessReviewReviewer-id}': Operation<
    '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers/{accessReviewReviewer-id}',
    'delete'
  >;
  'GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers': Operation<
    '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers',
    'get'
  >;
  'GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers/{accessReviewReviewer-id}': Operation<
    '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers/{accessReviewReviewer-id}',
    'get'
  >;
  'PATCH /accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers/{accessReviewReviewer-id}': Operation<
    '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers/{accessReviewReviewer-id}',
    'patch'
  >;
  'POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers': Operation<
    '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers',
    'post'
  >;
}

/**
 * `DELETE /accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers/{accessReviewReviewer-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers/{accessReviewReviewer-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers/{accessReviewReviewer-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers/{accessReviewReviewer-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'accessReview-id', in: 'path' },
      { name: 'accessReview-id1', in: 'path' },
      { name: 'accessReviewReviewer-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers`
 *
 * The collection of reviewers for an access review, if access review reviewerType is of type delegated.
 */
export function list(
  params?: IEndpoints['GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers']['parameters']
): EndpointRequest<
  IEndpoints['GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers',
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
 * `GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers/{accessReviewReviewer-id}`
 *
 * The collection of reviewers for an access review, if access review reviewerType is of type delegated.
 */
export function get(
  params?: IEndpoints['GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers/{accessReviewReviewer-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers/{accessReviewReviewer-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers/{accessReviewReviewer-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'accessReview-id', in: 'path' },
      { name: 'accessReview-id1', in: 'path' },
      { name: 'accessReviewReviewer-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers/{accessReviewReviewer-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers/{accessReviewReviewer-id}']['body'],
  params?: IEndpoints['PATCH /accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers/{accessReviewReviewer-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers/{accessReviewReviewer-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers/{accessReviewReviewer-id}',
    paramDefs: [
      { name: 'accessReview-id', in: 'path' },
      { name: 'accessReview-id1', in: 'path' },
      { name: 'accessReviewReviewer-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers`
 *
 */
export function create(
  body: IEndpoints['POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers']['body'],
  params?: IEndpoints['POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers']['parameters']
): EndpointRequest<
  IEndpoints['POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers',
    paramDefs: [
      { name: 'accessReview-id', in: 'path' },
      { name: 'accessReview-id1', in: 'path' },
    ],
    params,
    body,
  };
}
