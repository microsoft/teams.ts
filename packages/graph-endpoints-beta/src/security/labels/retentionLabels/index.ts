export * as descriptors from './descriptors';
export * as dispositionReviewStages from './dispositionReviewStages';
export * as retentionEventType from './retentionEventType';

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
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'retentionLabel-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'retentionLabel-id', in: 'path' },
    ],
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
    paramDefs: [{ name: 'retentionLabel-id', in: 'path' }],
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
  body: IEndpoints['POST /security/labels/retentionLabels']['body'],
  params?: IEndpoints['POST /security/labels/retentionLabels']['parameters']
): EndpointRequest<IEndpoints['POST /security/labels/retentionLabels']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/labels/retentionLabels',
    paramDefs: [],
    params,
    body,
  };
}
