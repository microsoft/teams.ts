export * as decisions from './decisions';
export * as stop from './stop';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}': Operation<
    '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}',
    'delete'
  >;
  'GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages': Operation<
    '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages',
    'get'
  >;
  'GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}': Operation<
    '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}',
    'get'
  >;
  'PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}': Operation<
    '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}',
    'patch'
  >;
  'POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages': Operation<
    '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'accessReviewInstance-id', in: 'path' },
      { name: 'accessReviewStage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages`
 *
 * If the instance has multiple stages, this returns the collection of stages. A new stage will only be created when the previous stage ends. The existence, number, and settings of stages on a review instance are created based on the accessReviewStageSettings on the parent accessReviewScheduleDefinition.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages',
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
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}`
 *
 * If the instance has multiple stages, this returns the collection of stages. A new stage will only be created when the previous stage ends. The existence, number, and settings of stages on a review instance are created based on the accessReviewStageSettings on the parent accessReviewScheduleDefinition.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'accessReviewInstance-id', in: 'path' },
      { name: 'accessReviewStage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'accessReviewInstance-id', in: 'path' },
      { name: 'accessReviewStage-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages']['body'],
  params?: IEndpoints['POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'accessReviewInstance-id', in: 'path' },
    ],
    params,
    body,
  };
}
