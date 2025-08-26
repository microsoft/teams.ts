import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/details': Operation<
    '/teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/details',
    'delete'
  >;
  'GET /teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/details': Operation<
    '/teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/details',
    'get'
  >;
  'PATCH /teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/details': Operation<
    '/teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/details',
    'patch'
  >;
}

/**
 * `DELETE /teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/details`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/details']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/details']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/details',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/details`
 *
 * Extra details about the plan. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/details']['parameters']
): EndpointRequest<
  IEndpoints['GET /teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/details']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/details',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/details`
 *
 */
export function update(
  body: IEndpoints['PATCH /teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/details']['body'],
  params?: IEndpoints['PATCH /teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/details']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/details']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/details',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
    body,
  };
}
