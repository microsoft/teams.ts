export * as getPlan from './getPlan';
export * as planConfiguration from './planConfiguration';
export * as taskConfiguration from './taskConfiguration';
export * as tasks from './tasks';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/businessScenarios/{businessScenario-id}/planner': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner',
    'delete'
  >;
  'GET /solutions/businessScenarios/{businessScenario-id}/planner': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner',
    'get'
  >;
  'PATCH /solutions/businessScenarios/{businessScenario-id}/planner': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner',
    'patch'
  >;
}

/**
 * `DELETE /solutions/businessScenarios/{businessScenario-id}/planner`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/businessScenarios/{businessScenario-id}/planner']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/businessScenarios/{businessScenario-id}/planner']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/solutions/businessScenarios/{businessScenario-id}/planner',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'businessScenario-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/businessScenarios/{businessScenario-id}/planner`
 *
 * Read the properties and relationships of a businessScenarioPlanner object.
 */
export function get(
  params?: IEndpoints['GET /solutions/businessScenarios/{businessScenario-id}/planner']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/businessScenarios/{businessScenario-id}/planner']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/businessScenarios/{businessScenario-id}/planner',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'businessScenario-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /solutions/businessScenarios/{businessScenario-id}/planner`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/businessScenarios/{businessScenario-id}/planner']['body'],
  params?: IEndpoints['PATCH /solutions/businessScenarios/{businessScenario-id}/planner']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/businessScenarios/{businessScenario-id}/planner']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/solutions/businessScenarios/{businessScenario-id}/planner',
    paramDefs: [{ name: 'businessScenario-id', in: 'path' }],
    params,
    body,
  };
}
