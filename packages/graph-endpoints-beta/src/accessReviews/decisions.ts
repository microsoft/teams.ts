import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /accessReviews/{accessReview-id}/decisions/{accessReviewDecision-id}': Operation<
    '/accessReviews/{accessReview-id}/decisions/{accessReviewDecision-id}',
    'delete'
  >;
  'GET /accessReviews/{accessReview-id}/decisions': Operation<
    '/accessReviews/{accessReview-id}/decisions',
    'get'
  >;
  'GET /accessReviews/{accessReview-id}/decisions/{accessReviewDecision-id}': Operation<
    '/accessReviews/{accessReview-id}/decisions/{accessReviewDecision-id}',
    'get'
  >;
  'PATCH /accessReviews/{accessReview-id}/decisions/{accessReviewDecision-id}': Operation<
    '/accessReviews/{accessReview-id}/decisions/{accessReviewDecision-id}',
    'patch'
  >;
  'POST /accessReviews/{accessReview-id}/decisions': Operation<
    '/accessReviews/{accessReview-id}/decisions',
    'post'
  >;
}

/**
 * `DELETE /accessReviews/{accessReview-id}/decisions/{accessReviewDecision-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /accessReviews/{accessReview-id}/decisions/{accessReviewDecision-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /accessReviews/{accessReview-id}/decisions/{accessReviewDecision-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/accessReviews/{accessReview-id}/decisions/{accessReviewDecision-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'accessReview-id', in: 'path' },
      { name: 'accessReviewDecision-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /accessReviews/{accessReview-id}/decisions`
 *
 * In the Microsoft Entra access reviews feature, retrieve the decisions of an accessReview object. Note that a recurring access review will not have a decisions relationship.  Instead, the caller must navigate the instance relationship to find an accessReview object for a current or past instance of the access review.
 */
export function list(
  params?: IEndpoints['GET /accessReviews/{accessReview-id}/decisions']['parameters']
): EndpointRequest<IEndpoints['GET /accessReviews/{accessReview-id}/decisions']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/accessReviews/{accessReview-id}/decisions',
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
 * `GET /accessReviews/{accessReview-id}/decisions/{accessReviewDecision-id}`
 *
 * The collection of decisions for this access review.
 */
export function get(
  params?: IEndpoints['GET /accessReviews/{accessReview-id}/decisions/{accessReviewDecision-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /accessReviews/{accessReview-id}/decisions/{accessReviewDecision-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/accessReviews/{accessReview-id}/decisions/{accessReviewDecision-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'accessReview-id', in: 'path' },
      { name: 'accessReviewDecision-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /accessReviews/{accessReview-id}/decisions/{accessReviewDecision-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /accessReviews/{accessReview-id}/decisions/{accessReviewDecision-id}']['body'],
  params?: IEndpoints['PATCH /accessReviews/{accessReview-id}/decisions/{accessReviewDecision-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /accessReviews/{accessReview-id}/decisions/{accessReviewDecision-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/accessReviews/{accessReview-id}/decisions/{accessReviewDecision-id}',
    paramDefs: [
      { name: 'accessReview-id', in: 'path' },
      { name: 'accessReviewDecision-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /accessReviews/{accessReview-id}/decisions`
 *
 */
export function create(
  body: IEndpoints['POST /accessReviews/{accessReview-id}/decisions']['body'],
  params?: IEndpoints['POST /accessReviews/{accessReview-id}/decisions']['parameters']
): EndpointRequest<IEndpoints['POST /accessReviews/{accessReview-id}/decisions']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/accessReviews/{accessReview-id}/decisions',
    paramDefs: [{ name: 'accessReview-id', in: 'path' }],
    params,
    body,
  };
}
