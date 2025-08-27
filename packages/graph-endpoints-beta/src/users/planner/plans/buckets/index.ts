export * as tasks from './tasks';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}': Operation<
    '/users/{user-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}',
    'delete'
  >;
  'GET /users/{user-id}/planner/plans/{plannerPlan-id}/buckets': Operation<
    '/users/{user-id}/planner/plans/{plannerPlan-id}/buckets',
    'get'
  >;
  'GET /users/{user-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}': Operation<
    '/users/{user-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}',
    'get'
  >;
  'PATCH /users/{user-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}': Operation<
    '/users/{user-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}',
    'patch'
  >;
  'POST /users/{user-id}/planner/plans/{plannerPlan-id}/buckets': Operation<
    '/users/{user-id}/planner/plans/{plannerPlan-id}/buckets',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
      { name: 'plannerBucket-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/planner/plans/{plannerPlan-id}/buckets`
 *
 * Collection of buckets in the plan. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/planner/plans/{plannerPlan-id}/buckets']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/planner/plans/{plannerPlan-id}/buckets']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/planner/plans/{plannerPlan-id}/buckets',
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
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}`
 *
 * Collection of buckets in the plan. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
      { name: 'plannerBucket-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
      { name: 'plannerBucket-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/planner/plans/{plannerPlan-id}/buckets`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/planner/plans/{plannerPlan-id}/buckets']['body'],
  params?: IEndpoints['POST /users/{user-id}/planner/plans/{plannerPlan-id}/buckets']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/planner/plans/{plannerPlan-id}/buckets']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/planner/plans/{plannerPlan-id}/buckets',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
    body,
  };
}
