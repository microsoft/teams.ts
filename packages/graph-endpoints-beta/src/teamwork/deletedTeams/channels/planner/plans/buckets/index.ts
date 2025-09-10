export * as tasks from './tasks';

import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}',
    'delete'
  >;
  'GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets',
    'get'
  >;
  'GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}',
    'get'
  >;
  'PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}',
    'patch'
  >;
  'POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets',
    'post'
  >;
}

/**
 * `DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['deletedTeam-id', 'channel-id', 'plannerPlan-id', 'plannerBucket-id'],
    },
    params,
  };
}

/**
 * `GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets`
 *
 * Collection of buckets in the plan. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets',
    paramDefs: {
      path: ['deletedTeam-id', 'channel-id', 'plannerPlan-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}`
 *
 * Collection of buckets in the plan. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}',
    paramDefs: {
      path: ['deletedTeam-id', 'channel-id', 'plannerPlan-id', 'plannerBucket-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}']['body'],
  params?: IEndpoints['PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}',
    paramDefs: {
      path: ['deletedTeam-id', 'channel-id', 'plannerPlan-id', 'plannerBucket-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets`
 *
 */
export function create(
  body: IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets']['body'],
  params?: IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets']['parameters']
): EndpointRequest<
  IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets',
    paramDefs: {
      path: ['deletedTeam-id', 'channel-id', 'plannerPlan-id'],
    },
    params,
    body,
  };
}
