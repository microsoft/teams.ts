export * as assignedToTaskBoardFormat from './assignedToTaskBoardFormat';
export * as bucketTaskBoardFormat from './bucketTaskBoardFormat';
export * as details from './details';
export * as progressTaskBoardFormat from './progressTaskBoardFormat';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}': Operation<
    '/planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}',
    'delete'
  >;
  'GET /planner/buckets/{plannerBucket-id}/tasks': Operation<
    '/planner/buckets/{plannerBucket-id}/tasks',
    'get'
  >;
  'GET /planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}': Operation<
    '/planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}',
    'get'
  >;
  'PATCH /planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}': Operation<
    '/planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}',
    'patch'
  >;
  'POST /planner/buckets/{plannerBucket-id}/tasks': Operation<
    '/planner/buckets/{plannerBucket-id}/tasks',
    'post'
  >;
}

/**
 * `DELETE /planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}']['response']
> {
  return {
    method: 'delete',
    path: '/planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'plannerBucket-id', in: 'path' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /planner/buckets/{plannerBucket-id}/tasks`
 *
 * Retrieve a list of plannerTask objects associated to a plannerBucket object.
 */
export function list(
  params?: IEndpoints['GET /planner/buckets/{plannerBucket-id}/tasks']['parameters']
): EndpointRequest<IEndpoints['GET /planner/buckets/{plannerBucket-id}/tasks']['response']> {
  return {
    method: 'get',
    path: '/planner/buckets/{plannerBucket-id}/tasks',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'plannerBucket-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}`
 *
 * Read-only. Nullable. The collection of tasks in the bucket.
 */
export function get(
  params?: IEndpoints['GET /planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}']['response']
> {
  return {
    method: 'get',
    path: '/planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'plannerBucket-id', in: 'path' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}']['body'],
  params?: IEndpoints['PATCH /planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}']['response']
> {
  return {
    method: 'patch',
    path: '/planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}',
    paramDefs: [
      { name: 'plannerBucket-id', in: 'path' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /planner/buckets/{plannerBucket-id}/tasks`
 *
 */
export function create(
  body: IEndpoints['POST /planner/buckets/{plannerBucket-id}/tasks']['body'],
  params?: IEndpoints['POST /planner/buckets/{plannerBucket-id}/tasks']['parameters']
): EndpointRequest<IEndpoints['POST /planner/buckets/{plannerBucket-id}/tasks']['response']> {
  return {
    method: 'post',
    path: '/planner/buckets/{plannerBucket-id}/tasks',
    paramDefs: [{ name: 'plannerBucket-id', in: 'path' }],
    params,
    body,
  };
}
