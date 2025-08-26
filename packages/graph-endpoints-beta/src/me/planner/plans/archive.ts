import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /me/planner/plans/{plannerPlan-id}/archive': Operation<
    '/me/planner/plans/{plannerPlan-id}/archive',
    'post'
  >;
}

/**
 * `POST /me/planner/plans/{plannerPlan-id}/archive`
 *
 * Archive a plannerPlan object. Archiving a plan, also archives the plannerTasks and plannerBuckets in the plan.  An archived entity is read-only. Archived entities cannot be updated. An archived plan can be unarchived.  All archived entities can be deleted. Archived tasks are not included in the response for list of tasks assigned to a user.
 */
export function create(
  body: IEndpoints['POST /me/planner/plans/{plannerPlan-id}/archive']['body'],
  params?: IEndpoints['POST /me/planner/plans/{plannerPlan-id}/archive']['parameters']
): EndpointRequest<IEndpoints['POST /me/planner/plans/{plannerPlan-id}/archive']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/planner/plans/{plannerPlan-id}/archive',
    paramDefs: [{ name: 'plannerPlan-id', in: 'path' }],
    params,
    body,
  };
}
