export * as archive from './archive';
export * as buckets from './buckets';
export * as details from './details';
export * as moveToContainer from './moveToContainer';
export * as tasks from './tasks';
export * as unarchive from './unarchive';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /planner/plans/{plannerPlan-id}': Operation<'/planner/plans/{plannerPlan-id}', 'delete'>;
  'GET /planner/plans': Operation<'/planner/plans', 'get'>;
  'GET /planner/plans/{plannerPlan-id}': Operation<'/planner/plans/{plannerPlan-id}', 'get'>;
  'PATCH /planner/plans/{plannerPlan-id}': Operation<'/planner/plans/{plannerPlan-id}', 'patch'>;
  'POST /planner/plans': Operation<'/planner/plans', 'post'>;
}

/**
 * `DELETE /planner/plans/{plannerPlan-id}`
 *
 * Delete a plannerPlan object.
 */
export function del(
  params?: IEndpoints['DELETE /planner/plans/{plannerPlan-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /planner/plans/{plannerPlan-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/planner/plans/{plannerPlan-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /planner/plans`
 *
 * Get a list of plannerPlan objects.
 */
export function list(
  params?: IEndpoints['GET /planner/plans']['parameters']
): EndpointRequest<IEndpoints['GET /planner/plans']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/planner/plans',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /planner/plans/{plannerPlan-id}`
 *
 * Retrieve the properties and relationships of a plannerplan object.
 */
export function get(
  params?: IEndpoints['GET /planner/plans/{plannerPlan-id}']['parameters']
): EndpointRequest<IEndpoints['GET /planner/plans/{plannerPlan-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/planner/plans/{plannerPlan-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /planner/plans/{plannerPlan-id}`
 *
 * Update the properties of a plannerPlan object.
 */
export function update(
  body: IEndpoints['PATCH /planner/plans/{plannerPlan-id}']['body'],
  params?: IEndpoints['PATCH /planner/plans/{plannerPlan-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /planner/plans/{plannerPlan-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/planner/plans/{plannerPlan-id}',
    paramDefs: [{ name: 'plannerPlan-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /planner/plans`
 *
 * Create a new plannerPlan object.
 */
export function create(
  body: IEndpoints['POST /planner/plans']['body'],
  params?: IEndpoints['POST /planner/plans']['parameters']
): EndpointRequest<IEndpoints['POST /planner/plans']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/planner/plans',
    paramDefs: [],
    params,
    body,
  };
}
