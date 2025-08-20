export * as decisions from './decisions';
export * as stop from './stop';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}',
    'delete'
  >;
  'GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages',
    'get'
  >;
  'GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}',
    'get'
  >;
  'PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}',
    'patch'
  >;
  'POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages',
    'post'
  >;
}

/**
 * `DELETE /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'accessReviewInstance-id', in: 'path' },
      { name: 'accessReviewStage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages`
 *
 * If the instance has multiple stages, this returns the collection of stages. A new stage will only be created when the previous stage ends. The existence, number, and settings of stages on a review instance are created based on the accessReviewStageSettings on the parent accessReviewScheduleDefinition.
 */
export function list(
  params?: IEndpoints['GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'accessReviewInstance-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}`
 *
 * If the instance has multiple stages, this returns the collection of stages. A new stage will only be created when the previous stage ends. The existence, number, and settings of stages on a review instance are created based on the accessReviewStageSettings on the parent accessReviewScheduleDefinition.
 */
export function get(
  params?: IEndpoints['GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'accessReviewInstance-id', in: 'path' },
      { name: 'accessReviewStage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}']['body'],
  params?: IEndpoints['PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}',
    paramDefs: [
      { name: 'accessReviewInstance-id', in: 'path' },
      { name: 'accessReviewStage-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages`
 *
 */
export function create(
  body: IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages']['body'],
  params?: IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages',
    paramDefs: [{ name: 'accessReviewInstance-id', in: 'path' }],
    params,
    body,
  };
}
