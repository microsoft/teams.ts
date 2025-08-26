import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details': Operation<
    '/teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details',
    'delete'
  >;
  'GET /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details': Operation<
    '/teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details',
    'get'
  >;
  'PATCH /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details': Operation<
    '/teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details',
    'patch'
  >;
}

/**
 * `DELETE /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
      { name: 'plannerBucket-id', in: 'path' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details`
 *
 * Read-only. Nullable. More details about the task.
 */
export function list(
  params?: IEndpoints['GET /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details']['parameters']
): EndpointRequest<
  IEndpoints['GET /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
      { name: 'plannerBucket-id', in: 'path' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details`
 *
 */
export function update(
  body: IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details']['body'],
  params?: IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
      { name: 'plannerBucket-id', in: 'path' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
    body,
  };
}
