import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /planner/rosters/{plannerRoster-id}/plans': Operation<
    '/planner/rosters/{plannerRoster-id}/plans',
    'get'
  >;
  'GET /planner/rosters/{plannerRoster-id}/plans/{plannerPlan-id}': Operation<
    '/planner/rosters/{plannerRoster-id}/plans/{plannerPlan-id}',
    'get'
  >;
}

/**
 * `GET /planner/rosters/{plannerRoster-id}/plans`
 *
 * Get the plannerPlans contained by the plannerRoster.
 */
export function list(
  params?: IEndpoints['GET /planner/rosters/{plannerRoster-id}/plans']['parameters']
): EndpointRequest<IEndpoints['GET /planner/rosters/{plannerRoster-id}/plans']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/planner/rosters/{plannerRoster-id}/plans',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'plannerRoster-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /planner/rosters/{plannerRoster-id}/plans/{plannerPlan-id}`
 *
 * Retrieves the plans contained by the plannerRoster.
 */
export function get(
  params?: IEndpoints['GET /planner/rosters/{plannerRoster-id}/plans/{plannerPlan-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /planner/rosters/{plannerRoster-id}/plans/{plannerPlan-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/planner/rosters/{plannerRoster-id}/plans/{plannerPlan-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'plannerRoster-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
  };
}
