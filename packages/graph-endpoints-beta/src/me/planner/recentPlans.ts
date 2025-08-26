import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /me/planner/recentPlans': Operation<'/me/planner/recentPlans', 'get'>;
  'GET /me/planner/recentPlans/{plannerPlan-id}': Operation<
    '/me/planner/recentPlans/{plannerPlan-id}',
    'get'
  >;
}

/**
 * `GET /me/planner/recentPlans`
 *
 * Retrieve a list of plannerPlans recently viewed by a user. You can update recently viewed plans by updating the plannerUser resource.
 */
export function list(
  params?: IEndpoints['GET /me/planner/recentPlans']['parameters']
): EndpointRequest<IEndpoints['GET /me/planner/recentPlans']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/planner/recentPlans',
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
 * `GET /me/planner/recentPlans/{plannerPlan-id}`
 *
 * Read-only. Nullable. Returns the plannerPlans that the user recently viewed in apps that support recent plans.
 */
export function get(
  params?: IEndpoints['GET /me/planner/recentPlans/{plannerPlan-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/planner/recentPlans/{plannerPlan-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/planner/recentPlans/{plannerPlan-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
  };
}
