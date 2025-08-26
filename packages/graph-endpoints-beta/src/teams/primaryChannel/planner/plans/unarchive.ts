import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/unarchive': Operation<
    '/teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/unarchive',
    'post'
  >;
}

/**
 * `POST /teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/unarchive`
 *
 * Unarchive a plannerPlan object. Unarchiving a plan, also unarchives the plannerTasks and plannerBuckets in the plan.  Only a plan that is archived can be unarchived.
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/unarchive']['body'],
  params?: IEndpoints['POST /teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/unarchive']['parameters']
): EndpointRequest<
  IEndpoints['POST /teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/unarchive']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/unarchive',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
    body,
  };
}
