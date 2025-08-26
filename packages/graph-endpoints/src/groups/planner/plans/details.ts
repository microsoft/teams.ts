import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/planner/plans/{plannerPlan-id}/details': Operation<
    '/groups/{group-id}/planner/plans/{plannerPlan-id}/details',
    'delete'
  >;
  'GET /groups/{group-id}/planner/plans/{plannerPlan-id}/details': Operation<
    '/groups/{group-id}/planner/plans/{plannerPlan-id}/details',
    'get'
  >;
  'PATCH /groups/{group-id}/planner/plans/{plannerPlan-id}/details': Operation<
    '/groups/{group-id}/planner/plans/{plannerPlan-id}/details',
    'patch'
  >;
}

/**
 * `DELETE /groups/{group-id}/planner/plans/{plannerPlan-id}/details`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/planner/plans/{plannerPlan-id}/details']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/planner/plans/{plannerPlan-id}/details']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/planner/plans/{plannerPlan-id}/details',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/planner/plans/{plannerPlan-id}/details`
 *
 * Read-only. Nullable. Extra details about the plan.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/planner/plans/{plannerPlan-id}/details']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/planner/plans/{plannerPlan-id}/details']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/planner/plans/{plannerPlan-id}/details',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/planner/plans/{plannerPlan-id}/details`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/planner/plans/{plannerPlan-id}/details']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/planner/plans/{plannerPlan-id}/details']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/planner/plans/{plannerPlan-id}/details']['response']
> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/planner/plans/{plannerPlan-id}/details',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
    body,
  };
}
