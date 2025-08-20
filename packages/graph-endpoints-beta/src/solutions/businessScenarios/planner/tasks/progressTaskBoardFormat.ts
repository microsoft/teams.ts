import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/progressTaskBoardFormat': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/progressTaskBoardFormat',
    'delete'
  >;
  'GET /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/progressTaskBoardFormat': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/progressTaskBoardFormat',
    'get'
  >;
  'PATCH /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/progressTaskBoardFormat': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/progressTaskBoardFormat',
    'patch'
  >;
}

/**
 * `DELETE /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/progressTaskBoardFormat`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/progressTaskBoardFormat']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/progressTaskBoardFormat']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/progressTaskBoardFormat',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'businessScenario-id', in: 'path' },
      { name: 'businessScenarioTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/progressTaskBoardFormat`
 *
 * Read-only. Nullable. Used to render the task correctly in the task board view when grouped by progress.
 */
export function get(
  params?: IEndpoints['GET /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/progressTaskBoardFormat']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/progressTaskBoardFormat']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/progressTaskBoardFormat',
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
 * `PATCH /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/progressTaskBoardFormat`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/progressTaskBoardFormat']['body'],
  params?: IEndpoints['PATCH /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/progressTaskBoardFormat']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/progressTaskBoardFormat']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/progressTaskBoardFormat',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'businessScenario-id', in: 'path' },
      { name: 'businessScenarioTask-id', in: 'path' },
    ],
    params,
    body,
  };
}
