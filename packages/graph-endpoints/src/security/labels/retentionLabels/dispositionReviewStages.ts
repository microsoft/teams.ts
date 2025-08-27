import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages/{dispositionReviewStage-stageNumber}': Operation<
    '/security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages/{dispositionReviewStage-stageNumber}',
    'delete'
  >;
  'GET /security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages': Operation<
    '/security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages',
    'get'
  >;
  'GET /security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages/{dispositionReviewStage-stageNumber}': Operation<
    '/security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages/{dispositionReviewStage-stageNumber}',
    'get'
  >;
  'PATCH /security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages/{dispositionReviewStage-stageNumber}': Operation<
    '/security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages/{dispositionReviewStage-stageNumber}',
    'patch'
  >;
  'POST /security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages': Operation<
    '/security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages',
    'post'
  >;
}

/**
 * `DELETE /security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages/{dispositionReviewStage-stageNumber}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages/{dispositionReviewStage-stageNumber}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages/{dispositionReviewStage-stageNumber}']['response']
> {
  return {
    method: 'delete',
    path: '/security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages/{dispositionReviewStage-stageNumber}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'retentionLabel-id', in: 'path' },
      { name: 'dispositionReviewStage-stageNumber', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages`
 *
 * When action at the end of retention is chosen as &#x27;dispositionReview&#x27;, dispositionReviewStages specifies a sequential set of stages with at least one reviewer in each stage.
 */
export function list(
  params?: IEndpoints['GET /security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages']['response']
> {
  return {
    method: 'get',
    path: '/security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'retentionLabel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages/{dispositionReviewStage-stageNumber}`
 *
 * When action at the end of retention is chosen as &#x27;dispositionReview&#x27;, dispositionReviewStages specifies a sequential set of stages with at least one reviewer in each stage.
 */
export function get(
  params?: IEndpoints['GET /security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages/{dispositionReviewStage-stageNumber}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages/{dispositionReviewStage-stageNumber}']['response']
> {
  return {
    method: 'get',
    path: '/security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages/{dispositionReviewStage-stageNumber}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'retentionLabel-id', in: 'path' },
      { name: 'dispositionReviewStage-stageNumber', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages/{dispositionReviewStage-stageNumber}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages/{dispositionReviewStage-stageNumber}']['body'],
  params?: IEndpoints['PATCH /security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages/{dispositionReviewStage-stageNumber}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages/{dispositionReviewStage-stageNumber}']['response']
> {
  return {
    method: 'patch',
    path: '/security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages/{dispositionReviewStage-stageNumber}',
    paramDefs: [
      { name: 'retentionLabel-id', in: 'path' },
      { name: 'dispositionReviewStage-stageNumber', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages`
 *
 */
export function create(
  body: IEndpoints['POST /security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages']['body'],
  params?: IEndpoints['POST /security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages']['parameters']
): EndpointRequest<
  IEndpoints['POST /security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages']['response']
> {
  return {
    method: 'post',
    path: '/security/labels/retentionLabels/{retentionLabel-id}/dispositionReviewStages',
    paramDefs: [{ name: 'retentionLabel-id', in: 'path' }],
    params,
    body,
  };
}
