export * as localizations from './localizations';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration',
    'delete'
  >;
  'GET /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration',
    'get'
  >;
  'PATCH /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration',
    'patch'
  >;
}

/**
 * `DELETE /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'businessScenario-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration`
 *
 * Read the properties and relationships of a plannerPlanConfiguration object.
 */
export function get(
  params?: IEndpoints['GET /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'businessScenario-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration`
 *
 * Update the properties of a plannerPlanConfiguration object and its plannerPlanConfigurationLocalization collection for a businessScenario.
 */
export function update(
  body: IEndpoints['PATCH /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration']['body'],
  params?: IEndpoints['PATCH /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration',
    paramDefs: [{ name: 'businessScenario-id', in: 'path' }],
    params,
    body,
  };
}
