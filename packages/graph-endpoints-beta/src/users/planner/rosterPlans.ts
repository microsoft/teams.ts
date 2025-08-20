import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/planner/rosterPlans': Operation<
    '/users/{user-id}/planner/rosterPlans',
    'get'
  >;
  'GET /users/{user-id}/planner/rosterPlans/{plannerPlan-id}': Operation<
    '/users/{user-id}/planner/rosterPlans/{plannerPlan-id}',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/planner/rosterPlans`
 *
 * Get the list of plannerPlans that are contained by the plannerRosters of which the user is a member.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/planner/rosterPlans']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/planner/rosterPlans']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/planner/rosterPlans',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/planner/rosterPlans/{plannerPlan-id}`
 *
 * Read-only. Nullable. Returns the plannerPlans contained by the plannerRosters the user is a member.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/planner/rosterPlans/{plannerPlan-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/planner/rosterPlans/{plannerPlan-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/planner/rosterPlans/{plannerPlan-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
  };
}
