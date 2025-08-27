import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/details': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/details',
    'delete'
  >;
  'GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/details': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/details',
    'get'
  >;
  'PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/details': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/details',
    'patch'
  >;
}

/**
 * `DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/details`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/details']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/details']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/details',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deletedTeam-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/details`
 *
 * Extra details about the plan. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/details']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/details']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/details',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deletedTeam-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/details`
 *
 */
export function update(
  body: IEndpoints['PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/details']['body'],
  params?: IEndpoints['PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/details']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/details']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/details',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deletedTeam-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
    body,
  };
}
