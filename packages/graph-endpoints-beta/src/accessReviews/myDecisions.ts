import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /accessReviews/{accessReview-id}/myDecisions/{accessReviewDecision-id}': Operation<
    '/accessReviews/{accessReview-id}/myDecisions/{accessReviewDecision-id}',
    'delete'
  >;
  'GET /accessReviews/{accessReview-id}/myDecisions': Operation<
    '/accessReviews/{accessReview-id}/myDecisions',
    'get'
  >;
  'GET /accessReviews/{accessReview-id}/myDecisions/{accessReviewDecision-id}': Operation<
    '/accessReviews/{accessReview-id}/myDecisions/{accessReviewDecision-id}',
    'get'
  >;
  'PATCH /accessReviews/{accessReview-id}/myDecisions/{accessReviewDecision-id}': Operation<
    '/accessReviews/{accessReview-id}/myDecisions/{accessReviewDecision-id}',
    'patch'
  >;
  'POST /accessReviews/{accessReview-id}/myDecisions': Operation<
    '/accessReviews/{accessReview-id}/myDecisions',
    'post'
  >;
}

/**
 * `DELETE /accessReviews/{accessReview-id}/myDecisions/{accessReviewDecision-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /accessReviews/{accessReview-id}/myDecisions/{accessReviewDecision-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /accessReviews/{accessReview-id}/myDecisions/{accessReviewDecision-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/accessReviews/{accessReview-id}/myDecisions/{accessReviewDecision-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'accessReview-id', in: 'path' },
      { name: 'accessReviewDecision-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /accessReviews/{accessReview-id}/myDecisions`
 *
 * In the Microsoft Entra access reviews feature, retrieve the decisions of an accessReview object for the calling user as reviewer.
 */
export function list(
  params?: IEndpoints['GET /accessReviews/{accessReview-id}/myDecisions']['parameters']
): EndpointRequest<IEndpoints['GET /accessReviews/{accessReview-id}/myDecisions']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/accessReviews/{accessReview-id}/myDecisions',
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
 * `GET /accessReviews/{accessReview-id}/myDecisions/{accessReviewDecision-id}`
 *
 * The collection of decisions for the caller, if the caller is a reviewer.
 */
export function get(
  params?: IEndpoints['GET /accessReviews/{accessReview-id}/myDecisions/{accessReviewDecision-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /accessReviews/{accessReview-id}/myDecisions/{accessReviewDecision-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/accessReviews/{accessReview-id}/myDecisions/{accessReviewDecision-id}',
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
 * `PATCH /accessReviews/{accessReview-id}/myDecisions/{accessReviewDecision-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /accessReviews/{accessReview-id}/myDecisions/{accessReviewDecision-id}']['body'],
  params?: IEndpoints['PATCH /accessReviews/{accessReview-id}/myDecisions/{accessReviewDecision-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /accessReviews/{accessReview-id}/myDecisions/{accessReviewDecision-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/accessReviews/{accessReview-id}/myDecisions/{accessReviewDecision-id}',
    paramDefs: [
      { name: 'accessReview-id', in: 'path' },
      { name: 'accessReviewDecision-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /accessReviews/{accessReview-id}/myDecisions`
 *
 */
export function create(
  body: IEndpoints['POST /accessReviews/{accessReview-id}/myDecisions']['body'],
  params?: IEndpoints['POST /accessReviews/{accessReview-id}/myDecisions']['parameters']
): EndpointRequest<IEndpoints['POST /accessReviews/{accessReview-id}/myDecisions']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/accessReviews/{accessReview-id}/myDecisions',
    paramDefs: [{ name: 'accessReview-id', in: 'path' }],
    params,
    body,
  };
}
