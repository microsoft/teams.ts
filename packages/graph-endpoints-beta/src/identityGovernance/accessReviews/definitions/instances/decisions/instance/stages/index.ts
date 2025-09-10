export * as decisions from './decisions';

import type { EndpointRequest, Operation } from './../../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}': Operation<
    '/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}',
    'delete'
  >;
  'GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages': Operation<
    '/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages',
    'get'
  >;
  'GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}': Operation<
    '/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}',
    'get'
  >;
  'PATCH /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}': Operation<
    '/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}',
    'patch'
  >;
  'POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages': Operation<
    '/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages',
    'post'
  >;
  'POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/stop': Operation<
    '/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/stop',
    'post'
  >;
}

/**
 * `DELETE /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}',
    paramDefs: {
      header: ['If-Match'],
      path: [
        'accessReviewScheduleDefinition-id',
        'accessReviewInstance-id',
        'accessReviewInstanceDecisionItem-id',
        'accessReviewStage-id',
      ],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages`
 *
 * If the instance has multiple stages, this returns the collection of stages. A new stage will only be created when the previous stage ends. The existence, number, and settings of stages on a review instance are created based on the accessReviewStageSettings on the parent accessReviewScheduleDefinition.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages',
    paramDefs: {
      path: [
        'accessReviewScheduleDefinition-id',
        'accessReviewInstance-id',
        'accessReviewInstanceDecisionItem-id',
      ],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}`
 *
 * If the instance has multiple stages, this returns the collection of stages. A new stage will only be created when the previous stage ends. The existence, number, and settings of stages on a review instance are created based on the accessReviewStageSettings on the parent accessReviewScheduleDefinition.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}',
    paramDefs: {
      path: [
        'accessReviewScheduleDefinition-id',
        'accessReviewInstance-id',
        'accessReviewInstanceDecisionItem-id',
        'accessReviewStage-id',
      ],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}',
    paramDefs: {
      path: [
        'accessReviewScheduleDefinition-id',
        'accessReviewInstance-id',
        'accessReviewInstanceDecisionItem-id',
        'accessReviewStage-id',
      ],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages`
 *
 */
export function create(
  body: IEndpoints['POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages']['body'],
  params?: IEndpoints['POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages']['parameters']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages',
    paramDefs: {
      path: [
        'accessReviewScheduleDefinition-id',
        'accessReviewInstance-id',
        'accessReviewInstanceDecisionItem-id',
      ],
    },
    params,
    body,
  };
}

export const stop = {
  /**
   * `POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/stop`
   *
   * Stop an access review stage that is inProgress. After the access review stage stops, the stage status will be Completed and the reviewers can no longer give input. If there are subsequent stages that depend on the completed stage, the next stage will be created.  The accessReviewInstanceDecisionItem objects will always reflect the last decisions recorded across all stages at that given time, regardless of the status of the stages.
   */
  create: function create(
    params?: IEndpoints['POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/stop']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/stop']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/stop',
      paramDefs: {
        path: [
          'accessReviewScheduleDefinition-id',
          'accessReviewInstance-id',
          'accessReviewInstanceDecisionItem-id',
          'accessReviewStage-id',
        ],
      },
      params,
    };
  },
};
