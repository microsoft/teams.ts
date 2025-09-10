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
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'plannerPlan-id', 'plannerBucket-id'],
    },
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
    paramDefs: {
      path: ['group-id', 'plannerPlan-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    paramDefs: {
      path: ['group-id', 'plannerPlan-id', 'plannerBucket-id'],
      query: ['$select', '$expand'],
    },
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
    paramDefs: {
      path: ['group-id', 'plannerPlan-id', 'plannerBucket-id'],
    },
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
    paramDefs: {
      path: ['group-id', 'plannerPlan-id'],
    },
    params,
    body,
  };
}
