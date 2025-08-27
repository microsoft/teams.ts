import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations/{plannerPlanConfigurationLocalization-id}': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations/{plannerPlanConfigurationLocalization-id}',
    'delete'
  >;
  'GET /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations',
    'get'
  >;
  'GET /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations/{plannerPlanConfigurationLocalization-id}': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations/{plannerPlanConfigurationLocalization-id}',
    'get'
  >;
  'PATCH /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations/{plannerPlanConfigurationLocalization-id}': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations/{plannerPlanConfigurationLocalization-id}',
    'patch'
  >;
  'POST /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations',
    'post'
  >;
}

/**
 * `DELETE /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations/{plannerPlanConfigurationLocalization-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations/{plannerPlanConfigurationLocalization-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations/{plannerPlanConfigurationLocalization-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations/{plannerPlanConfigurationLocalization-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'businessScenario-id', in: 'path' },
      { name: 'plannerPlanConfigurationLocalization-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations`
 *
 * Get a list of the plannerPlanConfigurationLocalization objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'businessScenario-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations/{plannerPlanConfigurationLocalization-id}`
 *
 * Localized names for the plan configuration.
 */
export function get(
  params?: IEndpoints['GET /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations/{plannerPlanConfigurationLocalization-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations/{plannerPlanConfigurationLocalization-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations/{plannerPlanConfigurationLocalization-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'businessScenario-id', in: 'path' },
      { name: 'plannerPlanConfigurationLocalization-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations/{plannerPlanConfigurationLocalization-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations/{plannerPlanConfigurationLocalization-id}']['body'],
  params?: IEndpoints['PATCH /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations/{plannerPlanConfigurationLocalization-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations/{plannerPlanConfigurationLocalization-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations/{plannerPlanConfigurationLocalization-id}',
    paramDefs: [
      { name: 'businessScenario-id', in: 'path' },
      { name: 'plannerPlanConfigurationLocalization-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations`
 *
 */
export function create(
  body: IEndpoints['POST /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations']['body'],
  params?: IEndpoints['POST /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations']['parameters']
): EndpointRequest<
  IEndpoints['POST /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations',
    paramDefs: [{ name: 'businessScenario-id', in: 'path' }],
    params,
    body,
  };
}
