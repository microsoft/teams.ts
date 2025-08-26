import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /me/planner/favoritePlans': Operation<'/me/planner/favoritePlans', 'get'>;
  'GET /me/planner/favoritePlans/{plannerPlan-id}': Operation<
    '/me/planner/favoritePlans/{plannerPlan-id}',
    'get'
  >;
}

/**
 * `GET /me/planner/favoritePlans`
 *
 * Retrieve a list of plannerPlans that are marked as favorite by a user. You can mark a plan as favorite by updating the plannerUser resource.
 */
export function list(
  params?: IEndpoints['GET /me/planner/favoritePlans']['parameters']
): EndpointRequest<IEndpoints['GET /me/planner/favoritePlans']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/planner/favoritePlans',
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
 * `GET /me/planner/favoritePlans/{plannerPlan-id}`
 *
 * Read-only. Nullable. Returns the plannerPlans that the user marked as favorites.
 */
export function get(
  params?: IEndpoints['GET /me/planner/favoritePlans/{plannerPlan-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/planner/favoritePlans/{plannerPlan-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/planner/favoritePlans/{plannerPlan-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
  };
}
