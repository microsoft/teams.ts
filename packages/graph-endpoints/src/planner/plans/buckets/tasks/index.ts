export * as assignedToTaskBoardFormat from './assignedToTaskBoardFormat';
export * as bucketTaskBoardFormat from './bucketTaskBoardFormat';
export * as details from './details';
export * as progressTaskBoardFormat from './progressTaskBoardFormat';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}': Operation<
    '/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}',
    'delete'
  >;
  'GET /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks': Operation<
    '/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks',
    'get'
  >;
  'GET /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}': Operation<
    '/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}',
    'get'
  >;
  'PATCH /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}': Operation<
    '/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}',
    'patch'
  >;
  'POST /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks': Operation<
    '/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks',
    'post'
  >;
}

/**
 * `DELETE /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}']['response']
> {
  return {
    method: 'delete',
    path: '/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'plannerPlan-id', in: 'path' },
      { name: 'plannerBucket-id', in: 'path' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks`
 *
 * Read-only. Nullable. The collection of tasks in the bucket.
 */
export function list(
  params?: IEndpoints['GET /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks']['parameters']
): EndpointRequest<
  IEndpoints['GET /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks']['response']
> {
  return {
    method: 'get',
    path: '/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'plannerPlan-id', in: 'path' },
      { name: 'plannerBucket-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}`
 *
 * Read-only. Nullable. The collection of tasks in the bucket.
 */
export function get(
  params?: IEndpoints['GET /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}']['response']
> {
  return {
    method: 'get',
    path: '/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'plannerPlan-id', in: 'path' },
      { name: 'plannerBucket-id', in: 'path' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}']['body'],
  params?: IEndpoints['PATCH /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}']['response']
> {
  return {
    method: 'patch',
    path: '/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}',
    paramDefs: [
      { name: 'plannerPlan-id', in: 'path' },
      { name: 'plannerBucket-id', in: 'path' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks`
 *
 */
export function create(
  body: IEndpoints['POST /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks']['body'],
  params?: IEndpoints['POST /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks']['parameters']
): EndpointRequest<
  IEndpoints['POST /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks']['response']
> {
  return {
    method: 'post',
    path: '/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks',
    paramDefs: [
      { name: 'plannerPlan-id', in: 'path' },
      { name: 'plannerBucket-id', in: 'path' },
    ],
    params,
    body,
  };
}
