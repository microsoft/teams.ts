export * as instances from './instances';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}': Operation<
    '/identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}',
    'delete'
  >;
  'GET /identityGovernance/accessReviews/historyDefinitions': Operation<
    '/identityGovernance/accessReviews/historyDefinitions',
    'get'
  >;
  'GET /identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}': Operation<
    '/identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}',
    'get'
  >;
  'PATCH /identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}': Operation<
    '/identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}',
    'patch'
  >;
  'POST /identityGovernance/accessReviews/historyDefinitions': Operation<
    '/identityGovernance/accessReviews/historyDefinitions',
    'post'
  >;
}

/**
 * `DELETE /identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['accessReviewHistoryDefinition-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/accessReviews/historyDefinitions`
 *
 * Retrieve the accessReviewHistoryDefinition objects created in the last 30 days, including all nested properties.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/accessReviews/historyDefinitions']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/accessReviews/historyDefinitions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/accessReviews/historyDefinitions',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}`
 *
 * Retrieve an accessReviewHistoryDefinition object by its identifier. All of the properties of the access review history definition object are returned. If the definition is 30 days or older, a 404 Not Found error is returned.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}',
    paramDefs: {
      path: ['accessReviewHistoryDefinition-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}',
    paramDefs: {
      path: ['accessReviewHistoryDefinition-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/accessReviews/historyDefinitions`
 *
 * Create a new accessReviewHistoryDefinition object.
 */
export function create(
  body: IEndpoints['POST /identityGovernance/accessReviews/historyDefinitions']['body']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/accessReviews/historyDefinitions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identityGovernance/accessReviews/historyDefinitions',
    body,
  };
}
