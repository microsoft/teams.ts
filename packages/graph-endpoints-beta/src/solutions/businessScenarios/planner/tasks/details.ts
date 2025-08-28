import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/details': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/details',
    'delete'
  >;
  'GET /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/details': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/details',
    'get'
  >;
  'PATCH /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/details': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/details',
    'patch'
  >;
}

/**
 * `DELETE /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/details`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/details']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/details']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/details',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'businessScenario-id', in: 'path' },
      { name: 'businessScenarioTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/details`
 *
 * Read-only. Nullable. More details about the task.
 */
export function list(
  params?: IEndpoints['GET /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/details']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/details']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/details',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'businessScenario-id', in: 'path' },
      { name: 'businessScenarioTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/details`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/details']['body'],
  params?: IEndpoints['PATCH /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/details']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/details']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/details',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'businessScenario-id', in: 'path' },
      { name: 'businessScenarioTask-id', in: 'path' },
    ],
    params,
    body,
  };
}
