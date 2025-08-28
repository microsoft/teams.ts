import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /accessReviews/{accessReview-id}/reviewers/{accessReviewReviewer-id}': Operation<
    '/accessReviews/{accessReview-id}/reviewers/{accessReviewReviewer-id}',
    'delete'
  >;
  'GET /accessReviews/{accessReview-id}/reviewers': Operation<
    '/accessReviews/{accessReview-id}/reviewers',
    'get'
  >;
  'GET /accessReviews/{accessReview-id}/reviewers/{accessReviewReviewer-id}': Operation<
    '/accessReviews/{accessReview-id}/reviewers/{accessReviewReviewer-id}',
    'get'
  >;
  'PATCH /accessReviews/{accessReview-id}/reviewers/{accessReviewReviewer-id}': Operation<
    '/accessReviews/{accessReview-id}/reviewers/{accessReviewReviewer-id}',
    'patch'
  >;
  'POST /accessReviews/{accessReview-id}/reviewers': Operation<
    '/accessReviews/{accessReview-id}/reviewers',
    'post'
  >;
}

/**
 * `DELETE /accessReviews/{accessReview-id}/reviewers/{accessReviewReviewer-id}`
 *
 * In the Microsoft Entra access reviews feature, update an existing accessReview object to remove a user as a reviewer.  This operation is only permitted for an access review that isn&#x27;t yet completed, and only for an access review where the reviewers are explicitly specified. This operation isn&#x27;t permitted for an access review in which users review their own access, and not intended for an access review in which the group owners are assigned as the reviewers.
 */
export function del(
  params?: IEndpoints['DELETE /accessReviews/{accessReview-id}/reviewers/{accessReviewReviewer-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /accessReviews/{accessReview-id}/reviewers/{accessReviewReviewer-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/accessReviews/{accessReview-id}/reviewers/{accessReviewReviewer-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'accessReview-id', in: 'path' },
      { name: 'accessReviewReviewer-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /accessReviews/{accessReview-id}/reviewers`
 *
 * In the Microsoft Entra access reviews feature, retrieve the reviewers of an accessReview object.
 */
export function list(
  params?: IEndpoints['GET /accessReviews/{accessReview-id}/reviewers']['parameters']
): EndpointRequest<IEndpoints['GET /accessReviews/{accessReview-id}/reviewers']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/accessReviews/{accessReview-id}/reviewers',
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
 * `GET /accessReviews/{accessReview-id}/reviewers/{accessReviewReviewer-id}`
 *
 * The collection of reviewers for an access review, if access review reviewerType is of type delegated.
 */
export function get(
  params?: IEndpoints['GET /accessReviews/{accessReview-id}/reviewers/{accessReviewReviewer-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /accessReviews/{accessReview-id}/reviewers/{accessReviewReviewer-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/accessReviews/{accessReview-id}/reviewers/{accessReviewReviewer-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'accessReview-id', in: 'path' },
      { name: 'accessReviewReviewer-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /accessReviews/{accessReview-id}/reviewers/{accessReviewReviewer-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /accessReviews/{accessReview-id}/reviewers/{accessReviewReviewer-id}']['body'],
  params?: IEndpoints['PATCH /accessReviews/{accessReview-id}/reviewers/{accessReviewReviewer-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /accessReviews/{accessReview-id}/reviewers/{accessReviewReviewer-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/accessReviews/{accessReview-id}/reviewers/{accessReviewReviewer-id}',
    paramDefs: [
      { name: 'accessReview-id', in: 'path' },
      { name: 'accessReviewReviewer-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /accessReviews/{accessReview-id}/reviewers`
 *
 * In the Microsoft Entra access reviews feature, update an existing accessReview object to add another user as a reviewer.  This operation is only permitted for an access review that isn&#x27;t yet completed, and only for an access review where the reviewers are explicitly specified. This operation isn&#x27;t permitted for an access review in which users review their own access, and not intended for an access review in which the group owners are assigned as the reviewers.
 */
export function create(
  body: IEndpoints['POST /accessReviews/{accessReview-id}/reviewers']['body'],
  params?: IEndpoints['POST /accessReviews/{accessReview-id}/reviewers']['parameters']
): EndpointRequest<IEndpoints['POST /accessReviews/{accessReview-id}/reviewers']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/accessReviews/{accessReview-id}/reviewers',
    paramDefs: [{ name: 'accessReview-id', in: 'path' }],
    params,
    body,
  };
}
