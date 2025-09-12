export * as descriptors from './descriptors';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/labels/retentionLabels/{retentionLabel-id}': Operation<
    '/security/labels/retentionLabels/{retentionLabel-id}',
    'delete'
  >;
  'GET /security/labels/retentionLabels': Operation<'/security/labels/retentionLabels', 'get'>;
  'GET /security/labels/retentionLabels/{retentionLabel-id}': Operation<
    '/security/labels/retentionLabels/{retentionLabel-id}',
    'get'
  >;
  'PATCH /security/labels/retentionLabels/{retentionLabel-id}': Operation<
    '/security/labels/retentionLabels/{retentionLabel-id}',
    'patch'
  >;
  'POST /security/labels/retentionLabels': Operation<'/security/labels/retentionLabels', 'post'>;
  'GET /security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages': Operation<
    '/security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages',
    'get'
  >;
  'POST /security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages': Operation<
    '/security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages',
    'post'
  >;
  'GET /security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages/{dispositionReviewStage-stageNumber}': Operation<
    '/security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages/{dispositionReviewStage-stageNumber}',
    'get'
  >;
  'PATCH /security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages/{dispositionReviewStage-stageNumber}': Operation<
    '/security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages/{dispositionReviewStage-stageNumber}',
    'patch'
  >;
  'DELETE /security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages/{dispositionReviewStage-stageNumber}': Operation<
    '/security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages/{dispositionReviewStage-stageNumber}',
    'delete'
  >;
  'GET /security/labels/retentionLabels/{retentionLabel-id}/retentionEventType': Operation<
    '/security/labels/retentionLabels/{retentionLabel-id}/retentionEventType',
    'get'
  >;
}

/**
 * `DELETE /security/labels/retentionLabels/{retentionLabel-id}`
 *
 * Delete a retentionLabel object.
 */
export function del(
  params?: IEndpoints['DELETE /security/labels/retentionLabels/{retentionLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/labels/retentionLabels/{retentionLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/labels/retentionLabels/{retentionLabel-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['retentionLabel-id'],
    },
    params,
  };
}

/**
 * `GET /security/labels/retentionLabels`
 *
 * Get a list of the retentionLabel objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /security/labels/retentionLabels']['parameters']
): EndpointRequest<IEndpoints['GET /security/labels/retentionLabels']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/labels/retentionLabels',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /security/labels/retentionLabels/{retentionLabel-id}`
 *
 * Represents how customers can manage their data, whether and for how long to retain or delete it.
 */
export function get(
  params?: IEndpoints['GET /security/labels/retentionLabels/{retentionLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/labels/retentionLabels/{retentionLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/labels/retentionLabels/{retentionLabel-id}',
    paramDefs: {
      path: ['retentionLabel-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/labels/retentionLabels/{retentionLabel-id}`
 *
 * Update the properties of a retentionLabel object. To update a disposition review stage, include the actionAfterRetentionPeriod property in the request body with one of the possible values specified.
 */
export function update(
  body: IEndpoints['PATCH /security/labels/retentionLabels/{retentionLabel-id}']['body'],
  params?: IEndpoints['PATCH /security/labels/retentionLabels/{retentionLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/labels/retentionLabels/{retentionLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/labels/retentionLabels/{retentionLabel-id}',
    paramDefs: {
      path: ['retentionLabel-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /security/labels/retentionLabels`
 *
 * Create a new retentionLabel object. To create a disposition review stage, include the actionAfterRetentionPeriod property in the request body with one of the possible values specified.
 */
export function create(
  body: IEndpoints['POST /security/labels/retentionLabels']['body']
): EndpointRequest<IEndpoints['POST /security/labels/retentionLabels']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/labels/retentionLabels',
    body,
  };
}

export const dispositionReviewStages = {
  /**
   * `GET /security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages`
   *
   * When action at the end of retention is chosen as &#x27;dispositionReview&#x27;, dispositionReviewStages specifies a sequential set of stages with at least one reviewer in each stage.
   */
  list: function list(
    params?: IEndpoints['GET /security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['retentionLabel-id'],
      },
      params,
    };
  },
  /**
   * `POST /security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages`
   *
   */
  create: function create(
    body: IEndpoints['POST /security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages']['body'],
    params?: IEndpoints['POST /security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages',
      paramDefs: {
        path: ['retentionLabel-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages/{dispositionReviewStage-stageNumber}`
   *
   * When action at the end of retention is chosen as &#x27;dispositionReview&#x27;, dispositionReviewStages specifies a sequential set of stages with at least one reviewer in each stage.
   */
  get: function get(
    params?: IEndpoints['GET /security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages/{dispositionReviewStage-stageNumber}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages/{dispositionReviewStage-stageNumber}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages/{dispositionReviewStage-stageNumber}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['retentionLabel-id', 'dispositionReviewStage-stageNumber'],
      },
      params,
    };
  },
  /**
   * `PATCH /security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages/{dispositionReviewStage-stageNumber}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages/{dispositionReviewStage-stageNumber}']['body'],
    params?: IEndpoints['PATCH /security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages/{dispositionReviewStage-stageNumber}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages/{dispositionReviewStage-stageNumber}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages/{dispositionReviewStage-stageNumber}',
      paramDefs: {
        path: ['retentionLabel-id', 'dispositionReviewStage-stageNumber'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages/{dispositionReviewStage-stageNumber}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages/{dispositionReviewStage-stageNumber}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages/{dispositionReviewStage-stageNumber}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages/{dispositionReviewStage-stageNumber}',
      paramDefs: {
        header: ['If-Match'],
        path: ['retentionLabel-id', 'dispositionReviewStage-stageNumber'],
      },
      params,
    };
  },
};

export const retentionEventType = {
  /**
   * `GET /security/labels/retentionLabels/{retentionLabel-id}/retentionEventType`
   *
   * Represents the type associated with a retention event.
   */
  get: function get(
    params?: IEndpoints['GET /security/labels/retentionLabels/{retentionLabel-id}/retentionEventType']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/labels/retentionLabels/{retentionLabel-id}/retentionEventType']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/labels/retentionLabels/{retentionLabel-id}/retentionEventType',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['retentionLabel-id'],
      },
      params,
    };
  },
};
