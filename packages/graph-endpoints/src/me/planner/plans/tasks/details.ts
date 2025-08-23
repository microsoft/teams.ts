import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/details': Operation<
    '/me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/details',
    'delete'
  >;
  'GET /me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/details': Operation<
    '/me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/details',
    'get'
  >;
  'PATCH /me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/details': Operation<
    '/me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/details',
    'patch'
  >;
}

/**
 * `DELETE /me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/details`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/details']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/details']['response']
> {
  return {
    method: 'delete',
    path: '/me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/details',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'plannerPlan-id', in: 'path' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/details`
 *
 * Read-only. Nullable. More details about the task.
 */
export function list(
  params?: IEndpoints['GET /me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/details']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/details']['response']
> {
  return {
    method: 'get',
    path: '/me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/details',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'plannerPlan-id', in: 'path' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/details`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/details']['body'],
  params?: IEndpoints['PATCH /me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/details']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/details']['response']
> {
  return {
    method: 'patch',
    path: '/me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/details',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'plannerPlan-id', in: 'path' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
    body,
  };
}
