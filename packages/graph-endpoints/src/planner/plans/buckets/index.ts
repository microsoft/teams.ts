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
    method: 'delete',
    path: '/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'plannerPlan-id', in: 'path' },
      { name: 'plannerBucket-id', in: 'path' },
    ],
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
    method: 'get',
    path: '/planner/plans/{plannerPlan-id}/buckets',
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
    ],
    params,
  };
}

/**
 * `GET /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}`
 *
 * Read-only. Nullable. Collection of buckets in the plan.
 */
export function get(
  params?: IEndpoints['GET /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}']['response']
> {
  return {
    method: 'get',
    path: '/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'plannerPlan-id', in: 'path' },
      { name: 'plannerBucket-id', in: 'path' },
    ],
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
    method: 'patch',
    path: '/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}',
    paramDefs: [
      { name: 'plannerPlan-id', in: 'path' },
      { name: 'plannerBucket-id', in: 'path' },
    ],
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
    method: 'post',
    path: '/planner/plans/{plannerPlan-id}/buckets',
    paramDefs: [{ name: 'plannerPlan-id', in: 'path' }],
    params,
    body,
  };
}
