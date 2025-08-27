import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /planner/plans/{plannerPlan-id}/details': Operation<
    '/planner/plans/{plannerPlan-id}/details',
    'delete'
  >;
  'GET /planner/plans/{plannerPlan-id}/details': Operation<
    '/planner/plans/{plannerPlan-id}/details',
    'get'
  >;
  'PATCH /planner/plans/{plannerPlan-id}/details': Operation<
    '/planner/plans/{plannerPlan-id}/details',
    'patch'
  >;
}

/**
 * `DELETE /planner/plans/{plannerPlan-id}/details`
 *
 */
export function del(
  params?: IEndpoints['DELETE /planner/plans/{plannerPlan-id}/details']['parameters']
): EndpointRequest<IEndpoints['DELETE /planner/plans/{plannerPlan-id}/details']['response']> {
  return {
    method: 'delete',
    path: '/planner/plans/{plannerPlan-id}/details',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /planner/plans/{plannerPlan-id}/details`
 *
 * Retrieve the properties and relationships of a plannerPlanDetails object.
 */
export function list(
  params?: IEndpoints['GET /planner/plans/{plannerPlan-id}/details']['parameters']
): EndpointRequest<IEndpoints['GET /planner/plans/{plannerPlan-id}/details']['response']> {
  return {
    method: 'get',
    path: '/planner/plans/{plannerPlan-id}/details',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /planner/plans/{plannerPlan-id}/details`
 *
 * Update the properties of plannerplandetails object.
 */
export function update(
  body: IEndpoints['PATCH /planner/plans/{plannerPlan-id}/details']['body'],
  params?: IEndpoints['PATCH /planner/plans/{plannerPlan-id}/details']['parameters']
): EndpointRequest<IEndpoints['PATCH /planner/plans/{plannerPlan-id}/details']['response']> {
  return {
    method: 'patch',
    path: '/planner/plans/{plannerPlan-id}/details',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
    body,
  };
}
