export * as assignedToTaskBoardFormat from './assignedToTaskBoardFormat';
export * as bucketTaskBoardFormat from './bucketTaskBoardFormat';
export * as details from './details';
export * as progressTaskBoardFormat from './progressTaskBoardFormat';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}': Operation<
    '/groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}',
    'delete'
  >;
  'GET /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks': Operation<
    '/groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks',
    'get'
  >;
  'GET /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}': Operation<
    '/groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}': Operation<
    '/groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}',
    'patch'
  >;
  'POST /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks': Operation<
    '/groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
      { name: 'plannerBucket-id', in: 'path' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks`
 *
 * Read-only. Nullable. The collection of tasks in the bucket.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
      { name: 'plannerBucket-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}`
 *
 * Read-only. Nullable. The collection of tasks in the bucket.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
      { name: 'plannerBucket-id', in: 'path' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
      { name: 'plannerBucket-id', in: 'path' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks']['body'],
  params?: IEndpoints['POST /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
      { name: 'plannerBucket-id', in: 'path' },
    ],
    params,
    body,
  };
}
