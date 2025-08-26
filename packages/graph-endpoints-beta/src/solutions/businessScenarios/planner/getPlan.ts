import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /solutions/businessScenarios/{businessScenario-id}/planner/getPlan': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner/getPlan',
    'post'
  >;
}

/**
 * `POST /solutions/businessScenarios/{businessScenario-id}/planner/getPlan`
 *
 * Get information about the plannerPlan mapped to a given target. If a plannerPlan doesn&#x27;t exist for the specified target at the time of the request, a new plan will be created for the businessScenario.
 */
export function create(
  body: IEndpoints['POST /solutions/businessScenarios/{businessScenario-id}/planner/getPlan']['body'],
  params?: IEndpoints['POST /solutions/businessScenarios/{businessScenario-id}/planner/getPlan']['parameters']
): EndpointRequest<
  IEndpoints['POST /solutions/businessScenarios/{businessScenario-id}/planner/getPlan']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/solutions/businessScenarios/{businessScenario-id}/planner/getPlan',
    paramDefs: [{ name: 'businessScenario-id', in: 'path' }],
    params,
    body,
  };
}
