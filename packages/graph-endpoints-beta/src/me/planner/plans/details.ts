import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/planner/plans/{plannerPlan-id}/details': Operation<
    '/me/planner/plans/{plannerPlan-id}/details',
    'delete'
  >;
  'GET /me/planner/plans/{plannerPlan-id}/details': Operation<
    '/me/planner/plans/{plannerPlan-id}/details',
    'get'
  >;
  'PATCH /me/planner/plans/{plannerPlan-id}/details': Operation<
    '/me/planner/plans/{plannerPlan-id}/details',
    'patch'
  >;
}

/**
 * `DELETE /me/planner/plans/{plannerPlan-id}/details`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/planner/plans/{plannerPlan-id}/details']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/planner/plans/{plannerPlan-id}/details']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/planner/plans/{plannerPlan-id}/details',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/planner/plans/{plannerPlan-id}/details`
 *
 * Extra details about the plan. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /me/planner/plans/{plannerPlan-id}/details']['parameters']
): EndpointRequest<IEndpoints['GET /me/planner/plans/{plannerPlan-id}/details']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/planner/plans/{plannerPlan-id}/details',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/planner/plans/{plannerPlan-id}/details`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/planner/plans/{plannerPlan-id}/details']['body'],
  params?: IEndpoints['PATCH /me/planner/plans/{plannerPlan-id}/details']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/planner/plans/{plannerPlan-id}/details']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/planner/plans/{plannerPlan-id}/details',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
    body,
  };
}
