export * as decisions from './decisions';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}': Operation<
    '/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}',
    'delete'
  >;
  'GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages': Operation<
    '/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages',
    'get'
  >;
  'GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}': Operation<
    '/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}',
    'get'
  >;
  'PATCH /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}': Operation<
    '/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}',
    'patch'
  >;
  'POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages': Operation<
    '/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages',
    'post'
  >;
  'POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/stop': Operation<
    '/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/stop',
    'post'
  >;
}

/**
 * `DELETE /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}',
    paramDefs: {
      header: ['If-Match'],
      path: [
        'accessReviewScheduleDefinition-id',
        'accessReviewInstance-id',
        'accessReviewStage-id',
      ],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages`
 *
 * Retrieve the stages in a multi-stage access review instance.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages',
    paramDefs: {
      path: ['accessReviewScheduleDefinition-id', 'accessReviewInstance-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}`
 *
 * Retrieve the properties and relationships of an accessReviewStage object.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}',
    paramDefs: {
      path: [
        'accessReviewScheduleDefinition-id',
        'accessReviewInstance-id',
        'accessReviewStage-id',
      ],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}`
 *
 * Update the properties of an accessReviewStage object. Only the reviewers and fallbackReviewers properties can be updated. You can only add reviewers to the fallbackReviewers property but can&#x27;t remove existing fallbackReviewers. To update an accessReviewStage, its status must be NotStarted, Initializing, or InProgress.
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}',
    paramDefs: {
      path: [
        'accessReviewScheduleDefinition-id',
        'accessReviewInstance-id',
        'accessReviewStage-id',
      ],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages`
 *
 */
export function create(
  body: IEndpoints['POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages']['body'],
  params?: IEndpoints['POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages']['parameters']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages',
    paramDefs: {
      path: ['accessReviewScheduleDefinition-id', 'accessReviewInstance-id'],
    },
    params,
    body,
  };
}

export const stop = {
  /**
   * `POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/stop`
   *
   * Stop an access review stage that is inProgress. After the access review stage stops, the stage status will be Completed and the reviewers can no longer give input. If there are subsequent stages that depend on the completed stage, the next stage will be created.  The accessReviewInstanceDecisionItem objects will always reflect the last decisions recorded across all stages at that given time, regardless of the status of the stages.
   */
  create: function create(
    params?: IEndpoints['POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/stop']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/stop']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/stop',
      paramDefs: {
        path: [
          'accessReviewScheduleDefinition-id',
          'accessReviewInstance-id',
          'accessReviewStage-id',
        ],
      },
      params,
    };
  },
};
