import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/planner/recentPlans': Operation<
    '/users/{user-id}/planner/recentPlans',
    'get'
  >;
  'GET /users/{user-id}/planner/recentPlans/{plannerPlan-id}': Operation<
    '/users/{user-id}/planner/recentPlans/{plannerPlan-id}',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/planner/recentPlans`
 *
 * Read-only. Nullable. Returns the plannerPlans that the user recently viewed in apps that support recent plans.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/planner/recentPlans']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/planner/recentPlans']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/planner/recentPlans',
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
 * `GET /users/{user-id}/planner/recentPlans/{plannerPlan-id}`
 *
 * Read-only. Nullable. Returns the plannerPlans that the user recently viewed in apps that support recent plans.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/planner/recentPlans/{plannerPlan-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/planner/recentPlans/{plannerPlan-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/planner/recentPlans/{plannerPlan-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
  };
}
