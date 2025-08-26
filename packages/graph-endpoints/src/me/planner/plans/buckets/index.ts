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
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'plannerPlan-id', in: 'path' },
      { name: 'plannerBucket-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: 'plannerPlan-id', in: 'path' },
      { name: 'plannerBucket-id', in: 'path' },
    ],
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
    paramDefs: [{ name: 'plannerPlan-id', in: 'path' }],
    params,
    body,
  };
}
