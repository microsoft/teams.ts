export * as tasks from './tasks';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}': Operation<
    '/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}',
    'delete'
  >;
  'GET /planner/plans/{plannerPlan-id}/buckets': Operation<
    '/planner/plans/{plannerPlan-id}/buckets',
    'get'
  >;
  'GET /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}': Operation<
    '/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}',
    'get'
  >;
  'PATCH /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}': Operation<
    '/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}',
    'patch'
  >;
  'POST /planner/plans/{plannerPlan-id}/buckets': Operation<
    '/planner/plans/{plannerPlan-id}/buckets',
    'post'
  >;
}

/**
 * `DELETE /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['plannerPlan-id', 'plannerBucket-id'],
    },
    params,
  };
}

/**
 * `GET /planner/plans/{plannerPlan-id}/buckets`
 *
 * Retrieve a list of plannerBucket objects contained by a plannerPlan object.
 */
export function list(
  params?: IEndpoints['GET /planner/plans/{plannerPlan-id}/buckets']['parameters']
): EndpointRequest<IEndpoints['GET /planner/plans/{plannerPlan-id}/buckets']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/planner/plans/{plannerPlan-id}/buckets',
    paramDefs: {
      path: ['plannerPlan-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}`
 *
 * Collection of buckets in the plan. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}',
    paramDefs: {
      path: ['plannerPlan-id', 'plannerBucket-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}']['body'],
  params?: IEndpoints['PATCH /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}',
    paramDefs: {
      path: ['plannerPlan-id', 'plannerBucket-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /planner/plans/{plannerPlan-id}/buckets`
 *
 */
export function create(
  body: IEndpoints['POST /planner/plans/{plannerPlan-id}/buckets']['body'],
  params?: IEndpoints['POST /planner/plans/{plannerPlan-id}/buckets']['parameters']
): EndpointRequest<IEndpoints['POST /planner/plans/{plannerPlan-id}/buckets']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/planner/plans/{plannerPlan-id}/buckets',
    paramDefs: {
      path: ['plannerPlan-id'],
    },
    params,
    body,
  };
}
