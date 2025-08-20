import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details': Operation<
    '/planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details',
    'delete'
  >;
  'GET /planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details': Operation<
    '/planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details',
    'get'
  >;
  'PATCH /planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details': Operation<
    '/planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details',
    'patch'
  >;
}

/**
 * `DELETE /planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details`
 *
 */
export function del(
  params?: IEndpoints['DELETE /planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details']['response']
> {
  return {
    method: 'delete',
    path: '/planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'plannerBucket-id', in: 'path' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details`
 *
 * Read-only. Nullable. More details about the task.
 */
export function list(
  params?: IEndpoints['GET /planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details']['parameters']
): EndpointRequest<
  IEndpoints['GET /planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details']['response']
> {
  return {
    method: 'get',
    path: '/planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details',
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
 * `PATCH /planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details`
 *
 */
export function update(
  body: IEndpoints['PATCH /planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details']['body'],
  params?: IEndpoints['PATCH /planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details']['response']
> {
  return {
    method: 'patch',
    path: '/planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'plannerBucket-id', in: 'path' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
    body,
  };
}
