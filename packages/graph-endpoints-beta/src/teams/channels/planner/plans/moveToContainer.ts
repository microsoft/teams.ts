import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/moveToContainer': Operation<
    '/teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/moveToContainer',
    'post'
  >;
}

/**
 * `POST /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/moveToContainer`
 *
 * Move a planner plan object from one planner plan container to another. Planner plans can only be moved from a user container to a group container.
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/moveToContainer']['body'],
  params?: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/moveToContainer']['parameters']
): EndpointRequest<
  IEndpoints['POST /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/moveToContainer']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/moveToContainer',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
    body,
  };
}
