import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/planner/plans/{plannerPlan-id}/moveToContainer': Operation<
    '/users/{user-id}/planner/plans/{plannerPlan-id}/moveToContainer',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/planner/plans/{plannerPlan-id}/moveToContainer`
 *
 * Move a planner plan object from one planner plan container to another. Planner plans can only be moved from a user container to a group container.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/planner/plans/{plannerPlan-id}/moveToContainer']['body'],
  params?: IEndpoints['POST /users/{user-id}/planner/plans/{plannerPlan-id}/moveToContainer']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/planner/plans/{plannerPlan-id}/moveToContainer']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/planner/plans/{plannerPlan-id}/moveToContainer',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
    body,
  };
}
