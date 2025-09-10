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
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'plannerPlan-id', 'plannerBucket-id'],
    },
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
    paramDefs: {
      path: ['user-id', 'plannerPlan-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    paramDefs: {
      path: ['user-id', 'plannerPlan-id', 'plannerBucket-id'],
      query: ['$select', '$expand'],
    },
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
    paramDefs: {
      path: ['user-id', 'plannerPlan-id', 'plannerBucket-id'],
    },
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
    paramDefs: {
      path: ['user-id', 'plannerPlan-id'],
    },
    params,
    body,
  };
}
