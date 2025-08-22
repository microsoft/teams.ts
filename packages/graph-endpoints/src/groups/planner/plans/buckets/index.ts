export * as tasks from './tasks';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}': Operation<
    '/groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}',
    'delete'
  >;
  'GET /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets': Operation<
    '/groups/{group-id}/planner/plans/{plannerPlan-id}/buckets',
    'get'
  >;
  'GET /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}': Operation<
    '/groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}': Operation<
    '/groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}',
    'patch'
  >;
  'POST /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets': Operation<
    '/groups/{group-id}/planner/plans/{plannerPlan-id}/buckets',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
      { name: 'plannerBucket-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets`
 *
 * Read-only. Nullable. Collection of buckets in the plan.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/planner/plans/{plannerPlan-id}/buckets',
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
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}`
 *
 * Read-only. Nullable. Collection of buckets in the plan.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}',
    paramDefs: [
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
 * `PATCH /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}']['response']
> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
      { name: 'plannerBucket-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets']['body'],
  params?: IEndpoints['POST /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/planner/plans/{plannerPlan-id}/buckets']['response']
> {
  return {
    method: 'post',
    path: '/groups/{group-id}/planner/plans/{plannerPlan-id}/buckets',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
    body,
  };
}
