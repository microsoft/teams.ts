import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /me/planner/rosterPlans': Operation<'/me/planner/rosterPlans', 'get'>;
  'GET /me/planner/rosterPlans/{plannerPlan-id}': Operation<
    '/me/planner/rosterPlans/{plannerPlan-id}',
    'get'
  >;
}

/**
 * `GET /me/planner/rosterPlans`
 *
 * Read-only. Nullable. Returns the plannerPlans contained by the plannerRosters the user is a member.
 */
export function list(
  params?: IEndpoints['GET /me/planner/rosterPlans']['parameters']
): EndpointRequest<IEndpoints['GET /me/planner/rosterPlans']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/planner/rosterPlans',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /me/planner/rosterPlans/{plannerPlan-id}`
 *
 * Read-only. Nullable. Returns the plannerPlans contained by the plannerRosters the user is a member.
 */
export function get(
  params?: IEndpoints['GET /me/planner/rosterPlans/{plannerPlan-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/planner/rosterPlans/{plannerPlan-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/planner/rosterPlans/{plannerPlan-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
  };
}
