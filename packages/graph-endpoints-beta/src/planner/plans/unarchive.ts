import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /planner/plans/{plannerPlan-id}/unarchive': Operation<
    '/planner/plans/{plannerPlan-id}/unarchive',
    'post'
  >;
}

/**
 * `POST /planner/plans/{plannerPlan-id}/unarchive`
 *
 * Unarchive a plannerPlan object. Unarchiving a plan, also unarchives the plannerTasks and plannerBuckets in the plan.  Only a plan that is archived can be unarchived.
 */
export function create(
  body: IEndpoints['POST /planner/plans/{plannerPlan-id}/unarchive']['body'],
  params?: IEndpoints['POST /planner/plans/{plannerPlan-id}/unarchive']['parameters']
): EndpointRequest<IEndpoints['POST /planner/plans/{plannerPlan-id}/unarchive']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/planner/plans/{plannerPlan-id}/unarchive',
    paramDefs: [{ name: 'plannerPlan-id', in: 'path' }],
    params,
    body,
  };
}
