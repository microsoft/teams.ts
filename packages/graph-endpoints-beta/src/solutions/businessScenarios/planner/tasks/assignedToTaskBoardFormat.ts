import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/assignedToTaskBoardFormat': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/assignedToTaskBoardFormat',
    'delete'
  >;
  'GET /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/assignedToTaskBoardFormat': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/assignedToTaskBoardFormat',
    'get'
  >;
  'PATCH /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/assignedToTaskBoardFormat': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/assignedToTaskBoardFormat',
    'patch'
  >;
}

/**
 * `DELETE /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/assignedToTaskBoardFormat`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/assignedToTaskBoardFormat']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/assignedToTaskBoardFormat']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/assignedToTaskBoardFormat',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'businessScenario-id', in: 'path' },
      { name: 'businessScenarioTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/assignedToTaskBoardFormat`
 *
 * Read-only. Nullable. Used to render the task correctly in the task board view when grouped by assignedTo.
 */
export function get(
  params?: IEndpoints['GET /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/assignedToTaskBoardFormat']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/assignedToTaskBoardFormat']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/assignedToTaskBoardFormat',
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
 * `PATCH /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/assignedToTaskBoardFormat`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/assignedToTaskBoardFormat']['body'],
  params?: IEndpoints['PATCH /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/assignedToTaskBoardFormat']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/assignedToTaskBoardFormat']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/assignedToTaskBoardFormat',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'businessScenario-id', in: 'path' },
      { name: 'businessScenarioTask-id', in: 'path' },
    ],
    params,
    body,
  };
}
