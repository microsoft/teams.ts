import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/planner/favoritePlans': Operation<
    '/users/{user-id}/planner/favoritePlans',
    'get'
  >;
  'GET /users/{user-id}/planner/favoritePlans/{plannerPlan-id}': Operation<
    '/users/{user-id}/planner/favoritePlans/{plannerPlan-id}',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/planner/favoritePlans`
 *
 * Read-only. Nullable. Returns the plannerPlans that the user marked as favorites.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/planner/favoritePlans']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/planner/favoritePlans']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/planner/favoritePlans',
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
 * `GET /users/{user-id}/planner/favoritePlans/{plannerPlan-id}`
 *
 * Read-only. Nullable. Returns the plannerPlans that the user marked as favorites.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/planner/favoritePlans/{plannerPlan-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/planner/favoritePlans/{plannerPlan-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/planner/favoritePlans/{plannerPlan-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
  };
}
