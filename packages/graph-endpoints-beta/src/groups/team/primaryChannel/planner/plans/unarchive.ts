import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/team/primaryChannel/planner/plans/{plannerPlan-id}/unarchive': Operation<
    '/groups/{group-id}/team/primaryChannel/planner/plans/{plannerPlan-id}/unarchive',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/team/primaryChannel/planner/plans/{plannerPlan-id}/unarchive`
 *
 * Unarchive a plannerPlan object. Unarchiving a plan, also unarchives the plannerTasks and plannerBuckets in the plan.  Only a plan that is archived can be unarchived.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/primaryChannel/planner/plans/{plannerPlan-id}/unarchive']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/primaryChannel/planner/plans/{plannerPlan-id}/unarchive']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/team/primaryChannel/planner/plans/{plannerPlan-id}/unarchive']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/team/primaryChannel/planner/plans/{plannerPlan-id}/unarchive',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
    body,
  };
}
