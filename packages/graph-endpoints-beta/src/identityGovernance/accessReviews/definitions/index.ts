export * as instances from './instances';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}': Operation<
    '/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}',
    'delete'
  >;
  'GET /identityGovernance/accessReviews/definitions': Operation<
    '/identityGovernance/accessReviews/definitions',
    'get'
  >;
  'GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}': Operation<
    '/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}',
    'get'
  >;
  'POST /identityGovernance/accessReviews/definitions': Operation<
    '/identityGovernance/accessReviews/definitions',
    'post'
  >;
  'PUT /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}': Operation<
    '/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}',
    'put'
  >;
  'POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/stop': Operation<
    '/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/stop',
    'post'
  >;
}

/**
 * `DELETE /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}`
 *
 * Delete an accessReviewScheduleDefinition object.
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['accessReviewScheduleDefinition-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/accessReviews/definitions`
 *
 * Retrieve the accessReviewScheduleDefinition objects. A list of zero or more accessReviewScheduleDefinition objects are returned, including all of their nested properties, for each access review series created. This does not include the associated accessReviewInstance objects.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/accessReviews/definitions']['parameters']
): EndpointRequest<IEndpoints['GET /identityGovernance/accessReviews/definitions']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/accessReviews/definitions',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}`
 *
 * Retrieve an accessReviewScheduleDefinition object by ID. This returns all properties of the scheduled access review series except for the associated accessReviewInstances. Each accessReviewScheduleDefinition has at least one instance. An instance represents a review for a specific resource (such as a particular group&#x27;s members), during one occurrence (for example, March 2021) of a recurring review. To retrieve the instances of the access review series, use the list accessReviewInstance API.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}',
    paramDefs: {
      path: ['accessReviewScheduleDefinition-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `POST /identityGovernance/accessReviews/definitions`
 *
 * Create a new accessReviewScheduleDefinition object.
 */
export function create(
  body: IEndpoints['POST /identityGovernance/accessReviews/definitions']['body']
): EndpointRequest<IEndpoints['POST /identityGovernance/accessReviews/definitions']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identityGovernance/accessReviews/definitions',
    body,
  };
}

/**
 * `PUT /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}`
 *
 * Update an existing accessReviewScheduleDefinition object to change one or more of its properties.
 */
export function set(
  body: IEndpoints['PUT /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}']['body'],
  params?: IEndpoints['PUT /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['PUT /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}',
    paramDefs: {
      path: ['accessReviewScheduleDefinition-id'],
    },
    params,
    body,
  };
}

export const stop = {
  /**
   * `POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/stop`
   *
   */
  create: function create(
    params?: IEndpoints['POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/stop']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/stop']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/stop',
      paramDefs: {
        path: ['accessReviewScheduleDefinition-id'],
      },
      params,
    };
  },
};
