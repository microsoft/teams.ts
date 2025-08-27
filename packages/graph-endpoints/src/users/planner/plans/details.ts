import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/planner/plans/{plannerPlan-id}/details': Operation<
    '/users/{user-id}/planner/plans/{plannerPlan-id}/details',
    'delete'
  >;
  'GET /users/{user-id}/planner/plans/{plannerPlan-id}/details': Operation<
    '/users/{user-id}/planner/plans/{plannerPlan-id}/details',
    'get'
  >;
  'PATCH /users/{user-id}/planner/plans/{plannerPlan-id}/details': Operation<
    '/users/{user-id}/planner/plans/{plannerPlan-id}/details',
    'patch'
  >;
}

/**
 * `DELETE /users/{user-id}/planner/plans/{plannerPlan-id}/details`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/planner/plans/{plannerPlan-id}/details']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/planner/plans/{plannerPlan-id}/details']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/planner/plans/{plannerPlan-id}/details',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/planner/plans/{plannerPlan-id}/details`
 *
 * Read-only. Nullable. Extra details about the plan.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/planner/plans/{plannerPlan-id}/details']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/planner/plans/{plannerPlan-id}/details']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/planner/plans/{plannerPlan-id}/details',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/planner/plans/{plannerPlan-id}/details`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/planner/plans/{plannerPlan-id}/details']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/planner/plans/{plannerPlan-id}/details']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/planner/plans/{plannerPlan-id}/details']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/planner/plans/{plannerPlan-id}/details',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
    body,
  };
}
