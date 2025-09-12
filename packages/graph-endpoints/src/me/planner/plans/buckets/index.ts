export * as tasks from './tasks';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}': Operation<
    '/me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}',
    'delete'
  >;
  'GET /me/planner/plans/{plannerPlan-id}/buckets': Operation<
    '/me/planner/plans/{plannerPlan-id}/buckets',
    'get'
  >;
  'GET /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}': Operation<
    '/me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}',
    'get'
  >;
  'PATCH /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}': Operation<
    '/me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}',
    'patch'
  >;
  'POST /me/planner/plans/{plannerPlan-id}/buckets': Operation<
    '/me/planner/plans/{plannerPlan-id}/buckets',
    'post'
  >;
}

/**
 * `DELETE /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['plannerPlan-id', 'plannerBucket-id'],
    },
    params,
  };
}

/**
 * `GET /me/planner/plans/{plannerPlan-id}/buckets`
 *
 * Read-only. Nullable. Collection of buckets in the plan.
 */
export function list(
  params?: IEndpoints['GET /me/planner/plans/{plannerPlan-id}/buckets']['parameters']
): EndpointRequest<IEndpoints['GET /me/planner/plans/{plannerPlan-id}/buckets']['response']> {
  return {
    method: 'get',
    path: '/me/planner/plans/{plannerPlan-id}/buckets',
    paramDefs: {
      path: ['plannerPlan-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}`
 *
 * Read-only. Nullable. Collection of buckets in the plan.
 */
export function get(
  params?: IEndpoints['GET /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}',
    paramDefs: {
      path: ['plannerPlan-id', 'plannerBucket-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}']['body'],
  params?: IEndpoints['PATCH /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}']['response']
> {
  return {
    method: 'patch',
    path: '/me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}',
    paramDefs: {
      path: ['plannerPlan-id', 'plannerBucket-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/planner/plans/{plannerPlan-id}/buckets`
 *
 */
export function create(
  body: IEndpoints['POST /me/planner/plans/{plannerPlan-id}/buckets']['body'],
  params?: IEndpoints['POST /me/planner/plans/{plannerPlan-id}/buckets']['parameters']
): EndpointRequest<IEndpoints['POST /me/planner/plans/{plannerPlan-id}/buckets']['response']> {
  return {
    method: 'post',
    path: '/me/planner/plans/{plannerPlan-id}/buckets',
    paramDefs: {
      path: ['plannerPlan-id'],
    },
    params,
    body,
  };
}
