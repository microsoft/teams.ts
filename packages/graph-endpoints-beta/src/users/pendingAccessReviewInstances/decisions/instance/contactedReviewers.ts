import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}': Operation<
    '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}',
    'delete'
  >;
  'GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers': Operation<
    '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers',
    'get'
  >;
  'GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}': Operation<
    '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}',
    'get'
  >;
  'PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}': Operation<
    '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}',
    'patch'
  >;
  'POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers': Operation<
    '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'accessReviewInstance-id', in: 'path' },
      { name: 'accessReviewInstanceDecisionItem-id', in: 'path' },
      { name: 'accessReviewReviewer-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers`
 *
 * Returns the collection of reviewers who were contacted to complete this review. While the reviewers and fallbackReviewers properties of the accessReviewScheduleDefinition might specify group owners or managers as reviewers, contactedReviewers returns their individual identities. Supports $select. Read-only.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers',
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
      { name: 'accessReviewInstance-id', in: 'path' },
      { name: 'accessReviewInstanceDecisionItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}`
 *
 * Returns the collection of reviewers who were contacted to complete this review. While the reviewers and fallbackReviewers properties of the accessReviewScheduleDefinition might specify group owners or managers as reviewers, contactedReviewers returns their individual identities. Supports $select. Read-only.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'accessReviewInstance-id', in: 'path' },
      { name: 'accessReviewInstanceDecisionItem-id', in: 'path' },
      { name: 'accessReviewReviewer-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'accessReviewInstance-id', in: 'path' },
      { name: 'accessReviewInstanceDecisionItem-id', in: 'path' },
      { name: 'accessReviewReviewer-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers']['body'],
  params?: IEndpoints['POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'accessReviewInstance-id', in: 'path' },
      { name: 'accessReviewInstanceDecisionItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
